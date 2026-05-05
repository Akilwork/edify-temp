"use client"

import { useEffect, useRef, useCallback } from "react"
import createGlobe from "cobe"

export interface PulseMarker {
  id: string
  location: [number, number]
  delay: number
  label?: string
}

export interface GlobePulseProps {
  markers?: PulseMarker[]
  className?: string
  speed?: number
}

const defaultMarkers: PulseMarker[] = [
  { id: "pulse-1", location: [51.51,  -0.13],  delay: 0   },
  { id: "pulse-2", location: [40.71, -74.01],  delay: 0.5 },
  { id: "pulse-3", location: [35.68, 139.65],  delay: 1   },
  { id: "pulse-4", location: [-33.87, 151.21], delay: 1.5 },
]

/**
 * Project a lat/lon point onto the canvas given the current globe rotation.
 * Returns null when the point is on the back face (hidden side) of the globe.
 */
function projectToScreen(
  lat: number,
  lon: number,
  phi: number,
  theta: number,
  canvasW: number,
  canvasH: number,
): { x: number; y: number } | null {
  const DEG = Math.PI / 180

  const latR = lat * DEG
  const lonR = lon * DEG - Math.PI
  const cosLat = Math.cos(latR)
  const vec: [number, number, number] = [
    -cosLat * Math.cos(lonR),
     Math.sin(latR),
     cosLat * Math.sin(lonR),
  ]

  const cosT = Math.cos(theta)
  const sinT = Math.sin(theta)
  const cosP = Math.cos(phi)
  const sinP = Math.sin(phi)

  const aspect = canvasW / canvasH

  const x1 = vec[0]
  const y1 = cosT * vec[1] - sinT * vec[2]
  const z1 = sinT * vec[1] + cosT * vec[2]

  const x2 = cosP * x1 + sinP * z1
  const z2 = -sinP * x1 + cosP * z1

  if (z2 < 0) return null

  const nx = (x2 / aspect + 1) / 2
  const ny = (-y1 + 1) / 2

  return {
    x: nx * canvasW,
    y: ny * canvasH,
  }
}

export function GlobePulse({
  markers = defaultMarkers,
  className = "",
  speed = 0.003,
}: GlobePulseProps) {
  const canvasRef  = useRef<HTMLCanvasElement>(null)
  const overlayRef = useRef<HTMLCanvasElement>(null)

  const phiRef   = useRef(0)
  const thetaRef = useRef(0.2)

  const pointerStart = useRef<{ x: number; y: number } | null>(null)
  const dragDelta    = useRef({ phi: 0, theta: 0 })
  const phiBase      = useRef(0)
  const thetaBase    = useRef(0.2)
  const isPaused     = useRef(false)

  const onPointerDown = useCallback((e: React.PointerEvent) => {
    pointerStart.current = { x: e.clientX, y: e.clientY }
    if (canvasRef.current) canvasRef.current.style.cursor = "grabbing"
    isPaused.current = true
  }, [])

  const onPointerUp = useCallback(() => {
    if (pointerStart.current) {
      phiBase.current   += dragDelta.current.phi
      thetaBase.current += dragDelta.current.theta
      dragDelta.current  = { phi: 0, theta: 0 }
    }
    pointerStart.current = null
    if (canvasRef.current) canvasRef.current.style.cursor = "grab"
    isPaused.current = false
  }, [])

  useEffect(() => {
    const onMove = (e: PointerEvent) => {
      if (!pointerStart.current) return
      dragDelta.current = {
        phi:   (e.clientX - pointerStart.current.x) / 300,
        theta: (e.clientY - pointerStart.current.y) / 1000,
      }
    }
    window.addEventListener("pointermove", onMove,    { passive: true })
    window.addEventListener("pointerup",   onPointerUp, { passive: true })
    return () => {
      window.removeEventListener("pointermove", onMove)
      window.removeEventListener("pointerup",   onPointerUp)
    }
  }, [onPointerUp])

  // ── Globe (cobe) ─────────────────────────────────────────────────────────
  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    let globe: ReturnType<typeof createGlobe> | null = null
    let rafId: number
    let autoPhiAccum = 0

    function init() {
      if (!canvas || globe) return
      const w = canvas.offsetWidth
      if (w === 0) return

      globe = createGlobe(canvas, {
        devicePixelRatio: Math.min(window.devicePixelRatio || 1, 2),
        width:  w,
        height: w,
        phi:    0,
        theta:  0.2,
        dark:   0,
        diffuse:       0.5,
        mapSamples:    20000,
        mapBrightness: 1.4,
        baseColor:   [0.96, 0.96, 0.96],
        markerColor: [251 / 255, 100 / 255, 21 / 255],
        glowColor:   [0.98, 0.95, 0.92],
        markers: markers.map((m) => ({ location: m.location, size: 0.04 })),
      })

      function tick() {
        if (!canvas || !globe) return

        if (!isPaused.current) autoPhiAccum += speed

        const phi   = phiBase.current   + autoPhiAccum + dragDelta.current.phi
        const theta = thetaBase.current + dragDelta.current.theta

        phiRef.current   = phi
        thetaRef.current = theta

        const size = canvas.offsetWidth
        globe.update({ phi, theta, width: size * 2, height: size * 2 })

        rafId = requestAnimationFrame(tick)
      }

      setTimeout(() => {
        if (canvas) canvas.style.opacity = "1"
        tick()
      }, 0)
    }

    if (canvas.offsetWidth > 0) {
      init()
    } else {
      const ro = new ResizeObserver((entries) => {
        if ((entries[0]?.contentRect.width ?? 0) > 0) {
          ro.disconnect()
          init()
        }
      })
      ro.observe(canvas)
      return () => ro.disconnect()
    }

    return () => {
      cancelAnimationFrame(rafId)
      globe?.destroy()
    }
  }, [markers, speed])

  // ── Pulse + label overlay ────────────────────────────────────────────────
  useEffect(() => {
    const overlay = overlayRef.current
    if (!overlay) return

    const PULSE_DURATION = 2000
    const RINGS          = 2
    const startTime      = performance.now()
    let rafId: number

    function draw() {
      if (!overlay) return
      const ctx = overlay.getContext("2d")
      if (!ctx) return

      const dpr = Math.min(window.devicePixelRatio || 1, 2)
      const w   = overlay.offsetWidth
      const h   = overlay.offsetHeight

      if (overlay.width !== w * dpr || overlay.height !== h * dpr) {
        overlay.width  = w * dpr
        overlay.height = h * dpr
      }

      ctx.setTransform(dpr, 0, 0, dpr, 0, 0)
      ctx.clearRect(0, 0, w, h)

      const now   = performance.now() - startTime
      const phi   = phiRef.current
      const theta = thetaRef.current

      for (const m of markers) {
        const pt = projectToScreen(
          m.location[0], m.location[1],
          phi, theta,
          w, h,
        )
        if (!pt) continue

        // Expanding rings
        for (let ring = 0; ring < RINGS; ring++) {
          const offset  = m.delay * 1000 + ring * (PULSE_DURATION / RINGS)
          const t       = ((now + offset) % PULSE_DURATION) / PULSE_DURATION
          const radius  = t * 22
          const alpha   = (1 - t) * 0.9

          ctx.beginPath()
          ctx.arc(pt.x, pt.y, radius, 0, Math.PI * 2)
          ctx.strokeStyle = `rgba(251,100,21,${alpha})`
          ctx.lineWidth   = 1.5
          ctx.stroke()
        }

        // Outer halo
        ctx.beginPath()
        ctx.arc(pt.x, pt.y, 7, 0, Math.PI * 2)
        ctx.strokeStyle = "rgba(255,255,255,0.6)"
        ctx.lineWidth   = 1.5
        ctx.stroke()

        // Centre dot
        ctx.beginPath()
        ctx.arc(pt.x, pt.y, 4, 0, Math.PI * 2)
        ctx.fillStyle = "rgba(251,100,21,1)"
        ctx.fill()

        // Label pill
        if (m.label) {
          const text   = m.label
          const padX   = 6
          const padY   = 3
          const fontSize = 11
          ctx.font = `bold ${fontSize}px system-ui, -apple-system, sans-serif`
          const textW  = ctx.measureText(text).width
          const boxW   = textW + padX * 2
          const boxH   = fontSize + padY * 2
          const bx     = pt.x + 10
          const by     = pt.y - boxH / 2

          // Pill background
          ctx.beginPath()
          const r = 4
          ctx.moveTo(bx + r, by)
          ctx.lineTo(bx + boxW - r, by)
          ctx.quadraticCurveTo(bx + boxW, by, bx + boxW, by + r)
          ctx.lineTo(bx + boxW, by + boxH - r)
          ctx.quadraticCurveTo(bx + boxW, by + boxH, bx + boxW - r, by + boxH)
          ctx.lineTo(bx + r, by + boxH)
          ctx.quadraticCurveTo(bx, by + boxH, bx, by + boxH - r)
          ctx.lineTo(bx, by + r)
          ctx.quadraticCurveTo(bx, by, bx + r, by)
          ctx.closePath()
          ctx.fillStyle = "rgba(15,23,42,0.78)"
          ctx.fill()

          // Label text
          ctx.fillStyle    = "rgba(255,255,255,0.95)"
          ctx.textBaseline = "middle"
          ctx.fillText(text, bx + padX, by + boxH / 2)
        }
      }

      rafId = requestAnimationFrame(draw)
    }

    draw()
    return () => cancelAnimationFrame(rafId)
  }, [markers])

  return (
    <div className={`relative aspect-square select-none ${className}`}>
      {/* Globe canvas */}
      <canvas
        ref={canvasRef}
        onPointerDown={onPointerDown}
        style={{
          width:        "100%",
          height:       "100%",
          cursor:       "grab",
          opacity:      0,
          transition:   "opacity 1.2s ease",
          borderRadius: "50%",
          touchAction:  "none",
          display:      "block",
        }}
      />
      {/* Pulse + label overlay — pointer-events:none keeps globe draggable */}
      <canvas
        ref={overlayRef}
        style={{
          position:      "absolute",
          inset:         0,
          width:         "100%",
          height:        "100%",
          pointerEvents: "none",
        }}
      />
    </div>
  )
}

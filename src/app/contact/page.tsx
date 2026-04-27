'use client';

import { useState } from 'react';
import { MapPin, Phone, Mail, Clock, Send, CheckCircle2 } from 'lucide-react';

const offices = [
  {
    city: 'Dubai',
    label: 'Headquarters',
    address: 'Business Bay, Dubai, United Arab Emirates',
    phone: '+971 00 000 0000',
    email: 'info@edify.ae',
    hours: 'Mon – Fri, 9:00 AM – 6:00 PM GST',
    mapSrc:
      'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3610.178474929074!2d55.2617!3d25.1872!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjXCsDExJzEzLjkiTiA1NcKwMTUnNDIuMSJF!5e0!3m2!1sen!2sae!4v1234567890',
  },
];

type FormState = {
  name: string;
  email: string;
  phone: string;
  subject: string;
  message: string;
};

const initialForm: FormState = { name: '', email: '', phone: '', subject: '', message: '' };

function PageHero() {
  return (
    <section
      className="pt-40 pb-20 relative overflow-hidden"
      style={{ background: 'var(--green-900)' }}
    >
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div
          className="absolute top-0 right-0 w-1/2 h-full opacity-[0.04]"
          style={{
            backgroundImage: `repeating-linear-gradient(45deg, var(--gold-500), var(--gold-500) 1px, transparent 1px, transparent 50px)`,
          }}
        />
      </div>
      <div className="container-edify relative z-10">
        <div className="flex items-center gap-3 mb-6">
          <div className="h-px w-10" style={{ background: 'var(--gold-500)' }} />
          <span className="text-xs font-semibold tracking-[0.2em] uppercase" style={{ color: 'var(--gold-400)' }}>
            Get In Touch
          </span>
        </div>
        <h1
          className="text-5xl md:text-6xl text-white mb-5 leading-tight"
          style={{ fontFamily: 'Playfair Display, serif' }}
        >
          Contact Us
        </h1>
        <p className="text-slate-300 text-lg max-w-xl leading-relaxed">
          Ready to transform your institution? Our team is here to discuss how EDIFY can support your goals.
        </p>
      </div>
    </section>
  );
}

function ContactForm() {
  const [form, setForm] = useState<FormState>(initialForm);
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    await new Promise((r) => setTimeout(r, 1200));
    setLoading(false);
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <div className="flex flex-col items-center justify-center py-16 text-center">
        <div
          className="w-16 h-16 rounded-full flex items-center justify-center mb-6"
          style={{ background: 'var(--green-50)' }}
        >
          <CheckCircle2 className="w-8 h-8" style={{ color: 'var(--green-800)' }} />
        </div>
        <h3 className="text-2xl font-bold mb-3" style={{ fontFamily: 'Playfair Display, serif', color: 'var(--green-900)' }}>
          Inquiry Received
        </h3>
        <p className="text-slate-500 max-w-sm leading-relaxed">
          Thank you for reaching out. A member of our team will get back to you within 1–2 business days.
        </p>
        <button
          onClick={() => { setSubmitted(false); setForm(initialForm); }}
          className="mt-8 text-sm font-semibold transition-colors"
          style={{ color: 'var(--green-800)' }}
        >
          Send another inquiry →
        </button>
      </div>
    );
  }

  const inputClass =
    'w-full px-4 py-3 rounded-xl border border-slate-200 text-sm text-slate-900 placeholder-slate-400 focus:outline-none focus:ring-2 transition-all bg-slate-50 focus:bg-white';
  const focusStyle = { '--tw-ring-color': 'var(--green-800)' } as React.CSSProperties;

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div>
          <label className="block text-xs font-semibold text-slate-600 mb-1.5 tracking-wide uppercase" htmlFor="name">
            Full Name *
          </label>
          <input
            id="name"
            name="name"
            type="text"
            required
            value={form.name}
            onChange={handleChange}
            placeholder="Your full name"
            className={inputClass}
            style={focusStyle}
          />
        </div>
        <div>
          <label className="block text-xs font-semibold text-slate-600 mb-1.5 tracking-wide uppercase" htmlFor="email">
            Email Address *
          </label>
          <input
            id="email"
            name="email"
            type="email"
            required
            value={form.email}
            onChange={handleChange}
            placeholder="you@institution.com"
            className={inputClass}
            style={focusStyle}
          />
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div>
          <label className="block text-xs font-semibold text-slate-600 mb-1.5 tracking-wide uppercase" htmlFor="phone">
            Phone Number
          </label>
          <input
            id="phone"
            name="phone"
            type="tel"
            value={form.phone}
            onChange={handleChange}
            placeholder="+971 00 000 0000"
            className={inputClass}
            style={focusStyle}
          />
        </div>
        <div>
          <label className="block text-xs font-semibold text-slate-600 mb-1.5 tracking-wide uppercase" htmlFor="subject">
            Subject *
          </label>
          <select
            id="subject"
            name="subject"
            required
            value={form.subject}
            onChange={handleChange}
            className={inputClass}
            style={focusStyle}
          >
            <option value="">Select a topic…</option>
            <option>Academic & Educational Services</option>
            <option>HR & Recruitment</option>
            <option>Operations & Facilities</option>
            <option>Technology & Innovation</option>
            <option>Specialized Services</option>
            <option>Business Support</option>
            <option>Group Companies / Partnership</option>
            <option>General Inquiry</option>
          </select>
        </div>
      </div>

      <div>
        <label className="block text-xs font-semibold text-slate-600 mb-1.5 tracking-wide uppercase" htmlFor="message">
          Message *
        </label>
        <textarea
          id="message"
          name="message"
          required
          rows={5}
          value={form.message}
          onChange={handleChange}
          placeholder="Tell us about your institution and what you're looking to achieve…"
          className={`${inputClass} resize-none`}
          style={focusStyle}
        />
      </div>

      <button
        type="submit"
        disabled={loading}
        className="w-full flex items-center justify-center gap-2.5 px-6 py-4 rounded-xl text-sm font-semibold text-white transition-all hover:opacity-90 hover:shadow-lg disabled:opacity-60"
        style={{ background: 'linear-gradient(135deg, var(--green-800), var(--green-700))' }}
      >
        {loading ? (
          <>
            <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
            Sending…
          </>
        ) : (
          <>
            Submit Inquiry
            <Send className="w-4 h-4" />
          </>
        )}
      </button>

      <p className="text-xs text-slate-400 text-center">
        We typically respond within 1–2 business days.
      </p>
    </form>
  );
}

export default function ContactPage() {
  const office = offices[0];

  return (
    <main>
      <PageHero />

      <section className="section-gap">
        <div className="container-edify">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-10">
            {/* Left: Contact info */}
            <div className="lg:col-span-2 space-y-6">
              <div>
                <p className="text-xs font-semibold tracking-widest uppercase mb-4" style={{ color: 'var(--gold-500)' }}>
                  {office.label}
                </p>
                <h2 className="text-3xl mb-6 gold-rule" style={{ fontFamily: 'Playfair Display, serif', color: 'var(--green-900)' }}>
                  {office.city} Office
                </h2>
              </div>

              <div className="space-y-5">
                {[
                  { icon: MapPin, label: 'Address', value: office.address },
                  { icon: Phone, label: 'Phone', value: office.phone, href: `tel:${office.phone}` },
                  { icon: Mail, label: 'Email', value: office.email, href: `mailto:${office.email}` },
                  { icon: Clock, label: 'Office Hours', value: office.hours },
                ].map(({ icon: Icon, label, value, href }) => (
                  <div key={label} className="flex items-start gap-4">
                    <div
                      className="w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0"
                      style={{ background: 'var(--green-50)' }}
                    >
                      <Icon className="w-5 h-5" style={{ color: 'var(--green-800)' }} />
                    </div>
                    <div>
                      <p className="text-xs font-semibold text-slate-400 uppercase tracking-wide mb-0.5">{label}</p>
                      {href ? (
                        <a href={href} className="text-sm text-slate-700 hover:text-green-800 transition-colors font-medium">
                          {value}
                        </a>
                      ) : (
                        <p className="text-sm text-slate-700 font-medium">{value}</p>
                      )}
                    </div>
                  </div>
                ))}
              </div>

              {/* Map embed */}
              <div className="rounded-2xl overflow-hidden border border-slate-100 shadow-sm mt-6" style={{ height: '240px' }}>
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3610.5248867839226!2d55.26397021503044!3d25.18536798390152!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e5f69d8b419d5ef%3A0x800c1bfb3c1e0f7b!2sBusiness%20Bay%2C%20Dubai%20-%20United%20Arab%20Emirates!5e0!3m2!1sen!2sae!4v1680000000000!5m2!1sen!2sae"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="EDIFY Dubai Office Location"
                />
              </div>
            </div>

            {/* Right: Form */}
            <div className="lg:col-span-3">
              <div className="bg-white rounded-2xl border border-slate-100 shadow-sm p-8">
                <div className="mb-8">
                  <h2 className="text-2xl font-bold mb-2" style={{ fontFamily: 'Playfair Display, serif', color: 'var(--green-900)' }}>
                    Send an Inquiry
                  </h2>
                  <p className="text-sm text-slate-500">
                    Fill in the form below and our team will reach out to discuss how we can support your institution.
                  </p>
                </div>
                <ContactForm />
              </div>
            </div>
          </div>

          {/* Bottom: Quick links */}
          <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-4">
            {[
              { label: 'Explore Services', sub: 'See our full service offering', href: '/services' },
              { label: 'Meet the Team', sub: 'The people you\'ll work with', href: '/team' },
              { label: 'Group Companies', sub: 'Our broader ecosystem', href: '/companies' },
            ].map((card) => (
              <a
                key={card.label}
                href={card.href}
                className="group flex items-center justify-between p-5 rounded-xl border border-slate-100 hover:border-slate-200 hover:shadow-md transition-all"
                style={{ background: 'var(--green-50)' }}
              >
                <div>
                  <p className="text-sm font-semibold text-slate-900">{card.label}</p>
                  <p className="text-xs text-slate-500 mt-0.5">{card.sub}</p>
                </div>
                <div
                  className="w-8 h-8 rounded-full flex items-center justify-center text-white flex-shrink-0 transition-transform group-hover:translate-x-1"
                  style={{ background: 'var(--green-800)' }}
                >
                  <Send className="w-3.5 h-3.5 rotate-45" />
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}

'use client';

import React from 'react';

export default function BackgroundWatermark() {
  return (
    <div className="fixed inset-0 pointer-events-none z-[-1] overflow-hidden opacity-[0.05]">
      <div className="absolute top-[10%] left-[-5%] w-[60%] h-[40%] rotate-[-5deg]">
        <img 
          src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=2070&auto=format&fit=crop" 
          alt="MHUDA TRUST OFFICE EXTERIOR" 
          className="w-full h-full object-cover rounded-[4rem]"
        />
      </div>
      <div className="absolute bottom-[10%] right-[-5%] w-[60%] h-[40%] rotate-[5deg]">
        <img 
          src="https://images.unsplash.com/photo-1512453979798-5ea266f8880c?q=80&w=2070&auto=format&fit=crop" 
          alt="Dubai Office" 
          className="w-full h-full object-cover rounded-[4rem]"
        />
      </div>
    </div>
  );
}

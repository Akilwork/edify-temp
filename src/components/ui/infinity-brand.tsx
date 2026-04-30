'use client';

import React from 'react';
import Image from 'next/image';

const companyLogos = [
  '1.png',
  '2.png',
  '3.png',
  '4.png',
  '5.png',
  '7.png',
  '8.png',
  '9.png',
  '10.png',
  'image 711.png',
];

export const InfinityBrand = () => {
  return (
    <>
      <style>
        {`
          @keyframes infinite-scroll {
            from { transform: translateX(0); }
            to { transform: translateX(-100%); }
          }
        `}
      </style>

      <div className='w-full py-4 inline-flex flex-nowrap overflow-hidden [mask-image:_linear-gradient(to_right,transparent_0,_black_128px,_black_calc(100%-200px),transparent_100%)]'>
        <ul className='flex items-center justify-center md:justify-start sm:[&_li]:mx-8 [&_li]:mx-4 [&_img]:max-w-none' style={{ animation: 'infinite-scroll 40s linear infinite' }}>
          {companyLogos.map((logo, index) => (
            <li key={index} className="flex-shrink-0">
              <div className="h-12 w-32 relative grayscale opacity-60 hover:grayscale-0 hover:opacity-100 transition-all duration-500">
                <Image
                  src={`/assets/companies/${logo}`}
                  alt={`Company Logo ${index}`}
                  fill
                  className="object-contain"
                />
              </div>
            </li>
          ))}
        </ul>
        <ul
          className='flex items-center justify-center md:justify-start sm:[&_li]:mx-8 [&_li]:mx-4 [&_img]:max-w-none'
          aria-hidden='true'
          style={{ animation: 'infinite-scroll 40s linear infinite' }}
        >
          {companyLogos.map((logo, index) => (
            <li key={`clone-${index}`} className="flex-shrink-0">
              <div className="h-12 w-32 relative grayscale opacity-60 hover:grayscale-0 hover:opacity-100 transition-all duration-500">
                <Image
                  src={`/assets/companies/${logo}`}
                  alt={`Company Logo ${index}`}
                  fill
                  className="object-contain"
                />
              </div>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
};

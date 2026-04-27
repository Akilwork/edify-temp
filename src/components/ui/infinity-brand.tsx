'use client';

import React from 'react';
import Image from 'next/image';

const companyLogos = [
  'image 707.png',
  'image 709.png',
  'image 710.png',
  'image 711.png',
  'image 712.png',
  'image 713.png',
  'image 715.png',
  'image 716.png',
  'image 717.png',
  'image 718.png',
  'image 719.png',
  'image 720.png',
  'image 721.png',
  'image 722.png',
  'image 723.png',
  'image 726.png',
  'image 727.png',
  'image 729.png',
  'image 730.png',
  'image.png',
  'image705.png',
  'imprint-logo.png',
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

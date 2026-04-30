'use client';

import { featuresData } from "@/constants";
import { FadeIn, StaggerChildren } from "@/components/ui/animations";
import { ArrowUpRight } from "lucide-react";

export default function FeatureSections() {
  return (
    <section className="section-gap bg-[#f2f2f2] overflow-hidden">
      <div className="container-edify">

        {/* Header Row */}
        <FadeIn className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between mb-10 md:mb-14">
          <div className="max-w-md">
            <h2 className="text-3xl md:text-4xl font-bold text-brand-black leading-tight mb-2">
              Comprehensive Solutions
            </h2>
            <p className="text-sm md:text-base text-slate-500 leading-relaxed">
              From academic governance to digital transformation, we provide end-to-end consultancy services that empower institutions to thrive.
            </p>
          </div>
          <div className="flex-shrink-0 sm:pt-1">
            <button className="bg-accent hover:bg-accent/90 text-white text-sm font-semibold px-5 py-2.5 rounded-full transition-colors duration-200 whitespace-nowrap">
              See all Services
            </button>
          </div>
        </FadeIn>

        {/* Cards Grid */}
        <StaggerChildren
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-6"
          stagger={0.15}
        >
          {featuresData.map((feature, index) => (
            <div
              key={index}
              className="group flex flex-col bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition-shadow duration-300"
            >
              {/* Image area — flush, no padding */}
              <div className="relative w-full aspect-[4/3] overflow-hidden">
                <img
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  src={feature.image}
                  alt={feature.title}
                />

                {/* Badge — top-left over image */}
                <span className="absolute top-3 left-3 flex items-center gap-1.5 bg-white text-[11px] font-semibold text-slate-800 px-3 py-1.5 rounded-full leading-none">
                  <span className="w-1.5 h-1.5 rounded-full bg-slate-800 flex-shrink-0" />
                  {feature.title}
                </span>

                {/* Arrow button — bottom-right, inside image */}
                <button
                  className="absolute bottom-3 right-3 w-10 h-10 bg-orange-400 hover:bg-orange-500 text-white rounded-xl flex items-center justify-center shadow-md transition-all duration-200 hover:scale-105"
                  aria-label={`View ${feature.title}`}
                >
                  <ArrowUpRight className="w-5 h-5" />
                </button>
              </div>

              {/* Card Body */}
              <div className="px-4 py-4 flex flex-col gap-1">
                <h3 className="text-[15px] font-bold text-brand-black leading-snug">
                  {feature.title}
                </h3>
                <p className="text-[13px] text-slate-500 leading-relaxed">
                  {feature.desc}
                </p>
              </div>
            </div>
          ))}
        </StaggerChildren>

      </div>
    </section>
  );
}

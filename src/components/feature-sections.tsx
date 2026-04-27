'use client';

import { featuresData } from "@/constants";
import { FadeIn, StaggerChildren } from "@/components/ui/animations";
import { ArrowRight } from "lucide-react";

export default function FeatureSections() {
  return (
    <section className="section-gap bg-white overflow-hidden">
      <div className="container-edify">
        <FadeIn className="text-center max-w-4xl mx-auto mb-16">
          <p className="text-xs font-bold tracking-widest uppercase mb-3 text-accent">
            Core Capabilities
          </p>
          <h2 className="mb-6 leading-tight accent-rule-center text-brand-black">
            Comprehensive Solutions
          </h2>
          <p className="text-lg md:text-xl text-slate-500 leading-relaxed">
            From academic governance to digital transformation, we provide end-to-end consultancy services that empower institutions to thrive.
          </p>
        </FadeIn>

        <StaggerChildren className="grid grid-cols-1 md:grid-cols-3 gap-10 lg:gap-12" stagger={0.15}>
          {featuresData.map((feature, index) => (
            <div key={index} className="group flex flex-col items-start bg-slate-50 rounded-[2.5rem] p-8 hover:-translate-y-2 transition-all duration-500 hover:shadow-2xl hover:shadow-black/5 border border-slate-100">
              <div className="w-full h-56 rounded-[2rem] overflow-hidden mb-8 relative shadow-inner">
                <img
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  src={feature.image}
                  alt={feature.title}
                />
              </div>
              <h3 className="mb-4 text-brand-black">
                {feature.title}
              </h3>
              <p className="text-base text-slate-600 leading-relaxed flex-grow">
                {feature.desc}
              </p>
              <div className="mt-8 flex items-center text-sm font-bold uppercase tracking-[0.2em] transition-colors duration-300 text-accent">
                <span className="group-hover:text-brand-black transition-colors">Discover More</span>
                <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 group-hover:text-brand-black transition-all" />
              </div>
            </div>
          ))}
        </StaggerChildren>
      </div>
    </section>
  );
}

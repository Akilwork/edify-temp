import { cn } from "@/lib/utils";
import { useState } from "react";
import React from "react";
import { ChevronDown } from "lucide-react";

const FAQSections = () => {
    const [openIndex, setOpenIndex] = useState<number | null>(null);

    const faqs = [
        {
            question: "Which Emirates does EDIFY serve?",
            answer: "EDIFY has a strong operational footprint across Dubai, Abu Dhabi, Sharjah, and Ajman, providing specialized consultancy tailored to each Emirate's regulatory framework.",
        },
        {
            question: "Do you handle regulatory approvals?",
            answer: "Yes, we specialize in navigating the complexities of KHDA, ADEK, and MOE regulations, ensuring that educational institutions remain compliant and maintain high quality standards.",
        },
        {
            question: "What is EDIFY's role in the UAE education sector?",
            answer: "As a premier management consultancy under the MHUDA Trust, we empower institutions through academic governance, HR excellence, and operational innovation.",
        },
        {
            question: "Can you help with new school startups?",
            answer: "Absolutely. From feasibility studies to licensing and facility management, we provide end-to-end support for investors and educators looking to establish new institutions in the UAE.",
        },
    ];
    
    return (
        <div className="max-w-4xl mx-auto flex flex-col md:flex-row items-start justify-center gap-8 px-4 md:px-0 py-12">
            <img
                className="max-w-sm w-full rounded-2xl h-auto shadow-xl"
                src="https://images.unsplash.com/photo-1577412647305-991150c7d163?q=80&w=1000&auto=format&fit=crop"
                alt="UAE Education Consultancy"
            />
            <div className="flex-1">
                <p className="text-accent text-sm font-semibold tracking-wider uppercase mb-2">FAQ's</p>
                <h2 className="text-3xl font-bold text-slate-900 mb-2">Presence & Operations</h2>
                <p className="text-sm text-slate-500 mt-2 pb-6">
                    Frequently asked questions about our presence in the UAE and how we support educational institutions.
                </p>
                <div className="space-y-2">
                    {faqs.map((faq, index) => (
                        <div 
                            className="border-b border-slate-200 py-4 cursor-pointer group" 
                            key={index} 
                            onClick={() => setOpenIndex(openIndex === index ? null : index)}
                        >
                            <div className="flex items-center justify-between">
                                <h3 className={cn(
                                    "text-base font-medium transition-colors duration-300",
                                    openIndex === index ? "text-accent" : "text-slate-800 group-hover:text-accent/80"
                                )}>
                                    {faq.question}
                                </h3>
                                <ChevronDown 
                                    className={cn(
                                        "w-5 h-5 text-slate-400 transition-all duration-500 ease-in-out",
                                        openIndex === index ? "rotate-180 text-accent" : ""
                                    )} 
                                />
                            </div>
                            <div className={cn(
                                "overflow-hidden transition-all duration-500 ease-in-out",
                                openIndex === index ? "max-h-[300px] opacity-100 pt-4" : "max-h-0 opacity-0"
                            )}>
                                <p className="text-sm text-slate-500 leading-relaxed max-w-md">
                                    {faq.answer}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default FAQSections;

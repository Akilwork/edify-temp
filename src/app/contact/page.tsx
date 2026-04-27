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
    <section className="pt-48 pb-24 relative overflow-hidden bg-ethereal">
      {/* Subtle Grid Pattern */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none opacity-40">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `radial-gradient(var(--slate-300) 0.5px, transparent 0.5px)`,
            backgroundSize: '32px 32px'
          }}
        />
      </div>

      <div className="container-edify relative z-10">
        <div className="flex items-center gap-3 mb-8">
          <span className="text-sm font-bold tracking-[0.2em] uppercase text-accent">
            Get In Touch
          </span>
          <div className="h-px w-12 bg-slate-200" />
        </div>
        
        <h1 className="mb-8">
          Let's Start a <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-black via-slate-600 to-brand-black">Conversation</span>
        </h1>
        
        <p className="text-slate-500 text-xl md:text-2xl max-w-2xl leading-relaxed font-medium">
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
          className="w-20 h-20 rounded-full flex items-center justify-center mb-8 bg-orange-50 shadow-inner"
        >
          <CheckCircle2 className="w-10 h-10 text-accent" />
        </div>
        <h3 className="mb-4 text-brand-black">
          Inquiry Received
        </h3>
        <p className="text-slate-500 text-lg max-w-sm leading-relaxed">
          Thank you for reaching out. A member of our team will get back to you within 1–2 business days.
        </p>
        <button
          onClick={() => { setSubmitted(false); setForm(initialForm); }}
          className="mt-10 text-sm font-bold uppercase tracking-[0.2em] text-accent hover:text-brand-black transition-colors"
        >
          Send another inquiry →
        </button>
      </div>
    );
  }

  const inputClass =
    'w-full px-5 py-4 rounded-2xl border border-slate-200 text-base text-brand-black placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-accent/20 focus:border-accent transition-all bg-slate-50 focus:bg-white';

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        <div>
          <label className="block text-xs font-bold text-slate-500 mb-2.5 tracking-[0.1em] uppercase" htmlFor="name">
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
          />
        </div>
        <div>
          <label className="block text-xs font-bold text-slate-500 mb-2.5 tracking-[0.1em] uppercase" htmlFor="email">
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
          />
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        <div>
          <label className="block text-xs font-bold text-slate-500 mb-2.5 tracking-[0.1em] uppercase" htmlFor="phone">
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
          />
        </div>
        <div>
          <label className="block text-xs font-bold text-slate-500 mb-2.5 tracking-[0.1em] uppercase" htmlFor="subject">
            Subject *
          </label>
          <select
            id="subject"
            name="subject"
            required
            value={form.subject}
            onChange={handleChange}
            className={inputClass}
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
        <label className="block text-xs font-bold text-slate-500 mb-2.5 tracking-[0.1em] uppercase" htmlFor="message">
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
        />
      </div>

      <button
        type="submit"
        disabled={loading}
        className="w-full flex items-center justify-center gap-3 px-8 py-5 rounded-full text-lg font-bold text-white transition-all hover:scale-[1.02] bg-brand-black shadow-xl shadow-black/10 disabled:opacity-60"
      >
        {loading ? (
          <>
            <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
            Sending…
          </>
        ) : (
          <>
            Submit Inquiry
            <Send className="w-5 h-5" />
          </>
        )}
      </button>

      <p className="text-xs text-slate-400 text-center font-medium">
        We typically respond within 1–2 business days.
      </p>
    </form>
  );
}

export default function ContactPage() {
  const office = offices[0];

  return (
    <main className="bg-white">
      <PageHero />

      <section className="section-gap">
        <div className="container-edify">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-16 lg:gap-24">
            {/* Left: Contact info */}
            <div className="lg:col-span-2 space-y-10">
              <div>
                <p className="text-xs font-bold tracking-[0.2em] uppercase mb-4 text-accent">
                  {office.label}
                </p>
                <h2 className="mb-8 accent-rule text-brand-black">
                  {office.city} Office
                </h2>
              </div>

              <div className="space-y-8">
                {[
                  { icon: MapPin, label: 'Address', value: office.address },
                  { icon: Phone, label: 'Phone', value: office.phone, href: `tel:${office.phone}` },
                  { icon: Mail, label: 'Email', value: office.email, href: `mailto:${office.email}` },
                  { icon: Clock, label: 'Office Hours', value: office.hours },
                ].map(({ icon: Icon, label, value, href }) => (
                  <div key={label} className="flex items-start gap-5 group">
                    <div
                      className="w-12 h-12 rounded-[1rem] flex items-center justify-center flex-shrink-0 bg-slate-50 border border-slate-100 transition-all duration-300 group-hover:bg-accent group-hover:border-accent"
                    >
                      <Icon className="w-5 h-5 text-slate-600 transition-colors group-hover:text-white" />
                    </div>
                    <div>
                      <p className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-1">{label}</p>
                      {href ? (
                        <a href={href} className="text-lg text-slate-700 hover:text-accent transition-colors font-bold">
                          {value}
                        </a>
                      ) : (
                        <p className="text-lg text-slate-700 font-bold">{value}</p>
                      )}
                    </div>
                  </div>
                ))}
              </div>

              {/* Map embed */}
              <div className="rounded-[2.5rem] overflow-hidden border border-slate-100 shadow-sm mt-8 transition-transform hover:shadow-xl duration-500" style={{ height: '320px' }}>
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
              <div className="bg-slate-50 rounded-[3rem] p-10 lg:p-12 border border-slate-100 shadow-sm">
                <div className="mb-10">
                  <h2 className="mb-4 text-brand-black">
                    Send an Inquiry
                  </h2>
                  <p className="text-lg text-slate-500 font-medium">
                    Fill in the form below and our team will reach out to discuss how we can support your institution.
                  </p>
                </div>
                <ContactForm />
              </div>
            </div>
          </div>

          {/* Bottom: Quick links */}
          <div className="mt-24 grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              { label: 'Explore Services', sub: 'See our full service offering', href: '/services' },
              { label: 'Meet the Team', sub: 'The people you\'ll work with', href: '/team' },
              { label: 'Group Companies', sub: 'Our broader ecosystem', href: '/companies' },
            ].map((card) => (
              <a
                key={card.label}
                href={card.href}
                className="group flex items-center justify-between p-8 rounded-[2rem] border border-slate-100 bg-slate-50 hover:bg-white hover:shadow-2xl hover:shadow-black/5 hover:-translate-y-1 transition-all duration-500"
              >
                <div>
                  <p className="text-lg font-bold text-brand-black">{card.label}</p>
                  <p className="text-sm text-slate-500 font-medium mt-1">{card.sub}</p>
                </div>
                <div
                  className="w-10 h-10 rounded-full flex items-center justify-center bg-white border border-slate-100 text-slate-400 group-hover:bg-accent group-hover:border-accent group-hover:text-white transition-all duration-300"
                >
                  <Send className="w-4 h-4 rotate-45 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}

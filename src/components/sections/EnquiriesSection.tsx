"use client";

import { useState, useRef, useEffect } from "react";
import { Mail, Loader2, Send, CheckCircle2, ChevronDown } from "lucide-react";
import { FadeInSection } from "@/components/layout/FadeInSection";

const subjects = [
  { id: "software", label: "Software Solution / Web App" },
  { id: "hardware", label: "Blob Hardware Inquiry" },
  { id: "partnership", label: "Partnership / Investment" },
  { id: "other", label: "Other / General" }
];

export function EnquiriesSection() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<"idle" | "success" | "error">("idle");
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [selectedSubject, setSelectedSubject] = useState("software");
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsDropdownOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    // Simulate API call for demonstration
    await new Promise((resolve) => setTimeout(resolve, 1500));
    setIsSubmitting(false);
    setSubmitStatus("success");
    setTimeout(() => setSubmitStatus("idle"), 5000);
  };

  return (
    <FadeInSection id="enquiries" className="relative">
      <div className="w-full max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* HEADER */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/5 border border-white/10 text-xs font-mono uppercase tracking-[0.25em] text-white mb-6">
            <Mail className="w-3.5 h-3.5 text-cyan-400" />
            <span>Connect</span>
          </div>
          <h2 className="text-4xl sm:text-6xl font-black text-white tracking-tight mb-6">
            Initiate Link
          </h2>
          <p className="text-slate-300 text-base sm:text-lg mx-auto leading-relaxed font-light">
            Have a project in mind, interested in Blob, or want to partner with us? Drop us a signal.
          </p>
        </div>

        {/* FORM */}
        <div className="cyber-glass cyber-glass-inner rounded-[2.5rem] p-8 sm:p-12 border border-white/10 shadow-2xl">
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label className="text-xs font-mono uppercase tracking-widest text-slate-400 pl-2">Name</label>
                <input required type="text" className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-4 text-white placeholder-slate-600 focus:outline-none focus:border-cyan-400/50 transition-colors" placeholder="John Doe" />
              </div>
              <div className="space-y-2">
                <label className="text-xs font-mono uppercase tracking-widest text-slate-400 pl-2">Email</label>
                <input required type="email" className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-4 text-white placeholder-slate-600 focus:outline-none focus:border-cyan-400/50 transition-colors" placeholder="john@company.com" />
              </div>
            </div>

            <div className="space-y-2">
              <label className="text-xs font-mono uppercase tracking-widest text-slate-400 pl-2">Subject / Topic</label>
              <div className="relative" ref={dropdownRef}>
                <button
                  type="button"
                  onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                  className={`w-full bg-white/5 border rounded-2xl px-6 py-4 text-left text-white focus:outline-none transition-colors flex items-center justify-between ${
                    isDropdownOpen ? 'border-cyan-400/50' : 'border-white/10 hover:border-white/20'
                  }`}
                >
                  <span className="text-white font-medium">
                    {subjects.find(s => s.id === selectedSubject)?.label}
                  </span>
                  <ChevronDown className={`w-5 h-5 text-slate-500 transition-transform duration-300 ${isDropdownOpen ? 'rotate-180 text-cyan-400' : ''}`} />
                </button>

                {isDropdownOpen && (
                  <div className="absolute top-full left-0 right-0 mt-3 rounded-[1.5rem] bg-[#0a0a0a]/95 backdrop-blur-3xl border border-white/10 shadow-[0_20px_60px_rgba(0,0,0,0.8)] z-50 overflow-hidden animate-in fade-in slide-in-from-top-2 duration-200">
                    <div className="py-2">
                      {subjects.map((subject) => (
                        <button
                          key={subject.id}
                          type="button"
                          onClick={() => {
                            setSelectedSubject(subject.id);
                            setIsDropdownOpen(false);
                          }}
                          className={`w-full text-left px-6 py-3 text-sm transition-all flex items-center justify-between group ${
                            selectedSubject === subject.id
                              ? "bg-white/10 text-cyan-200 font-medium"
                              : "text-slate-300 hover:bg-white/5 hover:text-white"
                          }`}
                        >
                          <span>{subject.label}</span>
                          {selectedSubject === subject.id && (
                            <CheckCircle2 className="w-4 h-4 text-cyan-400" />
                          )}
                        </button>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            </div>

            <div className="space-y-2">
              <label className="text-xs font-mono uppercase tracking-widest text-slate-400 pl-2">Message</label>
              <textarea required rows={5} className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-4 text-white placeholder-slate-600 focus:outline-none focus:border-cyan-400/50 transition-colors resize-none" placeholder="How can we collaborate?"></textarea>
            </div>

            <div className="pt-4 flex items-center justify-end">
              <button
                type="submit"
                disabled={isSubmitting || submitStatus === "success"}
                className="inline-flex items-center gap-3 px-8 py-4 rounded-full text-sm font-bold uppercase tracking-widest text-black bg-white hover:bg-slate-200 transition-all shadow-[0_0_30px_rgba(255,255,255,0.1)] hover:shadow-[0_0_40px_rgba(255,255,255,0.2)] disabled:opacity-50 disabled:cursor-not-allowed cyber-btn"
              >
                {isSubmitting ? (
                  <><span>Transmitting</span><Loader2 className="w-4 h-4 animate-spin" /></>
                ) : submitStatus === "success" ? (
                  <><span>Transmitted</span><CheckCircle2 className="w-4 h-4" /></>
                ) : (
                  <><span>Transmit Signal</span><Send className="w-4 h-4" /></>
                )}
              </button>
            </div>
            
            {submitStatus === "success" && (
              <p className="text-emerald-400 text-sm text-center font-mono mt-4 animate-in fade-in">
                Signal received successfully. Our engineers will respond shortly.
              </p>
            )}
          </form>
        </div>

      </div>
    </FadeInSection>
  );
}

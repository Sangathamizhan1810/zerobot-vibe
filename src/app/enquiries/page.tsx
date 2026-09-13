"use client";

import React, { useState } from "react";
import Link from "next/link";
import { Mail, Send, CheckCircle2, AlertCircle, Clock, ShieldCheck, HelpCircle, ArrowRight } from "lucide-react";
import { SnapContainer, SnapSection } from "@/components/layout/SnapScroll";
import { PosterBackground } from "@/components/graphic/PosterBackground";
import { Footer } from "@/components/layout/Footer";

export default function EnquiriesPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    organization: "",
    inquiryType: "General Technical Inquiry",
    message: "",
  });

  const [loading, setLoading] = useState(false);
  const [statusMessage, setStatusMessage] = useState<{ type: "success" | "error"; text: string; refId?: string } | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setStatusMessage(null);

    try {
      const res = await fetch("/api/enquiries", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const data = await res.json();

      if (!res.ok) {
        throw new Error(data.error || "Failed to transmit enquiry.");
      }

      setStatusMessage({
        type: "success",
        text: data.message,
        refId: data.referenceId,
      });

      // Clear form on success
      setFormData({
        name: "",
        email: "",
        organization: "",
        inquiryType: "General Technical Inquiry",
        message: "",
      });
    } catch (err: unknown) {
      const msg = err instanceof Error ? err.message : "An unexpected network error occurred.";
      setStatusMessage({
        type: "error",
        text: msg,
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <SnapContainer>
      {/* SECTION 1: INTERACTIVE ENQUIRY PORTAL */}
      <SnapSection id="enquiry-box" index={0} backgroundElement={<PosterBackground variant="default" />}>
        <div className="w-full max-w-5xl mx-auto py-4">
          <div className="text-center mb-5">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/30 text-xs font-mono uppercase tracking-widest text-cyan-300 mb-2">
              <Mail className="w-3.5 h-3.5" />
              <span>DISPATCH GATEWAY</span>
            </div>
            <h1 className="text-2xl sm:text-4xl md:text-5xl font-black text-white">
              Connect With <span className="cyber-gradient-text">ZeroBots Team</span>
            </h1>
            <p className="text-slate-400 text-xs sm:text-sm max-w-lg mx-auto mt-1">
              Reach out for general technical questions, Blob companion robot inquiries, or digital service requests.
            </p>
          </div>

          <div className="cyber-glass rounded-3xl p-5 sm:p-7 border border-cyan-500/30 shadow-[0_0_40px_rgba(0,240,255,0.15)] max-w-3xl mx-auto">
            {statusMessage && (
              <div
                className={`mb-5 p-4 rounded-xl text-xs sm:text-sm flex items-start gap-3 border ${statusMessage.type === "success"
                    ? "bg-emerald-950/70 border-emerald-500/50 text-emerald-200"
                    : "bg-red-950/70 border-red-500/50 text-red-200"
                  }`}
              >
                {statusMessage.type === "success" ? (
                  <CheckCircle2 className="w-5 h-5 text-emerald-400 shrink-0 mt-0.5" />
                ) : (
                  <AlertCircle className="w-5 h-5 text-red-400 shrink-0 mt-0.5" />
                )}
                <div>
                  <div className="font-bold">{statusMessage.type === "success" ? "Transmission Acknowledged" : "Transmission Error"}</div>
                  <div>{statusMessage.text}</div>
                  {statusMessage.refId && (
                    <div className="mt-1 font-mono text-cyan-300 text-xs">Reference ID: {statusMessage.refId}</div>
                  )}
                </div>
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-mono text-cyan-300 mb-1.5 uppercase tracking-wider">
                    Full Name <span className="text-red-400">*</span>
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    placeholder="Your Name"
                    className="w-full px-4 py-2.5 rounded-xl bg-black/60 border border-cyan-500/30 focus:border-cyan-400 focus:ring-2 focus:ring-cyan-500/20 text-white placeholder-slate-500 text-xs sm:text-sm transition-all focus:outline-none"
                  />
                </div>

                <div>
                  <label className="block text-xs font-mono text-cyan-300 mb-1.5 uppercase tracking-wider">
                    Email Address <span className="text-red-400">*</span>
                  </label>
                  <input
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    placeholder="name@example.com"
                    className="w-full px-4 py-2.5 rounded-xl bg-black/60 border border-cyan-500/30 focus:border-cyan-400 focus:ring-2 focus:ring-cyan-500/20 text-white placeholder-slate-500 text-xs sm:text-sm transition-all focus:outline-none"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-mono text-cyan-300 mb-1.5 uppercase tracking-wider">
                    Organization / Company (Optional)
                  </label>
                  <input
                    type="text"
                    value={formData.organization}
                    onChange={(e) => setFormData({ ...formData, organization: e.target.value })}
                    placeholder="Your Organization"
                    className="w-full px-4 py-2.5 rounded-xl bg-black/60 border border-cyan-500/30 focus:border-cyan-400 focus:ring-2 focus:ring-cyan-500/20 text-white placeholder-slate-500 text-xs sm:text-sm transition-all focus:outline-none"
                  />
                </div>

                <div>
                  <label className="block text-xs font-mono text-cyan-300 mb-1.5 uppercase tracking-wider">
                    Inquiry Category
                  </label>
                  <select
                    value={formData.inquiryType}
                    onChange={(e) => setFormData({ ...formData, inquiryType: e.target.value })}
                    className="w-full px-4 py-2.5 rounded-xl bg-[#05111b] border border-cyan-500/30 focus:border-cyan-400 focus:ring-2 focus:ring-cyan-500/20 text-white text-xs sm:text-sm transition-all focus:outline-none cursor-pointer"
                  >
                    <option value="General Technical Inquiry">General Technical Inquiry</option>
                    <option value="Service Related Inquiry">Service Related Inquiry</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-xs font-mono text-cyan-300 mb-1.5 uppercase tracking-wider">
                  Your Message <span className="text-red-400">*</span>
                </label>
                <textarea
                  required
                  rows={3}
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  placeholder="Tell us about your questions, project scope, or Blob inquiries..."
                  className="w-full px-4 py-2.5 rounded-xl bg-black/60 border border-cyan-500/30 focus:border-cyan-400 focus:ring-2 focus:ring-cyan-500/20 text-white placeholder-slate-500 text-xs sm:text-sm transition-all focus:outline-none resize-none"
                />
              </div>

              <div className="pt-2 flex flex-col sm:flex-row items-center justify-between gap-4">
                <span className="text-[11px] text-slate-400 flex items-center gap-1.5 font-mono">
                  <ShieldCheck className="w-3.5 h-3.5 text-cyan-400" />
                  Your enquiry is securely dispatched directly to our core team.
                </span>

                <button
                  type="submit"
                  disabled={loading}
                  className="w-full sm:w-auto px-8 py-3 rounded-full text-xs font-bold uppercase tracking-wider text-black bg-gradient-to-r from-cyan-400 to-cyan-200 hover:to-white transition-all shadow-[0_0_25px_rgba(0,240,255,0.4)] hover:shadow-[0_0_35px_rgba(0,240,255,0.7)] flex items-center justify-center gap-2 cursor-pointer disabled:opacity-50"
                >
                  {loading ? (
                    <span className="flex items-center gap-2 font-mono">TRANSMITTING...</span>
                  ) : (
                    <>
                      <span>Transmit Request</span>
                      <Send className="w-4 h-4" />
                    </>
                  )}
                </button>
              </div>
            </form>
          </div>
        </div>
      </SnapSection>

      {/* SECTION 2: OPERATIONS & SLA */}
      <SnapSection index={1} backgroundElement={<PosterBackground variant="subtle" />}>
        <div className="w-full max-w-5xl mx-auto py-6">
          <div className="text-center mb-8">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/30 text-xs font-mono uppercase tracking-widest text-cyan-300 mb-2">
              <Clock className="w-3.5 h-3.5" />
              <span>COMMITMENT</span>
            </div>
            <h2 className="text-2xl sm:text-4xl font-black text-white">
              Prompt & Direct <span className="text-cyan-400">Response</span>
            </h2>
            <p className="text-slate-400 text-xs sm:text-sm max-w-xl mx-auto mt-2">
              Every message goes directly to our founding team and engineers. We respond quickly with actionable feedback.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-3xl mx-auto">
            <div className="cyber-glass rounded-2xl p-6 border border-cyan-500/30">
              <div className="w-10 h-10 rounded-xl bg-cyan-950/80 border border-cyan-500/40 flex items-center justify-center text-cyan-300 mb-4">
                <Clock className="w-5 h-5 text-cyan-400" />
              </div>
              <h3 className="text-base font-bold text-white mb-2">&lt; 24 Hour Turnaround</h3>
              <p className="text-slate-400 text-xs leading-relaxed">
                Initial review and personal response delivered within one business day for all technical and service inquiries.
              </p>
            </div>

            <div className="cyber-glass rounded-2xl p-6 border border-cyan-500/40 shadow-[0_0_25px_rgba(0,240,255,0.15)]">
              <div className="w-10 h-10 rounded-xl bg-cyan-950/80 border border-cyan-500/40 flex items-center justify-center text-cyan-300 mb-4">
                <ShieldCheck className="w-5 h-5 text-cyan-400" />
              </div>
              <h3 className="text-base font-bold text-white mb-2">Confidential & Direct</h3>
              <p className="text-slate-400 text-xs leading-relaxed">
                We safeguard project concepts, proprietary project ideas, and business specifications with strict confidentiality.
              </p>
            </div>
          </div>
        </div>
      </SnapSection>

      {/* SECTION 3: FREQUENTLY ASKED QUESTIONS + FOOTER AS BOTTOM PART */}
      <SnapSection
        index={2}
        isLastSection={true}
        footer={<Footer />}
        backgroundElement={<PosterBackground variant="intense" />}
      >
        <div className="w-full max-w-4xl mx-auto py-6">
          <div className="text-center mb-6">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/30 text-xs font-mono uppercase tracking-widest text-cyan-300 mb-2">
              <HelpCircle className="w-3.5 h-3.5" />
              <span>FREQUENTLY ASKED QUESTIONS</span>
            </div>
            <h2 className="text-2xl sm:text-4xl font-black text-white">
              Questions & <span className="text-cyan-400">Insights</span>
            </h2>
          </div>

          <div className="space-y-3 text-left">
            <div className="p-4 rounded-xl cyber-glass border border-cyan-500/20">
              <h4 className="text-sm font-bold text-white mb-1">What is Blob and when will it be available?</h4>
              <p className="text-xs text-slate-300 leading-relaxed">
                Blob is our intelligent autonomous desktop companion robot currently under active development. You can submit a General Technical Inquiry to get on our launch priority list for early updates.
              </p>
            </div>

            <div className="p-4 rounded-xl cyber-glass border border-cyan-500/20">
              <h4 className="text-sm font-bold text-white mb-1">What digital services does ZeroBots provide?</h4>
              <p className="text-xs text-slate-300 leading-relaxed">
                We offer custom website building, Android & Windows app development, UI/UX designing, and graphic designing tailored to your brand and technical goals.
              </p>
            </div>

            <div className="p-4 rounded-xl cyber-glass border border-cyan-500/20">
              <h4 className="text-sm font-bold text-white mb-1">How can I initiate a service project with ZeroBots?</h4>
              <p className="text-xs text-slate-300 leading-relaxed">
                Simply select &quot;Service Related Inquiry&quot; in the form above and describe your project goals. We will reply within 24 hours with an initial consultation and roadmap.
              </p>
            </div>
          </div>

          <div className="mt-6 flex items-center justify-center gap-4 pb-4">
            <Link
              href="/"
              className="px-6 py-2.5 rounded-full text-xs font-bold uppercase tracking-wider text-cyan-300 hover:text-white bg-cyan-950/60 border border-cyan-500/40 transition-all flex items-center gap-2"
            >
              <span>Back to Home</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </SnapSection>
    </SnapContainer>
  );
}

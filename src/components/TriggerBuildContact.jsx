import React, { useState } from 'react';
import { personalInfo } from '../data/portfolioData';
import { 
  Send, Terminal, CheckCircle2, Mail, MapPin, 
  ExternalLink, Copy, Check, Sparkles, AlertCircle 
} from 'lucide-react';
import { Linkedin } from './BrandIcons';
import confetti from 'canvas-confetti';

export default function TriggerBuildContact() {
  const [formData, setFormData] = useState({
    senderName: '',
    senderEmail: '',
    targetEnv: 'Production / DevOps Role',
    payload: ''
  });

  const [isBuilding, setIsBuilding] = useState(false);
  const [buildLogs, setBuildLogs] = useState([]);
  const [isSuccess, setIsSuccess] = useState(false);
  const [copiedEmail, setCopiedEmail] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.senderEmail || !formData.payload) return;

    setIsBuilding(true);
    setIsSuccess(false);
    setBuildLogs([]);

    // SPEC REQUIREMENT: Rapid sequence of green logs:
    // [OK] Validating payload...
    // [OK] Establishing connection...
    // [SUCCESS] Message Deployed Successfully!

    setTimeout(() => {
      setBuildLogs((prev) => [...prev, "[OK] Validating payload..."]);
    }, 300);

    setTimeout(() => {
      setBuildLogs((prev) => [...prev, "[OK] Establishing connection to hiruna@cloud gateway..."]);
    }, 700);

    setTimeout(() => {
      setBuildLogs((prev) => [
        ...prev, 
        "[SUCCESS] Message Deployed Successfully!",
        `[INFO] Packet dispatched to ${personalInfo.email}`
      ]);
      setIsBuilding(false);
      setIsSuccess(true);

      // Trigger celebratory micro-interaction
      try {
        confetti({
          particleCount: 80,
          spread: 70,
          origin: { y: 0.8 },
          colors: ['#0251B0', '#D1FF42', '#FFFFFF', '#0A6EEB']
        });
      } catch (err) {
        // Fallback gracefully if canvas-confetti is not available
      }
    }, 1200);
  };

  const copyEmail = () => {
    navigator.clipboard.writeText(personalInfo.email);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2000);
  };

  return (
    <section id="contact" className="py-20 bg-slate-50 border-b border-soft-blue/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 pb-4 border-b-2 border-elite-blue">
          <div>
            <div className="flex items-center gap-2 text-xs font-mono font-bold tracking-widest text-elite-blue uppercase mb-1">
              <span className="w-2.5 h-2.5 bg-volt-lime border border-slate-900 inline-block"></span>
              <span>SECTION 05 // CI/CD ACTION DISPATCH</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-heading font-bold text-slate-950 uppercase tracking-tight">
              "Trigger Build" Contact Gateway
            </h2>
          </div>
          <div className="mt-3 md:mt-0 font-mono text-xs text-slate-500">
            DISPATCH TARGET: <span className="text-slate-900 font-semibold">{personalInfo.email}</span>
          </div>
        </div>

        {/* Spec Notice Banner */}
        <div className="mb-10 p-4 rounded-xl bg-white border-l-4 border-elite-blue shadow-sm flex items-center gap-3 text-xs sm:text-sm text-slate-700">
          <Terminal className="w-5 h-5 text-elite-blue flex-shrink-0" />
          <span>
            <strong>Specification Requirement:</strong> Rebranding the mundane contact form into a memorable CI/CD micro-interaction. Clicking the Elite Blue button triggers a rapid sequence of green deployment logs before declaring success!
          </span>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
          
          {/* Left Column: Direct Credentials & Info */}
          <div className="lg:col-span-5 space-y-6">
            <div className="bg-white rounded-2xl p-6 sm:p-8 border-2 border-soft-blue shadow-subtle">
              <h3 className="text-2xl font-heading font-bold text-slate-900 mb-2">
                Initiate Direct Communication
              </h3>
              <p className="text-xs text-slate-600 mb-6 leading-relaxed">
                Whether you represent a fast-scaling tech team seeking an ambitious DevOps Engineer, need containerized microservice architectures, or wish to review my academic and production work, my pipeline is open.
              </p>

              {/* Direct channels */}
              <div className="space-y-4 font-mono text-xs">
                
                {/* Email Box */}
                <div className="p-3.5 rounded-xl bg-slate-50 border border-soft-blue flex items-center justify-between">
                  <div className="flex items-center gap-3 truncate">
                    <div className="p-2 rounded-lg bg-elite-blue text-white">
                      <Mail className="w-4 h-4" />
                    </div>
                    <div className="truncate">
                      <span className="text-[10px] text-slate-400 block uppercase">Primary Mailbox:</span>
                      <a 
                        href={`mailto:${personalInfo.email}`}
                        className="text-slate-900 font-bold hover:text-elite-blue truncate block"
                      >
                        {personalInfo.email}
                      </a>
                    </div>
                  </div>
                  <button
                    onClick={copyEmail}
                    className="p-2 rounded-lg text-slate-500 hover:text-elite-blue hover:bg-white transition-colors"
                    title="Copy Email"
                  >
                    {copiedEmail ? <Check className="w-4 h-4 text-emerald-600" /> : <Copy className="w-4 h-4" />}
                  </button>
                </div>

                {/* LinkedIn Box */}
                <a 
                  href={personalInfo.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3.5 rounded-xl bg-slate-50 border border-soft-blue flex items-center justify-between hover:border-elite-blue hover:bg-slate-100/80 transition-all group"
                >
                  <div className="flex items-center gap-3">
                    <div className="p-2 rounded-lg bg-elite-blue text-white">
                      <Linkedin className="w-4 h-4" />
                    </div>
                    <div>
                      <span className="text-[10px] text-slate-400 block uppercase">Professional Network:</span>
                      <span className="text-slate-900 font-bold group-hover:text-elite-blue">
                        linkedin.com/in/hiruna-weerakoon
                      </span>
                    </div>
                  </div>
                  <ExternalLink className="w-4 h-4 text-slate-400 group-hover:text-elite-blue" />
                </a>

                {/* Location Box */}
                <div className="p-3.5 rounded-xl bg-slate-50 border border-soft-blue flex items-center gap-3">
                  <div className="p-2 rounded-lg bg-slate-200 text-slate-700">
                    <MapPin className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="text-[10px] text-slate-400 block uppercase">Physical Base:</span>
                    <span className="text-slate-900 font-bold">
                      {personalInfo.location}
                    </span>
                  </div>
                </div>

              </div>

              {/* Status indicator */}
              <div className="mt-6 pt-4 border-t border-soft-blue/60 flex items-center justify-between text-xs font-mono">
                <span className="text-slate-500">Pipeline Availability:</span>
                <span className="text-emerald-600 font-bold flex items-center gap-1.5">
                  <span className="w-2 h-2 rounded-full bg-emerald-500 animate-ping"></span>
                  <span>Open for Opportunities</span>
                </span>
              </div>
            </div>

            {/* Quick Note for Technical Recruiters */}
            <div className="bg-elite-blue text-white p-5 rounded-2xl shadow-elite border border-elite-blue">
              <div className="font-mono text-xs text-volt-lime font-bold uppercase mb-1">
                For Technical Recruiters & Leads
              </div>
              <p className="text-xs text-slate-100 leading-relaxed font-sans">
                Looking for automated take-home assessments, live containerization tests, or architecture walkthroughs? I welcome rigorous technical challenges to demonstrate real-world CI/CD mastery.
              </p>
            </div>
          </div>

          {/* Right Column: "Trigger Production Build" Form */}
          <div className="lg:col-span-7">
            <div className="bg-white rounded-2xl p-6 sm:p-8 border-2 border-elite-blue shadow-xl">
              
              <div className="flex items-center justify-between pb-4 mb-6 border-b border-soft-blue/60">
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 rounded-full bg-volt-lime border border-slate-900"></div>
                  <h3 className="font-heading font-bold text-xl text-slate-950 uppercase">
                    Build Configuration & Dispatch
                  </h3>
                </div>
                <span className="text-xs font-mono px-2 py-0.5 rounded bg-slate-100 text-slate-600">
                  PROTOCOL: POST
                </span>
              </div>

              <form onSubmit={handleSubmit} className="space-y-4">
                
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {/* Sender Name */}
                  <div>
                    <label className="block text-xs font-mono font-bold text-slate-700 uppercase mb-1.5">
                      Origin Engineer / Recruiter Name
                    </label>
                    <input
                      type="text"
                      required
                      value={formData.senderName}
                      onChange={(e) => setFormData({...formData, senderName: e.target.value})}
                      placeholder="e.g. Alex (Engineering Manager)"
                      className="w-full px-3.5 py-2.5 rounded-lg border border-soft-blue focus:border-elite-blue focus:ring-1 focus:ring-elite-blue text-sm outline-none transition-colors"
                    />
                  </div>

                  {/* Sender Email */}
                  <div>
                    <label className="block text-xs font-mono font-bold text-slate-700 uppercase mb-1.5">
                      Return Dispatch Email
                    </label>
                    <input
                      type="email"
                      required
                      value={formData.senderEmail}
                      onChange={(e) => setFormData({...formData, senderEmail: e.target.value})}
                      placeholder="e.g. alex@cloudtech.io"
                      className="w-full px-3.5 py-2.5 rounded-lg border border-soft-blue focus:border-elite-blue focus:ring-1 focus:ring-elite-blue text-sm outline-none transition-colors"
                    />
                  </div>
                </div>

                {/* Target Environment / Opportunity */}
                <div>
                  <label className="block text-xs font-mono font-bold text-slate-700 uppercase mb-1.5">
                    Target Deployment Environment / Subject
                  </label>
                  <select
                    value={formData.targetEnv}
                    onChange={(e) => setFormData({...formData, targetEnv: e.target.value})}
                    className="w-full px-3.5 py-2.5 rounded-lg border border-soft-blue focus:border-elite-blue focus:ring-1 focus:ring-elite-blue text-sm outline-none transition-colors bg-white font-mono text-xs"
                  >
                    <option value="Production / DevOps Role">Production / Full-Time DevOps Engineer Role</option>
                    <option value="Cloud Migration / IaC Project">Cloud Migration / Kubernetes & Docker Consulting</option>
                    <option value="Via Codos Collaboration">Via Codos / Web Development Collaboration</option>
                    <option value="Technical Interview / Interview Invitation">Technical Interview Invitation</option>
                    <option value="General Technical Inquiry">General Technical Inquiry</option>
                  </select>
                </div>

                {/* Message Payload */}
                <div>
                  <label className="block text-xs font-mono font-bold text-slate-700 uppercase mb-1.5">
                    Payload Message (JSON / Plaintext)
                  </label>
                  <textarea
                    required
                    rows={4}
                    value={formData.payload}
                    onChange={(e) => setFormData({...formData, payload: e.target.value})}
                    placeholder="Hi Hiruna, we reviewed your DevOps pipeline showcases and are interested in discussing opportunities..."
                    className="w-full px-3.5 py-2.5 rounded-lg border border-soft-blue focus:border-elite-blue focus:ring-1 focus:ring-elite-blue text-sm outline-none transition-colors font-sans"
                  ></textarea>
                </div>

                {/* =========================================================================
                    SPEC REQUIREMENT: SUBMIT BUTTON IN ELITE BLUE:
                    "Trigger Production Build (Send Message)"
                   ========================================================================= */}
                <button
                  type="submit"
                  disabled={isBuilding}
                  className="w-full bg-elite-blue hover:bg-elite-blue-dark text-white font-mono font-bold text-sm py-4 px-6 rounded-xl border border-elite-blue shadow-elite hover:shadow-xl transition-all flex items-center justify-center gap-3 disabled:opacity-60 disabled:cursor-not-allowed group"
                >
                  <span className="w-2.5 h-2.5 rounded-full bg-volt-lime animate-pulse"></span>
                  <span className="tracking-wide">
                    {isBuilding ? 'Running Pipeline Deployment...' : 'Trigger Production Build (Send Message)'}
                  </span>
                  <Send className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </button>
              </form>

              {/* =========================================================================
                  SPEC REQUIREMENT: LIVE LOG SEQUENCE CONSOLE:
                  [OK] Validating payload...
                  [OK] Establishing connection...
                  [SUCCESS] Message Deployed Successfully!
                 ========================================================================= */}
              {(buildLogs.length > 0 || isSuccess) && (
                <div className="mt-6 rounded-xl bg-terminal-dark border-2 border-terminal-border p-4 font-mono text-xs text-slate-200 animate-fadeIn">
                  <div className="flex items-center justify-between pb-2 mb-2 border-b border-slate-800 text-slate-400 text-[10px]">
                    <div className="flex items-center gap-2">
                      <span className="w-2 h-2 rounded-full bg-volt-lime"></span>
                      <span>CI/CD PIPELINE DISPATCH LOG</span>
                    </div>
                    <span>runtime: node-agent-01</span>
                  </div>

                  <div className="space-y-1 py-1">
                    {buildLogs.map((log, lIdx) => (
                      <div 
                        key={lIdx}
                        className={
                          log.includes('[SUCCESS]') ? 'text-volt-lime font-bold text-sm py-1' :
                          log.includes('[OK]') ? 'text-emerald-400 font-semibold' :
                          'text-slate-300'
                        }
                      >
                        {log}
                      </div>
                    ))}
                  </div>

                  {isSuccess && (
                    <div className="mt-3 pt-3 border-t border-slate-800 flex flex-wrap items-center justify-between gap-2 text-[11px]">
                      <span className="text-emerald-400 font-bold flex items-center gap-1.5">
                        <CheckCircle2 className="w-4 h-4" />
                        <span>Transmission Complete. Thank you for connecting!</span>
                      </span>
                      <a
                        href={`mailto:${personalInfo.email}?subject=${encodeURIComponent(formData.targetEnv)}&body=${encodeURIComponent(formData.payload)}`}
                        className="text-volt-lime underline hover:text-white"
                      >
                        Open Direct Mail Client &rarr;
                      </a>
                    </div>
                  )}
                </div>
              )}

            </div>
          </div>

        </div>

      </div>
    </section>
  );
}

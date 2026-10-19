import React, { useState } from 'react';
import { certificatesData } from '../data/portfolioData';
import { Terminal, ShieldCheck, CheckCircle2, Award, ExternalLink, Play, CornerDownLeft, Sparkles, RefreshCw } from 'lucide-react';

export default function TerminalCertificates() {
  const [selectedCert, setSelectedCert] = useState(certificatesData[0]);
  const [isVerifying, setIsVerifying] = useState(false);
  const [verificationStep, setVerificationStep] = useState(3); // 0, 1, 2, 3 (3 = verified)
  const [cliInput, setCliInput] = useState('');
  const [terminalHistory, setTerminalHistory] = useState([
    { text: "Type or click any certificate fetch command below to initiate TLS handshake & verification.", type: "system" }
  ]);

  const runVerification = (cert) => {
    setSelectedCert(cert);
    setIsVerifying(true);
    setVerificationStep(0);

    // Simulated 1-second multi-phase verification sequence (Spec Requirement)
    setTimeout(() => {
      setVerificationStep(1);
    }, 350);

    setTimeout(() => {
      setVerificationStep(2);
    }, 700);

    setTimeout(() => {
      setVerificationStep(3);
      setIsVerifying(false);
    }, 1100);
  };

  const handleCommandSubmit = (e) => {
    e.preventDefault();
    const cleanCmd = cliInput.trim().toLowerCase();
    if (!cleanCmd) return;

    if (cleanCmd === 'clear') {
      setTerminalHistory([]);
      setCliInput('');
      return;
    }

    if (cleanCmd === 'ls' || cleanCmd === 'help') {
      setTerminalHistory((prev) => [
        ...prev,
        { text: `$ ${cliInput}`, type: "command" },
        { text: "Available commands: fetch <cert_name>, ls, clear, whoami", type: "system" },
        ...certificatesData.map(c => ({ text: `  > ${c.command}`, type: "hint" }))
      ]);
      setCliInput('');
      return;
    }

    if (cleanCmd === 'whoami') {
      setTerminalHistory((prev) => [
        ...prev,
        { text: `$ ${cliInput}`, type: "command" },
        { text: "hiruna-weerakoon (uid=1000 gid=1000 groups=docker,sudo,devops)", type: "system" }
      ]);
      setCliInput('');
      return;
    }

    const matchedCert = certificatesData.find(c => 
      c.command.toLowerCase().includes(cleanCmd.replace('>', '').trim()) ||
      c.id.toLowerCase().includes(cleanCmd) ||
      cleanCmd.includes(c.id.toLowerCase())
    );

    if (matchedCert) {
      setTerminalHistory((prev) => [
        ...prev,
        { text: `$ ${cliInput}`, type: "command" },
        { text: `Initiating cryptographic lookup for ${matchedCert.title}...`, type: "system" }
      ]);
      runVerification(matchedCert);
    } else {
      setTerminalHistory((prev) => [
        ...prev,
        { text: `$ ${cliInput}`, type: "command" },
        { text: `bash: command not found: ${cleanCmd}. Try clicking any command below or type 'help'`, type: "error" }
      ]);
    }

    setCliInput('');
  };

  return (
    <section id="certificates" className="py-20 bg-brand-white border-b border-soft-blue/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 pb-4 border-b-2 border-elite-blue">
          <div>
            <h2 className="text-3xl sm:text-4xl font-heading font-bold text-slate-950 uppercase tracking-tight">
              Certifications
            </h2>
          </div>
        </div>

        {/* Available CLI Commands Quick List */}
        <div className="mb-8">
          <div className="text-xs font-mono text-slate-500 uppercase tracking-wider font-semibold mb-3">
            Select Certificate:
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
            {certificatesData.map((cert) => {
              const isSelected = selectedCert?.id === cert.id;
              return (
                <button
                  key={cert.id}
                  onClick={() => runVerification(cert)}
                  className={`p-3.5 rounded-xl text-left font-mono text-xs transition-all border-2 flex flex-col justify-between ${
                    isSelected 
                      ? 'bg-slate-900 text-white border-elite-blue shadow-elite scale-[1.02]' 
                      : 'bg-white text-slate-800 border-soft-blue hover:border-elite-blue hover:bg-slate-50'
                  }`}
                >
                  <div className="flex items-center gap-1.5 text-volt-lime font-bold mb-1.5">
                    <span className="text-volt-lime">&gt;</span>
                    <span className="truncate">{cert.command}</span>
                  </div>
                  <div className="text-[11px] text-slate-400 truncate">
                    {cert.title}
                  </div>
                </button>
              );
            })}
          </div>
        </div>

        {/* Main Terminal Window & Certificate Render Pane */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left: Mock Interactive CLI Terminal */}
          <div className="lg:col-span-6 rounded-2xl bg-terminal-dark border-2 border-terminal-border shadow-2xl overflow-hidden font-mono">
            
            {/* Terminal Top Window Chrome */}
            <div className="bg-terminal-card border-b border-terminal-border px-4 py-3 flex items-center justify-between">
              <div className="flex items-center gap-2">
                <span className="w-3 h-3 rounded-full bg-rose-500/80"></span>
                <span className="w-3 h-3 rounded-full bg-amber-500/80"></span>
                <span className="w-3 h-3 rounded-full bg-emerald-500/80"></span>
                <span className="ml-2 text-xs text-slate-400">bash &bull; cert-verifier v2.4</span>
              </div>
              <span className="text-[10px] text-slate-500 font-bold uppercase">
                PORT: 443 TLS
              </span>
            </div>

            {/* Terminal Body */}
            <div className="p-5 text-xs space-y-3 min-h-[360px] terminal-scroll overflow-y-auto">
              
              {/* Terminal History */}
              {terminalHistory.map((item, idx) => (
                <div 
                  key={idx} 
                  className={
                    item.type === 'command' ? 'text-volt-lime font-bold' :
                    item.type === 'error' ? 'text-rose-400' :
                    item.type === 'hint' ? 'text-sky-300 pl-2' :
                    'text-slate-400'
                  }
                >
                  {item.text}
                </div>
              ))}

              {/* Active Verification Log Sequence */}
              {selectedCert && (
                <div className="mt-4 pt-3 border-t border-slate-800 space-y-2">
                  <div className="text-volt-lime font-bold">
                    $ {selectedCert.command}
                  </div>

                  {/* Simulated 1-second loading sequence */}
                  {verificationStep >= 1 && (
                    <div className="text-slate-300 flex items-center gap-2">
                      <span className="text-sky-400 font-bold">[1/3]</span>
                      <span>Resolving {selectedCert.issuer.toLowerCase().replace(/\s+/g, '-')}-vault.internal...</span>
                      <span className="text-emerald-400 font-bold">200 OK</span>
                    </div>
                  )}

                  {verificationStep >= 2 && (
                    <div className="text-slate-300 flex items-center gap-2">
                      <span className="text-sky-400 font-bold">[2/3]</span>
                      <span>Authenticating cryptographic digest (SHA-256)...</span>
                      <span className="text-emerald-400 font-bold">MATCHED</span>
                    </div>
                  )}

                  {verificationStep >= 3 && (
                    <div className="space-y-1">
                      <div className="text-slate-300 flex items-center gap-2">
                        <span className="text-sky-400 font-bold">[3/3]</span>
                        <span>Issuer Signature: <strong className="text-white">{selectedCert.issuer}</strong></span>
                        <span className="text-volt-lime font-bold">VALID</span>
                      </div>
                      <div className="p-2.5 rounded bg-slate-900 border border-volt-lime/40 text-volt-lime text-xs font-bold flex items-center gap-2 mt-2">
                        <CheckCircle2 className="w-4 h-4 text-volt-lime" />
                        <span>[VERIFIED] Certificate successfully mounted to viewport.</span>
                      </div>
                    </div>
                  )}

                  {isVerifying && (
                    <div className="flex items-center gap-2 text-volt-lime pt-2 animate-pulse">
                      <RefreshCw className="w-4 h-4 animate-spin" />
                      <span>Negotiating TLS handshake... (1s security protocol)</span>
                    </div>
                  )}
                </div>
              )}

              {/* Terminal Prompt Input */}
              <form onSubmit={handleCommandSubmit} className="pt-4 flex items-center gap-2">
                <span className="text-volt-lime font-bold">hiruna@cloud:~$</span>
                <input
                  type="text"
                  value={cliInput}
                  onChange={(e) => setCliInput(e.target.value)}
                  placeholder="type fetch or help..."
                  className="bg-transparent flex-1 text-slate-100 placeholder:text-slate-600 focus:outline-none text-xs"
                />
                <button type="submit" className="text-slate-500 hover:text-volt-lime">
                  <CornerDownLeft className="w-3.5 h-3.5" />
                </button>
              </form>

            </div>

            {/* Terminal Status bar */}
            <div className="bg-terminal-card border-t border-terminal-border px-4 py-2 flex items-center justify-between text-[11px] text-slate-400">
              <span>Interactive CLI Active</span>
              <span className="text-volt-lime font-bold">● SSL/TLS Encrypted</span>
            </div>
          </div>

          {/* Right: Rendered Certificate Card with Volt Lime VERIFIED badge */}
          <div className="lg:col-span-6">
            {selectedCert && (
              <div className="bg-white rounded-2xl border-4 border-elite-blue shadow-2xl p-6 sm:p-8 relative overflow-hidden">
                
                {/* Background Watermark */}
                <div className="absolute -right-10 -bottom-10 opacity-5 pointer-events-none select-none">
                  <Award className="w-80 h-80 text-elite-blue" />
                </div>

                {/* Stamped Volt Lime Badge (SPEC REQUIREMENT) */}
                <div className="flex items-center justify-between mb-6 pb-4 border-b-2 border-slate-100">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-xl bg-elite-blue flex items-center justify-center text-volt-lime font-mono font-bold shadow-md">
                      <Award className="w-6 h-6" />
                    </div>
                    <div>
                      <span className="text-xs font-mono font-bold text-slate-400 uppercase">
                        OFFICIAL CREDENTIAL
                      </span>
                      <h4 className="font-heading font-bold text-slate-900 text-lg">
                        {selectedCert.issuer}
                      </h4>
                    </div>
                  </div>

                  {/* Bright Volt Lime VERIFIED Stamp */}
                  <div className="px-3.5 py-1.5 rounded-md bg-volt-lime text-slate-950 font-mono font-black text-xs tracking-wider border-2 border-slate-950 shadow-volt flex items-center gap-1.5 rotate-[-2deg] animate-pulse">
                    <ShieldCheck className="w-4 h-4 fill-slate-950 text-volt-lime" />
                    <span>{selectedCert.badgeName}</span>
                  </div>
                </div>

                {/* Main Certificate Title */}
                <div className="mb-6">
                  <span className="text-xs font-mono text-elite-blue font-semibold uppercase">
                    Certification Title
                  </span>
                  <h3 className="text-2xl sm:text-3xl font-heading font-extrabold text-slate-950 uppercase mt-0.5 mb-2">
                    {selectedCert.title}
                  </h3>
                  <p className="text-xs text-slate-600 leading-relaxed font-sans">
                    {selectedCert.description}
                  </p>
                </div>

                {/* Credential Metadata Box */}
                <div className="grid grid-cols-2 gap-3 p-3.5 rounded-xl bg-slate-50 border border-soft-blue/80 mb-6 font-mono text-xs">
                  <div>
                    <span className="text-slate-400 block text-[10px] uppercase">Credential ID:</span>
                    <span className="font-bold text-slate-800">{selectedCert.certId}</span>
                  </div>
                  <div>
                    <span className="text-slate-400 block text-[10px] uppercase">Year Issued:</span>
                    <span className="font-bold text-slate-800">{selectedCert.issueDate}</span>
                  </div>
                </div>

                {/* Skills Verified */}
                <div className="mb-6">
                  <div className="text-xs font-mono uppercase text-slate-500 font-bold mb-2">
                    Skills Rigorously Tested:
                  </div>
                  <div className="flex flex-wrap gap-1.5">
                    {selectedCert.skillsCovered.map((skill, sIdx) => (
                      <span 
                        key={sIdx}
                        className="px-2.5 py-1 rounded-md text-xs font-mono bg-white text-slate-800 border border-soft-blue shadow-sm flex items-center gap-1"
                      >
                        <span className="text-emerald-500 font-bold">✔</span>
                        <span>{skill}</span>
                      </span>
                    ))}
                  </div>
                </div>

                {/* Verification Action Bar */}
                <div className="pt-4 border-t border-slate-100 flex items-center justify-between">
                  <div className="text-xs font-mono text-slate-500">
                    Authority: <span className="text-elite-blue font-semibold">{selectedCert.issuer}</span>
                  </div>
                  <a
                    href={selectedCert.verificationUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-xs font-mono font-bold text-elite-blue hover:text-elite-blue-dark hover:underline"
                  >
                    <span>View Issuer Portal</span>
                    <ExternalLink className="w-3.5 h-3.5" />
                  </a>
                </div>

              </div>
            )}
          </div>

        </div>

      </div>
    </section>
  );
}

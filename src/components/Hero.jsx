import React, { useState, useEffect } from 'react';
import { Terminal, ArrowRight, Play, CheckCircle2, Shield, Layers, Server, Activity } from 'lucide-react';
import { personalInfo } from '../data/portfolioData';

export default function Hero() {
  const [activeLogIndex, setActiveLogIndex] = useState(0);

  const heroLogs = [
    { text: "$ docker ps --format 'table {{.Names}}\\t{{.Status}}\\t{{.Ports}}'", color: "text-slate-400" },
    { text: "NAMES               STATUS          PORTS", color: "text-slate-300" },
    { text: "nginx-proxy         Up 2 hours      0.0.0.0:80->80/tcp", color: "text-emerald-400" },
    { text: "web-app             Up 2 hours      0.0.0.0:3000->3000/tcp", color: "text-emerald-400" },
    { text: "database-mysql      Up 2 hours      3306/tcp", color: "text-emerald-400" },
    { text: "$ docker-compose up -d --build", color: "text-slate-400" },
    { text: "✔ Container web-app Built in 14.2s [OK]", color: "text-volt-lime font-bold" },
    { text: "✔ All services started successfully", color: "text-volt-lime font-semibold" },
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setActiveLogIndex((prev) => (prev + 1) % heroLogs.length);
    }, 2400);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="relative pt-28 pb-16 md:pt-36 md:pb-24 overflow-hidden bg-brand-white bg-grid-pattern border-b border-soft-blue/40">
      
      {/* Subtle background ambient glow */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[350px] bg-elite-blue/5 rounded-full blur-3xl pointer-events-none -z-10"></div>
      <div className="absolute top-1/3 right-10 w-[300px] h-[300px] bg-volt-lime/10 rounded-full blur-3xl pointer-events-none -z-10"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Hero Content */}
          <div className="lg:col-span-7 space-y-6">
            
            {/* Tag Badge */}
            <div className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full bg-slate-100 border border-soft-blue/80 text-xs font-mono">
              <span className="flex h-2 w-2 relative">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-volt-lime opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-elite-blue"></span>
              </span>
              <span className="font-semibold text-slate-800 tracking-wide uppercase">
                Aspiring DevOps Engineer
              </span>
              <span className="text-slate-400">|</span>
              <span className="text-elite-blue font-bold">Intern Portfolio</span>
            </div>

            {/* Main Headline */}
            <div>
              <p className="font-mono text-sm uppercase tracking-widest text-elite-blue font-bold mb-2">
                Hello, I'm {personalInfo.name}
              </p>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-heading font-extrabold text-slate-950 uppercase tracking-tight leading-[1.05]">
                Building <span className="text-elite-blue">Reliable</span> Containerized Environments & CI/CD Pipelines
              </h1>
            </div>

            {/* Subtitle / Role */}
            <p className="text-lg text-slate-600 max-w-2xl leading-relaxed">
              <strong className="text-slate-900 font-semibold">{personalInfo.title}</strong> based in Sri Lanka, Computer Science undergraduate at SLIIT, and former Web Developer at Via Codos. Focused on Docker containerization, Linux systems, and automated CI/CD pipelines to streamline development and deployment workflows.
            </p>

            {/* Key Stack Pills */}
            <div className="flex flex-wrap gap-2 pt-1">
              {['Docker', 'Docker Compose', 'Linux (Ubuntu/Debian)', 'GitHub Actions', 'Bash Scripting', 'Web Development', 'Git'].map((tech) => (
                <span 
                  key={tech} 
                  className="px-3 py-1 rounded-md text-xs font-mono font-medium bg-soft-blue/20 text-slate-800 border border-soft-blue/60 hover:border-elite-blue transition-colors"
                >
                  {tech}
                </span>
              ))}
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-wrap items-center gap-4 pt-3">
              <a 
                href="#devops-projects" 
                className="bg-elite-blue hover:bg-elite-blue-dark text-white font-mono font-bold text-sm px-6 py-3.5 rounded-lg border border-elite-blue shadow-elite hover:shadow-lg transition-all flex items-center gap-2 group"
              >
                <span>Explore DevOps Projects</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </a>

              <a 
                href="#standard-projects" 
                className="bg-volt-lime hover:bg-volt-lime-dark text-slate-950 font-mono font-bold text-sm px-6 py-3.5 rounded-lg border border-slate-900 shadow-sm transition-all flex items-center gap-2"
              >
                <span>View Under The Hood</span>
                <span className="w-2 h-2 rounded-full bg-slate-950"></span>
              </a>

              <a 
                href="#contact" 
                className="inline-flex items-center gap-1.5 px-4 py-3.5 rounded-lg text-sm font-mono font-semibold text-slate-700 hover:text-elite-blue hover:bg-slate-100 transition-colors"
              >
                <span>Get in Touch</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </a>
            </div>

          </div>

          {/* Right Hero Interactive Terminal Mockup */}
          <div className="lg:col-span-5">
            <div className="relative rounded-2xl bg-terminal-dark border-2 border-elite-blue shadow-2xl overflow-hidden">
              
              {/* Terminal Window Header */}
              <div className="bg-terminal-card border-b border-terminal-border px-4 py-3 flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 rounded-full bg-rose-500/80"></div>
                  <div className="w-3 h-3 rounded-full bg-amber-500/80"></div>
                  <div className="w-3 h-3 rounded-full bg-emerald-500/80"></div>
                  <span className="ml-2 text-xs font-mono text-slate-400">hiruna@docker-host:~</span>
                </div>
                <div className="flex items-center gap-1.5 px-2 py-0.5 rounded bg-slate-800 text-[11px] font-mono text-volt-lime">
                  <Activity className="w-3 h-3 animate-pulse" />
                  <span>DOCKER ENGINE</span>
                </div>
              </div>

              {/* Terminal Body */}
              <div className="p-5 font-mono text-xs text-slate-200 space-y-3 min-h-[300px] terminal-scroll overflow-y-auto">
                <div className="text-slate-400 pb-1 border-b border-slate-800/80 flex items-center justify-between">
                  <span># CONTAINER RUNTIME STATUS</span>
                  <span className="text-[10px] text-slate-500">status: active</span>
                </div>

                {heroLogs.map((log, index) => (
                  <div 
                    key={index} 
                    className={`transition-all duration-300 ${log.color} ${
                      index === activeLogIndex ? 'bg-slate-800/40 px-2 py-1 -mx-2 rounded border-l-2 border-volt-lime' : ''
                    }`}
                  >
                    {log.text}
                  </div>
                ))}

                {/* Simulated Interactive Deployment Monitor */}
                <div className="mt-4 pt-3 border-t border-slate-800">
                  <div className="flex items-center justify-between text-[11px] text-slate-400 mb-1">
                    <span>BUILD PIPELINE STATUS</span>
                    <span className="text-volt-lime font-bold">CONTAINERS HEALTHY</span>
                  </div>
                  <div className="w-full bg-slate-800 h-2 rounded-full overflow-hidden">
                    <div className="bg-volt-lime h-full w-full transition-all duration-1000"></div>
                  </div>
                </div>

                {/* Blinking Cursor Prompt */}
                <div className="pt-2 flex items-center gap-2 text-slate-400">
                  <span className="text-volt-lime font-bold">&gt;</span>
                  <span>ready for next command</span>
                  <span className="w-2 h-4 bg-volt-lime animate-blink inline-block"></span>
                </div>
              </div>

              {/* Terminal Footer Quick Bar */}
              <div className="bg-terminal-card border-t border-terminal-border px-4 py-2.5 flex items-center justify-between text-[11px] font-mono text-slate-400">
                <div className="flex items-center gap-2">
                  <Server className="w-3.5 h-3.5 text-elite-blue" />
                  <span>Containers: 3 Running</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-volt-lime">●</span>
                  <span>Docker Daemon: OK</span>
                </div>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
}

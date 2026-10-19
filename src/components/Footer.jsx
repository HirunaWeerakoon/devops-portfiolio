import React from 'react';
import { personalInfo } from '../data/portfolioData';
import { Terminal, Mail, Heart, ArrowUp } from 'lucide-react';
import { Github, Linkedin } from './BrandIcons';

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-terminal-dark text-white border-t border-terminal-border py-12 font-mono">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Top Grid */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 pb-10 border-b border-terminal-border">
          
          {/* Brand Info */}
          <div className="md:col-span-5 space-y-3">
            <div className="flex items-center gap-2.5">
              <div className="w-8 h-8 rounded-lg bg-elite-blue flex items-center justify-center text-volt-lime font-mono font-bold text-sm">
                &gt;_
              </div>
              <span className="font-heading font-bold text-xl tracking-tight text-white uppercase">
                {personalInfo.name}
              </span>
            </div>
            <p className="text-xs text-slate-400 font-sans leading-relaxed max-w-sm">
              Progressive Technical Depth DevOps Portfolio &bull; Engineered with high-contrast White, Elite Blue (#0251B0), and Volt Lime (#D1FF42) for technical recruiters and engineering managers.
            </p>
            <div className="flex items-center gap-2 text-[11px] text-slate-400">
              <span className="inline-block w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
              <span>All Systems Operational &bull; Docker Deployed</span>
            </div>
          </div>

          {/* Quick Section Links */}
          <div className="md:col-span-4 space-y-2 text-xs">
            <div className="text-slate-400 uppercase font-bold text-[10px] tracking-wider mb-2">
              Architecture Index
            </div>
            <div className="grid grid-cols-2 gap-2 text-slate-300">
              <a href="#about" className="hover:text-volt-lime transition-colors">
                &gt; About Profile
              </a>
              <a href="#devops-projects" className="hover:text-volt-lime transition-colors">
                &gt; Model A: Drawers
              </a>
              <a href="#standard-projects" className="hover:text-volt-lime transition-colors">
                &gt; Model B: 3D Flip
              </a>
              <a href="#certificates" className="hover:text-volt-lime transition-colors">
                &gt; CLI Certificates
              </a>
              <a href="#contact" className="hover:text-volt-lime transition-colors">
                &gt; Trigger Build
              </a>
            </div>
          </div>

          {/* Network and Back to top */}
          <div className="md:col-span-3 flex flex-col justify-between items-start md:items-end">
            <div className="flex items-center gap-3">
              <a 
                href={personalInfo.linkedin} 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-lg bg-slate-800 hover:bg-elite-blue flex items-center justify-center text-slate-300 hover:text-white transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin className="w-4 h-4" />
              </a>
              <a 
                href={personalInfo.github} 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-lg bg-slate-800 hover:bg-elite-blue flex items-center justify-center text-slate-300 hover:text-white transition-colors"
                aria-label="GitHub"
              >
                <Github className="w-4 h-4" />
              </a>
              <a 
                href={`mailto:${personalInfo.email}`}
                className="w-9 h-9 rounded-lg bg-slate-800 hover:bg-elite-blue flex items-center justify-center text-slate-300 hover:text-white transition-colors"
                aria-label="Email"
              >
                <Mail className="w-4 h-4" />
              </a>
            </div>

            <button
              onClick={scrollToTop}
              className="mt-6 md:mt-0 px-3 py-1.5 rounded-lg bg-slate-800 hover:bg-slate-700 text-xs text-slate-300 hover:text-volt-lime flex items-center gap-1.5 transition-colors border border-slate-700"
            >
              <span>Back to Top</span>
              <ArrowUp className="w-3.5 h-3.5" />
            </button>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between text-[11px] text-slate-500 gap-2">
          <div>
            &copy; {new Date().getFullYear()} {personalInfo.name}. Built with React, Tailwind CSS, & Progressive Technical Depth.
          </div>
          <div className="flex items-center gap-2">
            <span className="text-volt-lime">#0251B0</span>
            <span>&bull;</span>
            <span className="text-volt-lime">#D1FF42</span>
            <span>&bull;</span>
            <span>Sri Lanka</span>
          </div>
        </div>

      </div>
    </footer>
  );
}

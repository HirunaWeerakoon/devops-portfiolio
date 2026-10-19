import React, { useState, useEffect } from 'react';
import { Terminal, ShieldCheck, Mail, Menu, X, Cpu } from 'lucide-react';
import { Github, Linkedin } from './BrandIcons';
import { personalInfo } from '../data/portfolioData';

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled 
        ? 'bg-white/95 backdrop-blur-md shadow-md border-b border-soft-blue/60 py-3' 
        : 'bg-white border-b border-soft-blue/40 py-4'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          
          {/* Logo & Terminal Prompt */}
          <a href="#" className="flex items-center gap-3 group">
            <div className="w-10 h-10 rounded-lg bg-elite-blue flex items-center justify-center text-volt-lime font-mono font-bold text-lg shadow-sm group-hover:scale-105 transition-transform">
              &gt;_
            </div>
            <div>
              <div className="flex items-center gap-2">
                <span className="font-heading font-bold text-xl tracking-tight text-elite-blue">
                  HIRUNA WEERAKOON
                </span>
                <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-volt-lime text-slate-900 font-bold uppercase tracking-wider">
                  DevOps
                </span>
              </div>
              <div className="flex items-center gap-1.5 text-xs font-mono text-slate-500">
                <span className="inline-block w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
                <span>k8s-cluster: live</span>
              </div>
            </div>
          </a>

          {/* Desktop Nav Links */}
          <div className="hidden lg:flex items-center gap-6">
            <a href="#about" className="text-sm font-medium text-slate-700 hover:text-elite-blue transition-colors">
              About
            </a>
            <a href="#devops-projects" className="text-sm font-medium text-slate-700 hover:text-elite-blue transition-colors">
              DevOps Pipelines
            </a>
            <a href="#standard-projects" className="text-sm font-medium text-slate-700 hover:text-elite-blue transition-colors">
              Projects
            </a>
            <a href="#certificates" className="text-sm font-medium text-slate-700 hover:text-elite-blue transition-colors flex items-center gap-1.5">
              <Terminal className="w-4 h-4 text-elite-blue" />
              <span>Certificates</span>
            </a>
          </div>

          {/* Right Actions */}
          <div className="hidden sm:flex items-center gap-3">
            <a 
              href={personalInfo.linkedin} 
              target="_blank" 
              rel="noopener noreferrer"
              aria-label="LinkedIn Profile"
              className="p-2 text-slate-600 hover:text-elite-blue hover:bg-slate-100 rounded-lg transition-colors"
            >
              <Linkedin className="w-5 h-5" />
            </a>
            <a 
              href={personalInfo.github} 
              target="_blank" 
              rel="noopener noreferrer"
              aria-label="GitHub Profile"
              className="p-2 text-slate-600 hover:text-elite-blue hover:bg-slate-100 rounded-lg transition-colors"
            >
              <Github className="w-5 h-5" />
            </a>
            <a 
              href="#contact" 
              className="bg-elite-blue hover:bg-elite-blue-dark text-white text-xs font-mono font-semibold tracking-wide uppercase px-4 py-2 rounded-lg border border-elite-blue shadow-sm hover:shadow transition-all flex items-center gap-2"
            >
              <Mail className="w-3.5 h-3.5" />
              <span>Send Message</span>
            </a>
          </div>

          {/* Mobile menu button */}
          <div className="lg:hidden flex items-center gap-2">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 text-slate-700 hover:text-elite-blue rounded-lg"
              aria-label="Toggle Navigation Menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-white border-b border-soft-blue px-6 py-5 shadow-xl animate-fadeIn">
          <div className="flex flex-col gap-4 font-semibold text-slate-700">
            <a 
              href="#about" 
              onClick={() => setMobileMenuOpen(false)}
              className="hover:text-elite-blue py-1"
            >
              About Me & Skills
            </a>
            <a 
              href="#devops-projects" 
              onClick={() => setMobileMenuOpen(false)}
              className="hover:text-elite-blue py-1 flex items-center justify-between"
            >
              <span>DevOps Pipeline Drawers</span>
              <span className="text-[10px] font-mono bg-elite-blue text-white px-2 py-0.5 rounded">Model A</span>
            </a>
            <a 
              href="#standard-projects" 
              onClick={() => setMobileMenuOpen(false)}
              className="hover:text-elite-blue py-1 flex items-center justify-between"
            >
              <span>Projects (Under the Hood)</span>
              <span className="text-[10px] font-mono bg-volt-lime text-slate-900 px-2 py-0.5 rounded font-bold">Model B</span>
            </a>
            <a 
              href="#certificates" 
              onClick={() => setMobileMenuOpen(false)}
              className="hover:text-elite-blue py-1"
            >
              Terminal Certificates (CLI)
            </a>
            <a 
              href="#contact" 
              onClick={() => setMobileMenuOpen(false)}
              className="bg-elite-blue text-white text-center py-2.5 rounded-lg font-mono font-bold"
            >
              Trigger Production Build
            </a>
          </div>
        </div>
      )}
    </nav>
  );
}

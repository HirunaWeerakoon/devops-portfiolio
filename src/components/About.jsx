import React, { useState } from 'react';
import { personalInfo, experienceData, educationData, skillsData } from '../data/portfolioData';
import { Briefcase, GraduationCap, Code2, Server, CheckCircle2, Award, Terminal, Cpu, Layers } from 'lucide-react';

export default function About() {
  const [activeSkillCategory, setActiveSkillCategory] = useState(0);

  return (
    <section id="about" className="py-20 bg-white border-b border-soft-blue/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 pb-4 border-b-2 border-elite-blue">
          <div>
            <div className="flex items-center gap-2 text-xs font-mono font-bold tracking-widest text-elite-blue uppercase mb-1">
              <span className="w-2.5 h-2.5 bg-volt-lime border border-slate-900 inline-block"></span>
              <span>SECTION 01 // PROFESSIONAL PROFILE</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-heading font-bold text-slate-950 uppercase tracking-tight">
              About Me & Technical Background
            </h2>
          </div>
          <div className="mt-3 md:mt-0 font-mono text-xs text-slate-500">
            LOC: <span className="text-slate-800 font-semibold">{personalInfo.location}</span>
          </div>
        </div>

        {/* Top Grid: Bio & Core Philosophy */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mb-16">
          
          <div className="lg:col-span-7 bg-slate-50/80 rounded-2xl p-6 sm:p-8 border border-soft-blue/70 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-32 h-32 bg-elite-blue/5 rounded-bl-full pointer-events-none"></div>
            
            <h3 className="text-xl font-heading font-bold text-slate-900 mb-4 flex items-center gap-2">
              <Server className="w-5 h-5 text-elite-blue" />
              <span>Aspiring DevOps Engineer with Practical Development Foundations</span>
            </h3>

            <p className="text-slate-700 leading-relaxed text-sm sm:text-base mb-4">
              I am an aspiring DevOps Engineer and a <strong className="text-slate-900 font-semibold">Bachelor of Computer Science undergraduate at SLIIT</strong>, with hands-on industry experience working as a <strong className="text-elite-blue font-semibold">Web Developer at Via Codos</strong>.
            </p>

            <p className="text-slate-600 leading-relaxed text-sm mb-6">
              I am focused on containerization with Docker, Linux systems administration, and automated CI/CD pipelines. Having a foundation in web development, graphic design, and video editing allows me to appreciate end-to-end workflows from user interface design to containerized local setups and deployments.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2 font-mono text-xs">
              <div className="flex items-center gap-2 p-2.5 rounded-lg bg-white border border-soft-blue/60">
                <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                <span>Docker Certified & Hands-On</span>
              </div>
              <div className="flex items-center gap-2 p-2.5 rounded-lg bg-white border border-soft-blue/60">
                <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                <span>Linux System Administration</span>
              </div>
              <div className="flex items-center gap-2 p-2.5 rounded-lg bg-white border border-soft-blue/60">
                <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                <span>CI/CD & GitHub Actions</span>
              </div>
              <div className="flex items-center gap-2 p-2.5 rounded-lg bg-white border border-soft-blue/60">
                <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                <span>SLIIT CS Undergraduate</span>
              </div>
            </div>
          </div>

          {/* Interactive Skills Matrix */}
          <div className="lg:col-span-5 bg-white rounded-2xl p-6 border-2 border-soft-blue shadow-subtle flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between mb-4 pb-2 border-b border-soft-blue/50">
                <span className="font-heading font-bold text-lg text-slate-900 flex items-center gap-2">
                  <Cpu className="w-5 h-5 text-elite-blue" />
                  <span>Technical Competencies</span>
                </span>
                <span className="font-mono text-xs px-2 py-0.5 rounded bg-volt-lime text-slate-900 font-bold">
                  PROVEN
                </span>
              </div>

              {/* Category Tabs */}
              <div className="grid grid-cols-2 gap-1.5 mb-4 p-1 bg-slate-100 rounded-lg">
                {skillsData.map((cat, idx) => (
                  <button
                    key={idx}
                    onClick={() => setActiveSkillCategory(idx)}
                    className={`text-xs font-mono py-2 px-2.5 rounded-md text-left transition-all truncate ${
                      activeSkillCategory === idx
                        ? 'bg-elite-blue text-white font-bold shadow-sm'
                        : 'text-slate-600 hover:text-slate-900'
                    }`}
                  >
                    {cat.category.split('&')[0]}
                  </button>
                ))}
              </div>

              {/* Skills Tag Cloud */}
              <div className="space-y-2">
                <div className="text-xs font-mono font-semibold text-slate-500 uppercase tracking-wider mb-2">
                  {skillsData[activeSkillCategory].category} Skills:
                </div>
                <div className="flex flex-wrap gap-2">
                  {skillsData[activeSkillCategory].skills.map((skill, sIdx) => (
                    <span 
                      key={sIdx}
                      className="px-3 py-1.5 rounded-lg text-xs font-mono font-semibold bg-slate-50 text-slate-800 border border-soft-blue hover:border-elite-blue hover:bg-volt-lime/30 transition-all flex items-center gap-1.5 shadow-sm"
                    >
                      <span className="w-1.5 h-1.5 rounded-full bg-elite-blue"></span>
                      <span>{skill}</span>
                    </span>
                  ))}
                </div>
              </div>
            </div>

            <div className="mt-6 pt-4 border-t border-soft-blue/50 bg-slate-50 -mx-6 -mb-6 p-4 rounded-b-2xl flex items-center justify-between text-xs font-mono">
              <span className="text-slate-500">Core OS of Choice:</span>
              <span className="font-bold text-slate-900 bg-white px-2.5 py-1 rounded border border-soft-blue">
                Ubuntu / Debian / Alpine Linux
              </span>
            </div>
          </div>

        </div>

        {/* Experience & Education Dual Columns */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          
          {/* Work Experience */}
          <div className="lg:col-span-7 space-y-4">
            <div className="flex items-center gap-2 mb-2">
              <Briefcase className="w-5 h-5 text-elite-blue" />
              <h3 className="text-xl font-heading font-bold text-slate-900 tracking-tight uppercase">
                Work Experience
              </h3>
            </div>

            <div className="space-y-4">
              {experienceData.map((exp, idx) => (
                <div 
                  key={idx}
                  className="bg-white rounded-xl p-5 border border-soft-blue/80 hover:border-elite-blue transition-colors shadow-sm"
                >
                  <div className="flex flex-wrap items-start justify-between gap-2 mb-1.5">
                    <div>
                      <h4 className="font-heading font-bold text-lg text-slate-900">
                        {exp.role}
                      </h4>
                      <p className="text-xs font-mono font-semibold text-elite-blue">
                        {exp.company} &bull; <span className="text-slate-500">{exp.location}</span>
                      </p>
                    </div>
                    <div className="text-right">
                      <span className="text-[11px] font-mono px-2.5 py-1 rounded bg-slate-100 text-slate-700 font-bold border border-soft-blue">
                        {exp.period}
                      </span>
                    </div>
                  </div>

                  <p className="text-xs text-slate-600 mb-3 leading-relaxed">
                    {exp.description}
                  </p>

                  <div className="flex flex-wrap gap-1.5">
                    {exp.highlights.map((h, hIdx) => (
                      <span 
                        key={hIdx} 
                        className="text-[11px] font-mono px-2.5 py-1 rounded bg-slate-50 text-slate-700 border border-soft-blue/60"
                      >
                        ⚡ {h}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Education & Academic Rigor */}
          <div className="lg:col-span-5 space-y-4">
            <div className="flex items-center gap-2 mb-2">
              <GraduationCap className="w-5 h-5 text-elite-blue" />
              <h3 className="text-xl font-heading font-bold text-slate-900 tracking-tight uppercase">
                Education & Academics
              </h3>
            </div>

            <div className="space-y-4">
              {educationData.map((edu, idx) => (
                <div 
                  key={idx}
                  className="bg-white rounded-xl p-5 border border-soft-blue/80 hover:border-elite-blue transition-colors shadow-sm"
                >
                  <div className="flex items-start justify-between gap-2 mb-1">
                    <h4 className="font-heading font-bold text-base text-slate-900">
                      {edu.degree}
                    </h4>
                  </div>
                  <p className="text-xs font-mono font-semibold text-elite-blue mb-1">
                    {edu.institution}
                  </p>
                  <div className="text-[11px] font-mono text-slate-500 mb-2">
                    {edu.period} &bull; {edu.field}
                  </div>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    {edu.details}
                  </p>
                </div>
              ))}

              {/* High Energy Motto card */}
              <div className="bg-elite-blue text-white rounded-xl p-5 shadow-elite border border-elite-blue">
                <div className="font-mono text-xs uppercase tracking-wider text-volt-lime font-bold mb-1">
                  Philosophy
                </div>
                <div className="font-heading text-lg font-bold">
                  "If it isn't automated and reproducible, it doesn't exist in production."
                </div>
                <p className="text-xs text-slate-200 mt-2 font-mono">
                  Targeting technical recruiters & engineering leaders seeking precise, dependable automation.
                </p>
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}

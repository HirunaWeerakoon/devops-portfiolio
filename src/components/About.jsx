import React, { useState } from 'react';
import { personalInfo, experienceData, educationData, skillsData } from '../data/portfolioData';
import { Briefcase, GraduationCap, Code2, Server, CheckCircle2, Award, Terminal, Cpu, Layers } from 'lucide-react';

export default function About() {
  const [activeSkillCategory, setActiveSkillCategory] = useState(0);

  return (
    <section id="about" className="py-20 bg-white border-b border-soft-blue/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 pb-4 border-b-2 border-elite-blue">
          <div>
            <h2 className="text-3xl sm:text-4xl font-heading font-bold text-slate-950 uppercase tracking-tight">
              About & Skills
            </h2>
          </div>
        </div>

        {/* Technical Competencies Matrix */}
        <div className="bg-white rounded-2xl p-6 sm:p-8 border-2 border-soft-blue shadow-subtle mb-16">
          <div className="flex items-center justify-between mb-6 pb-3 border-b border-soft-blue/50">
            <span className="font-heading font-bold text-xl text-slate-900 flex items-center gap-2">
              <Cpu className="w-5 h-5 text-elite-blue" />
              <span>Technical Competencies</span>
            </span>
          </div>

          {/* Category Tabs */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 mb-6 p-1 bg-slate-100 rounded-lg">
            {skillsData.map((cat, idx) => (
              <button
                key={idx}
                onClick={() => setActiveSkillCategory(idx)}
                className={`text-xs font-mono py-2.5 px-3 rounded-md text-center transition-all ${
                  activeSkillCategory === idx
                    ? 'bg-elite-blue text-white font-bold shadow-sm'
                    : 'text-slate-600 hover:text-slate-900'
                }`}
              >
                {cat.category}
              </button>
            ))}
          </div>

          {/* Skills Tag Cloud */}
          <div className="flex flex-wrap gap-2.5">
            {skillsData[activeSkillCategory].skills.map((skill, sIdx) => (
              <span 
                key={sIdx}
                className="px-3.5 py-2 rounded-lg text-xs font-mono font-semibold bg-slate-50 text-slate-800 border border-soft-blue hover:border-elite-blue hover:bg-volt-lime/20 transition-all flex items-center gap-2 shadow-sm"
              >
                <span className="w-1.5 h-1.5 rounded-full bg-elite-blue"></span>
                <span>{skill}</span>
              </span>
            ))}
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
                        {exp.company}
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

          {/* Education */}
          <div className="lg:col-span-5 space-y-4">
            <div className="flex items-center gap-2 mb-2">
              <GraduationCap className="w-5 h-5 text-elite-blue" />
              <h3 className="text-xl font-heading font-bold text-slate-900 tracking-tight uppercase">
                Education
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
                  {edu.period && (
                    <div className="text-[11px] font-mono text-slate-500 mb-2">
                      {edu.period} {edu.field && `• ${edu.field}`}
                    </div>
                  )}
                  <p className="text-xs text-slate-600 leading-relaxed">
                    {edu.details}
                  </p>
                </div>
              ))}
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}

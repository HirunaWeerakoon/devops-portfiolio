import React, { useState } from 'react';
import { devopsProjects } from '../data/portfolioData';
import { 
  GitBranch, Play, CheckCircle2, ChevronRight, X, Terminal, 
  FileCode, Layers, ShieldCheck, ArrowRight, ExternalLink, Copy, Check
} from 'lucide-react';

export default function DevOpsDrawerProjects() {
  const [activeProject, setActiveProject] = useState(devopsProjects[0]);
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const [activeNodeIndex, setActiveNodeIndex] = useState(0);
  const [activeTab, setActiveTab] = useState('logs'); // 'logs' | 'config'
  const [copied, setCopied] = useState(false);

  const openProjectDrawer = (project) => {
    setActiveProject(project);
    setActiveNodeIndex(0);
    setIsDrawerOpen(true);
  };

  const handleCopy = (text) => {
    navigator.clipboard.writeText(text);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const currentNode = activeProject.pipeline[activeNodeIndex];

  return (
    <section id="devops-projects" className="py-20 bg-slate-50/60 border-b border-soft-blue/50 relative overflow-hidden">
      
      {/* Background decoration */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 pb-4 border-b-2 border-elite-blue">
          <div>
            <div className="flex items-center gap-2 text-xs font-mono font-bold tracking-widest text-elite-blue uppercase mb-1">
              <span className="w-2.5 h-2.5 bg-elite-blue inline-block"></span>
              <span>SECTION 02 // MODEL A</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-heading font-bold text-slate-950 uppercase tracking-tight">
              DevOps Projects: Interactive Pipeline Drawer
            </h2>
          </div>
          <div className="mt-3 md:mt-0">
            <span className="font-mono text-xs px-3 py-1.5 rounded-full bg-elite-blue/10 text-elite-blue font-bold border border-elite-blue/20">
              CLICK CARD TO EXPAND PIPELINE STAGES
            </span>
          </div>
        </div>

        {/* Intro notice banner */}
        <div className="mb-8 p-4 rounded-xl bg-white border-l-4 border-elite-blue shadow-sm flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 text-xs sm:text-sm text-slate-700">
          <div className="flex items-center gap-2.5">
            <GitBranch className="w-4 h-4 text-elite-blue flex-shrink-0" />
            <span>
              Click any project card below to expand the interactive pipeline drawer and inspect stage execution logs and configuration files.
            </span>
          </div>
        </div>

        {/* Project Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-10">
          {devopsProjects.map((project) => {
            const isCurrentlySelected = isDrawerOpen && activeProject.id === project.id;
            return (
              <div 
                key={project.id}
                onClick={() => openProjectDrawer(project)}
                className={`group cursor-pointer rounded-2xl p-6 sm:p-8 transition-all duration-300 relative border-2 ${
                  isCurrentlySelected 
                    ? 'border-elite-blue bg-white shadow-elite ring-2 ring-elite-blue/20' 
                    : 'border-soft-blue bg-white hover:border-elite-blue hover:shadow-lg'
                }`}
              >
                {/* Header tags */}
                <div className="flex items-center justify-between mb-4">
                  <span className="font-mono text-xs px-2.5 py-1 rounded bg-elite-blue text-white font-bold tracking-wide">
                    {project.badge}
                  </span>
                  <div className="flex items-center gap-1.5 text-xs font-mono text-emerald-600 font-semibold bg-emerald-50 px-2 py-0.5 rounded border border-emerald-200">
                    <CheckCircle2 className="w-3.5 h-3.5" />
                    <span>Pipeline Passing</span>
                  </div>
                </div>

                <h3 className="text-2xl font-heading font-bold text-slate-900 group-hover:text-elite-blue transition-colors mb-2">
                  {project.title}
                </h3>
                
                <p className="text-xs font-mono text-slate-500 mb-4">
                  {project.subtitle}
                </p>

                <p className="text-sm text-slate-600 mb-6 line-clamp-3 leading-relaxed">
                  {project.description}
                </p>

                {/* Pipeline Node Preview Badges */}
                <div className="mb-6">
                  <div className="text-[11px] font-mono uppercase text-slate-400 mb-2 font-semibold">
                    Configured Pipeline Flow ({project.pipeline.length} Stages):
                  </div>
                  <div className="flex items-center gap-1.5 overflow-x-auto py-1">
                    {project.pipeline.map((stage, sIdx) => (
                      <React.Fragment key={stage.id}>
                        <span className="whitespace-nowrap px-2 py-1 rounded bg-slate-100 text-[11px] font-mono text-slate-700 border border-soft-blue group-hover:border-elite-blue/40">
                          {stage.name.split(' ')[0]}
                        </span>
                        {sIdx < project.pipeline.length - 1 && (
                          <span className="text-slate-400 text-xs font-bold">➔</span>
                        )}
                      </React.Fragment>
                    ))}
                  </div>
                </div>

                {/* Tech Badges */}
                <div className="flex flex-wrap gap-1.5 mb-6">
                  {project.tech.map((t, idx) => (
                    <span key={idx} className="text-[11px] font-mono px-2 py-0.5 rounded bg-slate-50 text-slate-600 border border-soft-blue/60">
                      #{t}
                    </span>
                  ))}
                </div>

                {/* Action Trigger Button */}
                <div className="flex items-center justify-between pt-4 border-t border-soft-blue/60">
                  <span className="text-xs font-mono font-bold text-elite-blue group-hover:underline flex items-center gap-1">
                    <span>{isCurrentlySelected ? 'Viewing Active Drawer' : 'Click to Expand Pipeline Drawer'}</span>
                    <ChevronRight className="w-4 h-4" />
                  </span>
                  <span className="text-[11px] font-mono text-slate-400">
                    {project.pipeline.length} Automated Steps
                  </span>
                </div>
              </div>
            );
          })}
        </div>

        {/* =========================================================================
            THE ELITE BLUE HORIZONTAL PIPELINE DRAWER (SPEC REQUIREMENT)
           ========================================================================= */}
        {isDrawerOpen && (
          <div className="mt-6 rounded-2xl bg-elite-blue text-white shadow-2xl border-4 border-elite-blue-dark overflow-hidden animate-fadeIn">
            
            {/* Drawer Control Bar */}
            <div className="bg-elite-blue-dark/80 px-6 py-4 flex flex-wrap items-center justify-between border-b border-white/10 gap-4">
              <div className="flex items-center gap-3">
                <div className="p-2 rounded-lg bg-volt-lime text-slate-950 font-mono font-bold text-xs">
                  DRAWER OPEN
                </div>
                <div>
                  <div className="flex items-center gap-2">
                    <h3 className="font-heading font-bold text-xl tracking-tight text-white uppercase">
                      {activeProject.title}
                    </h3>
                    <span className="text-xs font-mono bg-white/20 px-2 py-0.5 rounded text-volt-lime font-bold">
                      SHA: 9f81a2c
                    </span>
                  </div>
                  <p className="text-xs font-mono text-slate-200">
                    Interactive CI/CD Map &bull; Click any stage node to inspect runtime output
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <button
                  onClick={() => setIsDrawerOpen(false)}
                  className="px-3 py-1.5 rounded-lg bg-white/10 hover:bg-white/20 text-white font-mono text-xs font-semibold flex items-center gap-1.5 transition-colors"
                >
                  <X className="w-4 h-4" />
                  <span>Collapse Drawer</span>
                </button>
              </div>
            </div>

            {/* HORIZONTAL PIPELINE NODES TRACK */}
            <div className="p-6 bg-elite-blue border-b border-white/10 overflow-x-auto">
              <div className="min-w-[700px]">
                <div className="text-xs font-mono text-slate-200 uppercase tracking-wider mb-4 flex items-center justify-between">
                  <span>Pipeline Execution Graph:</span>
                  <span className="text-volt-lime font-bold">● Status: 100% Passing</span>
                </div>

                {/* Nodes Horizontal Flex Container */}
                <div className="flex items-center justify-between relative py-2">
                  
                  {/* Connecting Background Line */}
                  <div className="absolute top-1/2 left-6 right-6 -translate-y-1/2 h-1 bg-white/20 -z-0"></div>

                  {activeProject.pipeline.map((stage, idx) => {
                    const isSelected = activeNodeIndex === idx;
                    return (
                      <button
                        key={stage.id}
                        onClick={() => setActiveNodeIndex(idx)}
                        className={`relative z-10 flex flex-col items-center group focus:outline-none transition-all ${
                          isSelected ? 'scale-105' : 'opacity-85 hover:opacity-100'
                        }`}
                      >
                        {/* Node Circle */}
                        <div className={`w-12 h-12 rounded-xl flex items-center justify-center font-mono font-bold text-sm transition-all shadow-md ${
                          isSelected 
                            ? 'bg-volt-lime text-slate-950 ring-4 ring-volt-lime/40 scale-110 shadow-volt' 
                            : 'bg-white text-elite-blue hover:bg-slate-100'
                        }`}>
                          {isSelected ? (
                            <Play className="w-5 h-5 fill-slate-950" />
                          ) : (
                            <CheckCircle2 className="w-6 h-6 text-emerald-600" />
                          )}
                        </div>

                        {/* Node Label */}
                        <div className="mt-2.5 text-center">
                          <span className={`block text-xs font-mono font-bold tracking-tight ${
                            isSelected ? 'text-volt-lime underline underline-offset-4' : 'text-white'
                          }`}>
                            {stage.name}
                          </span>
                          <span className="block text-[10px] font-mono text-slate-300">
                            {stage.duration}
                          </span>
                        </div>
                      </button>
                    );
                  })}
                </div>
              </div>
            </div>

            {/* STAGE INSPECTION PANE: LOGS & CONFIGURATION VIEWER */}
            <div className="bg-terminal-dark p-6">
              
              {/* Stage Sub-header & Tabs */}
              <div className="flex flex-wrap items-center justify-between gap-4 pb-4 mb-4 border-b border-terminal-border">
                <div>
                  <div className="flex items-center gap-2">
                    <span className="font-heading font-bold text-lg text-white">
                      Stage {activeNodeIndex + 1}: {currentNode.name}
                    </span>
                    <span className="px-2 py-0.5 rounded bg-emerald-500/20 text-emerald-400 font-mono text-xs border border-emerald-500/30">
                      [PASS] {currentNode.duration}
                    </span>
                  </div>
                  <div className="text-xs font-mono text-slate-400 mt-0.5">
                    Runner Tool: <span className="text-volt-lime">{currentNode.tool}</span>
                  </div>
                </div>

                {/* View Switcher Tabs */}
                <div className="flex items-center gap-2">
                  <button
                    onClick={() => setActiveTab('logs')}
                    className={`px-3 py-1.5 rounded-lg font-mono text-xs font-bold flex items-center gap-1.5 transition-colors ${
                      activeTab === 'logs'
                        ? 'bg-volt-lime text-slate-950'
                        : 'bg-slate-800 text-slate-300 hover:bg-slate-700'
                    }`}
                  >
                    <Terminal className="w-3.5 h-3.5" />
                    <span>Execution Logs</span>
                  </button>

                  <button
                    onClick={() => setActiveTab('config')}
                    className={`px-3 py-1.5 rounded-lg font-mono text-xs font-bold flex items-center gap-1.5 transition-colors ${
                      activeTab === 'config'
                        ? 'bg-volt-lime text-slate-950'
                        : 'bg-slate-800 text-slate-300 hover:bg-slate-700'
                    }`}
                  >
                    <FileCode className="w-3.5 h-3.5" />
                    <span>YAML Pipeline Spec</span>
                  </button>

                  <button
                    onClick={() => handleCopy(activeTab === 'logs' ? currentNode.logs.join('\n') : currentNode.configSnippet)}
                    className="p-1.5 rounded-lg bg-slate-800 text-slate-300 hover:text-white hover:bg-slate-700 transition-colors"
                    title="Copy to clipboard"
                  >
                    {copied ? <Check className="w-4 h-4 text-volt-lime" /> : <Copy className="w-4 h-4" />}
                  </button>
                </div>
              </div>

              {/* Output Content */}
              {activeTab === 'logs' ? (
                <div className="rounded-xl bg-black/60 p-5 font-mono text-xs text-slate-300 border border-slate-800 terminal-scroll overflow-x-auto min-h-[220px]">
                  <div className="text-slate-500 pb-2 mb-2 border-b border-slate-800/80 flex items-center justify-between">
                    <span>--- RUNNER STDOUT & STDERR LOG DUMP ---</span>
                    <span className="text-emerald-400">exit code: 0</span>
                  </div>
                  <div className="space-y-1.5">
                    {currentNode.logs.map((line, lIdx) => (
                      <div 
                        key={lIdx} 
                        className={
                          line.startsWith('$') ? 'text-volt-lime font-bold' :
                          line.includes('[OK]') || line.includes('✔') || line.includes('PASS') || line.includes('[SUCCESS]') ? 'text-emerald-400 font-semibold' :
                          line.includes('[INFO]') ? 'text-sky-300' :
                          'text-slate-300'
                        }
                      >
                        {line}
                      </div>
                    ))}
                  </div>
                  <div className="pt-4 flex items-center gap-2 text-slate-500">
                    <span className="text-volt-lime">&gt;</span>
                    <span>Stage finalized successfully in {currentNode.duration}. Ready for next node.</span>
                  </div>
                </div>
              ) : (
                <div className="rounded-xl bg-black/60 p-5 font-mono text-xs text-sky-200 border border-slate-800 terminal-scroll overflow-x-auto min-h-[220px]">
                  <div className="text-slate-500 pb-2 mb-2 border-b border-slate-800/80 flex items-center justify-between">
                    <span># .github/workflows/production-pipeline.yml (Snippet)</span>
                    <span className="text-volt-lime">Declarative CI/CD</span>
                  </div>
                  <pre className="text-slate-200 whitespace-pre leading-relaxed">
                    {currentNode.configSnippet}
                  </pre>
                </div>
              )}

              {/* Drawer Navigation Footer */}
              <div className="mt-4 pt-3 border-t border-terminal-border flex items-center justify-between text-xs font-mono text-slate-400">
                <button
                  disabled={activeNodeIndex === 0}
                  onClick={() => setActiveNodeIndex((prev) => Math.max(0, prev - 1))}
                  className="px-3 py-1.5 rounded bg-slate-800 text-slate-200 hover:bg-slate-700 disabled:opacity-40 disabled:cursor-not-allowed transition-colors"
                >
                  &larr; Previous Stage
                </button>

                <span className="text-volt-lime">
                  Stage {activeNodeIndex + 1} of {activeProject.pipeline.length}
                </span>

                <button
                  disabled={activeNodeIndex === activeProject.pipeline.length - 1}
                  onClick={() => setActiveNodeIndex((prev) => Math.min(activeProject.pipeline.length - 1, prev + 1))}
                  className="px-3 py-1.5 rounded bg-slate-800 text-slate-200 hover:bg-slate-700 disabled:opacity-40 disabled:cursor-not-allowed transition-colors"
                >
                  Next Stage &rarr;
                </button>
              </div>

            </div>

          </div>
        )}

      </div>
    </section>
  );
}

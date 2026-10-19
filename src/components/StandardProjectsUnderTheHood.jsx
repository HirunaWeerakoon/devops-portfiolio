import React, { useState } from 'react';
import { standardProjects } from '../data/portfolioData';
import { 
  Server, Cpu, Database, Globe, Network, Shield, 
  ExternalLink, Layers, ArrowRight, RotateCw, CheckCircle2 
} from 'lucide-react';

export default function StandardProjectsUnderTheHood() {
  // Track flip state for each card independently
  const [flippedCards, setFlippedCards] = useState({});

  const toggleFlip = (id) => {
    setFlippedCards((prev) => ({
      ...prev,
      [id]: !prev[id]
    }));
  };

  return (
    <section id="standard-projects" className="py-20 bg-white border-b border-soft-blue/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 pb-4 border-b-2 border-elite-blue">
          <div>
            <h2 className="text-3xl sm:text-4xl font-heading font-bold text-slate-950 uppercase tracking-tight">
              Standard Projects
            </h2>
          </div>
        </div>

        {/* Projects 3D Flip Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {standardProjects.map((project) => {
            const isFlipped = !!flippedCards[project.id];

            return (
              <div 
                key={project.id}
                className="perspective-1000 min-h-[580px] w-full"
              >
                {/* 3D Flip Container */}
                <div 
                  className={`w-full h-full relative duration-700 transform-style-3d transition-transform ${
                    isFlipped ? 'rotate-y-180' : ''
                  }`}
                >
                  
                  {/* =========================================================
                      CARD FRONT: TRADITIONAL UI THUMBNAIL & APPLICATION INFO
                     ========================================================= */}
                  <div className="absolute inset-0 w-full h-full backface-hidden bg-white rounded-2xl border-2 border-soft-blue shadow-subtle hover:border-elite-blue hover:shadow-xl transition-all p-6 flex flex-col justify-between">
                    
                    {/* Top Action Row with Volt Lime Toggle */}
                    <div>
                      <div className="flex items-center justify-between gap-2 mb-4 pb-3 border-b border-soft-blue/60">
                        <span className="font-mono text-xs px-2.5 py-1 rounded bg-elite-blue text-white font-bold">
                          {project.badge}
                        </span>

                        {/* SPEC: VOLT LIME TOGGLE SWITCH LABELED "View Infrastructure" */}
                        <div className="flex items-center gap-2">
                          <label 
                            htmlFor={`toggle-${project.id}`}
                            className="text-xs font-mono font-bold text-slate-800 cursor-pointer select-none flex items-center gap-1.5"
                          >
                            <span>View Infra</span>
                          </label>
                          <button
                            id={`toggle-${project.id}`}
                            type="button"
                            onClick={() => toggleFlip(project.id)}
                            className="w-12 h-6 rounded-full bg-volt-lime border-2 border-slate-900 relative transition-colors focus:outline-none focus:ring-2 focus:ring-elite-blue p-0.5 shadow-sm"
                            title="Flip to View Infrastructure Architecture"
                          >
                            <span 
                              className={`block w-4 h-4 rounded-full bg-slate-950 transition-transform ${
                                isFlipped ? 'translate-x-6' : 'translate-x-0'
                              }`} 
                            />
                          </button>
                        </div>
                      </div>

                      {/* Project Title & Category */}
                      <span className="text-[11px] font-mono uppercase tracking-wider text-slate-500 font-bold block mb-1">
                        {project.category} &bull; {project.role}
                      </span>
                      <h3 className="text-2xl font-heading font-bold text-slate-900 mb-3">
                        {project.title}
                      </h3>
                      
                      <p className="text-xs text-slate-600 mb-4 leading-relaxed">
                        {project.description}
                      </p>

                      {/* Simulated UI Thumbnail Frame */}
                      <div className="rounded-xl border border-soft-blue bg-slate-900 text-white p-4 mb-5 shadow-inner relative overflow-hidden">
                        <div className="flex items-center justify-between pb-2 mb-2 border-b border-slate-800 text-[10px] font-mono text-slate-400">
                          <div className="flex items-center gap-1.5">
                            <span className="w-2 h-2 rounded-full bg-rose-500"></span>
                            <span className="w-2 h-2 rounded-full bg-amber-500"></span>
                            <span className="w-2 h-2 rounded-full bg-emerald-500"></span>
                            <span className="ml-1 text-slate-300">ui://client-view</span>
                          </div>
                          <span className="text-volt-lime font-bold">200 OK</span>
                        </div>
                        
                        <div className="space-y-2 py-1">
                          <div className="h-4 bg-slate-800 rounded w-3/4"></div>
                          <div className="grid grid-cols-3 gap-2">
                            <div className="h-10 bg-slate-800/80 rounded p-1.5 border border-slate-700/50">
                              <div className="h-1.5 bg-elite-blue-light rounded w-1/2 mb-1"></div>
                              <div className="h-2 bg-slate-700 rounded w-4/5"></div>
                            </div>
                            <div className="h-10 bg-slate-800/80 rounded p-1.5 border border-slate-700/50">
                              <div className="h-1.5 bg-volt-lime rounded w-2/3 mb-1"></div>
                              <div className="h-2 bg-slate-700 rounded w-3/5"></div>
                            </div>
                            <div className="h-10 bg-slate-800/80 rounded p-1.5 border border-slate-700/50">
                              <div className="h-1.5 bg-emerald-400 rounded w-1/2 mb-1"></div>
                              <div className="h-2 bg-slate-700 rounded w-4/5"></div>
                            </div>
                          </div>
                          <div className="h-8 bg-slate-800/60 rounded flex items-center justify-between px-3 text-[10px] font-mono text-slate-400">
                            <span>Status: Operational</span>
                            <span className="text-emerald-400 font-bold">Live Traffic</span>
                          </div>
                        </div>
                      </div>

                      {/* Feature Highlights */}
                      <div className="space-y-1.5 mb-4">
                        <div className="text-[11px] font-mono uppercase text-slate-500 font-bold">
                          Client Features:
                        </div>
                        {project.uiOverview.features.slice(0, 3).map((feat, fIdx) => (
                          <div key={fIdx} className="text-xs text-slate-700 flex items-start gap-1.5">
                            <span className="text-elite-blue font-bold">&bull;</span>
                            <span>{feat}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Bottom Row */}
                    <div>
                      <div className="flex flex-wrap gap-1 mb-4 pt-2 border-t border-soft-blue/60">
                        {project.uiOverview.stack.map((s, sIdx) => (
                          <span key={sIdx} className="text-[10px] font-mono px-2 py-0.5 rounded bg-slate-100 text-slate-700 border border-soft-blue">
                            {s}
                          </span>
                        ))}
                      </div>

                      <button
                        type="button"
                        onClick={() => toggleFlip(project.id)}
                        className="w-full bg-slate-900 hover:bg-elite-blue text-white font-mono font-bold text-xs py-2.5 px-4 rounded-lg transition-colors flex items-center justify-center gap-2 group"
                      >
                        <span>Flip to Infrastructure Architecture</span>
                        <RotateCw className="w-3.5 h-3.5 group-hover:rotate-180 transition-transform duration-500" />
                      </button>
                    </div>

                  </div>

                  {/* =========================================================
                      CARD BACK: TECHNICAL ARCHITECTURE DIAGRAM ("UNDER THE HOOD")
                     ========================================================= */}
                  <div className="absolute inset-0 w-full h-full backface-hidden rotate-y-180 bg-terminal-dark rounded-2xl border-2 border-volt-lime shadow-2xl p-6 text-white flex flex-col justify-between">
                    
                    {/* Top Action Row in Back View */}
                    <div>
                      <div className="flex items-center justify-between gap-2 mb-3 pb-3 border-b border-terminal-border">
                        <div className="flex items-center gap-1.5">
                          <span className="w-2.5 h-2.5 rounded-full bg-volt-lime animate-pulse"></span>
                          <span className="font-mono text-xs font-bold text-volt-lime uppercase tracking-wider">
                            UNDER THE HOOD ARCHITECTURE
                          </span>
                        </div>

                        {/* Toggle switch in flipped state */}
                        <div className="flex items-center gap-2">
                          <label 
                            htmlFor={`toggle-back-${project.id}`}
                            className="text-xs font-mono font-bold text-slate-300 cursor-pointer select-none"
                          >
                            UI View
                          </label>
                          <button
                            id={`toggle-back-${project.id}`}
                            type="button"
                            onClick={() => toggleFlip(project.id)}
                            className="w-12 h-6 rounded-full bg-volt-lime border-2 border-slate-900 relative transition-colors p-0.5 shadow-sm"
                            title="Flip back to UI view"
                          >
                            <span className="block w-4 h-4 rounded-full bg-slate-950 translate-x-6 transition-transform" />
                          </button>
                        </div>
                      </div>

                      <h4 className="font-heading font-bold text-lg text-white mb-1">
                        {project.title}
                      </h4>
                      <p className="text-[11px] font-mono text-slate-400 mb-4">
                        Container Hosting & Ingress Topology
                      </p>

                      {/* Technical Architecture Diagram Nodes (Layered Stack) */}
                      <div className="space-y-2 mb-4">
                        {project.infraDetails.diagram.map((diag, dIdx) => (
                          <div 
                            key={dIdx}
                            className="p-2.5 rounded-lg bg-terminal-card border border-terminal-border hover:border-volt-lime/50 transition-colors"
                          >
                            <div className="flex items-center justify-between text-xs font-mono mb-0.5">
                              <span className="text-slate-400 uppercase text-[10px]">{diag.layer}:</span>
                              <span className="text-volt-lime font-bold text-[11px]">{diag.tech}</span>
                            </div>
                            <p className="text-[11px] text-slate-300 font-sans leading-tight">
                              {diag.detail}
                            </p>
                          </div>
                        ))}
                      </div>

                      {/* Docker Compose Quick Config Preview */}
                      <div className="rounded-lg bg-black/70 p-2.5 border border-slate-800 text-[10px] font-mono terminal-scroll max-h-[105px] overflow-y-auto">
                        <div className="text-slate-500 mb-1 flex items-center justify-between">
                          <span>docker-compose.yml snippet</span>
                          <span className="text-volt-lime">healthcheck: 15s</span>
                        </div>
                        <pre className="text-slate-300 leading-tight">
                          {project.infraDetails.dockerComposeSnippet}
                        </pre>
                      </div>
                    </div>

                    {/* Bottom Return Button */}
                    <div className="pt-3 border-t border-terminal-border mt-2">
                      <button
                        type="button"
                        onClick={() => toggleFlip(project.id)}
                        className="w-full bg-volt-lime hover:bg-volt-lime-dark text-slate-950 font-mono font-bold text-xs py-2 px-4 rounded-lg transition-colors flex items-center justify-center gap-2"
                      >
                        <span>Flip Back to Standard Project UI</span>
                        <RotateCw className="w-3.5 h-3.5" />
                      </button>
                    </div>

                  </div>

                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}

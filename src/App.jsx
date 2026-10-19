import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import DevOpsDrawerProjects from './components/DevOpsDrawerProjects';
import StandardProjectsUnderTheHood from './components/StandardProjectsUnderTheHood';
import TerminalCertificates from './components/TerminalCertificates';
import TriggerBuildContact from './components/TriggerBuildContact';
import Footer from './components/Footer';

export default function App() {
  return (
    <div className="min-h-screen bg-brand-white text-slate-900 flex flex-col font-sans selection:bg-volt-lime selection:text-black">
      {/* Top sticky navigation */}
      <Navbar />

      {/* Main page content sections in accordance with Spec Flow:
          Hero/Header ➔ About Me ➔ DevOps Projects (Model A) ➔ Standard Projects (Model B) ➔ Terminal Certificates ➔ Action Contact Form
      */}
      <main className="flex-grow">
        <Hero />
        <About />
        <DevOpsDrawerProjects />
        <StandardProjectsUnderTheHood />
        <TerminalCertificates />
        <TriggerBuildContact />
      </main>

      {/* Global Terminal Footer */}
      <Footer />
    </div>
  );
}

import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import MarqueeNiches from './components/MarqueeNiches';
import About from './components/About';
import Services from './components/Services';
import SelectedWork from './components/SelectedWork';
import HomeSelectedWork from './components/HomeSelectedWork';
import HomeServices from './components/HomeServices';
import CategorySpotlights from './components/CategorySpotlights';
import Workflow from './components/Workflow';
import ChannelManagement from './components/ChannelManagement';
import EditingCapabilities from './components/EditingCapabilities';
import Testimonials from './components/Testimonials';
import ExperienceMetrics from './components/ExperienceMetrics';
import FinalCTA from './components/FinalCTA';
import Footer from './components/Footer';
import FloatingHireDock from './components/FloatingHireDock';
import ProjectModal from './components/ProjectModal';

export default function App() {
  const [currentView, setCurrentView] = useState('home'); // 'home' | 'work' | 'services' | 'about'
  const [selectedProject, setSelectedProject] = useState(null);

  // Sync initial URL path if visitor directly navigates to /work, /services, /about
  useEffect(() => {
    const path = window.location.pathname.replace('/', '').toLowerCase();
    if (['work', 'services', 'about'].includes(path)) {
      setCurrentView(path);
    }

    const handlePopState = () => {
      const p = window.location.pathname.replace('/', '').toLowerCase();
      setCurrentView(['work', 'services', 'about'].includes(p) ? p : 'home');
    };

    window.addEventListener('popstate', handlePopState);
    return () => window.removeEventListener('popstate', handlePopState);
  }, []);

  const handleNavigate = (viewId) => {
    setCurrentView(viewId);
    const targetUrl = viewId === 'home' ? '/' : `/${viewId}`;
    if (window.location.pathname !== targetUrl) {
      window.history.pushState({}, '', targetUrl);
    }
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleSelectProject = (project) => {
    setSelectedProject(project);
  };

  const handleCloseProjectModal = () => {
    setSelectedProject(null);
  };

  return (
    <div className="min-h-screen bg-[#0b0b0b] text-[#f5f4ef] selection:bg-[#ccff00] selection:text-black">
      {/* Editorial Header */}
      <Navbar
        currentView={currentView}
        onNavigate={handleNavigate}
      />

      <main>
        {/* VIEW 1: CONCISE HOMEPAGE */}
        {currentView === 'home' && (
          <>
            {/* 01. Hero */}
            <Hero onNavigate={handleNavigate} />

            {/* Niche Marquee Ticker */}
            <MarqueeNiches />

            {/* 02. Short About Spread */}
            <About onNavigate={handleNavigate} />

            {/* 03. 3 Homepage Spotlight Sections */}
            <CategorySpotlights onNavigate={handleNavigate} />

            {/* 04. 3 Core Services */}
            <HomeServices onNavigate={handleNavigate} />

            {/* 05. Client Feedback */}
            <Testimonials />

            {/* 06. Final CTA */}
            <FinalCTA />
          </>
        )}

        {/* VIEW 2: MASTER WORK PAGE (/work) */}
        {currentView === 'work' && (
          <div className="pt-16">
            <SelectedWork onSelectProject={handleSelectProject} />
            <FinalCTA />
          </div>
        )}

        {/* VIEW 3: SERVICES & WORKFLOW PAGE (/services) */}
        {currentView === 'services' && (
          <div className="pt-16">
            <Services />
            <Workflow />
            <EditingCapabilities />
            <ChannelManagement />
            <FinalCTA />
          </div>
        )}

        {/* VIEW 4: ABOUT & CREDIBILITY PAGE (/about) */}
        {currentView === 'about' && (
          <div className="pt-16">
            <About isFullPage={true} />
            <ExperienceMetrics />
            <Testimonials />
            <FinalCTA />
          </div>
        )}
      </main>

      {/* Footer */}
      <Footer onNavigate={handleNavigate} />

      {/* Floating Availability Dock */}
      <FloatingHireDock />

      {/* Project Details Modal */}
      <ProjectModal
        project={selectedProject}
        onClose={handleCloseProjectModal}
      />
    </div>
  );
}

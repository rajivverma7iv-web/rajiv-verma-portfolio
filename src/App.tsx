import React from 'react';
import { Navbar } from './components/layout/Navbar';
import { HeroSection } from './components/sections/HeroSection';
import { AboutSection } from './components/sections/AboutSection';
import { SkillsSection } from './components/sections/SkillsSection';
import { ServicesSection } from './components/sections/ServicesSection';
import { ProjectsSection } from './components/sections/ProjectsSection';
import { ProcessSection } from './components/sections/ProcessSection';
import { CtaSection } from './components/sections/CtaSection';
import { ContactSection } from './components/sections/ContactSection';
import { Footer } from './components/layout/Footer';

export const App: React.FC = () => {
  return (
    <div className="min-h-screen flex flex-col bg-charcoal-900 selection:bg-champagne-400 selection:text-charcoal-950">
      {/* Fixed Navigation Header */}
      <Navbar />

      {/* Main Content Sections Flow with Alternating Atmospheric Backgrounds */}
      <main className="flex-grow">
        {/* 1. Dark Hero Section */}
        <HeroSection />

        {/* 2. Light About Section */}
        <AboutSection />

        {/* 3. Soft Gray Skills Section */}
        <SkillsSection />

        {/* 4. Dark Services Section */}
        <ServicesSection />

        {/* 5. Light Projects Section */}
        <ProjectsSection />

        {/* 6. Gray Process Section */}
        <ProcessSection />

        {/* 7. Dark CTA Section */}
        <CtaSection />

        {/* 8. Light Contact Section */}
        <ContactSection />
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default App;

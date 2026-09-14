import { useState, useEffect } from 'react';
import { DigitexLogo } from './components/DigitexLogo';
import { StartupHeroBadge } from './components/StartupHeroBadge';
import { RateCard } from './components/RateCard';
import { CollaboratorsMarquee } from './components/CollaboratorsMarquee';
import { Footer } from './components/Footer';
import { ContactPage } from './components/ContactPage';
import { PrivacyPolicyPage } from './components/PrivacyPolicyPage';
import { StaticShinyStars } from './components/StaticShinyStars';
import { PageView } from './types';

export default function App() {
  const [currentView, setCurrentView] = useState<PageView>('home');
  const [selectedService, setSelectedService] = useState<string>('');

  // Handle URL hash changes for intuitive browser back/forward and bookmarking
  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash.toLowerCase().replace('#', '');
      if (hash === 'contact' || hash === 'enquiry') {
        setCurrentView('contact');
      } else if (hash === 'privacy' || hash === 'privacy-policy') {
        setCurrentView('privacy');
      } else {
        setCurrentView('home');
      }
    };

    handleHashChange();
    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  const navigateTo = (view: PageView, serviceChoice?: string) => {
    if (serviceChoice) {
      setSelectedService(serviceChoice);
    }
    setCurrentView(view);
    if (view === 'home') {
      window.location.hash = '';
    } else {
      window.location.hash = view;
    }
    // Scroll to top on navigation to new page
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  // Render separate pages when requested via footer links
  if (currentView === 'contact') {
    return <ContactPage onNavigate={navigateTo} initialService={selectedService} />;
  }

  if (currentView === 'privacy') {
    return <PrivacyPolicyPage onNavigate={navigateTo} />;
  }

  return (
    <div
      id="digitex-home-view"
      className="min-h-screen md:h-screen md:max-h-screen flex flex-col justify-between bg-[#60A5FA] text-white overflow-x-hidden md:overflow-hidden select-none relative"
    >
      {/* Background Static Shiny Stars */}
      <StaticShinyStars />

      {/* Top Header with Logo centered in the top middle - minimal padding below logo */}
      <header
        id="top-header"
        className="w-full pt-1.5 sm:pt-2 pb-0 flex flex-col items-center justify-center shrink-0 z-20 px-4"
      >
        <DigitexLogo size="md" onClick={() => navigateTo('home')} dark={true} />
      </header>

      {/* Main Single Page Content Sections - Fits whole page seamlessly */}
      <main className="flex-1 w-full max-w-4xl mx-auto flex flex-col justify-start items-center pt-0.5 pb-2 sm:pb-3 px-3 sm:px-6 relative z-10 min-h-0 gap-1.5 sm:gap-2">
        {/* 1. Image Placards Section - Expands to fill the space above the rate card and below the logo */}
        <section id="hero-badge-container" className="w-full flex-1 min-h-0 flex flex-col">
          <StartupHeroBadge className="w-full h-full flex-1" />
        </section>

        {/* 2. Rate Card Section - Moved up closer to hero placard */}
        <section id="rate-card-section" className="w-full shrink-0">
          <RateCard
            onSelectService={(serviceName) =>
              navigateTo('contact', `${serviceName}`)
            }
          />
        </section>

        {/* 3. Collaborated With Section */}
        <section id="collaborators-strip" className="w-full shrink-0">
          <CollaboratorsMarquee />
        </section>
      </main>

      {/* Footer with links to Privacy policy and Contact us */}
      <Footer onNavigate={navigateTo} currentView={currentView} />
    </div>
  );
}

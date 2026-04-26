import { useState } from 'react';
import { LanguageProvider } from './contexts/LanguageContext';
import Navbar from './components/Navbar';
import LoginModal from './components/LoginModal';
import Hero from './components/Hero';
import Insights from './components/Insights';
import TokenRewards from './components/TokenRewards';
import HotelNFT from './components/HotelNFT';
import AboutUs from './components/AboutUs';
import Footer from './components/Footer';

export default function App() {
  const [isLoginModalOpen, setIsLoginModalOpen] = useState(false);

  return (
    <LanguageProvider>
      <div className="min-h-screen bg-stone-50 font-sans selection:bg-[#C5A880] selection:text-stone-900">
        <Navbar onLoginClick={() => setIsLoginModalOpen(true)} />
        <LoginModal isOpen={isLoginModalOpen} onClose={() => setIsLoginModalOpen(false)} />
        
        <main>
          <Hero />
          <Insights />
          <TokenRewards />
          <HotelNFT />
          <AboutUs />
        </main>
        
        <Footer />
      </div>
    </LanguageProvider>
  );
}

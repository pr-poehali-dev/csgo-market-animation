import { useState } from 'react';
import HeroSection from '@/components/sections/HeroSection';
import MarketSection from '@/components/sections/MarketSection';
import HistorySupportSection from '@/components/sections/HistorySupportSection';
import FaqFooterSection from '@/components/sections/FaqFooterSection';

const Index = () => {
  const [activeTab, setActiveTab] = useState<'buy' | 'sell'>('buy');

  const spawnSmoke = (e: React.MouseEvent<HTMLAnchorElement>) => {
    const href = e.currentTarget.getAttribute('href');
    if (href && href.startsWith('#')) {
      e.preventDefault();
      const el = document.querySelector(href);
      if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <div className="min-h-screen bg-background text-foreground">
      <HeroSection spawnSmoke={spawnSmoke} />
      <MarketSection activeTab={activeTab} setActiveTab={setActiveTab} />
      <HistorySupportSection />
      <FaqFooterSection />
    </div>
  );
};

export default Index;

import { useState } from 'react';
import HeroSection from '@/components/sections/HeroSection';
import MarketSection from '@/components/sections/MarketSection';
import HistorySupportSection from '@/components/sections/HistorySupportSection';
import FaqFooterSection from '@/components/sections/FaqFooterSection';
import CursorGlow from '@/components/CursorGlow';

const Index = () => {
  const [activeTab, setActiveTab] = useState<'buy' | 'sell'>('buy');

  const spawnSmoke = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    const target = e.currentTarget;
    const rect = target.getBoundingClientRect();
    const cx = rect.left + rect.width / 2;
    const cy = rect.top + rect.height / 2;
    const href = target.getAttribute('href') || '#';

    const burst = document.createElement('div');
    burst.className = 'smoke-burst';
    burst.style.left = `${cx}px`;
    burst.style.top = `${cy}px`;

    const puffCount = 14;
    for (let i = 0; i < puffCount; i++) {
      const puff = document.createElement('div');
      const variant = i % 3 === 0 ? 'p2' : i % 5 === 0 ? 'p3' : '';
      puff.className = `puff ${variant}`;
      const angle = (Math.PI * 2 * i) / puffCount + Math.random() * 0.5;
      const dist = 60 + Math.random() * 90;
      const tx = Math.cos(angle) * dist;
      const ty = Math.sin(angle) * dist - 30;
      const s = 2.2 + Math.random() * 2;
      puff.style.setProperty('--tx', `${tx}px`);
      puff.style.setProperty('--ty', `${ty}px`);
      puff.style.setProperty('--s', `${s}`);
      puff.style.animationDelay = `${Math.random() * 0.15}s`;
      burst.appendChild(puff);
    }

    document.body.appendChild(burst);
    setTimeout(() => burst.remove(), 1400);

    setTimeout(() => {
      window.open(href, '_blank', 'noopener,noreferrer');
    }, 280);
  };

  return (
    <div className="min-h-screen text-foreground">
      <CursorGlow />
      <HeroSection spawnSmoke={spawnSmoke} />
      <MarketSection activeTab={activeTab} setActiveTab={setActiveTab} />
      <HistorySupportSection />
      <FaqFooterSection />
    </div>
  );
};

export default Index;
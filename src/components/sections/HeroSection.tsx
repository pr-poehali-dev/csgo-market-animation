import Icon from '@/components/ui/icon';
import { Button } from '@/components/ui/button';

interface HeroSectionProps {
  spawnSmoke: (e: React.MouseEvent<HTMLAnchorElement>) => void;
}

const HeroSection = ({ spawnSmoke }: HeroSectionProps) => {
  return (
    <>
      {/* NAV */}
      <nav className="fixed top-0 left-0 right-0 z-50 backdrop-blur-xl bg-background/70 border-b border-primary/20">
        <div className="container mx-auto px-6 py-4 flex items-center justify-between">
          <a href="#" className="flex items-center gap-3 group">
            <div className="relative">
              <div className="w-10 h-10 bg-gradient-to-br from-primary to-secondary clip-corner flex items-center justify-center">
                <Icon name="Crosshair" size={22} className="text-background" />
              </div>
              <div className="absolute inset-0 bg-primary blur-xl opacity-50 group-hover:opacity-80 transition-opacity" />
            </div>
            <div className="font-display font-bold text-xl tracking-widest">
              MARKET<span className="text-neon-cyan neon-text-glow">.CSGO</span>
            </div>
          </a>
          <div className="hidden md:flex items-center gap-8 font-display text-sm uppercase tracking-widest">
            <a href="#market" onClick={spawnSmoke} className="hover:text-neon-cyan transition-colors cursor-pointer">Купить</a>
            <a href="#sell" onClick={spawnSmoke} className="hover:text-neon-magenta transition-colors cursor-pointer">Продать</a>
            <a href="#history" onClick={spawnSmoke} className="hover:text-neon-cyan transition-colors cursor-pointer">История</a>
            <a href="#support" onClick={spawnSmoke} className="hover:text-neon-cyan transition-colors cursor-pointer">Поддержка</a>
            <a href="#faq" onClick={spawnSmoke} className="hover:text-neon-cyan transition-colors cursor-pointer">FAQ</a>
          </div>
          <Button className="bg-primary text-background hover:bg-primary/90 font-display uppercase tracking-wider clip-corner neon-glow-cyan">
            <Icon name="LogIn" size={16} className="mr-2" />
            Войти
          </Button>
        </div>
      </nav>

      {/* HERO */}
      <section className="relative min-h-screen flex items-center pt-24 overflow-hidden">
        <div className="absolute inset-0 grid-bg opacity-40" />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-background" />

        {/* FIRE DRAGON */}
        <div className="dragon-layer">
          {[
            { x: '8%', delay: '0s', dur: '4s', dx: '60px' },
            { x: '18%', delay: '1.2s', dur: '5s', dx: '-40px' },
            { x: '32%', delay: '0.6s', dur: '3.5s', dx: '80px' },
            { x: '46%', delay: '2s', dur: '4.5s', dx: '-30px' },
            { x: '58%', delay: '0.3s', dur: '3.8s', dx: '50px' },
            { x: '70%', delay: '1.8s', dur: '5.2s', dx: '-70px' },
            { x: '84%', delay: '0.9s', dur: '4.2s', dx: '40px' },
            { x: '92%', delay: '2.5s', dur: '4.8s', dx: '-50px' },
          ].map((e, i) => (
            <div
              key={i}
              className="ember"
              style={{
                ['--x' as string]: e.x,
                ['--delay' as string]: e.delay,
                ['--dur' as string]: e.dur,
                ['--dx' as string]: e.dx,
              } as React.CSSProperties}
            />
          ))}

          <div className="dragon">
            <svg viewBox="0 0 420 220" width="420" height="220">
              <defs>
                <linearGradient id="dragonBody" x1="0%" y1="0%" x2="0%" y2="100%">
                  <stop offset="0%" stopColor="#ffea00" />
                  <stop offset="30%" stopColor="#ff9500" />
                  <stop offset="65%" stopColor="#ff3b00" />
                  <stop offset="100%" stopColor="#8b0000" />
                </linearGradient>
                <linearGradient id="dragonWing" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="#ff6a00" stopOpacity="0.95" />
                  <stop offset="60%" stopColor="#ff2200" stopOpacity="0.85" />
                  <stop offset="100%" stopColor="#4a0000" stopOpacity="0.6" />
                </linearGradient>
                <radialGradient id="dragonBreath" cx="100%" cy="50%" r="90%">
                  <stop offset="0%" stopColor="#ffffff" />
                  <stop offset="20%" stopColor="#fff200" />
                  <stop offset="55%" stopColor="#ff7a00" stopOpacity="0.85" />
                  <stop offset="100%" stopColor="#ff1a00" stopOpacity="0" />
                </radialGradient>
                <filter id="dragonGlow">
                  <feGaussianBlur stdDeviation="3" result="b" />
                  <feMerge>
                    <feMergeNode in="b" />
                    <feMergeNode in="SourceGraphic" />
                  </feMerge>
                </filter>
              </defs>

              <g className="dragon-body" filter="url(#dragonGlow)">
                <path
                  d="M 380 110 Q 340 90 300 115 Q 260 140 220 110 Q 180 80 140 115 Q 110 140 85 115 L 70 100 Q 55 105 50 120 Q 55 130 75 128 Q 100 155 140 135 Q 180 110 220 135 Q 260 160 300 135 Q 340 115 385 130 Z"
                  fill="url(#dragonBody)"
                />
                <path
                  d="M 100 115 L 108 95 L 115 115 Z M 140 108 L 148 85 L 156 108 Z M 180 112 L 188 90 L 195 112 Z M 220 108 L 228 82 L 236 108 Z M 260 113 L 268 92 L 275 113 Z M 300 110 L 308 87 L 315 110 Z M 340 115 L 348 95 L 355 115 Z"
                  fill="#ff3b00"
                />
                <path
                  className="dragon-wing dragon-wing-back"
                  d="M 230 100 Q 200 40 160 30 Q 190 70 180 100 Q 200 85 230 100 Z"
                  fill="url(#dragonWing)"
                  opacity="0.75"
                />
                <path
                  className="dragon-wing"
                  d="M 250 100 Q 280 25 340 15 Q 305 65 300 105 Q 280 90 250 100 Z"
                  fill="url(#dragonWing)"
                />
                <path
                  d="M 60 115 Q 30 105 15 115 Q 8 125 18 138 Q 35 145 55 135 Q 68 130 75 120 Z"
                  fill="url(#dragonBody)"
                />
                <path d="M 45 108 L 38 88 L 52 102 Z" fill="#ff5500" />
                <circle cx="35" cy="120" r="3" fill="#ffff00" />
                <circle cx="35" cy="120" r="1.2" fill="#000" />
                <path d="M 15 128 Q 8 140 20 148 Q 35 148 45 138 Z" fill="#8b0000" />
              </g>

              <g className="dragon-breath" transform="translate(15 134)">
                <ellipse cx="-30" cy="0" rx="60" ry="18" fill="url(#dragonBreath)" />
                <ellipse cx="-55" cy="-2" rx="40" ry="10" fill="url(#dragonBreath)" opacity="0.85" />
                <ellipse cx="-75" cy="2" rx="28" ry="7" fill="url(#dragonBreath)" opacity="0.6" />
              </g>
            </svg>
          </div>
        </div>

        <div className="container mx-auto px-6 relative z-10">
          <div className="grid lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-7 space-y-8 animate-fade-up">
              <div className="inline-flex items-center gap-3 px-4 py-2 border border-primary/40 bg-primary/5 clip-corner">
                <span className="w-2 h-2 bg-primary rounded-full animate-pulse-neon" />
                <span className="font-mono text-xs uppercase tracking-widest text-neon-cyan">LIVE · 48 291 скинов онлайн</span>
              </div>

              <h1 className="font-display font-bold text-6xl md:text-8xl lg:text-9xl leading-[0.9] uppercase">
                <span className="block">Торгуй</span>
                <span className="block text-neon-cyan neon-text-glow">скинами</span>
                <span className="block text-muted-foreground/60 text-5xl md:text-7xl lg:text-8xl">со скоростью</span>
                <span className="block text-neon-magenta neon-text-glow-magenta italic">света_</span>
              </h1>

              <p className="text-lg text-muted-foreground max-w-xl leading-relaxed">
                Крупнейший маркетплейс CS:GO скинов. Мгновенные сделки, защита Steam Guard, 
                полная история операций и лучшие цены на рынке.
              </p>

              <div className="flex flex-wrap gap-4">
                <Button size="lg" className="bg-primary text-background hover:bg-primary/90 font-display uppercase tracking-widest clip-corner neon-glow-cyan h-14 px-8 text-base">
                  <Icon name="ShoppingCart" size={20} className="mr-2" />
                  Начать торговлю
                </Button>
                <Button size="lg" variant="outline" className="border-secondary/50 text-secondary hover:bg-secondary/10 font-display uppercase tracking-widest clip-corner h-14 px-8 text-base">
                  <Icon name="Play" size={20} className="mr-2" />
                  Смотреть демо
                </Button>
              </div>

              <div className="grid grid-cols-3 gap-6 pt-8 border-t border-border">
                {[
                  { v: '2.8M+', l: 'Сделок' },
                  { v: '450K', l: 'Игроков' },
                  { v: '99.9%', l: 'Аптайм' },
                ].map((s, i) => (
                  <div key={i}>
                    <div className="font-display font-bold text-3xl md:text-4xl text-neon-cyan neon-text-glow">{s.v}</div>
                    <div className="font-mono text-xs uppercase tracking-widest text-muted-foreground mt-1">{s.l}</div>
                  </div>
                ))}
              </div>
            </div>

            {/* Animated skin showcase */}
            <div className="lg:col-span-5 relative h-[500px] lg:h-[620px]">
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="absolute w-80 h-80 rounded-full bg-primary/30 blur-[100px] animate-pulse-neon" />
                <div className="absolute w-60 h-60 rounded-full bg-secondary/30 blur-[100px] animate-pulse-neon" style={{ animationDelay: '1s' }} />
              </div>

              <div className="absolute inset-0 animate-rotate-slow opacity-40">
                <svg viewBox="0 0 400 400" className="w-full h-full">
                  <circle cx="200" cy="200" r="180" fill="none" stroke="hsl(170 100% 50%)" strokeWidth="1" strokeDasharray="4 8" />
                  <circle cx="200" cy="200" r="140" fill="none" stroke="hsl(290 100% 60%)" strokeWidth="1" strokeDasharray="2 12" />
                </svg>
              </div>

              {/* Central skin card */}
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-72 animate-float">
                <div className="relative clip-corner bg-gradient-to-br from-card to-background border border-primary/40 p-6 neon-glow-cyan">
                  <div className="absolute top-3 right-3 font-mono text-[10px] uppercase tracking-widest text-neon-cyan bg-primary/10 px-2 py-1">★ COVERT</div>
                  <div className="aspect-video bg-gradient-to-br from-amber-500/80 via-red-600/60 to-fuchsia-500/40 clip-corner mb-4 relative overflow-hidden flex items-center justify-center">
                    <Icon name="Crosshair" size={80} className="text-white/90 drop-shadow-2xl" />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                  </div>
                  <div className="font-display text-lg uppercase tracking-wide">AWP | Dragon Lore</div>
                  <div className="font-mono text-xs text-muted-foreground mt-1">Factory New · 0.007</div>
                  <div className="flex items-baseline justify-between mt-4 pt-4 border-t border-border">
                    <span className="font-mono text-xs uppercase text-muted-foreground">Цена</span>
                    <span className="font-display text-2xl text-neon-cyan neon-text-glow">245 890 ₽</span>
                  </div>
                </div>
              </div>

              {/* Floating mini cards */}
              <div className="absolute top-10 right-0 w-40 animate-float" style={{ animationDelay: '1.5s' }}>
                <div className="clip-corner bg-card/80 backdrop-blur border border-secondary/40 p-3">
                  <div className="aspect-video bg-gradient-to-br from-fuchsia-500 to-cyan-400 clip-corner mb-2" />
                  <div className="font-mono text-[10px] text-muted-foreground">KARAMBIT</div>
                  <div className="font-display text-sm text-neon-magenta">312 500 ₽</div>
                </div>
              </div>
              <div className="absolute bottom-10 left-0 w-44 animate-float" style={{ animationDelay: '3s' }}>
                <div className="clip-corner bg-card/80 backdrop-blur border border-primary/40 p-3">
                  <div className="aspect-video bg-gradient-to-br from-emerald-400 to-teal-600 clip-corner mb-2" />
                  <div className="font-mono text-[10px] text-muted-foreground">AK-47 LOTUS</div>
                  <div className="font-display text-sm text-neon-cyan">178 200 ₽</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default HeroSection;
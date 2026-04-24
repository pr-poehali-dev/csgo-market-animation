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

        {/* BULLET TRACERS */}
        <div className="bullets-layer">
          <div className="bullet" style={{ ['--y' as string]: '18%', ['--speed' as string]: '1.1s', ['--delay' as string]: '0s', ['--angle' as string]: '-2deg' } as React.CSSProperties} />
          <div className="bullet" style={{ ['--y' as string]: '32%', ['--speed' as string]: '1.3s', ['--delay' as string]: '0.25s', ['--angle' as string]: '1deg' } as React.CSSProperties} />
          <div className="bullet" style={{ ['--y' as string]: '47%', ['--speed' as string]: '0.9s', ['--delay' as string]: '0.5s', ['--angle' as string]: '-1deg' } as React.CSSProperties} />
          <div className="bullet" style={{ ['--y' as string]: '63%', ['--speed' as string]: '1.5s', ['--delay' as string]: '0.8s', ['--angle' as string]: '2deg' } as React.CSSProperties} />
          <div className="bullet" style={{ ['--y' as string]: '78%', ['--speed' as string]: '1.2s', ['--delay' as string]: '1.1s', ['--angle' as string]: '-3deg' } as React.CSSProperties} />
          <div className="bullet" style={{ ['--y' as string]: '88%', ['--speed' as string]: '1.0s', ['--delay' as string]: '1.4s', ['--angle' as string]: '0deg' } as React.CSSProperties} />

          {/* AK-47 silhouette + muzzle flash (left edge) */}
          <div className="absolute left-0 top-1/2 -translate-y-1/2 hidden md:block pointer-events-none">
            <div className="relative">
              {/* AK silhouette */}
              <svg width="240" height="120" viewBox="0 0 240 120" className="opacity-80 drop-shadow-[0_0_20px_rgba(255,120,30,0.5)]">
                <defs>
                  <linearGradient id="akGrad" x1="0%" y1="0%" x2="0%" y2="100%">
                    <stop offset="0%" stopColor="#1a1a20" />
                    <stop offset="50%" stopColor="#2a2a35" />
                    <stop offset="100%" stopColor="#0a0a10" />
                  </linearGradient>
                  <linearGradient id="woodGrad" x1="0%" y1="0%" x2="0%" y2="100%">
                    <stop offset="0%" stopColor="#6b3410" />
                    <stop offset="100%" stopColor="#3d1d08" />
                  </linearGradient>
                </defs>
                {/* stock */}
                <path d="M0 58 L40 50 L50 70 L10 78 Z" fill="url(#woodGrad)" />
                <rect x="38" y="52" width="30" height="18" fill="url(#akGrad)" />
                {/* body */}
                <rect x="60" y="48" width="80" height="24" fill="url(#akGrad)" />
                {/* magazine */}
                <path d="M85 72 L115 72 L118 100 L88 102 Z" fill="url(#akGrad)" />
                <path d="M88 78 L115 78 L116 88 L89 89 Z" fill="#000" opacity="0.4" />
                {/* grip */}
                <path d="M118 60 L135 60 L130 88 L120 88 Z" fill="url(#woodGrad)" />
                {/* barrel */}
                <rect x="140" y="54" width="70" height="10" fill="url(#akGrad)" />
                {/* gas tube */}
                <rect x="140" y="46" width="55" height="6" fill="url(#akGrad)" />
                {/* front sight */}
                <rect x="200" y="44" width="4" height="16" fill="#15151a" />
                {/* muzzle */}
                <rect x="210" y="52" width="12" height="14" fill="#0a0a10" />
                <rect x="222" y="55" width="6" height="8" fill="#000" />
              </svg>

              {/* Muzzle flash */}
              <div className="muzzle-flash" style={{ left: '218px', top: '40px' }} />
              <div className="muzzle-flash" style={{ left: '225px', top: '45px', animationDelay: '0.08s', width: '60px', height: '60px' }} />

              {/* Smoke */}
              <div className="smoke" style={{ left: '200px', top: '20px', animationDelay: '0s' }} />
              <div className="smoke" style={{ left: '190px', top: '15px', animationDelay: '0.7s' }} />
              <div className="smoke" style={{ left: '210px', top: '30px', animationDelay: '1.3s' }} />

              {/* Shells */}
              <div className="shell" style={{ left: '110px', top: '45px', animationDelay: '0s' }} />
              <div className="shell" style={{ left: '115px', top: '45px', animationDelay: '0.4s' }} />
              <div className="shell" style={{ left: '105px', top: '45px', animationDelay: '0.9s' }} />
              <div className="shell" style={{ left: '112px', top: '45px', animationDelay: '1.3s' }} />
            </div>
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

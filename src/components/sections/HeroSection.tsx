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

        {/* EPIC ANIMATION LAYER */}
        <div className="epic-layer">
          <div className="hex-pulse" />
          <div className="aurora a1" />
          <div className="aurora a2" />
          <div className="aurora a3" />

          <div className="orbit-rings">
            <div className="orbit-ring r1" />
            <div className="orbit-ring r2" />
            <div className="orbit-ring r3" />
            <div className="orbit-node" style={{ ['--r' as string]: '450px', ['--rd' as string]: '22s', ['--c' as string]: 'hsl(170 100% 50%)' } as React.CSSProperties} />
            <div className="orbit-node" style={{ ['--r' as string]: '390px', ['--rd' as string]: '18s', ['--c' as string]: 'hsl(290 100% 60%)', animationDirection: 'reverse' } as React.CSSProperties} />
            <div className="orbit-node" style={{ ['--r' as string]: '310px', ['--rd' as string]: '28s', ['--c' as string]: 'hsl(190 100% 60%)' } as React.CSSProperties} />
            <div className="orbit-node" style={{ ['--r' as string]: '450px', ['--rd' as string]: '22s', ['--c' as string]: 'hsl(320 100% 65%)', animationDelay: '-11s' } as React.CSSProperties} />
          </div>

          <div className="energy-core" />
          <div className="shockwave" style={{ ['--delay' as string]: '0s' } as React.CSSProperties} />
          <div className="shockwave s2" style={{ ['--delay' as string]: '1s' } as React.CSSProperties} />
          <div className="shockwave" style={{ ['--delay' as string]: '2s' } as React.CSSProperties} />

          {/* Floating particles */}
          {[
            { x: '5%', dx: '50px', dur: '12s', delay: '0s', c: 'hsl(170 100% 60%)' },
            { x: '12%', dx: '-30px', dur: '14s', delay: '2s', c: 'hsl(290 100% 70%)' },
            { x: '22%', dx: '70px', dur: '11s', delay: '0.5s', c: '#fff' },
            { x: '30%', dx: '-60px', dur: '15s', delay: '3s', c: 'hsl(200 100% 65%)' },
            { x: '38%', dx: '40px', dur: '13s', delay: '1s', c: 'hsl(170 100% 60%)' },
            { x: '48%', dx: '-20px', dur: '10s', delay: '4s', c: 'hsl(320 100% 70%)' },
            { x: '56%', dx: '60px', dur: '14s', delay: '2.5s', c: '#fff' },
            { x: '65%', dx: '-50px', dur: '12s', delay: '0.8s', c: 'hsl(290 100% 70%)' },
            { x: '73%', dx: '30px', dur: '13s', delay: '3.5s', c: 'hsl(170 100% 60%)' },
            { x: '82%', dx: '-40px', dur: '11s', delay: '1.5s', c: 'hsl(200 100% 65%)' },
            { x: '90%', dx: '55px', dur: '15s', delay: '4.5s', c: 'hsl(320 100% 70%)' },
            { x: '96%', dx: '-25px', dur: '12s', delay: '0.3s', c: '#fff' },
          ].map((p, i) => (
            <div key={i} className="particle" style={{
              ['--x' as string]: p.x,
              ['--dx' as string]: p.dx,
              ['--dur' as string]: p.dur,
              ['--delay' as string]: p.delay,
              ['--c' as string]: p.c,
            } as React.CSSProperties} />
          ))}

          {/* Lightning bolts */}
          <div className="bolt" style={{ ['--x' as string]: '18%', ['--dur' as string]: '5s', ['--delay' as string]: '0s' } as React.CSSProperties} />
          <div className="bolt" style={{ ['--x' as string]: '42%', ['--dur' as string]: '7s', ['--delay' as string]: '2s' } as React.CSSProperties} />
          <div className="bolt" style={{ ['--x' as string]: '68%', ['--dur' as string]: '6s', ['--delay' as string]: '4s' } as React.CSSProperties} />
          <div className="bolt" style={{ ['--x' as string]: '88%', ['--dur' as string]: '8s', ['--delay' as string]: '1s' } as React.CSSProperties} />

          <div className="scan-beam" />
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
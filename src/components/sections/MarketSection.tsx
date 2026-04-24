import Icon from '@/components/ui/icon';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';

const skins = [
  { name: 'AWP | Dragon Lore', rarity: 'Covert', wear: 'Factory New', price: '245 890', float: '0.007', color: 'from-amber-500 to-red-600' },
  { name: 'M4A4 | Howl', rarity: 'Contraband', wear: 'Minimal Wear', price: '189 450', float: '0.089', color: 'from-orange-400 to-pink-600' },
  { name: 'Karambit | Fade', rarity: 'Covert ★', wear: 'Factory New', price: '312 500', float: '0.012', color: 'from-fuchsia-500 to-cyan-400' },
  { name: 'AK-47 | Wild Lotus', rarity: 'Covert', wear: 'Factory New', price: '178 200', float: '0.031', color: 'from-emerald-400 to-teal-600' },
  { name: 'Butterfly | Doppler', rarity: 'Covert ★', wear: 'Factory New', price: '98 700', float: '0.022', color: 'from-violet-500 to-blue-600' },
  { name: 'Desert Eagle | Blaze', rarity: 'Classified', wear: 'Factory New', price: '24 800', float: '0.018', color: 'from-orange-500 to-yellow-400' },
];

interface MarketSectionProps {
  activeTab: 'buy' | 'sell';
  setActiveTab: (tab: 'buy' | 'sell') => void;
}

const MarketSection = ({ activeTab, setActiveTab }: MarketSectionProps) => {
  return (
    <section id="market" className="relative py-24 border-t border-border">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div>
            <div className="font-mono text-xs uppercase tracking-widest text-neon-cyan mb-3">// 01 · Маркет</div>
            <h2 className="font-display font-bold text-5xl md:text-7xl uppercase">
              Торговая<br/>
              <span className="text-neon-cyan neon-text-glow">площадка</span>
            </h2>
          </div>

          <div id="sell" className="flex gap-2 p-1 border border-border bg-card/50 clip-corner">
            <button
              onClick={() => setActiveTab('buy')}
              className={`px-8 py-3 font-display uppercase tracking-widest text-sm transition-all clip-corner ${
                activeTab === 'buy' ? 'bg-primary text-background neon-glow-cyan' : 'text-muted-foreground hover:text-foreground'
              }`}
            >
              <Icon name="ShoppingCart" size={16} className="inline mr-2" />
              Купить
            </button>
            <button
              onClick={() => setActiveTab('sell')}
              className={`px-8 py-3 font-display uppercase tracking-widest text-sm transition-all clip-corner ${
                activeTab === 'sell' ? 'bg-secondary text-background neon-glow-magenta' : 'text-muted-foreground hover:text-foreground'
              }`}
            >
              <Icon name="Tag" size={16} className="inline mr-2" />
              Продать
            </button>
          </div>
        </div>

        <div className="flex flex-wrap gap-3 mb-8">
          <div className="relative flex-1 min-w-[260px]">
            <Icon name="Search" size={18} className="absolute left-4 top-1/2 -translate-y-1/2 text-muted-foreground" />
            <Input placeholder="Поиск скина, оружия, коллекции..." className="pl-12 h-12 bg-card border-border font-mono text-sm" />
          </div>
          {['Все', 'Ножи', 'Перчатки', 'Винтовки', 'Пистолеты'].map((f, i) => (
            <button key={i} className={`px-5 h-12 font-display uppercase tracking-widest text-xs border clip-corner transition-all ${
              i === 0 ? 'border-primary text-neon-cyan bg-primary/5' : 'border-border text-muted-foreground hover:border-primary/50 hover:text-foreground'
            }`}>
              {f}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {skins.map((s, i) => (
            <div key={i} className="group relative animate-fade-up" style={{ animationDelay: `${i * 0.08}s` }}>
              <div className="absolute -inset-px bg-gradient-to-br from-primary/0 via-primary/0 to-secondary/0 group-hover:from-primary/40 group-hover:to-secondary/40 transition-all duration-500 clip-corner" />
              <div className="relative clip-corner bg-card border border-border p-5 hover:border-primary/60 transition-all">
                <div className="flex items-center justify-between mb-4">
                  <span className="font-mono text-[10px] uppercase tracking-widest text-neon-magenta">{s.rarity}</span>
                  <Icon name="Heart" size={16} className="text-muted-foreground hover:text-secondary cursor-pointer transition-colors" />
                </div>
                <div className={`aspect-video bg-gradient-to-br ${s.color} clip-corner mb-4 relative overflow-hidden flex items-center justify-center group-hover:scale-[1.02] transition-transform`}>
                  <Icon name="Crosshair" size={56} className="text-white/90 drop-shadow-xl" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
                  <div className="absolute bottom-2 left-3 font-mono text-[10px] uppercase tracking-widest text-white/80">float · {s.float}</div>
                </div>
                <div className="font-display text-base uppercase tracking-wide mb-1">{s.name}</div>
                <div className="font-mono text-xs text-muted-foreground mb-4">{s.wear}</div>
                <div className="flex items-center justify-between pt-4 border-t border-border">
                  <span className="font-display text-2xl text-neon-cyan neon-text-glow">{s.price} ₽</span>
                  <Button size="sm" className={`${activeTab === 'buy' ? 'bg-primary hover:bg-primary/90' : 'bg-secondary hover:bg-secondary/90'} text-background font-display uppercase tracking-widest clip-corner`}>
                    {activeTab === 'buy' ? 'Купить' : 'Продать'}
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default MarketSection;

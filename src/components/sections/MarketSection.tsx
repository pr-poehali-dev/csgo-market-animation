import { useState } from 'react';
import Icon from '@/components/ui/icon';
import { Checkbox } from '@/components/ui/checkbox';

const skins = [
  { name: 'AWP | Dragon Lore', exterior: 'Factory New', price: 245890, float: 0.007, rarity: 'covert', trend: '+2.4%', up: true, bg: 'from-amber-600 to-red-800' },
  { name: 'M4A4 | Howl', exterior: 'Minimal Wear', price: 189450, float: 0.089, rarity: 'rare', trend: '+5.1%', up: true, bg: 'from-orange-500 to-rose-700' },
  { name: '★ Karambit | Fade', exterior: 'Factory New', price: 312500, float: 0.012, rarity: 'rare', trend: '+0.8%', up: true, bg: 'from-fuchsia-500 to-cyan-500' },
  { name: 'AK-47 | Wild Lotus', exterior: 'Factory New', price: 178200, float: 0.031, rarity: 'covert', trend: '-1.2%', up: false, bg: 'from-emerald-500 to-teal-700' },
  { name: '★ Butterfly | Doppler', exterior: 'Factory New', price: 98700, float: 0.022, rarity: 'rare', trend: '+3.3%', up: true, bg: 'from-violet-500 to-blue-700' },
  { name: 'Desert Eagle | Blaze', exterior: 'Factory New', price: 24800, float: 0.018, rarity: 'classified', trend: '+0.2%', up: true, bg: 'from-orange-500 to-yellow-500' },
  { name: 'USP-S | Kill Confirmed', exterior: 'Minimal Wear', price: 8640, float: 0.094, rarity: 'covert', trend: '-0.5%', up: false, bg: 'from-slate-700 to-slate-900' },
  { name: 'Glock-18 | Fade', exterior: 'Factory New', price: 5320, float: 0.014, rarity: 'restricted', trend: '+1.8%', up: true, bg: 'from-pink-500 to-amber-500' },
  { name: 'M4A1-S | Hyper Beast', exterior: 'Factory New', price: 3420, float: 0.021, rarity: 'covert', trend: '+0.4%', up: true, bg: 'from-cyan-400 to-fuchsia-600' },
  { name: 'AWP | Asiimov', exterior: 'Field-Tested', price: 4180, float: 0.234, rarity: 'covert', trend: '-0.9%', up: false, bg: 'from-orange-400 to-neutral-800' },
  { name: 'AK-47 | Redline', exterior: 'Field-Tested', price: 1290, float: 0.189, rarity: 'classified', trend: '+2.1%', up: true, bg: 'from-red-600 to-neutral-900' },
  { name: 'P250 | Asiimov', exterior: 'Factory New', price: 820, float: 0.039, rarity: 'restricted', trend: '+0.6%', up: true, bg: 'from-orange-500 to-neutral-700' },
];

interface MarketSectionProps {
  activeTab: 'buy' | 'sell';
  setActiveTab: (tab: 'buy' | 'sell') => void;
}

const MarketSection = ({ activeTab, setActiveTab }: MarketSectionProps) => {
  const [priceMin, setPriceMin] = useState('');
  const [priceMax, setPriceMax] = useState('');
  const [sort, setSort] = useState('popular');

  return (
    <section id="market" className="relative py-6">
      <div className="container mx-auto px-6">
        <div id="sell" className="flex items-center justify-between mb-4 flex-wrap gap-3">
          <div className="inline-flex bg-muted rounded p-0.5">
            <button
              onClick={() => setActiveTab('buy')}
              className={`px-4 h-8 text-sm font-medium rounded transition-colors ${
                activeTab === 'buy' ? 'bg-background text-foreground shadow-sm' : 'text-muted-foreground hover:text-foreground'
              }`}
            >
              Купить
            </button>
            <button
              onClick={() => setActiveTab('sell')}
              className={`px-4 h-8 text-sm font-medium rounded transition-colors ${
                activeTab === 'sell' ? 'bg-background text-foreground shadow-sm' : 'text-muted-foreground hover:text-foreground'
              }`}
            >
              Продать
            </button>
          </div>

          <div className="flex items-center gap-3 text-sm">
            <span className="text-muted-foreground">Сортировка:</span>
            <select
              value={sort}
              onChange={(e) => setSort(e.target.value)}
              className="h-8 px-2 rounded bg-muted border border-border text-sm focus:outline-none focus:border-primary-orange"
            >
              <option value="popular">Популярные</option>
              <option value="cheap">Сначала дешёвые</option>
              <option value="expensive">Сначала дорогие</option>
              <option value="float">По float</option>
              <option value="new">Новые</option>
            </select>
          </div>
        </div>

        <div className="grid lg:grid-cols-[260px_1fr] gap-4">
          <aside className="space-y-4 lg:sticky lg:top-[145px] self-start">
            <div className="bg-card border border-border rounded p-4">
              <h3 className="text-sm font-semibold mb-3">Цена, ₽</h3>
              <div className="flex gap-2 mb-3">
                <input
                  value={priceMin}
                  onChange={(e) => setPriceMin(e.target.value)}
                  placeholder="от"
                  className="w-full h-8 px-2 rounded bg-muted border border-border text-sm focus:outline-none focus:border-primary-orange"
                />
                <input
                  value={priceMax}
                  onChange={(e) => setPriceMax(e.target.value)}
                  placeholder="до"
                  className="w-full h-8 px-2 rounded bg-muted border border-border text-sm focus:outline-none focus:border-primary-orange"
                />
              </div>
              <div className="flex gap-1 flex-wrap">
                {['до 500', '500–5k', '5k–50k', '50k+'].map((p, i) => (
                  <button key={i} className="px-2 h-6 text-xs rounded bg-muted hover:bg-border transition-colors">
                    {p}
                  </button>
                ))}
              </div>
            </div>

            <div className="bg-card border border-border rounded p-4">
              <h3 className="text-sm font-semibold mb-3">Редкость</h3>
              <div className="space-y-2">
                {[
                  { label: 'Covert', color: 'covert', count: 247 },
                  { label: 'Classified', color: 'classified', count: 412 },
                  { label: 'Restricted', color: 'restricted', count: 896 },
                  { label: 'Mil-Spec', color: 'milspec', count: 1247 },
                  { label: 'Редкий ★', color: 'rare', count: 89 },
                ].map((r, i) => (
                  <label key={i} className="flex items-center gap-2 cursor-pointer hover:bg-muted px-1 py-1 rounded transition-colors">
                    <Checkbox className="h-4 w-4" />
                    <span className={`w-2 h-2 rounded-sm rarity-${r.color}`} />
                    <span className="text-sm flex-1">{r.label}</span>
                    <span className="text-xs text-muted-foreground">{r.count}</span>
                  </label>
                ))}
              </div>
            </div>

            <div className="bg-card border border-border rounded p-4">
              <h3 className="text-sm font-semibold mb-3">Состояние</h3>
              <div className="space-y-2">
                {['Factory New', 'Minimal Wear', 'Field-Tested', 'Well-Worn', 'Battle-Scarred'].map((e, i) => (
                  <label key={i} className="flex items-center gap-2 cursor-pointer hover:bg-muted px-1 py-1 rounded transition-colors">
                    <Checkbox className="h-4 w-4" />
                    <span className="text-sm">{e}</span>
                  </label>
                ))}
              </div>
            </div>

            <div className="bg-card border border-border rounded p-4">
              <h3 className="text-sm font-semibold mb-3">Особенности</h3>
              <div className="space-y-2">
                {['StatTrak™', 'Сувенир', 'Только со стикерами', 'Редкий паттерн'].map((f, i) => (
                  <label key={i} className="flex items-center gap-2 cursor-pointer hover:bg-muted px-1 py-1 rounded transition-colors">
                    <Checkbox className="h-4 w-4" />
                    <span className="text-sm">{f}</span>
                  </label>
                ))}
              </div>
            </div>

            <button className="w-full h-9 bg-muted hover:bg-border rounded text-sm font-medium transition-colors">
              Сбросить фильтры
            </button>
          </aside>

          <div>
            <div className="flex items-center justify-between mb-3 text-sm">
              <span className="text-muted-foreground">
                Найдено <span className="text-foreground font-semibold">48 291</span> предметов
              </span>
              <div className="flex items-center gap-1">
                <button className="w-8 h-8 rounded bg-card border border-primary-orange text-primary-orange flex items-center justify-center">
                  <Icon name="LayoutGrid" size={15} />
                </button>
                <button className="w-8 h-8 rounded bg-card border border-border text-muted-foreground hover:text-foreground flex items-center justify-center transition-colors">
                  <Icon name="List" size={15} />
                </button>
              </div>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3">
              {skins.map((s, i) => (
                <div
                  key={i}
                  className="skin-card group relative bg-card border border-border rounded overflow-hidden cursor-pointer animate-fade-in"
                  style={{ animationDelay: `${i * 0.03}s` }}
                >
                  <div className={`aspect-[4/3] bg-gradient-to-br ${s.bg} relative flex items-center justify-center`}>
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-black/20" />
                    <Icon name="Crosshair" size={40} className="text-white/70 relative z-10" />

                    <div className="absolute top-2 left-2 right-2 flex items-start justify-between z-10">
                      {s.name.startsWith('★') && (
                        <span className="px-1.5 h-5 rounded bg-black/60 backdrop-blur text-[10px] font-semibold text-yellow-400 flex items-center gap-1">
                          ★ Редкий
                        </span>
                      )}
                      <button className="ml-auto w-6 h-6 rounded bg-black/40 hover:bg-black/60 backdrop-blur flex items-center justify-center transition-colors">
                        <Icon name="Heart" size={13} className="text-white" />
                      </button>
                    </div>

                    <div className="absolute bottom-2 left-2 z-10 px-1.5 h-5 rounded bg-black/60 backdrop-blur text-[10px] font-mono text-white/90">
                      fl {s.float.toFixed(3)}
                    </div>

                    <div className={`rarity-strip rarity-${s.rarity}`} />
                  </div>

                  <div className="p-2.5">
                    <div className="text-[11px] text-muted-foreground mb-0.5">{s.exterior}</div>
                    <div className="text-sm font-medium line-clamp-1 mb-2">{s.name}</div>

                    <div className="flex items-end justify-between">
                      <div>
                        <div className="text-base font-bold leading-none">
                          {s.price.toLocaleString('ru-RU')} ₽
                        </div>
                        <div className="text-[11px] font-medium mt-1" style={{ color: s.up ? 'hsl(var(--positive))' : 'hsl(var(--destructive))' }}>
                          <Icon name={s.up ? 'TrendingUp' : 'TrendingDown'} size={11} className="inline mr-0.5" />
                          {s.trend}
                        </div>
                      </div>
                      <button className="h-7 px-3 bg-primary-orange text-background rounded text-xs font-semibold hover:opacity-90 transition-opacity">
                        Купить
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div className="flex items-center justify-center gap-1 mt-6">
              <button className="w-8 h-8 rounded bg-card border border-border flex items-center justify-center hover:border-primary-orange transition-colors">
                <Icon name="ChevronLeft" size={15} />
              </button>
              {[1, 2, 3, 4, 5].map((p) => (
                <button
                  key={p}
                  className={`w-8 h-8 rounded text-sm font-medium transition-colors ${
                    p === 1
                      ? 'bg-primary-orange text-background'
                      : 'bg-card border border-border hover:border-primary-orange'
                  }`}
                >
                  {p}
                </button>
              ))}
              <span className="px-2 text-muted-foreground">...</span>
              <button className="w-10 h-8 rounded bg-card border border-border text-sm font-medium hover:border-primary-orange transition-colors">
                1847
              </button>
              <button className="w-8 h-8 rounded bg-card border border-border flex items-center justify-center hover:border-primary-orange transition-colors">
                <Icon name="ChevronRight" size={15} />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MarketSection;

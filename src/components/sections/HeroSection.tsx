import Icon from '@/components/ui/icon';

interface HeroSectionProps {
  spawnSmoke: (e: React.MouseEvent<HTMLAnchorElement>) => void;
}

const HeroSection = ({ spawnSmoke }: HeroSectionProps) => {
  return (
    <header className="sticky top-0 z-50 bg-background/95 backdrop-blur border-b border-border">
      {/* Top utility bar */}
      <div className="border-b border-border/60">
        <div className="container mx-auto px-6 h-9 flex items-center justify-between text-xs text-muted-foreground">
          <div className="flex items-center gap-5">
            <span className="flex items-center gap-1.5">
              <span className="w-1.5 h-1.5 rounded-full bg-positive animate-pulse-dot" style={{ background: 'hsl(var(--positive))' }} />
              48 291 онлайн
            </span>
            <span className="hidden md:inline">Сделок за 24ч: 12 847</span>
            <span className="hidden lg:inline">Оборот: 18.4M ₽</span>
          </div>
          <div className="flex items-center gap-4">
            <a href="#" className="hover:text-foreground transition-colors">Помощь</a>
            <a href="#" className="hover:text-foreground transition-colors">API</a>
            <a href="#" className="hover:text-foreground transition-colors">Blog</a>
            <span>RU</span>
          </div>
        </div>
      </div>

      {/* Main header */}
      <div className="container mx-auto px-6 h-16 flex items-center gap-6">
        {/* Logo */}
        <a href="#" className="flex items-center gap-2 shrink-0">
          <div className="w-8 h-8 rounded bg-primary-orange flex items-center justify-center">
            <Icon name="Crosshair" size={18} className="text-background" />
          </div>
          <span className="font-semibold text-lg tracking-tight">
            market<span className="text-primary-orange">.</span>skins
          </span>
        </a>

        {/* Nav */}
        <nav className="hidden lg:flex items-center gap-1 text-sm">
          <a href="#market" onClick={spawnSmoke} className="px-3 py-2 rounded hover:bg-muted transition-colors font-medium">Купить</a>
          <a href="#sell" onClick={spawnSmoke} className="px-3 py-2 rounded hover:bg-muted transition-colors font-medium">Продать</a>
          <a href="#history" onClick={spawnSmoke} className="px-3 py-2 rounded hover:bg-muted transition-colors font-medium">История</a>
          <a href="#support" onClick={spawnSmoke} className="px-3 py-2 rounded hover:bg-muted transition-colors font-medium">Поддержка</a>
          <a href="#faq" onClick={spawnSmoke} className="px-3 py-2 rounded hover:bg-muted transition-colors font-medium">FAQ</a>
        </nav>

        {/* Search */}
        <div className="flex-1 max-w-xl relative hidden md:block">
          <Icon name="Search" size={16} className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground" />
          <input
            type="text"
            placeholder="Поиск скина, оружия, коллекции..."
            className="w-full h-9 pl-9 pr-3 rounded bg-muted border border-transparent hover:border-border focus:border-primary-orange focus:outline-none text-sm transition-colors"
          />
        </div>

        {/* Right actions */}
        <div className="flex items-center gap-2 ml-auto">
          <div className="hidden sm:flex items-center gap-2 px-3 h-9 rounded bg-muted border border-border">
            <Icon name="Wallet" size={15} className="text-primary-orange" />
            <span className="text-sm font-semibold">12 480 ₽</span>
            <button className="ml-1 w-5 h-5 rounded bg-primary-orange hover:opacity-90 flex items-center justify-center transition-opacity">
              <Icon name="Plus" size={13} className="text-background" />
            </button>
          </div>
          <button className="w-9 h-9 rounded bg-muted hover:bg-border flex items-center justify-center transition-colors relative">
            <Icon name="Bell" size={16} />
            <span className="absolute top-1.5 right-1.5 w-1.5 h-1.5 rounded-full bg-primary-orange" />
          </button>
          <button className="w-9 h-9 rounded bg-muted hover:bg-border flex items-center justify-center transition-colors">
            <Icon name="User" size={16} />
          </button>
        </div>
      </div>

      {/* Sub-nav categories */}
      <div className="border-t border-border/60 bg-card/40">
        <div className="container mx-auto px-6 h-11 flex items-center gap-1 overflow-x-auto text-sm">
          {[
            { icon: 'LayoutGrid', label: 'Все предметы' },
            { icon: 'Swords', label: 'Ножи' },
            { icon: 'Hand', label: 'Перчатки' },
            { icon: 'Crosshair', label: 'Винтовки' },
            { icon: 'Zap', label: 'Пистолеты' },
            { icon: 'Target', label: 'Снайперские' },
            { icon: 'Package', label: 'Кейсы' },
            { icon: 'Sticker', label: 'Наклейки' },
            { icon: 'Key', label: 'Ключи' },
          ].map((c, i) => (
            <button
              key={i}
              className={`flex items-center gap-1.5 px-3 h-11 whitespace-nowrap border-b-2 transition-colors ${
                i === 0
                  ? 'border-primary-orange text-foreground font-medium'
                  : 'border-transparent text-muted-foreground hover:text-foreground'
              }`}
            >
              <Icon name={c.icon} size={15} />
              {c.label}
            </button>
          ))}
        </div>
      </div>
    </header>
  );
};

export default HeroSection;

import { useState } from 'react';
import Icon from '@/components/ui/icon';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';

const skins = [
  { name: 'AWP | Dragon Lore', rarity: 'Covert', wear: 'Factory New', price: '245 890', float: '0.007', color: 'from-amber-500 to-red-600' },
  { name: 'M4A4 | Howl', rarity: 'Contraband', wear: 'Minimal Wear', price: '189 450', float: '0.089', color: 'from-orange-400 to-pink-600' },
  { name: 'Karambit | Fade', rarity: 'Covert ★', wear: 'Factory New', price: '312 500', float: '0.012', color: 'from-fuchsia-500 to-cyan-400' },
  { name: 'AK-47 | Wild Lotus', rarity: 'Covert', wear: 'Factory New', price: '178 200', float: '0.031', color: 'from-emerald-400 to-teal-600' },
  { name: 'Butterfly | Doppler', rarity: 'Covert ★', wear: 'Factory New', price: '98 700', float: '0.022', color: 'from-violet-500 to-blue-600' },
  { name: 'Desert Eagle | Blaze', rarity: 'Classified', wear: 'Factory New', price: '24 800', float: '0.018', color: 'from-orange-500 to-yellow-400' },
];

const history = [
  { type: 'buy', item: 'AWP | Asiimov', price: '12 450', date: '23.04.2026', status: 'Завершено' },
  { type: 'sell', item: 'Glock-18 | Fade', price: '8 900', date: '21.04.2026', status: 'Завершено' },
  { type: 'buy', item: 'Karambit | Doppler', price: '156 000', date: '18.04.2026', status: 'Завершено' },
  { type: 'sell', item: 'M4A1-S | Hyper Beast', price: '3 420', date: '15.04.2026', status: 'Завершено' },
];

const Index = () => {
  const [activeTab, setActiveTab] = useState<'buy' | 'sell'>('buy');

  return (
    <div className="min-h-screen text-foreground">
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
            <a href="#market" className="hover:text-neon-cyan transition-colors">Купить</a>
            <a href="#sell" className="hover:text-neon-magenta transition-colors">Продать</a>
            <a href="#history" className="hover:text-neon-cyan transition-colors">История</a>
            <a href="#support" className="hover:text-neon-cyan transition-colors">Поддержка</a>
            <a href="#faq" className="hover:text-neon-cyan transition-colors">FAQ</a>
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

      {/* MARKET (Buy/Sell) */}
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

      {/* HISTORY */}
      <section id="history" className="relative py-24 border-t border-border">
        <div className="container mx-auto px-6">
          <div className="mb-12">
            <div className="font-mono text-xs uppercase tracking-widest text-neon-magenta mb-3">// 02 · История</div>
            <h2 className="font-display font-bold text-5xl md:text-7xl uppercase">
              История <span className="text-neon-magenta neon-text-glow-magenta">сделок</span>
            </h2>
            <p className="text-muted-foreground mt-4 max-w-2xl">
              Полный журнал ваших покупок и продаж. Фильтрация, экспорт, детальная аналитика по каждой операции.
            </p>
          </div>

          <div className="clip-corner bg-card/60 border border-border overflow-hidden">
            <div className="grid grid-cols-12 gap-4 px-6 py-4 border-b border-border bg-muted/30 font-mono text-[10px] uppercase tracking-widest text-muted-foreground">
              <div className="col-span-2">Тип</div>
              <div className="col-span-5">Предмет</div>
              <div className="col-span-2">Сумма</div>
              <div className="col-span-2">Дата</div>
              <div className="col-span-1 text-right">Статус</div>
            </div>
            {history.map((h, i) => (
              <div key={i} className="grid grid-cols-12 gap-4 px-6 py-5 border-b border-border last:border-b-0 hover:bg-muted/20 transition-colors items-center">
                <div className="col-span-2">
                  <span className={`inline-flex items-center gap-2 font-display uppercase text-xs tracking-widest px-3 py-1 clip-corner ${
                    h.type === 'buy' ? 'bg-primary/10 text-neon-cyan border border-primary/30' : 'bg-secondary/10 text-neon-magenta border border-secondary/30'
                  }`}>
                    <Icon name={h.type === 'buy' ? 'ArrowDownLeft' : 'ArrowUpRight'} size={12} />
                    {h.type === 'buy' ? 'Покупка' : 'Продажа'}
                  </span>
                </div>
                <div className="col-span-5 font-display text-base uppercase tracking-wide">{h.item}</div>
                <div className="col-span-2 font-mono text-sm text-neon-cyan">{h.price} ₽</div>
                <div className="col-span-2 font-mono text-xs text-muted-foreground">{h.date}</div>
                <div className="col-span-1 text-right">
                  <Icon name="Check" size={16} className="inline text-neon-lime" />
                </div>
              </div>
            ))}
          </div>

          <div className="grid md:grid-cols-4 gap-4 mt-8">
            {[
              { l: 'Всего сделок', v: '147', icon: 'Activity' },
              { l: 'Покупки', v: '89', icon: 'ArrowDownLeft', c: 'cyan' },
              { l: 'Продажи', v: '58', icon: 'ArrowUpRight', c: 'magenta' },
              { l: 'Оборот', v: '1.2M ₽', icon: 'TrendingUp' },
            ].map((k, i) => (
              <div key={i} className="clip-corner bg-card border border-border p-5 hover:border-primary/40 transition-all">
                <div className="flex items-center justify-between mb-3">
                  <span className="font-mono text-[10px] uppercase tracking-widest text-muted-foreground">{k.l}</span>
                  <Icon name={k.icon} size={16} className={k.c === 'magenta' ? 'text-neon-magenta' : 'text-neon-cyan'} />
                </div>
                <div className={`font-display text-3xl ${k.c === 'magenta' ? 'text-neon-magenta neon-text-glow-magenta' : 'text-neon-cyan neon-text-glow'}`}>{k.v}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SUPPORT */}
      <section id="support" className="relative py-24 border-t border-border">
        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="font-mono text-xs uppercase tracking-widest text-neon-cyan mb-3">// 03 · Поддержка</div>
              <h2 className="font-display font-bold text-5xl md:text-7xl uppercase leading-none">
                Всегда<br/>
                <span className="text-neon-cyan neon-text-glow">на связи</span>
              </h2>
              <p className="text-muted-foreground mt-6 text-lg max-w-lg">
                Команда саппорта работает 24/7. Среднее время ответа — меньше 3 минут. 
                Поможем с любым вопросом по торговле, оплате или выводу скинов.
              </p>

              <div className="grid grid-cols-2 gap-4 mt-8">
                {[
                  { icon: 'MessageCircle', l: 'Онлайн-чат', v: '3 мин' },
                  { icon: 'Mail', l: 'E-mail', v: '< 1 час' },
                  { icon: 'Send', l: 'Telegram', v: '5 мин' },
                  { icon: 'Phone', l: 'Горячая линия', v: '24/7' },
                ].map((c, i) => (
                  <div key={i} className="clip-corner border border-border bg-card p-4 hover:border-primary/40 transition-all group cursor-pointer">
                    <Icon name={c.icon} size={22} className="text-neon-cyan mb-3 group-hover:scale-110 transition-transform" />
                    <div className="font-display text-base uppercase tracking-wide">{c.l}</div>
                    <div className="font-mono text-xs text-muted-foreground mt-1">ответ: {c.v}</div>
                  </div>
                ))}
              </div>
            </div>

            <div className="clip-corner bg-card border border-primary/30 p-8 neon-glow-cyan relative overflow-hidden">
              <div className="absolute top-4 right-4 flex gap-1.5">
                <span className="w-2 h-2 rounded-full bg-destructive" />
                <span className="w-2 h-2 rounded-full bg-amber-500" />
                <span className="w-2 h-2 rounded-full bg-neon-lime" style={{ background: 'hsl(90 100% 55%)' }} />
              </div>
              <div className="font-mono text-xs text-neon-cyan mb-6">support@market.csgo ~</div>
              <h3 className="font-display text-3xl uppercase mb-6">Напишите нам</h3>
              <div className="space-y-4">
                <div>
                  <label className="font-mono text-[10px] uppercase tracking-widest text-muted-foreground">Имя / SteamID</label>
                  <Input className="mt-2 bg-background border-border font-mono" placeholder="Как к вам обращаться?" />
                </div>
                <div>
                  <label className="font-mono text-[10px] uppercase tracking-widest text-muted-foreground">E-mail</label>
                  <Input className="mt-2 bg-background border-border font-mono" placeholder="you@example.com" />
                </div>
                <div>
                  <label className="font-mono text-[10px] uppercase tracking-widest text-muted-foreground">Сообщение</label>
                  <textarea rows={4} className="mt-2 w-full rounded-none bg-background border border-border p-3 font-mono text-sm focus:outline-none focus:border-primary transition-colors" placeholder="Опишите проблему..." />
                </div>
                <Button className="w-full h-12 bg-primary text-background hover:bg-primary/90 font-display uppercase tracking-widest clip-corner neon-glow-cyan">
                  <Icon name="Send" size={16} className="mr-2" />
                  Отправить запрос
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section id="faq" className="relative py-24 border-t border-border">
        <div className="container mx-auto px-6 max-w-4xl">
          <div className="text-center mb-12">
            <div className="font-mono text-xs uppercase tracking-widest text-neon-magenta mb-3">// 04 · FAQ</div>
            <h2 className="font-display font-bold text-5xl md:text-7xl uppercase">
              Частые <span className="text-neon-magenta neon-text-glow-magenta">вопросы</span>
            </h2>
          </div>

          <Accordion type="single" collapsible className="space-y-3">
            {[
              { q: 'Как быстро проходит сделка?', a: 'Автоматические обмены занимают от 30 секунд до 2 минут. Трейд-оффер отправляется сразу после оплаты, вам нужно только подтвердить его в Steam.' },
              { q: 'Какая комиссия площадки?', a: 'Комиссия 5% удерживается только с продавца при успешной сделке. Покупатели платят только цену предмета — без скрытых платежей.' },
              { q: 'Безопасно ли торговать скинами?', a: 'Используем Steam Guard, 2FA, SSL-шифрование и холодное хранение средств. За 8 лет работы — ни одного случая взлома или потери средств пользователей.' },
              { q: 'Как вывести деньги?', a: 'Вывод доступен на банковскую карту, СБП, QIWI и криптокошельки. Минимум — 100 ₽, комиссия от 0%, скорость — от 5 минут до 24 часов.' },
              { q: 'Что если сделка не прошла?', a: 'Полная автоматическая защита покупателя. Если сделка отменена или продавец не отправил предмет — деньги моментально возвращаются на баланс.' },
              { q: 'Где история моих операций?', a: 'В личном кабинете в разделе «История» — полный журнал покупок и продаж, экспорт в CSV, налоговые отчёты и аналитика по категориям.' },
            ].map((item, i) => (
              <AccordionItem key={i} value={`item-${i}`} className="clip-corner bg-card/60 border border-border px-6 hover:border-primary/40 transition-all">
                <AccordionTrigger className="font-display uppercase tracking-wide text-base hover:no-underline hover:text-neon-cyan py-5">
                  <span className="flex items-center gap-4 text-left">
                    <span className="font-mono text-xs text-neon-magenta">0{i+1}</span>
                    {item.q}
                  </span>
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground pb-5 pl-10 font-body leading-relaxed">
                  {item.a}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="relative border-t border-border py-12 mt-12">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 bg-gradient-to-br from-primary to-secondary clip-corner flex items-center justify-center">
                <Icon name="Crosshair" size={18} className="text-background" />
              </div>
              <div className="font-display font-bold tracking-widest">
                MARKET<span className="text-neon-cyan">.CSGO</span>
              </div>
            </div>
            <div className="font-mono text-xs text-muted-foreground uppercase tracking-widest">
              © 2026 · Market CSGO · Все права защищены
            </div>
            <div className="flex gap-4">
              {['Twitter', 'Send', 'MessageCircle', 'Youtube'].map((ic, i) => (
                <a key={i} href="#" className="w-10 h-10 border border-border clip-corner flex items-center justify-center hover:border-primary hover:text-neon-cyan transition-all">
                  <Icon name={ic} size={16} />
                </a>
              ))}
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
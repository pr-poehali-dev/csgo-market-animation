import Icon from '@/components/ui/icon';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';

const history = [
  { type: 'buy', item: 'AWP | Asiimov', price: '12 450', date: '23.04.2026', status: 'Завершено' },
  { type: 'sell', item: 'Glock-18 | Fade', price: '8 900', date: '21.04.2026', status: 'Завершено' },
  { type: 'buy', item: 'Karambit | Doppler', price: '156 000', date: '18.04.2026', status: 'Завершено' },
  { type: 'sell', item: 'M4A1-S | Hyper Beast', price: '3 420', date: '15.04.2026', status: 'Завершено' },
];

const HistorySupportSection = () => {
  return (
    <>
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
    </>
  );
};

export default HistorySupportSection;

import Icon from '@/components/ui/icon';

const history = [
  { type: 'buy', item: 'AWP | Asiimov', price: 12450, date: '23.04.2026 14:32', status: 'done' },
  { type: 'sell', item: 'Glock-18 | Fade', price: 8900, date: '21.04.2026 09:18', status: 'done' },
  { type: 'buy', item: '★ Karambit | Doppler', price: 156000, date: '18.04.2026 20:47', status: 'done' },
  { type: 'sell', item: 'M4A1-S | Hyper Beast', price: 3420, date: '15.04.2026 11:05', status: 'done' },
  { type: 'buy', item: 'AK-47 | Redline', price: 1290, date: '12.04.2026 16:22', status: 'done' },
];

const stats = [
  { label: 'Всего сделок', value: '147', icon: 'Activity' },
  { label: 'Куплено', value: '89', icon: 'ArrowDownLeft' },
  { label: 'Продано', value: '58', icon: 'ArrowUpRight' },
  { label: 'Оборот', value: '1 284 900 ₽', icon: 'TrendingUp' },
];

const HistorySupportSection = () => {
  return (
    <>
      <section id="history" className="py-10 border-t border-border">
        <div className="container mx-auto px-6">
          <div className="flex items-center justify-between mb-5">
            <h2 className="text-2xl font-semibold">История операций</h2>
            <button className="text-sm text-primary-orange hover:underline flex items-center gap-1">
              <Icon name="Download" size={14} />
              Экспорт в CSV
            </button>
          </div>

          <div className="grid md:grid-cols-4 gap-3 mb-6">
            {stats.map((s, i) => (
              <div key={i} className="bg-card border border-border rounded p-4">
                <div className="flex items-center justify-between text-xs text-muted-foreground mb-2">
                  <span>{s.label}</span>
                  <Icon name={s.icon} size={14} />
                </div>
                <div className="text-xl font-bold">{s.value}</div>
              </div>
            ))}
          </div>

          <div className="bg-card border border-border rounded overflow-hidden">
            <div className="grid grid-cols-12 px-4 h-10 items-center border-b border-border bg-muted/40 text-xs text-muted-foreground font-medium">
              <div className="col-span-2">Тип</div>
              <div className="col-span-5">Предмет</div>
              <div className="col-span-2 text-right">Сумма</div>
              <div className="col-span-2">Дата</div>
              <div className="col-span-1 text-right">Статус</div>
            </div>
            {history.map((h, i) => (
              <div
                key={i}
                className="grid grid-cols-12 px-4 h-12 items-center border-b border-border last:border-0 hover:bg-muted/30 transition-colors text-sm"
              >
                <div className="col-span-2">
                  <span
                    className={`inline-flex items-center gap-1 px-2 h-6 rounded text-xs font-medium ${
                      h.type === 'buy' ? 'bg-blue-500/15 text-blue-400' : 'bg-purple-500/15 text-purple-400'
                    }`}
                  >
                    <Icon name={h.type === 'buy' ? 'ArrowDownLeft' : 'ArrowUpRight'} size={12} />
                    {h.type === 'buy' ? 'Покупка' : 'Продажа'}
                  </span>
                </div>
                <div className="col-span-5 font-medium">{h.item}</div>
                <div className="col-span-2 text-right font-semibold">{h.price.toLocaleString('ru-RU')} ₽</div>
                <div className="col-span-2 text-muted-foreground text-xs">{h.date}</div>
                <div className="col-span-1 text-right">
                  <span className="inline-flex items-center justify-center w-6 h-6 rounded-full bg-green-500/15" style={{ background: 'hsl(var(--positive) / 0.15)' }}>
                    <Icon name="Check" size={13} style={{ color: 'hsl(var(--positive))' }} />
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="support" className="py-10 border-t border-border">
        <div className="container mx-auto px-6">
          <h2 className="text-2xl font-semibold mb-5">Поддержка 24/7</h2>

          <div className="grid md:grid-cols-4 gap-3">
            {[
              { icon: 'MessageCircle', label: 'Онлайн-чат', desc: 'Ответ через 3 мин' },
              { icon: 'Mail', label: 'E-mail', desc: 'support@market.skins' },
              { icon: 'Send', label: 'Telegram', desc: '@market_skins_bot' },
              { icon: 'BookOpen', label: 'База знаний', desc: '1 247 статей' },
            ].map((c, i) => (
              <button
                key={i}
                className="bg-card border border-border rounded p-4 text-left hover:border-primary-orange transition-colors group"
              >
                <Icon name={c.icon} size={22} className="text-primary-orange mb-3" />
                <div className="font-semibold mb-0.5">{c.label}</div>
                <div className="text-xs text-muted-foreground">{c.desc}</div>
              </button>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default HistorySupportSection;

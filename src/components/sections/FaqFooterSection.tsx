import Icon from '@/components/ui/icon';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';

const FaqFooterSection = () => {
  return (
    <>
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
    </>
  );
};

export default FaqFooterSection;

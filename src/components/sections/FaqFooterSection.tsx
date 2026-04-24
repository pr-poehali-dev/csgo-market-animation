import Icon from '@/components/ui/icon';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';

const faqs = [
  { q: 'Как быстро проходит сделка?', a: 'Автоматический обмен занимает 30 секунд – 2 минуты. Трейд-оффер отправляется сразу после оплаты, остаётся подтвердить его в Steam.' },
  { q: 'Какая комиссия площадки?', a: 'Комиссия 5% удерживается только с продавца при успешной сделке. Покупатель платит только цену предмета, без скрытых платежей.' },
  { q: 'Безопасно ли торговать?', a: 'Steam Guard, 2FA, SSL-шифрование и холодное хранение средств. За 8 лет работы — ни одного взлома.' },
  { q: 'Как вывести деньги?', a: 'Вывод на карту, СБП, QIWI и криптокошельки. Минимум 100 ₽, комиссия от 0%, скорость от 5 минут до 24 часов.' },
  { q: 'Что если сделка не прошла?', a: 'Полная защита покупателя. Если продавец не отправил предмет — деньги моментально возвращаются на баланс.' },
  { q: 'Где посмотреть историю?', a: 'В личном кабинете в разделе «История» — журнал покупок и продаж, экспорт CSV, налоговые отчёты.' },
];

const FaqFooterSection = () => {
  return (
    <>
      <section id="faq" className="py-10 border-t border-border">
        <div className="container mx-auto px-6 max-w-3xl">
          <h2 className="text-2xl font-semibold mb-5">Частые вопросы</h2>

          <Accordion type="single" collapsible className="space-y-2">
            {faqs.map((item, i) => (
              <AccordionItem
                key={i}
                value={`item-${i}`}
                className="bg-card border border-border rounded px-4 overflow-hidden"
              >
                <AccordionTrigger className="text-sm font-medium hover:no-underline py-4">
                  {item.q}
                </AccordionTrigger>
                <AccordionContent className="text-sm text-muted-foreground pb-4 leading-relaxed">
                  {item.a}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </section>

      <footer className="border-t border-border py-8 mt-4">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-5 gap-8 mb-8">
            <div className="md:col-span-2">
              <div className="flex items-center gap-2 mb-3">
                <div className="w-7 h-7 rounded bg-primary-orange flex items-center justify-center">
                  <Icon name="Crosshair" size={16} className="text-background" />
                </div>
                <span className="font-semibold">market.skins</span>
              </div>
              <p className="text-sm text-muted-foreground max-w-sm leading-relaxed">
                Площадка для безопасной торговли игровыми предметами. Работаем с 2018 года.
              </p>
            </div>

            {[
              {
                title: 'Торговля',
                links: ['Купить', 'Продать', 'Обменять', 'Мои предметы'],
              },
              {
                title: 'Компания',
                links: ['О нас', 'Блог', 'Вакансии', 'Контакты'],
              },
              {
                title: 'Помощь',
                links: ['FAQ', 'Поддержка', 'API', 'Условия'],
              },
            ].map((col, i) => (
              <div key={i}>
                <div className="text-sm font-semibold mb-3">{col.title}</div>
                <ul className="space-y-2">
                  {col.links.map((l, j) => (
                    <li key={j}>
                      <a href="#" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                        {l}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          <div className="flex flex-col md:flex-row items-center justify-between gap-4 pt-6 border-t border-border text-xs text-muted-foreground">
            <div>© 2026 market.skins — все права защищены</div>
            <div className="flex items-center gap-3">
              {['Twitter', 'Send', 'MessageCircle', 'Youtube'].map((ic, i) => (
                <a
                  key={i}
                  href="#"
                  className="w-8 h-8 rounded bg-muted hover:bg-border flex items-center justify-center transition-colors"
                >
                  <Icon name={ic} size={14} />
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

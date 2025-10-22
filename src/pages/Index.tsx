import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import Icon from "@/components/ui/icon";

const Index = () => {
  const sections = [
    {
      id: "route",
      icon: "Map",
      title: "Планирование маршрута",
      description: "Создайте идеальный маршрут для вашего путешествия",
      content: "Научитесь составлять удобный и оптимальный маршрут путешествия. Выбирайте лучшие направления с учетом времени, бюджета и интересов. Используйте полезные сервисы для поиска и сравнения маршрутов, чтобы сделать вашу поездку незабываемой.",
      tips: [
        "Определите основные точки интереса",
        "Рассчитайте время на переезды",
        "Учитывайте сезонность направлений",
        "Оставьте время для спонтанных открытий"
      ]
    },
    {
      id: "tickets",
      icon: "Ticket",
      title: "Бронирование билетов",
      description: "Найдите выгодные билеты на все виды транспорта",
      content: "Узнайте все способы поиска и бронирования авиабилетов, железнодорожных и автобусных билетов через различные онлайн-платформы. Мы расскажем, как найти выгодные предложения, на что обратить внимание при выборе места и условиях возврата.",
      tips: [
        "Бронируйте заранее для лучших цен",
        "Сравнивайте цены на разных платформах",
        "Проверяйте условия возврата билетов",
        "Подпишитесь на уведомления о скидках"
      ]
    },
    {
      id: "hotels",
      icon: "Hotel",
      title: "Выбор отелей",
      description: "Забронируйте идеальное жилье для вашей поездки",
      content: "Получите рекомендации по поиску и бронированию гостиниц и апартаментов. Узнайте о популярных сайтах для бронирования, критериях выбора жилья в зависимости от целей и бюджета поездки, а также о тонкостях оценки отзывов и расположения отеля.",
      tips: [
        "Читайте свежие отзывы гостей",
        "Проверяйте расположение на карте",
        "Уточняйте, что входит в стоимость",
        "Смотрите реальные фото от гостей"
      ]
    },
    {
      id: "currency",
      icon: "Banknote",
      title: "Валюта для путешествий",
      description: "Управляйте финансами в поездке эффективно",
      content: "Узнайте, какую валюту лучше брать с собой, когда обменивать деньги, и стоит ли использовать банковские карты за границей. Получите советы по минимизации комиссий и узнайте о распространенных ошибках, которых стоит избегать.",
      tips: [
        "Обменивайте крупные суммы в банках",
        "Используйте карты без комиссий",
        "Храните наличные в разных местах",
        "Всегда имейте запас местной валюты"
      ]
    },
    {
      id: "packing",
      icon: "Backpack",
      title: "Список вещей в дорогу",
      description: "Соберите багаж правильно и ничего не забудьте",
      content: "Воспользуйтесь нашим полным списком необходимых вещей для разных типов поездок. Включены рекомендации по одежде, средствам личной гигиены, электронике, аптечке и многому другому. Особое внимание уделяем особенностям путешествий в разные сезоны и регионы.",
      tips: [
        "Составьте список заранее",
        "Проверьте багажные ограничения",
        "Упакуйте ценное в ручную кладь",
        "Не забудьте документы и зарядки"
      ]
    }
  ];

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-background to-secondary/30">
      <header className="relative h-[70vh] overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: 'url(https://cdn.poehali.dev/projects/f2759ca5-d203-4a30-8bd5-2a161e230669/files/7a340246-531b-4d8b-95bf-a3038d208a54.jpg)' }}
        >
          <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-background"></div>
        </div>
        
        <div className="relative h-full flex flex-col items-center justify-center text-center px-4 max-w-4xl mx-auto">
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 animate-fade-in">
            Планирование путешествий
          </h1>
          <p className="text-xl md:text-2xl text-white/90 mb-8 max-w-2xl animate-fade-in" style={{ animationDelay: '0.2s' }}>
            Ваш надежный помощник в организации незабываемых поездок
          </p>
          <Button 
            size="lg" 
            className="animate-fade-in text-lg px-8 py-6"
            style={{ animationDelay: '0.4s' }}
            onClick={() => scrollToSection('sections')}
          >
            Начать планирование
            <Icon name="ArrowDown" className="ml-2" size={20} />
          </Button>
        </div>
      </header>

      <main className="container mx-auto px-4 py-16">
        <section className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Всё для идеального путешествия
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Мы поможем вам сэкономить время, деньги и нервы, сделать путешествие комфортным и безопасным. 
            Наша информация регулярно обновляется с учетом новых трендов и изменений в туристической отрасли.
          </p>
        </section>

        <section id="sections" className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {sections.map((section, index) => (
            <Card 
              key={section.id}
              className="hover:shadow-xl transition-all duration-300 hover:-translate-y-1 cursor-pointer animate-fade-in"
              style={{ animationDelay: `${index * 0.1}s` }}
              onClick={() => scrollToSection(section.id)}
            >
              <CardHeader>
                <div className="w-14 h-14 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                  <Icon name={section.icon as any} className="text-primary" size={28} />
                </div>
                <CardTitle className="text-2xl">{section.title}</CardTitle>
                <CardDescription className="text-base">{section.description}</CardDescription>
              </CardHeader>
            </Card>
          ))}
        </section>

        <section className="space-y-12">
          {sections.map((section) => (
            <div key={section.id} id={section.id} className="scroll-mt-20">
              <Card className="overflow-hidden">
                <CardHeader className="bg-gradient-to-r from-primary/5 to-accent/5 border-b">
                  <div className="flex items-start gap-4">
                    <div className="w-16 h-16 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                      <Icon name={section.icon as any} className="text-primary" size={32} />
                    </div>
                    <div className="flex-1">
                      <CardTitle className="text-3xl mb-2">{section.title}</CardTitle>
                      <CardDescription className="text-base">{section.description}</CardDescription>
                    </div>
                  </div>
                </CardHeader>
                <CardContent className="pt-6">
                  <p className="text-lg mb-6 leading-relaxed">{section.content}</p>
                  
                  <Accordion type="single" collapsible className="w-full">
                    <AccordionItem value="tips">
                      <AccordionTrigger className="text-lg font-semibold">
                        <div className="flex items-center gap-2">
                          <Icon name="Lightbulb" size={20} className="text-accent" />
                          Полезные советы
                        </div>
                      </AccordionTrigger>
                      <AccordionContent>
                        <ul className="space-y-3 mt-4">
                          {section.tips.map((tip, index) => (
                            <li key={index} className="flex items-start gap-3">
                              <Icon name="CheckCircle" size={20} className="text-primary flex-shrink-0 mt-0.5" />
                              <span className="text-base">{tip}</span>
                            </li>
                          ))}
                        </ul>
                      </AccordionContent>
                    </AccordionItem>
                  </Accordion>
                </CardContent>
              </Card>
            </div>
          ))}
        </section>

        <section className="mt-20 text-center bg-gradient-to-r from-primary/10 via-accent/10 to-primary/10 rounded-2xl p-12">
          <Icon name="Compass" size={48} className="mx-auto mb-6 text-primary" />
          <h2 className="text-4xl font-bold mb-4">Готовы отправиться в путешествие?</h2>
          <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
            Используйте наши советы и рекомендации, чтобы сделать вашу поездку максимально комфортной и запоминающейся. 
            Счастливого пути!
          </p>
          <Button size="lg" className="text-lg px-8 py-6">
            Начать планирование
            <Icon name="Plane" className="ml-2" size={20} />
          </Button>
        </section>
      </main>

      <footer className="bg-primary/5 mt-20 py-12 border-t">
        <div className="container mx-auto px-4 text-center">
          <div className="flex justify-center gap-8 mb-6">
            <Icon name="Globe" size={24} className="text-muted-foreground" />
            <Icon name="Map" size={24} className="text-muted-foreground" />
            <Icon name="Compass" size={24} className="text-muted-foreground" />
          </div>
          <p className="text-muted-foreground">
            © 2025 Планирование путешествий. Путешествуйте с удовольствием!
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Index;

import { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import Icon from '@/components/ui/icon';

interface TimelineEvent {
  year: string;
  title: string;
  description: string;
  category: string;
}

const timelineEvents: TimelineEvent[] = [
  {
    year: '1941',
    title: 'Создание системы эвакогоспиталей',
    description: 'Организована сеть эвакуационных госпиталей в тылу. За годы войны развёрнуто более 6000 госпиталей.',
    category: 'Организация'
  },
  {
    year: '1942',
    title: 'Внедрение донорства крови',
    description: 'Массовое донорское движение спасло тысячи жизней. Создана система заготовки и переливания крови на фронте.',
    category: 'Медицина'
  },
  {
    year: '1943',
    title: 'Борьба с эпидемиями',
    description: 'Успешная профилактика эпидемий сыпного тифа и других инфекций в войсках и среди населения.',
    category: 'Профилактика'
  },
  {
    year: '1944',
    title: 'Новые методы хирургии',
    description: 'Разработаны передовые методы лечения ранений. Академик Н.Н. Бурденко совершенствует нейрохирургию.',
    category: 'Хирургия'
  },
  {
    year: '1945',
    title: 'Возвращение в строй',
    description: '72,3% раненых возвращены в строй - беспрецедентный показатель в истории военной медицины.',
    category: 'Результаты'
  }
];

const Index = () => {
  const [selectedYear, setSelectedYear] = useState<string | null>(null);

  const getCategoryColor = (category: string) => {
    const colors: Record<string, string> = {
      'Организация': 'bg-accent/20 text-accent-foreground border-accent',
      'Медицина': 'bg-primary/20 text-primary-foreground border-primary',
      'Профилактика': 'bg-secondary/30 text-secondary-foreground border-secondary',
      'Хирургия': 'bg-muted text-muted-foreground border-muted-foreground',
      'Результаты': 'bg-accent text-accent-foreground border-accent'
    };
    return colors[category] || 'bg-secondary';
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-background via-secondary/30 to-background">
      <div className="container mx-auto px-4 py-8 md:py-16">
        <header className="text-center mb-12 md:mb-20 animate-fade-in">
          <div className="inline-block mb-4 p-4 bg-primary/10 rounded-lg border-2 border-primary/20">
            <Icon name="Cross" size={48} className="text-primary" />
          </div>
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-primary mb-4 tracking-tight">
            Медицина в период<br />Великой Отечественной войны
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            1941–1945
          </p>
          <div className="mt-6 h-1 w-32 bg-primary/30 mx-auto rounded"></div>
        </header>

        <section className="mb-16 md:mb-24">
          <Card className="bg-card/80 backdrop-blur border-2 border-primary/20 shadow-2xl">
            <CardHeader className="text-center pb-8">
              <CardTitle className="text-3xl md:text-4xl text-primary mb-2">
                История медицины военного времени
              </CardTitle>
              <CardDescription className="text-base md:text-lg">
                Подвиг советских медиков в годы войны
              </CardDescription>
            </CardHeader>
            <CardContent className="prose prose-lg max-w-none text-foreground">
              <p className="text-base md:text-lg leading-relaxed mb-4">
                Великая Отечественная война стала временем величайших испытаний для советской медицины. 
                Медицинские работники проявили героизм и самоотверженность, спасая жизни раненых бойцов 
                в условиях фронта.
              </p>
              <p className="text-base md:text-lg leading-relaxed">
                За годы войны медицинская служба вернула в строй более 17 миллионов раненых и больных воинов. 
                Это достижение стало возможным благодаря чёткой организации эвакуации, высокому мастерству 
                хирургов и самоотверженному труду медсестёр и санитаров.
              </p>
            </CardContent>
          </Card>
        </section>

        <section className="mb-16 md:mb-24">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-5xl font-bold text-primary mb-4">
              Временная шкала событий
            </h2>
            <p className="text-muted-foreground text-lg">
              Ключевые достижения военной медицины 1941–1945
            </p>
          </div>

          <div className="relative">
            <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-primary/30 hidden md:block"></div>
            
            <div className="space-y-8 md:space-y-12">
              {timelineEvents.map((event, index) => (
                <div
                  key={index}
                  className={`relative animate-fade-in ${
                    index % 2 === 0 ? 'md:pr-1/2' : 'md:pl-1/2'
                  }`}
                  style={{ animationDelay: `${index * 150}ms` }}
                >
                  <Card
                    className={`cursor-pointer transition-all duration-300 hover:scale-105 hover:shadow-2xl border-2 ${
                      selectedYear === event.year
                        ? 'border-primary shadow-2xl bg-primary/5'
                        : 'border-primary/20 bg-card/90'
                    }`}
                    onClick={() => setSelectedYear(selectedYear === event.year ? null : event.year)}
                  >
                    <CardHeader>
                      <div className="flex items-start justify-between gap-4 mb-2">
                        <Badge
                          variant="outline"
                          className="text-2xl md:text-3xl font-bold px-4 py-2 bg-primary text-primary-foreground border-primary"
                        >
                          {event.year}
                        </Badge>
                        <Badge
                          variant="outline"
                          className={`${getCategoryColor(event.category)} px-3 py-1`}
                        >
                          {event.category}
                        </Badge>
                      </div>
                      <CardTitle className="text-xl md:text-2xl text-primary">
                        {event.title}
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-foreground leading-relaxed">
                        {event.description}
                      </p>
                    </CardContent>
                  </Card>

                  <div className="hidden md:block absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-6 h-6 bg-primary border-4 border-background rounded-full shadow-lg"></div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="grid md:grid-cols-3 gap-6 md:gap-8 mb-16">
          <Card className="text-center bg-card/90 border-2 border-primary/20 hover:shadow-xl transition-shadow">
            <CardHeader>
              <div className="mx-auto mb-4 w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center">
                <Icon name="Heart" size={32} className="text-primary" />
              </div>
              <CardTitle className="text-primary text-2xl">17 млн</CardTitle>
              <CardDescription className="text-base">
                раненых и больных возвращены в строй
              </CardDescription>
            </CardHeader>
          </Card>

          <Card className="text-center bg-card/90 border-2 border-primary/20 hover:shadow-xl transition-shadow">
            <CardHeader>
              <div className="mx-auto mb-4 w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center">
                <Icon name="Hospital" size={32} className="text-primary" />
              </div>
              <CardTitle className="text-primary text-2xl">6000+</CardTitle>
              <CardDescription className="text-base">
                эвакогоспиталей развёрнуто в тылу
              </CardDescription>
            </CardHeader>
          </Card>

          <Card className="text-center bg-card/90 border-2 border-primary/20 hover:shadow-xl transition-shadow">
            <CardHeader>
              <div className="mx-auto mb-4 w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center">
                <Icon name="Award" size={32} className="text-primary" />
              </div>
              <CardTitle className="text-primary text-2xl">72,3%</CardTitle>
              <CardDescription className="text-base">
                раненых возвращены в строй
              </CardDescription>
            </CardHeader>
          </Card>
        </section>

        <footer className="text-center pt-12 border-t-2 border-primary/20">
          <p className="text-muted-foreground text-sm">
            В память о подвиге советских медиков 1941–1945
          </p>
        </footer>
      </div>
    </div>
  );
};

export default Index;

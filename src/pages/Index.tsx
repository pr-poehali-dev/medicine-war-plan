import { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import Icon from '@/components/ui/icon';

interface Task {
  id: string;
  title: string;
  category: string;
  priority: 'high' | 'medium' | 'low';
  completed: boolean;
  icon: string;
}

const initialTasks: Task[] = [
  { id: '1', title: 'Пропылесосить ковры', category: 'Уборка', priority: 'high', completed: false, icon: 'Sparkles' },
  { id: '2', title: 'Помыть посуду', category: 'Кухня', priority: 'high', completed: false, icon: 'Utensils' },
  { id: '3', title: 'Постирать бельё', category: 'Стирка', priority: 'medium', completed: false, icon: 'Shirt' },
  { id: '4', title: 'Полить цветы', category: 'Растения', priority: 'medium', completed: false, icon: 'Flower2' },
  { id: '5', title: 'Вынести мусор', category: 'Уборка', priority: 'high', completed: false, icon: 'Trash2' },
  { id: '6', title: 'Приготовить ужин', category: 'Кухня', priority: 'high', completed: false, icon: 'ChefHat' },
  { id: '7', title: 'Протереть пыль', category: 'Уборка', priority: 'low', completed: false, icon: 'Wind' },
  { id: '8', title: 'Погладить одежду', category: 'Стирка', priority: 'low', completed: false, icon: 'Waves' },
];

const categories = ['Все', 'Уборка', 'Кухня', 'Стирка', 'Растения'];

const Index = () => {
  const [tasks, setTasks] = useState<Task[]>(initialTasks);
  const [selectedCategory, setSelectedCategory] = useState('Все');

  const toggleTask = (id: string) => {
    setTasks(tasks.map(task => 
      task.id === id ? { ...task, completed: !task.completed } : task
    ));
  };

  const filteredTasks = selectedCategory === 'Все' 
    ? tasks 
    : tasks.filter(task => task.category === selectedCategory);

  const completedCount = tasks.filter(t => t.completed).length;
  const progressPercentage = Math.round((completedCount / tasks.length) * 100);

  const getPriorityColor = (priority: string) => {
    switch(priority) {
      case 'high': return 'bg-red-100 text-red-700 border-red-300';
      case 'medium': return 'bg-yellow-100 text-yellow-700 border-yellow-300';
      case 'low': return 'bg-green-100 text-green-700 border-green-300';
      default: return 'bg-gray-100';
    }
  };

  const getPriorityLabel = (priority: string) => {
    switch(priority) {
      case 'high': return 'Важно';
      case 'medium': return 'Средне';
      case 'low': return 'Не срочно';
      default: return '';
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 via-amber-50 to-yellow-50">
      <div className="container mx-auto px-4 py-8 max-w-6xl">
        <header className="text-center mb-8 animate-fade-in">
          <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-br from-orange-400 to-amber-500 rounded-2xl mb-4 shadow-lg">
            <Icon name="Home" size={40} className="text-white" />
          </div>
          <h1 className="text-5xl font-bold bg-gradient-to-r from-orange-600 to-amber-600 bg-clip-text text-transparent mb-2">
            Домашние дела
          </h1>
          <p className="text-lg text-gray-600">
            Организуйте свой быт легко и с удовольствием
          </p>
        </header>

        <div className="mb-8 animate-fade-in" style={{ animationDelay: '100ms' }}>
          <Card className="bg-white/80 backdrop-blur border-2 border-orange-200 shadow-xl">
            <CardHeader className="pb-3">
              <CardTitle className="text-xl text-orange-700 flex items-center gap-2">
                <Icon name="TrendingUp" size={24} />
                Прогресс дня
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex items-center gap-4">
                <div className="flex-1">
                  <div className="h-4 bg-gray-200 rounded-full overflow-hidden">
                    <div 
                      className="h-full bg-gradient-to-r from-orange-500 to-amber-500 transition-all duration-500 ease-out"
                      style={{ width: `${progressPercentage}%` }}
                    ></div>
                  </div>
                </div>
                <div className="text-2xl font-bold text-orange-600">
                  {completedCount}/{tasks.length}
                </div>
              </div>
              <p className="text-sm text-gray-600 mt-2">
                {progressPercentage === 100 
                  ? '🎉 Все дела выполнены! Отличная работа!' 
                  : `Выполнено ${progressPercentage}% задач`}
              </p>
            </CardContent>
          </Card>
        </div>

        <div className="mb-6 flex flex-wrap gap-2 justify-center animate-fade-in" style={{ animationDelay: '200ms' }}>
          {categories.map((category) => (
            <Button
              key={category}
              variant={selectedCategory === category ? 'default' : 'outline'}
              onClick={() => setSelectedCategory(category)}
              className={selectedCategory === category 
                ? 'bg-gradient-to-r from-orange-500 to-amber-500 hover:from-orange-600 hover:to-amber-600 text-white border-0 shadow-lg'
                : 'border-2 border-orange-200 hover:bg-orange-50 hover:border-orange-300 text-gray-700'}
            >
              {category}
            </Button>
          ))}
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
          {filteredTasks.map((task, index) => (
            <Card
              key={task.id}
              className={`cursor-pointer transition-all duration-300 hover:scale-105 hover:shadow-xl border-2 animate-fade-in ${
                task.completed
                  ? 'bg-green-50/80 border-green-300 opacity-75'
                  : 'bg-white/80 border-orange-200'
              }`}
              style={{ animationDelay: `${300 + index * 50}ms` }}
              onClick={() => toggleTask(task.id)}
            >
              <CardHeader className="pb-3">
                <div className="flex items-start justify-between gap-2 mb-2">
                  <div className={`flex items-center justify-center w-12 h-12 rounded-xl transition-all ${
                    task.completed 
                      ? 'bg-green-100' 
                      : 'bg-gradient-to-br from-orange-100 to-amber-100'
                  }`}>
                    <Icon 
                      name={task.completed ? 'CheckCircle2' : task.icon} 
                      size={24} 
                      className={task.completed ? 'text-green-600' : 'text-orange-600'}
                    />
                  </div>
                  <Badge
                    variant="outline"
                    className={`${getPriorityColor(task.priority)} text-xs`}
                  >
                    {getPriorityLabel(task.priority)}
                  </Badge>
                </div>
                <CardTitle className={`text-lg ${task.completed ? 'line-through text-gray-500' : 'text-gray-800'}`}>
                  {task.title}
                </CardTitle>
                <CardDescription className="text-sm">
                  {task.category}
                </CardDescription>
              </CardHeader>
            </Card>
          ))}
        </div>

        {filteredTasks.length === 0 && (
          <div className="text-center py-12 animate-fade-in">
            <Icon name="Search" size={48} className="text-gray-400 mx-auto mb-4" />
            <p className="text-xl text-gray-500">Нет задач в этой категории</p>
          </div>
        )}

        <footer className="text-center mt-12 pt-8 border-t-2 border-orange-200">
          <p className="text-sm text-gray-500 flex items-center justify-center gap-2">
            <Icon name="Heart" size={16} className="text-orange-500" />
            Создано для уютного дома
          </p>
        </footer>
      </div>
    </div>
  );
};

export default Index;

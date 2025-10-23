import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import Icon from '@/components/ui/icon';
import { Badge } from '@/components/ui/badge';

const slides = [
  {
    id: 0,
    title: 'АНАЛИТИЧЕСКАЯ ХИМИЯ',
    subtitle: 'Научные методы и визуализация',
    type: 'title',
  },
  {
    id: 1,
    title: 'Введение в аналитическую химию',
    content: 'Аналитическая химия — раздел химии, изучающий химический состав и структуру веществ, разрабатывающий методы их анализа.',
    points: [
      'Качественный анализ — определение состава вещества',
      'Количественный анализ — определение количества компонентов',
      'Инструментальные методы анализа',
      'Химические методы анализа'
    ],
    icon: 'Microscope',
    color: 'from-primary/20 to-primary/5'
  },
  {
    id: 2,
    title: 'Определение кофеина в чае и кофе',
    description: 'Экстракция и спектрофотометрия',
    content: 'Метод позволяет количественно определить содержание кофеина в различных сортах чая и кофе, исследовать влияние времени заваривания и температуры.',
    image: 'https://cdn.poehali.dev/projects/dd03e286-2f61-4b67-8d27-0c35da823769/files/74586a54-125b-4f07-ad9a-0f211120725c.jpg',
    details: [
      { label: 'Метод', value: 'Спектрофотометрия UV-Vis' },
      { label: 'Диапазон', value: '20-80 мг/100 мл' },
      { label: 'Точность', value: '±5%' }
    ],
    icon: 'Flask',
    color: 'from-secondary/20 to-secondary/5'
  },
  {
    id: 3,
    title: 'Хроматография красителей',
    description: 'Анализ пищевых продуктов',
    content: 'Простой и эффектный метод бумажной или тонкослойной хроматографии для анализа красителей в конфетах M&M\'s и газировках.',
    image: 'https://cdn.poehali.dev/projects/dd03e286-2f61-4b67-8d27-0c35da823769/files/a7b91c6a-0b19-43f0-92f4-1acdf35b75fe.jpg',
    details: [
      { label: 'Метод', value: 'Тонкослойная хроматография' },
      { label: 'Подвижная фаза', value: 'Этанол/вода' },
      { label: 'Время анализа', value: '15-20 минут' }
    ],
    icon: 'Palette',
    color: 'from-emerald-500/20 to-emerald-500/5'
  },
  {
    id: 4,
    title: 'Определение жесткости воды',
    description: 'Комплексонометрическое титрование',
    content: 'Классический метод трилонометрии для определения жесткости воды из различных источников: водопроводной, бутилированной, родниковой.',
    image: 'https://cdn.poehali.dev/projects/dd03e286-2f61-4b67-8d27-0c35da823769/files/f2fff75e-8659-4552-b222-0b4179d3dab0.jpg',
    details: [
      { label: 'Метод', value: 'Трилонометрия (EDTA)' },
      { label: 'Индикатор', value: 'Эриохром черный T' },
      { label: 'Единицы', value: 'мг-экв/л, °Ж' }
    ],
    icon: 'Droplet',
    color: 'from-blue-500/20 to-blue-500/5'
  },
  {
    id: 5,
    title: 'Иодометрия витамина C',
    description: 'Определение в соках',
    content: 'Исследование содержания аскорбиновой кислоты в соках при хранении. Изучение влияния света, температуры и времени на разрушение витамина C.',
    details: [
      { label: 'Метод', value: 'Иодометрическое титрование' },
      { label: 'Индикатор', value: 'Крахмал' },
      { label: 'Норма в соках', value: '20-50 мг/100 мл' }
    ],
    chart: {
      labels: ['Свежий', '1 день', '3 дня', '7 дней'],
      data: [100, 85, 65, 40]
    },
    icon: 'Apple',
    color: 'from-orange-500/20 to-orange-500/5'
  },
  {
    id: 6,
    title: 'Анализ тяжелых металлов',
    description: 'Качественный и количественный анализ',
    content: 'Определение ионов тяжелых металлов (свинец, медь) в почве и воде с помощью качественных реакций и спектрофотометрии.',
    details: [
      { label: 'Метод', value: 'Атомно-абсорбционная спектрометрия' },
      { label: 'ПДК Pb', value: '0.01 мг/л' },
      { label: 'ПДК Cu', value: '1.0 мг/л' }
    ],
    metals: [
      { name: 'Свинец (Pb)', color: 'bg-gray-400', danger: 'высокая' },
      { name: 'Медь (Cu)', color: 'bg-orange-400', danger: 'средняя' },
      { name: 'Кадмий (Cd)', color: 'bg-slate-400', danger: 'высокая' }
    ],
    icon: 'Atom',
    color: 'from-purple-500/20 to-purple-500/5'
  },
  {
    id: 7,
    title: 'Заключение',
    content: 'Представленные методы аналитической химии демонстрируют практическое применение научных знаний в повседневной жизни.',
    conclusions: [
      'Аналитическая химия — основа контроля качества продуктов',
      'Простые методы дают точные результаты',
      'Важность регулярного мониторинга окружающей среды',
      'Доступность методов для образовательных целей'
    ],
    icon: 'CheckCircle',
    type: 'conclusion'
  }
];

export default function Index() {
  const [currentSlide, setCurrentSlide] = useState(0);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  const goToSlide = (index: number) => {
    setCurrentSlide(index);
  };

  const slide = slides[currentSlide];

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-background to-card">
      <div className="container mx-auto px-4 py-8 max-w-7xl">
        {slide.type === 'title' ? (
          <div className="min-h-[80vh] flex flex-col items-center justify-center text-center space-y-8 animate-fade-in">
            <div className="space-y-4">
              <h1 className="text-6xl md:text-8xl font-heading font-bold tracking-tight bg-gradient-to-r from-primary via-secondary to-primary bg-clip-text text-transparent">
                {slide.title}
              </h1>
              <p className="text-2xl md:text-3xl text-muted-foreground font-heading">
                {slide.subtitle}
              </p>
            </div>
            <div className="flex gap-6 items-center justify-center flex-wrap mt-8">
              <div className="flex items-center gap-3">
                <div className="p-3 rounded-full bg-primary/20">
                  <Icon name="Beaker" size={32} className="text-primary" />
                </div>
                <span className="text-lg">5 методов анализа</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="p-3 rounded-full bg-secondary/20">
                  <Icon name="LineChart" size={32} className="text-secondary" />
                </div>
                <span className="text-lg">Визуализация данных</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="p-3 rounded-full bg-emerald-500/20">
                  <Icon name="Microscope" size={32} className="text-emerald-500" />
                </div>
                <span className="text-lg">Практические примеры</span>
              </div>
            </div>
          </div>
        ) : slide.type === 'conclusion' ? (
          <div className="min-h-[80vh] flex flex-col justify-center animate-slide-up">
            <Card className="p-12 bg-gradient-to-br from-card to-card/50 border-primary/20">
              <div className="text-center space-y-8">
                <div className="flex justify-center">
                  <div className="p-6 rounded-full bg-primary/20 animate-scale-in">
                    <Icon name={slide.icon || 'CheckCircle'} size={64} className="text-primary" />
                  </div>
                </div>
                <h2 className="text-5xl font-heading font-bold">{slide.title}</h2>
                <p className="text-xl text-muted-foreground max-w-3xl mx-auto">{slide.content}</p>
                <div className="grid md:grid-cols-2 gap-4 mt-8 max-w-4xl mx-auto">
                  {slide.conclusions?.map((conclusion, idx) => (
                    <div
                      key={idx}
                      className="flex items-start gap-3 p-4 rounded-lg bg-primary/5 border border-primary/20 hover:border-primary/40 transition-all"
                      style={{ animationDelay: `${idx * 100}ms` }}
                    >
                      <Icon name="Check" size={20} className="text-primary mt-1 flex-shrink-0" />
                      <span className="text-left">{conclusion}</span>
                    </div>
                  ))}
                </div>
              </div>
            </Card>
          </div>
        ) : (
          <div className="min-h-[80vh] flex flex-col justify-center animate-fade-in">
            <Card className={`p-8 md:p-12 bg-gradient-to-br ${slide.color} border-primary/10`}>
              <div className="flex items-start gap-6 mb-6">
                <div className="p-4 rounded-xl bg-primary/20 flex-shrink-0">
                  <Icon name={slide.icon || 'Flask'} size={40} className="text-primary" />
                </div>
                <div className="flex-1">
                  <h2 className="text-4xl md:text-5xl font-heading font-bold mb-2">{slide.title}</h2>
                  {slide.description && (
                    <Badge variant="secondary" className="text-base px-4 py-1">
                      {slide.description}
                    </Badge>
                  )}
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-8 mt-8">
                <div className="space-y-6">
                  <p className="text-lg leading-relaxed">{slide.content}</p>

                  {slide.points && (
                    <div className="space-y-3">
                      {slide.points.map((point, idx) => (
                        <div key={idx} className="flex items-start gap-3">
                          <Icon name="ChevronRight" size={20} className="text-primary mt-1 flex-shrink-0" />
                          <span>{point}</span>
                        </div>
                      ))}
                    </div>
                  )}

                  {slide.details && (
                    <div className="space-y-3 bg-card/50 p-4 rounded-lg border border-primary/10">
                      {slide.details.map((detail, idx) => (
                        <div key={idx} className="flex justify-between items-center">
                          <span className="text-muted-foreground">{detail.label}:</span>
                          <span className="font-semibold">{detail.value}</span>
                        </div>
                      ))}
                    </div>
                  )}

                  {slide.metals && (
                    <div className="space-y-3">
                      {slide.metals.map((metal, idx) => (
                        <div key={idx} className="flex items-center gap-3 p-3 rounded-lg bg-card/50">
                          <div className={`w-4 h-4 rounded-full ${metal.color}`}></div>
                          <span className="flex-1">{metal.name}</span>
                          <Badge variant={metal.danger === 'высокая' ? 'destructive' : 'secondary'}>
                            {metal.danger}
                          </Badge>
                        </div>
                      ))}
                    </div>
                  )}
                </div>

                <div className="space-y-6">
                  {slide.image && (
                    <div className="rounded-xl overflow-hidden border-2 border-primary/20 animate-scale-in">
                      <img
                        src={slide.image}
                        alt={slide.title}
                        className="w-full h-auto object-cover"
                      />
                    </div>
                  )}

                  {slide.chart && (
                    <div className="bg-card/50 p-6 rounded-lg border border-primary/10">
                      <h4 className="font-heading font-semibold mb-4 text-center">
                        Разрушение витамина C при хранении
                      </h4>
                      <div className="space-y-3">
                        {slide.chart.labels.map((label, idx) => (
                          <div key={idx} className="space-y-1">
                            <div className="flex justify-between text-sm">
                              <span>{label}</span>
                              <span className="font-semibold">{slide.chart!.data[idx]}%</span>
                            </div>
                            <div className="h-3 bg-muted rounded-full overflow-hidden">
                              <div
                                className="h-full bg-gradient-to-r from-secondary to-orange-400 transition-all duration-1000"
                                style={{ width: `${slide.chart!.data[idx]}%` }}
                              ></div>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </Card>
          </div>
        )}

        <div className="fixed bottom-8 left-1/2 -translate-x-1/2 flex items-center gap-4 bg-card/95 backdrop-blur-sm px-6 py-4 rounded-full border border-primary/20 shadow-lg">
          <Button
            variant="ghost"
            size="icon"
            onClick={prevSlide}
            className="rounded-full hover:bg-primary/20"
          >
            <Icon name="ChevronLeft" size={24} />
          </Button>

          <div className="flex gap-2">
            {slides.map((_, idx) => (
              <button
                key={idx}
                onClick={() => goToSlide(idx)}
                className={`h-2 rounded-full transition-all ${
                  idx === currentSlide
                    ? 'w-8 bg-primary'
                    : 'w-2 bg-muted-foreground/30 hover:bg-muted-foreground/50'
                }`}
              />
            ))}
          </div>

          <Button
            variant="ghost"
            size="icon"
            onClick={nextSlide}
            className="rounded-full hover:bg-primary/20"
          >
            <Icon name="ChevronRight" size={24} />
          </Button>

          <div className="ml-4 text-sm text-muted-foreground">
            {currentSlide + 1} / {slides.length}
          </div>
        </div>
      </div>
    </div>
  );
}

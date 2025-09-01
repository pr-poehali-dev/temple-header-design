import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import Icon from "@/components/ui/icon";

const Index = () => {
  const services = [
    { name: "Литургия", time: "8:00", days: "Вс, Праздники" },
    { name: "Вечерня", time: "18:00", days: "Сб" },
    { name: "Утреня", time: "7:00", days: "Вс, Праздники" },
    { name: "Молебен", time: "10:00", days: "По записи" }
  ];

  const news = [
    {
      title: "Престольный праздник",
      date: "22 октября 2024",
      description: "Празднование в честь Казанской иконы Божией Матери"
    },
    {
      title: "Детская воскресная школа",
      date: "15 сентября 2024", 
      description: "Начало занятий в воскресной школе для детей"
    },
    {
      title: "Благотворительная акция",
      date: "10 сентября 2024",
      description: "Сбор помощи для нуждающихся семей прихода"
    }
  ];

  const requirements = [
    { name: "Крещение", price: "1000₽", description: "Таинство крещения для детей и взрослых" },
    { name: "Венчание", price: "2000₽", description: "Церковное бракосочетание" },
    { name: "Отпевание", price: "1500₽", description: "Заупокойное богослужение" },
    { name: "Освящение дома", price: "800₽", description: "Освящение жилища" },
    { name: "Молебен", price: "500₽", description: "Молитвенное прошение" },
    { name: "Панихида", price: "300₽", description: "Заупокойная служба" }
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Navigation */}
      <nav className="bg-white shadow-sm border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center space-x-2">
              <Icon name="Cross" size={24} className="text-primary" />
              <span className="text-lg font-semibold text-foreground">Храм</span>
            </div>
            <div className="flex space-x-6">
              <a href="#main" className="text-foreground hover:text-primary transition-colors">Главная</a>
              <a href="#history" className="text-foreground hover:text-primary transition-colors">История</a>
              <a href="#schedule" className="text-foreground hover:text-primary transition-colors">Расписание</a>
              <a href="#news" className="text-foreground hover:text-primary transition-colors">Новости</a>
              <a href="#donations" className="text-foreground hover:text-primary transition-colors">Пожертвования</a>
              <a href="#contacts" className="text-foreground hover:text-primary transition-colors">Контакты</a>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="main" className="relative">
        <div 
          className="h-96 bg-cover bg-center flex items-center justify-center"
          style={{ backgroundImage: `url('/img/1b5ea234-c0fd-417c-a965-3b03d6f413c2.jpg')` }}
        >
          <div className="bg-black bg-opacity-40 absolute inset-0"></div>
          <div className="text-center text-white relative z-10 px-4">
            <h1 className="text-5xl md:text-6xl font-bold mb-4">
              Храм в Честь Казанской Иконы Божией Матери
            </h1>
            <p className="text-xl md:text-2xl opacity-90">
              с. Махровка Воронежской области
            </p>
          </div>
        </div>
      </section>

      {/* Church Photo */}
      <section className="py-12">
        <div className="max-w-4xl mx-auto px-4">
          <img 
            src="https://cdn.poehali.dev/files/2cc7fad5-d6b6-4f1f-bf84-d14b5332bbb3.jpg" 
            alt="Храм в честь Казанской иконы Божией Матери"
            className="w-full rounded-lg shadow-lg"
          />
        </div>
      </section>

      {/* History Section */}
      <section id="history" className="py-16 bg-muted">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-foreground mb-4">История храма</h2>
          </div>
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <p className="text-lg text-muted-foreground mb-6">
                Храм в честь Казанской иконы Божией Матери был построен в селе Махровка 
                в начале XX века. Святыня стала духовным центром для жителей села и 
                окрестных деревень.
              </p>
              <p className="text-lg text-muted-foreground mb-6">
                В советское время храм был закрыт, но благодаря усилиям верующих 
                и поддержке местных властей в 1990-х годах началось его восстановление.
              </p>
              <p className="text-lg text-muted-foreground">
                Сегодня храм является действующим приходом, где регулярно совершаются 
                богослужения и таинства для верующих.
              </p>
            </div>
            <div className="text-center">
              <Icon name="Church" size={120} className="text-primary mx-auto mb-4" />
              <p className="text-sm text-muted-foreground">
                Восстановлен в 1995 году
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Schedule Section */}
      <section id="schedule" className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-foreground mb-4">Расписание богослужений</h2>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((service, index) => (
              <Card key={index} className="text-center">
                <CardHeader>
                  <Icon name="Clock" size={32} className="text-primary mx-auto mb-2" />
                  <CardTitle className="text-xl">{service.name}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-2xl font-bold text-primary mb-2">{service.time}</p>
                  <Badge variant="secondary">{service.days}</Badge>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* News Section */}
      <section id="news" className="py-16 bg-muted">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-foreground mb-4">Новости прихода</h2>
          </div>
          <div className="grid lg:grid-cols-3 gap-8">
            {news.map((item, index) => (
              <Card key={index}>
                <CardHeader>
                  <div className="flex items-center space-x-2 text-sm text-muted-foreground mb-2">
                    <Icon name="Calendar" size={16} />
                    <span>{item.date}</span>
                  </div>
                  <CardTitle className="text-xl">{item.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription>{item.description}</CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Requirements Section */}
      <section id="requirements" className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-foreground mb-4">Церковные требы</h2>
            <p className="text-lg text-muted-foreground">
              Для заказа треб обращайтесь к священнику после службы или по телефону
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {requirements.map((req, index) => (
              <Card key={index}>
                <CardHeader>
                  <div className="flex justify-between items-start">
                    <CardTitle className="text-lg">{req.name}</CardTitle>
                    <Badge variant="outline" className="text-primary">{req.price}</Badge>
                  </div>
                </CardHeader>
                <CardContent>
                  <CardDescription>{req.description}</CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Donations Section */}
      <section id="donations" className="py-16 bg-muted">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="mb-12">
            <h2 className="text-4xl font-bold text-foreground mb-4">Пожертвования и помощь</h2>
            <p className="text-lg text-muted-foreground mb-8">
              Ваши пожертвования помогают поддерживать храм и развивать приходскую жизнь
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8 mb-8">
            <Card>
              <CardHeader>
                <Icon name="Building" size={32} className="text-primary mx-auto mb-2" />
                <CardTitle>Содержание храма</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>
                  Средства на содержание и ремонт храма, оплату коммунальных услуг
                </CardDescription>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <Icon name="Heart" size={32} className="text-primary mx-auto mb-2" />
                <CardTitle>Помощь нуждающимся</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>
                  Благотворительная помощь малоимущим семьям и одиноким людям
                </CardDescription>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <Icon name="Users" size={32} className="text-primary mx-auto mb-2" />
                <CardTitle>Детская школа</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>
                  Развитие воскресной школы и приобретение учебных материалов
                </CardDescription>
              </CardContent>
            </Card>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-sm">
            <h3 className="text-xl font-semibold mb-4">Реквизиты для пожертвований</h3>
            <div className="space-y-2 text-left max-w-md mx-auto">
              <p><span className="font-medium">Получатель:</span> Приход храма Казанской иконы Божией Матери</p>
              <p><span className="font-medium">Банк:</span> Сбербанк России</p>
              <p><span className="font-medium">Счет:</span> 40703810738000000000</p>
              <p><span className="font-medium">БИК:</span> 042007681</p>
              <p><span className="font-medium">К/с:</span> 30101810600000000681</p>
            </div>
          </div>
        </div>
      </section>

      {/* Contacts Section */}
      <section id="contacts" className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-foreground mb-4">Контакты и как добраться</h2>
          </div>
          <div className="grid lg:grid-cols-2 gap-12">
            <div>
              <Card>
                <CardHeader>
                  <CardTitle className="text-2xl">Контактная информация</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex items-center space-x-3">
                    <Icon name="MapPin" size={20} className="text-primary" />
                    <div>
                      <p className="font-medium">Адрес</p>
                      <p className="text-muted-foreground">с. Махровка, Воронежская область</p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Icon name="Phone" size={20} className="text-primary" />
                    <div>
                      <p className="font-medium">Телефон</p>
                      <p className="text-muted-foreground">+7 (473) 123-45-67</p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Icon name="Mail" size={20} className="text-primary" />
                    <div>
                      <p className="font-medium">Email</p>
                      <p className="text-muted-foreground">hram.mahrovka@mail.ru</p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Icon name="User" size={20} className="text-primary" />
                    <div>
                      <p className="font-medium">Настоятель</p>
                      <p className="text-muted-foreground">Протоиерей Иоанн Петров</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
            <div>
              <Card>
                <CardHeader>
                  <CardTitle className="text-2xl">Как добраться</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex items-start space-x-3">
                    <Icon name="Car" size={20} className="text-primary mt-1" />
                    <div>
                      <p className="font-medium">На автомобиле</p>
                      <p className="text-muted-foreground">
                        Из Воронежа по трассе М-4 до поворота на Махровку, 
                        затем 5 км по местной дороге
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <Icon name="Bus" size={20} className="text-primary mt-1" />
                    <div>
                      <p className="font-medium">На автобусе</p>
                      <p className="text-muted-foreground">
                        Автобус Воронеж-Махровка, отправление с автовокзала в 8:00 и 15:00
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <Icon name="Clock" size={20} className="text-primary mt-1" />
                    <div>
                      <p className="font-medium">Время работы</p>
                      <p className="text-muted-foreground">
                        Храм открыт ежедневно с 7:00 до 19:00
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-primary text-primary-foreground py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="flex items-center justify-center space-x-2 mb-4">
              <Icon name="Cross" size={24} />
              <span className="text-xl font-semibold">
                Храм в честь Казанской иконы Божией Матери
              </span>
            </div>
            <p className="opacity-90">с. Махровка, Воронежская область</p>
            <Separator className="my-4 bg-primary-foreground/20" />
            <p className="text-sm opacity-75">
              © 2024 Приход храма Казанской иконы Божией Матери
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
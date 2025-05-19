
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import Icon from "@/components/ui/icon";
import { useEffect } from "react";

const servicesData = [
  {
    icon: "Wrench",
    title: "Техническое обслуживание",
    description: "Плановые ТО, диагностика, замена масла и фильтров",
  },
  {
    icon: "CarFront",
    title: "Ремонт двигателя",
    description: "Капитальный ремонт, замена деталей, регулировка",
  },
  {
    icon: "Cog",
    title: "Автоэлектрика",
    description: "Диагностика и ремонт электронных систем автомобиля",
  },
  {
    icon: "Brush",
    title: "Кузовной ремонт",
    description: "Покраска, рихтовка, полировка, удаление вмятин",
  },
];

const advantagesData = [
  {
    icon: "Clock",
    title: "Быстрое обслуживание",
    description: "Работаем оперативно, чтобы вы не теряли время",
  },
  {
    icon: "Award",
    title: "Гарантия качества",
    description: "Предоставляем гарантию на все виды работ",
  },
  {
    icon: "PiggyBank",
    title: "Разумные цены",
    description: "Прозрачная стоимость без скрытых платежей",
  },
];

const IndexPage = () => {
  useEffect(() => {
    document.title = "НАВЕКА - Автомобильный техцентр";
  }, []);

  return (
    <div className="flex flex-col min-h-screen">
      {/* Header */}
      <header className="sticky top-0 z-50 bg-white shadow-sm">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <div className="flex items-center">
            <h1 className="text-2xl font-bold text-[#1A1F2C]">
              <span className="text-[#EA384C]">НАВЕКА</span>
            </h1>
          </div>
          <nav className="hidden md:flex items-center space-x-8">
            <a href="#services" className="text-[#1A1F2C] hover:text-[#EA384C] transition-colors">
              Услуги
            </a>
            <a href="#about" className="text-[#1A1F2C] hover:text-[#EA384C] transition-colors">
              О нас
            </a>
            <a href="#contacts" className="text-[#1A1F2C] hover:text-[#EA384C] transition-colors">
              Контакты
            </a>
            <Button className="bg-[#EA384C] hover:bg-[#c92e3f]">
              <Icon name="Phone" className="mr-2" />
              Позвонить
            </Button>
          </nav>
          <Button variant="ghost" size="icon" className="md:hidden">
            <Icon name="Menu" />
          </Button>
        </div>
      </header>

      <main>
        {/* Hero Section */}
        <section className="relative bg-[#1A1F2C] text-white">
          <div className="container mx-auto px-4 py-16 md:py-32">
            <div className="max-w-2xl">
              <h1 className="text-4xl md:text-5xl font-bold mb-6 font-montserrat animate-fade-in">
                Профессиональный автосервис <span className="text-[#EA384C]">НАВЕКА</span>
              </h1>
              <p className="text-lg mb-8 text-gray-300">
                Полный спектр услуг по ремонту и обслуживанию автомобилей любых марок. 
                Команда опытных специалистов и современное оборудование.
              </p>
              <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
                <Button className="bg-[#EA384C] hover:bg-[#c92e3f] text-white">
                  Записаться онлайн
                </Button>
                <Button variant="outline" className="border-white text-white hover:bg-white hover:text-[#1A1F2C]">
                  Узнать стоимость
                </Button>
              </div>
            </div>
          </div>
          <div className="absolute right-0 bottom-0 opacity-10 w-1/2 h-full bg-[url('https://images.unsplash.com/photo-1487754180451-c456f719a1fc?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80')] bg-no-repeat bg-cover bg-right-bottom"></div>
        </section>

        {/* Services Section */}
        <section id="services" className="py-16 md:py-24 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-4 font-montserrat text-[#1A1F2C]">
                Наши услуги
              </h2>
              <p className="text-gray-600 max-w-2xl mx-auto">
                Мы предлагаем широкий спектр услуг по ремонту и обслуживанию автомобилей.
                Наши специалисты выполнят работы любой сложности.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {servicesData.map((service, index) => (
                <Card key={index} className="border-0 shadow-lg hover:shadow-xl transition-shadow">
                  <CardContent className="p-6">
                    <div className="rounded-full bg-[#EA384C]/10 p-3 w-12 h-12 flex items-center justify-center mb-4">
                      <Icon name={service.icon} className="w-6 h-6 text-[#EA384C]" />
                    </div>
                    <h3 className="text-xl font-bold mb-2 font-montserrat text-[#1A1F2C]">{service.title}</h3>
                    <p className="text-gray-600">{service.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
            <div className="text-center mt-12">
              <Button className="bg-[#1A1F2C] hover:bg-[#2a3142]">
                Все услуги
                <Icon name="ArrowRight" className="ml-2" />
              </Button>
            </div>
          </div>
        </section>

        {/* About Section */}
        <section id="about" className="py-16 md:py-24">
          <div className="container mx-auto px-4">
            <div className="flex flex-col md:flex-row items-center">
              <div className="md:w-1/2 mb-10 md:mb-0 md:pr-12">
                <img 
                  src="https://images.unsplash.com/photo-1550609531-bb775b43cd1c?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80" 
                  alt="Техцентр НАВЕКА" 
                  className="rounded-lg shadow-xl w-full h-auto"
                />
              </div>
              <div className="md:w-1/2">
                <h2 className="text-3xl md:text-4xl font-bold mb-6 font-montserrat text-[#1A1F2C]">
                  О техцентре <span className="text-[#EA384C]">НАВЕКА</span>
                </h2>
                <p className="text-gray-600 mb-6">
                  Техцентр НАВЕКА — это современный автосервис, оснащенный передовым оборудованием и 
                  укомплектованный командой профессионалов с многолетним опытом работы. 
                  Мы специализируемся на ремонте и обслуживании автомобилей любых марок и моделей.
                </p>
                <p className="text-gray-600 mb-8">
                  Наша миссия — обеспечить клиентам высокий уровень сервиса, качественный ремонт и 
                  прозрачные цены. Мы ценим ваше время и комфорт, поэтому стремимся выполнить все 
                  работы в кратчайшие сроки.
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
                  {advantagesData.map((advantage, index) => (
                    <div key={index} className="flex flex-col items-center text-center">
                      <div className="rounded-full bg-[#1A1F2C]/5 p-3 w-12 h-12 flex items-center justify-center mb-3">
                        <Icon name={advantage.icon} className="text-[#1A1F2C]" />
                      </div>
                      <h3 className="text-lg font-bold mb-1 font-montserrat text-[#1A1F2C]">{advantage.title}</h3>
                      <p className="text-gray-600 text-sm">{advantage.description}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="bg-[#1A1F2C] text-white py-12">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-2xl md:text-3xl font-bold mb-6 font-montserrat">
              Нужен ремонт или обслуживание автомобиля?
            </h2>
            <p className="text-gray-300 mb-8 max-w-2xl mx-auto">
              Запишитесь на прием прямо сейчас или позвоните нам для консультации.
              Мы поможем решить любую проблему с вашим автомобилем!
            </p>
            <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-4">
              <Button className="bg-[#EA384C] hover:bg-[#c92e3f] text-white">
                <Icon name="Calendar" className="mr-2" />
                Записаться онлайн
              </Button>
              <Button variant="outline" className="border-white text-white hover:bg-white hover:text-[#1A1F2C]">
                <Icon name="Phone" className="mr-2" />
                +7 (999) 123-45-67
              </Button>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section id="contacts" className="py-16 md:py-24 bg-gray-50">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center font-montserrat text-[#1A1F2C]">
              Контактная информация
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
              <div>
                <div className="mb-8">
                  <h3 className="text-xl font-bold mb-4 font-montserrat text-[#1A1F2C]">Наш адрес</h3>
                  <p className="text-gray-600 mb-2">
                    <Icon name="MapPin" className="inline-block mr-2 text-[#EA384C]" />
                    г. Москва, ул. Автосервисная, 42
                  </p>
                  <p className="text-gray-600 mb-2">
                    <Icon name="Phone" className="inline-block mr-2 text-[#EA384C]" />
                    +7 (999) 123-45-67
                  </p>
                  <p className="text-gray-600 mb-2">
                    <Icon name="Mail" className="inline-block mr-2 text-[#EA384C]" />
                    info@naveka-auto.ru
                  </p>
                </div>
                <div className="mb-8">
                  <h3 className="text-xl font-bold mb-4 font-montserrat text-[#1A1F2C]">Режим работы</h3>
                  <p className="text-gray-600 mb-2">
                    <Icon name="Clock" className="inline-block mr-2 text-[#EA384C]" />
                    Пн-Пт: 9:00 - 20:00
                  </p>
                  <p className="text-gray-600 mb-2">
                    <Icon name="Clock" className="inline-block mr-2 text-[#EA384C]" />
                    Сб: 10:00 - 18:00
                  </p>
                  <p className="text-gray-600">
                    <Icon name="Clock" className="inline-block mr-2 text-[#EA384C]" />
                    Вс: выходной
                  </p>
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-4 font-montserrat text-[#1A1F2C]">Мы в соцсетях</h3>
                  <div className="flex space-x-4">
                    <Button variant="outline" size="icon" className="rounded-full">
                      <Icon name="Facebook" />
                    </Button>
                    <Button variant="outline" size="icon" className="rounded-full">
                      <Icon name="Instagram" />
                    </Button>
                    <Button variant="outline" size="icon" className="rounded-full">
                      <Icon name="MessageCircle" />
                    </Button>
                    <Button variant="outline" size="icon" className="rounded-full">
                      <Icon name="Youtube" />
                    </Button>
                  </div>
                </div>
              </div>
              <div>
                <Card className="border-0 shadow-lg">
                  <CardContent className="p-6">
                    <h3 className="text-xl font-bold mb-6 font-montserrat text-[#1A1F2C]">Связаться с нами</h3>
                    <form className="space-y-4">
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        <div>
                          <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                            Ваше имя
                          </label>
                          <input
                            type="text"
                            id="name"
                            className="w-full rounded-md border border-gray-300 p-2 focus:outline-none focus:ring-2 focus:ring-[#EA384C]"
                            placeholder="Иван Иванов"
                          />
                        </div>
                        <div>
                          <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">
                            Телефон
                          </label>
                          <input
                            type="tel"
                            id="phone"
                            className="w-full rounded-md border border-gray-300 p-2 focus:outline-none focus:ring-2 focus:ring-[#EA384C]"
                            placeholder="+7 (___) ___-__-__"
                          />
                        </div>
                      </div>
                      <div>
                        <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                          Email
                        </label>
                        <input
                          type="email"
                          id="email"
                          className="w-full rounded-md border border-gray-300 p-2 focus:outline-none focus:ring-2 focus:ring-[#EA384C]"
                          placeholder="example@mail.ru"
                        />
                      </div>
                      <div>
                        <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                          Сообщение
                        </label>
                        <textarea
                          id="message"
                          rows={4}
                          className="w-full rounded-md border border-gray-300 p-2 focus:outline-none focus:ring-2 focus:ring-[#EA384C]"
                          placeholder="Опишите вашу проблему или задайте вопрос..."
                        ></textarea>
                      </div>
                      <Button className="w-full bg-[#EA384C] hover:bg-[#c92e3f]">
                        Отправить сообщение
                      </Button>
                    </form>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-[#1A1F2C] text-white py-12">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <h3 className="text-xl font-bold mb-4 font-montserrat">НАВЕКА</h3>
              <p className="text-gray-400 mb-4">
                Профессиональный автосервис с многолетним опытом работы.
                Качественный ремонт и обслуживание автомобилей любых марок.
              </p>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-4 font-montserrat">Услуги</h4>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="hover:text-white transition-colors">Техническое обслуживание</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Ремонт двигателя</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Автоэлектрика</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Кузовной ремонт</a></li>
              </ul>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-4 font-montserrat">Информация</h4>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="hover:text-white transition-colors">О компании</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Цены</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Акции</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Контакты</a></li>
              </ul>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-4 font-montserrat">Контакты</h4>
              <ul className="space-y-2 text-gray-400">
                <li className="flex items-start">
                  <Icon name="MapPin" className="mr-2 mt-1 shrink-0 text-[#EA384C]" />
                  <span>г. Москва, ул. Автосервисная, 42</span>
                </li>
                <li className="flex items-center">
                  <Icon name="Phone" className="mr-2 shrink-0 text-[#EA384C]" />
                  <span>+7 (999) 123-45-67</span>
                </li>
                <li className="flex items-center">
                  <Icon name="Mail" className="mr-2 shrink-0 text-[#EA384C]" />
                  <span>info@naveka-auto.ru</span>
                </li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-700 mt-8 pt-8 text-center text-gray-400">
            <p>© {new Date().getFullYear()} Техцентр «НАВЕКА». Все права защищены.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default IndexPage;

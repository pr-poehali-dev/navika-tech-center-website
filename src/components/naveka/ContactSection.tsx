
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Icon from "@/components/ui/icon";
import { contactInfo, socialMedia } from "@/data/naveka";

const ContactForm = () => {
  return (
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
  );
};

const ContactDetails = () => {
  return (
    <>
      <div className="mb-8">
        <h3 className="text-xl font-bold mb-4 font-montserrat text-[#1A1F2C]">Наш адрес</h3>
        <p className="text-gray-600 mb-2">
          <Icon name="MapPin" className="inline-block mr-2 text-[#EA384C]" />
          {contactInfo.address}
        </p>
        <p className="text-gray-600 mb-2">
          <Icon name="Phone" className="inline-block mr-2 text-[#EA384C]" />
          {contactInfo.phone}
        </p>
        <p className="text-gray-600 mb-2">
          <Icon name="Mail" className="inline-block mr-2 text-[#EA384C]" />
          {contactInfo.email}
        </p>
      </div>
      <div className="mb-8">
        <h3 className="text-xl font-bold mb-4 font-montserrat text-[#1A1F2C]">Режим работы</h3>
        {contactInfo.workingHours.map((item, index) => (
          <p key={index} className="text-gray-600 mb-2">
            <Icon name="Clock" className="inline-block mr-2 text-[#EA384C]" />
            {item.days}: {item.hours}
          </p>
        ))}
      </div>
      <div>
        <h3 className="text-xl font-bold mb-4 font-montserrat text-[#1A1F2C]">Мы в соцсетях</h3>
        <div className="flex space-x-4">
          {socialMedia.map((item, index) => (
            <Button key={index} variant="outline" size="icon" className="rounded-full">
              <Icon name={item.icon} />
            </Button>
          ))}
        </div>
      </div>
    </>
  );
};

const ContactSection = () => {
  return (
    <section id="contacts" className="py-16 md:py-24 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center font-montserrat text-[#1A1F2C]">
          Контактная информация
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <div>
            <ContactDetails />
          </div>
          <div>
            <ContactForm />
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;

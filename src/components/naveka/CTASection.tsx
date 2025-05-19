
import { Button } from "@/components/ui/button";
import Icon from "@/components/ui/icon";

const CTASection = () => {
  return (
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
  );
};

export default CTASection;


import { Button } from "@/components/ui/button";

const Hero = () => {
  return (
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
  );
};

export default Hero;

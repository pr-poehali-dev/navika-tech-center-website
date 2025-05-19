
import Icon from "@/components/ui/icon";
import { advantagesData } from "@/data/naveka";

type AdvantageProps = {
  icon: string;
  title: string;
  description: string;
};

const Advantage = ({ icon, title, description }: AdvantageProps) => {
  return (
    <div className="flex flex-col items-center text-center">
      <div className="rounded-full bg-[#1A1F2C]/5 p-3 w-12 h-12 flex items-center justify-center mb-3">
        <Icon name={icon} className="text-[#1A1F2C]" />
      </div>
      <h3 className="text-lg font-bold mb-1 font-montserrat text-[#1A1F2C]">{title}</h3>
      <p className="text-gray-600 text-sm">{description}</p>
    </div>
  );
};

const About = () => {
  return (
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
                <Advantage 
                  key={index}
                  icon={advantage.icon}
                  title={advantage.title}
                  description={advantage.description}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;

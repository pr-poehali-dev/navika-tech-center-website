
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Icon from "@/components/ui/icon";
import { servicesData } from "@/data/naveka";

const ServiceCard = ({ icon, title, description }: { 
  icon: string; 
  title: string; 
  description: string;
}) => {
  return (
    <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow">
      <CardContent className="p-6">
        <div className="rounded-full bg-[#EA384C]/10 p-3 w-12 h-12 flex items-center justify-center mb-4">
          <Icon name={icon} className="w-6 h-6 text-[#EA384C]" />
        </div>
        <h3 className="text-xl font-bold mb-2 font-montserrat text-[#1A1F2C]">{title}</h3>
        <p className="text-gray-600">{description}</p>
      </CardContent>
    </Card>
  );
};

const Services = () => {
  return (
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
            <ServiceCard 
              key={index}
              icon={service.icon}
              title={service.title}
              description={service.description}
            />
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
  );
};

export default Services;

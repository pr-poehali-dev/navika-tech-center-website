import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import Icon from "@/components/ui/icon";
import { useEffect } from "react";
import Header from "@/components/naveka/Header";
import Hero from "@/components/naveka/Hero";
import Services from "@/components/naveka/Services";
import About from "@/components/naveka/About";
import CTASection from "@/components/naveka/CTASection";
import ContactSection from "@/components/naveka/ContactSection";
import Footer from "@/components/naveka/Footer";

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
      <Header />
      <main>
        <Hero />
        <Services />
        <About />
        <CTASection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
};

export default IndexPage;

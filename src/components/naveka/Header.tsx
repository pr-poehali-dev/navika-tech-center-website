
import { useState } from "react";
import { Button } from "@/components/ui/button";
import Icon from "@/components/ui/icon";

const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-white shadow-sm">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <div className="flex items-center">
          <h1 className="text-2xl font-bold text-[#1A1F2C]">
            <span className="text-[#EA384C]">НАВЕКА</span>
          </h1>
        </div>
        <nav className={`${mobileMenuOpen ? 'flex' : 'hidden'} md:flex items-center space-x-8`}>
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
        <Button 
          variant="ghost" 
          size="icon" 
          className="md:hidden"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          <Icon name={mobileMenuOpen ? "X" : "Menu"} />
        </Button>
      </div>
    </header>
  );
};

export default Header;

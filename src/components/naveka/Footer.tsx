
import Icon from "@/components/ui/icon";
import { contactInfo, footerLinks } from "@/data/naveka";

const Footer = () => {
  return (
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
              {footerLinks.services.map((link, index) => (
                <li key={index}>
                  <a href={link.href} className="hover:text-white transition-colors">
                    {link.title}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h4 className="text-lg font-semibold mb-4 font-montserrat">Информация</h4>
            <ul className="space-y-2 text-gray-400">
              {footerLinks.information.map((link, index) => (
                <li key={index}>
                  <a href={link.href} className="hover:text-white transition-colors">
                    {link.title}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h4 className="text-lg font-semibold mb-4 font-montserrat">Контакты</h4>
            <ul className="space-y-2 text-gray-400">
              <li className="flex items-start">
                <Icon name="MapPin" className="mr-2 mt-1 shrink-0 text-[#EA384C]" />
                <span>{contactInfo.address}</span>
              </li>
              <li className="flex items-center">
                <Icon name="Phone" className="mr-2 shrink-0 text-[#EA384C]" />
                <span>{contactInfo.phone}</span>
              </li>
              <li className="flex items-center">
                <Icon name="Mail" className="mr-2 shrink-0 text-[#EA384C]" />
                <span>{contactInfo.email}</span>
              </li>
            </ul>
          </div>
        </div>
        <div className="border-t border-gray-700 mt-8 pt-8 text-center text-gray-400">
          <p>© {new Date().getFullYear()} Техцентр «НАВЕКА». Все права защищены.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

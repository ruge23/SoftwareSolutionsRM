import Link from "next/link";
import { Button } from "./ui/button";

//components
import Nav from "./Nav";
import MobileNav from "./MobileNav";
import { FaWhatsapp } from "react-icons/fa"; // Importar ícono de WhatsApp

const Header = () => {
  const whatsappNumber = "+543813158053";
  const whatsappUrl = `https://wa.me/${whatsappNumber.replace(/\D/g, '')}`;

  return (
    <header className="py-8 xl:py-12 text-white">
      <div className="container mx-auto flex justify-between items-center">
        {/* logo */}
        <Link href="/">
          <h1 className="text-4xl font-semibold">
            Software Solution RM
            <span className="text-accent">.</span>
          </h1>
        </Link>
        {/* desktop nav and hire me button */}
        <div className="hidden xl:flex items-center gap-8">
          <Nav />
          <a 
            href={whatsappUrl} 
            target="_blank" 
            rel="noopener noreferrer"
          >
            <Button className="flex items-center gap-2">
              <FaWhatsapp className="text-lg" />
              <span>Need our services</span>
            </Button>
          </a>
        </div>
        {/* mobile nav */}
        <div className="xl:hidden">
          <MobileNav />
        </div>
      </div>
    </header>
  )
}

export default Header;
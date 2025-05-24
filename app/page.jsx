import Photo from "@/components/Photo";
import Social from "@/components/Social";
import Stats from "@/components/Stats";
import { Button } from "@/components/ui/button";
import { FaWhatsapp } from "react-icons/fa"; // Cambiado a ícono de WhatsApp

const Home = () => {
  // Datos reutilizables (mejor mantenimiento)
  const whatsappData = {
    phone: "543813158053", // Número con código de país
    message: "Hola, estoy interesado en sus soluciones de software"
  };

  const whatsappUrl = `https://wa.me/${whatsappData.phone}?text=${encodeURIComponent(whatsappData.message)}`;

  return (
    <section className="h-full bg-black text-white">
      <div className="container mx-auto h-full py-12">
        <div className="flex flex-col xl:flex-row items-center justify-between gap-12">
          {/* Text Content */}
          <div className="text-center xl:text-left order-2 xl:order-none max-w-2xl">
            <h2 className="text-green-500 text-2xl uppercase mb-4">
              Soluciones tecnológicas a tu medida
            </h2>
            <h1 className="text-4xl md:text-5xl font-bold leading-tight mb-6">
              Software Solution <span className="text-green-500">RM</span>
            </h1>
            <p className="mb-6 text-white/80">
              Desarrollo de software y sistemas a medida. Automatización de negocios para mejorar la eficiencia y el crecimiento de tu empresa.
            </p>
            <div className="flex flex-col sm:flex-row items-center gap-6">
              {/* Botón de WhatsApp mejorado */}
              <a 
                href={whatsappUrl} 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-full sm:w-auto"
              >
                <Button
                  variant="outline"
                  size="lg"
                  className="w-full uppercase flex items-center gap-3 border-green-500 text-green-500 hover:bg-green-500 hover:text-black transition-all duration-300"
                >
                  <FaWhatsapp className="text-xl" />
                  <span>Contactar por WhatsApp</span>
                </Button>
              </a>
              
              <div className="mt-4 sm:mt-0">
                <Social
                  containerStyles="flex gap-6"
                  iconStyles="w-9 h-9 border border-green-500 rounded-full flex justify-center items-center text-green-500 text-base hover:bg-green-500 hover:text-black transition-all duration-500"
                />
              </div>
            </div>
          </div>
          {/* Photo Section */}
          <div className="order-1 xl:order-none">
            <Photo />
          </div>
        </div>
        <Stats />
      </div>
    </section>
  );
};

export default Home;
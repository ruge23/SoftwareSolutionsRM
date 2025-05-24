"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const Photo = () => {
  return (
    <div className="w-full h-full relative flex items-center justify-center">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{
          opacity: 1,
          transition: { delay: 2, duration: 0.4, ease: "easeIn" }
        }}
        className="relative" // Contenedor relativo para posicionamiento absoluto de hijos
      >
        {/* Contenedor común para imagen y círculo */}
        <div className="relative w-[298px] h-[298px] xl:w-[498px] xl:h-[498px]">
          {/* Imagen */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{
              opacity: 1,
              transition: { delay: 2.4, duration: 0.4, ease: "easeInOut" }
            }}
            className="absolute inset-0 z-10" // Z-index mayor para la imagen
          >
            <Image
              src="/assets/LogoSS.jpg"
              alt="Software Solution RM - Soluciones de software a medida"
              fill
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              quality={85}
              className="object-contain"
            />
          </motion.div>

          {/* Círculo animado - ajustado para coincidir con el tamaño de la imagen */}
          <motion.svg
            className="absolute inset-0 w-full h-full z-0" // Z-index menor para el círculo
            fill="transparent"
            viewBox="0 0 506 506"
            xmlns="http://www.w3.org/2000/svg"
            aria-hidden="true"
            preserveAspectRatio="xMidYMid meet" // Asegura relación de aspecto
          >
            <motion.circle
              cx="253"
              cy="253"
              r="245" // Reducido ligeramente para mejor ajuste visual
              stroke="#00ff99"
              strokeWidth="4"
              strokeLinecap="round"
              strokeLinejoin="round"
              initial={{ strokeDasharray: "24 10 0 0" }}
              animate={{
                strokeDasharray: ["15 120 25 25", "16 25 92 72", "4 250 22 22"],
                rotate: [120, 360]
              }}
              transition={{
                duration: 20,
                repeat: Infinity,
                repeatType: 'reverse',
                ease: "linear"
              }}
            />
          </motion.svg>
        </div>
      </motion.div>
    </div>
  );
};

export default Photo;
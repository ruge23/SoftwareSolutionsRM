'use client';

import { FaWhatsapp, FaTimes, FaGlobeAmericas } from "react-icons/fa";

const ModalWhatsApp = ({ isOpen, onClose, whatsappData }) => {
  if (!isOpen) return null;

  const handleNumberClick = (phone) => {
    const url = `https://wa.me/${phone.replace(/\D/g, '')}?text=${encodeURIComponent(whatsappData.message)}`;
    window.open(url, '_blank');
    onClose();
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-70 flex items-center justify-center z-50 p-4">
      <div className="bg-primary rounded-lg p-6 max-w-md w-full border border-green-500 animate-fade-in">
        <div className="flex justify-between items-center mb-4">
          <h3 className="text-xl font-bold text-green-500 flex items-center gap-2">
            <FaWhatsapp className="text-2xl" />
            Selecciona un número
          </h3>
          <button 
            onClick={onClose}
            className="text-white hover:text-green-500 transition-colors"
          >
            <FaTimes className="text-xl" />
          </button>
        </div>
        
        <p className="text-white/80 mb-6">Elige el número de WhatsApp más cercano a tu ubicación:</p>
        
        <div className="space-y-4">
          {whatsappData.phone.map((phone, index) => (
            <button
              key={index}
              onClick={() => handleNumberClick(phone)}
              className="w-full flex items-center justify-between p-4 border border-green-500 rounded-lg hover:bg-green-500 hover:text-black transition-all duration-300 group"
            >
              <div className="flex items-center gap-3">
                <div className="bg-green-500/20 group-hover:bg-black/20 p-2 rounded-full">
                  <FaWhatsapp className="text-green-500 text-xl" />
                </div>
                <div className="text-left">
                  <p className="font-medium">{phone}</p>
                  <p className="text-xs text-white/60 group-hover:text-black/80">
                    {index === 0 ? 'Argentina' : 'Estados Unidos'}
                  </p>
                </div>
              </div>
              <FaGlobeAmericas className="text-green-500/50 group-hover:text-black/50" />
            </button>
          ))}
        </div>
        
        <div className="mt-6 pt-4 border-t border-green-500/20">
          <button
            onClick={onClose}
            className="w-full py-2 text-green-500 hover:text-white border border-green-500 rounded-lg hover:bg-green-500 transition-colors duration-300"
          >
            Cancelar
          </button>
        </div>
      </div>
    </div>
  );
};

export default ModalWhatsApp;
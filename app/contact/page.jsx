"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { 
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue 
} from "@/components/ui/select";
import { FaPhoneAlt, FaEnvelope, FaMapMarkedAlt } from "react-icons/fa";
import { motion } from "framer-motion";

const info = [
  {
    icon: <FaPhoneAlt />,
    title: "Phone",
    description: "(+54) 3813158053"
  },
  {
    icon: <FaEnvelope />,
    title: "Email",
    description: "maxida20@gmail.com"
  },
  {
    icon: <FaMapMarkedAlt />,
    title: "Address",
    description: "Av. Roca 3300, Tucumán"
  }
];

const Contact = () => {
  const [errors, setErrors] = useState({});
  const [formData, setFormData] = useState({
    firstname: '',
    lastname: '',
    email: '',
    phone: '',
    service: '',
    message: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
    // Limpiar error cuando el usuario escribe
    if (errors[name]) {
      setErrors(prev => ({
        ...prev,
        [name]: null
      }));
    }
  };

  const handleSelectChange = (value) => {
    setFormData(prev => ({
      ...prev,
      service: value
    }));
    if (errors.service) {
      setErrors(prev => ({
        ...prev,
        service: null
      }));
    }
  };

  const validate = () => {
    const newErrors = {};
    
    if (!formData.firstname.trim()) newErrors.firstname = 'Nombre es requerido';
    if (!formData.lastname.trim()) newErrors.lastname = 'Apellido es requerido';
    if (!formData.email.trim()) {
      newErrors.email = 'Email es requerido';
    } else if (!/^\S+@\S+\.\S+$/.test(formData.email)) {
      newErrors.email = 'Ingrese un email válido';
    }
    if (!formData.phone.trim()) newErrors.phone = 'Teléfono es requerido';
    if (!formData.service) newErrors.service = 'Seleccione un servicio';
    if (!formData.message.trim()) newErrors.message = 'Mensaje es requerido';
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const isValid = validate();
    
    if (isValid) {
      // Aquí iría la lógica de envío del formulario
      console.log('Formulario válido:', formData);
      // Mostrar mensaje de éxito
      alert('Formulario enviado correctamente');
    }
  };

  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{
        opacity: 1,
        transition: { delay: 2.4, duration: 0.4, ease: "easeIn"}
      }}
      className="py-6"
    >
      <div className="container mx-auto">
        <div className="flex flex-col xl:flex-row gap-[30px]">
          {/* Form */}
          <div className="xl:h-[54%] order-2 xl:order-none">
            <form
              onSubmit={handleSubmit}
              className="flex flex-col gap-6 p-10 bg-[#27272c] rounded-xl"
              noValidate
            >
              <h3 className="text-4xl text-accent">Trabajemos juntos</h3>
              <p className="text-white/60">Hola, escríbenos</p>
              
              {/* Inputs - Añadida clase w-full para consistencia */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {[
                  { name: 'firstname', placeholder: 'Nombre', type: 'text' },
                  { name: 'lastname', placeholder: 'Apellido', type: 'text' },
                  { name: 'email', placeholder: 'Email', type: 'email' },
                  { name: 'phone', placeholder: 'Teléfono', type: 'tel' }
                ].map((field) => (
                  <div className="space-y-2 w-full" key={field.name}>
                    <Input
                      type={field.type}
                      name={field.name}
                      placeholder={field.placeholder}
                      value={formData[field.name]}
                      onChange={handleChange}
                      className={`w-full ${errors[field.name] ? "border-red-500" : ""}`}
                    />
                    {errors[field.name] && (
                      <p className="text-red-500 text-sm">{errors[field.name]}</p>
                    )}
                  </div>
                ))}
              </div>
              
              {/* Select - Añadidas clases para igualar tamaño */}
              <div className="space-y-2 w-full">
                <Select
                  value={formData.service}
                  onValueChange={handleSelectChange}
                >
                  <SelectTrigger className={`w-full ${errors.service ? "border-red-500" : ""}`}>
                    <SelectValue placeholder="Seleccione un servicio" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectGroup>
                      <SelectLabel>Servicios</SelectLabel>
                      <SelectItem value="web">Desarrollo Web</SelectItem>
                      <SelectItem value="mobile">Desarrollo de Apps Móviles</SelectItem>
                    </SelectGroup>
                  </SelectContent>
                </Select>
                {errors.service && (
                  <p className="text-red-500 text-sm">{errors.service}</p>
                )}
              </div>
              
              {/* Textarea - Ajustado para coincidir con el ancho */}
              <div className="space-y-2 w-full">
                <Textarea
                  name="message"
                  className={`w-full h-[200px] ${errors.message ? "border-red-500" : ""}`}
                  placeholder="Escriba su mensaje aquí"
                  value={formData.message}
                  onChange={handleChange}
                />
                {errors.message && (
                  <p className="text-red-500 text-sm">{errors.message}</p>
                )}
              </div>
              
              {/* Button */}
              <Button type="submit" size="md" className="max-w-40">
                Enviar mensaje
              </Button>
            </form>
          </div>
          
          {/* Info */}
          <div className="flex-1 flex items-center xl:justify-end order-1 xl:order-none mb-8 xl:mb-0">
            <ul className="flex flex-col gap-10">
              {info.map((item, index) => (
                <li key={index} className="flex items-center gap-6">
                  <div className="w-[52px] h-[52px] xl:w-[72px] xl:h-[72px] bg-[#27272c] text-accent rounded-md flex items-center justify-center">
                    <div className="text-[28px]">{item.icon}</div>
                  </div>
                  <div className="flex-1">
                    <p className="text-white/60">{item.title}</p>
                    <h3 className="text-xl">{item.description}</h3>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </motion.section>
  );
};

export default Contact;
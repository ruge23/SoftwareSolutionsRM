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
  SelectTrigger,
  SelectValue 
} from "@/components/ui/select";
import { 
  FaPhoneAlt, 
  FaEnvelope, 
  FaMapMarkerAlt,
  FaChevronRight
} from "react-icons/fa";
import { FiGlobe, FiSend } from "react-icons/fi";
import { motion } from "framer-motion";

const locations = [
  {
    country: "Argentina",
    flag: "🇦🇷",
    items: [
      {
        icon: <FaPhoneAlt className="text-green-500" />,
        title: "Teléfono",
        value: "+54 381 315-8053"
      },
      {
        icon: <FaMapMarkerAlt className="text-green-500" />,
        title: "Oficina Principal",
        value: "Av. Roca 3300, Tucumán"
      }
    ]
  },
  {
    country: "United States",
    flag: "🇺🇸",
    items: [
      {
        icon: <FaPhoneAlt className="text-green-500" />,
        title: "Phone",
        value: "+1 (786) 968-2945"
      },
      {
        icon: <FaMapMarkerAlt className="text-green-500" />,
        title: "HQ Office",
        value: "3000 NE 2nd Ave, Miami, FL"
      }
    ]
  }
];

const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    interest: '',
    message: ''
  });

  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    if (errors[name]) setErrors(prev => ({ ...prev, [name]: null }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newErrors = {};
    
    if (!formData.name.trim()) newErrors.name = 'Required field';
    if (!formData.email.trim()) {
      newErrors.email = 'Required field';
    } else if (!/^\S+@\S+\.\S+$/.test(formData.email)) {
      newErrors.email = 'Invalid email format';
    }
    if (!formData.message.trim()) newErrors.message = 'Tell us about your project';
    
    setErrors(newErrors);
    
    if (Object.keys(newErrors).length === 0) {
      setIsSubmitting(true);
      // Simular envío
      setTimeout(() => {
        alert('Message sent successfully!');
        setIsSubmitting(false);
      }, 1500);
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="bg-gray-950 text-white pt-32 pb-20"
    >
      <div className="container mx-auto px-6">
        {/* Hero Section */}
        <div className="max-w-4xl mx-auto text-center mb-20">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            Let's <span className="text-green-500">Build</span> Together
          </h1>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            We partner with innovators worldwide to create mission-critical software solutions.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16">
          {/* Contact Form */}
          <div className="bg-gray-900/50 p-8 rounded-xl border border-gray-800">
            <h2 className="text-2xl font-bold mb-2">Get in Touch</h2>
            <p className="text-gray-400 mb-8">
              Fill out the form and our team will contact you within 24 hours
            </p>
            
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <Input
                  name="name"
                  placeholder="Full Name *"
                  value={formData.name}
                  onChange={handleChange}
                  className={`bg-gray-800 border-gray-700 ${errors.name && "border-red-500"}`}
                />
                {errors.name && <p className="text-red-500 text-sm mt-1">{errors.name}</p>}
              </div>
              
              <div>
                <Input
                  name="email"
                  type="email"
                  placeholder="Email *"
                  value={formData.email}
                  onChange={handleChange}
                  className={`bg-gray-800 border-gray-700 ${errors.email && "border-red-500"}`}
                />
                {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email}</p>}
              </div>
              
              <div>
                <Input
                  name="company"
                  placeholder="Company"
                  value={formData.company}
                  onChange={handleChange}
                  className="bg-gray-800 border-gray-700"
                />
              </div>
              
              <div>
                <Select
                  name="interest"
                  onValueChange={(value) => setFormData({ ...formData, interest: value })}
                >
                  <SelectTrigger className="bg-gray-800 border-gray-700">
                    <SelectValue placeholder="I'm interested in..." />
                  </SelectTrigger>
                  <SelectContent className="bg-gray-800 border-gray-700">
                    <SelectGroup>
                      <SelectItem value="web">Custom Software Development</SelectItem>
                      <SelectItem value="ai">AI Solutions</SelectItem>
                      <SelectItem value="cloud">Cloud Migration</SelectItem>
                      <SelectItem value="other">Other</SelectItem>
                    </SelectGroup>
                  </SelectContent>
                </Select>
              </div>
              
              <div>
                <Textarea
                  name="message"
                  placeholder="Tell us about your project *"
                  rows={5}
                  value={formData.message}
                  onChange={handleChange}
                  className={`bg-gray-800 border-gray-700 ${errors.message && "border-red-500"}`}
                />
                {errors.message && <p className="text-red-500 text-sm mt-1">{errors.message}</p>}
              </div>
              
              <Button
                type="submit"
                className="bg-green-500 hover:bg-green-600 text-black font-medium w-full py-6"
                disabled={isSubmitting}
              >
                {isSubmitting ? "Sending..." : (
                  <>
                    <span>Send Message</span>
                    <FiSend className="ml-2" />
                  </>
                )}
              </Button>
            </form>
          </div>
          
          {/* Contact Info */}
          <div>
            <h2 className="text-2xl font-bold mb-2">Global Offices</h2>
            <p className="text-gray-400 mb-8">
              We operate across multiple timezones to serve you better
            </p>
            
            <div className="space-y-10">
              {locations.map((location, index) => (
                <div key={index} className="bg-gray-900/30 p-6 rounded-lg border border-gray-800">
                  <div className="flex items-center gap-3 mb-4">
                    <span className="text-2xl">{location.flag}</span>
                    <h3 className="text-xl font-medium">{location.country}</h3>
                  </div>
                  
                  <div className="space-y-4 pl-2 border-l-2 border-green-500/30">
                    {location.items.map((item, i) => (
                      <div key={i} className="flex items-start gap-4">
                        <div className="mt-1">{item.icon}</div>
                        <div>
                          <p className="text-gray-400 text-sm">{item.title}</p>
                          <p className="text-lg">{item.value}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
              
              <div className="bg-gray-900/30 p-6 rounded-lg border border-gray-800">
                <div className="flex items-center gap-3 mb-4">
                  <FiGlobe className="text-green-500 text-xl" />
                  <h3 className="text-xl font-medium">Global Support</h3>
                </div>
                
                <div className="flex items-center gap-4 pl-2">
                  <FaEnvelope className="text-green-500 mt-1" />
                  <div>
                    <p className="text-gray-400 text-sm">Email</p>
                    <p className="text-lg">softwaresolutionsrm@gmail.com</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default ContactPage;
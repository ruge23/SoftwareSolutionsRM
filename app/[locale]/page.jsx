// 'use client';
// import { useTranslations } from 'next-intl';
// import { FaWhatsapp, FaChevronRight } from "react-icons/fa";
// import { FiCheck, FiGlobe, FiMenu, FiX } from "react-icons/fi";

// const Header2F = () => {
//   const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  
//   return (
//     <header className="fixed w-full bg-gray-900/80 backdrop-blur-md z-50 border-b border-gray-800">
//       <div className="container mx-auto px-6 py-4">
//         <div className="flex justify-between items-center">
//           {/* Logo + Nombre */}
//           <div className="flex items-center gap-2">
//             <div className="w-8 h-8 bg-green-500 rounded"></div>
//             <span className="text-xl font-bold">RM <span className="text-green-500">Tech</span></span>
//           </div>
          
//           {/* Desktop Nav - Estilo 2F */}
//           <nav className="hidden md:flex items-center gap-8">
//             <a href="#" className="text-gray-300 hover:text-white transition">Solutions</a>
//             <a href="#" className="text-gray-300 hover:text-white transition">Approach</a>
//             <a href="#" className="text-gray-300 hover:text-white transition">Industries</a>
//             <a href="#" className="text-gray-300 hover:text-white transition">Case Studies</a>
//             <div className="flex items-center gap-2 text-gray-300 hover:text-white cursor-pointer">
//               <FiGlobe /> <span>EN</span>
//             </div>
//             <button className="bg-green-500 hover:bg-green-600 text-black font-medium px-6 py-2 rounded-full flex items-center gap-2 transition">
//               Contact Us <FaChevronRight size={12} />
//             </button>
//           </nav>
          
//           {/* Mobile Menu Button */}
//           <button 
//             className="md:hidden text-gray-300"
//             onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
//           >
//             {mobileMenuOpen ? <FiX size={24} /> : <FiMenu size={24} />}
//           </button>
//         </div>
        
//         {/* Mobile Menu */}
//         {mobileMenuOpen && (
//           <div className="md:hidden mt-4 pb-4 space-y-4">
//             <a href="#" className="block text-gray-300 hover:text-white">Solutions</a>
//             <a href="#" className="block text-gray-300 hover:text-white">Approach</a>
//             <a href="#" className="block text-gray-300 hover:text-white">Industries</a>
//             <a href="#" className="block text-gray-300 hover:text-white">Case Studies</a>
//             <button className="w-full bg-green-500 text-black font-medium py-3 rounded-full mt-2">
//               Contact Us
//             </button>
//           </div>
//         )}
//       </div>
//     </header>
//   );
// };

// const Home = () => {
//   const t = useTranslations('Home');
  
//   return (
//     <div className="bg-gray-950 text-white">
//       <Header2F />
      
//       {/* Hero Section al estilo 2F */}
//       <section className="min-h-screen pt-32 pb-20 px-6">
//         <div className="container mx-auto">
//           <div className="max-w-4xl">
//             <h1 className="text-5xl md:text-7xl font-bold leading-tight mb-6">
//               <span className="text-green-500">Software Factory</span> for <br/>
//               <span className="bg-clip-text text-transparent bg-gradient-to-r from-green-400 to-green-600">
//                 Global Innovators
//               </span>
//             </h1>
//             <p className="text-xl text-gray-300 mb-10 max-w-3xl">
//               We build mission-critical software for startups and enterprises worldwide, 
//               combining cutting-edge technology with military-grade precision.
//             </p>
//             <div className="flex flex-wrap gap-4">
//               <button className="bg-green-500 hover:bg-green-600 text-black font-medium px-8 py-4 rounded-full flex items-center gap-2 transition">
//                 Start Your Project <FaChevronRight size={14} />
//               </button>
//               <button className="border border-gray-700 hover:border-green-500 text-white font-medium px-8 py-4 rounded-full flex items-center gap-2 transition">
//                 Explore Case Studies
//               </button>
//             </div>
//           </div>
//         </div>
//       </section>
      
//       {/* Sección "Solutions" como 2F */}
//       <section className="py-20 bg-gray-900/50">
//         <div className="container mx-auto px-6">
//           <h2 className="text-3xl md:text-4xl font-bold mb-16 text-center">
//             Our <span className="text-green-500">Solutions</span>
//           </h2>
//           <div className="grid md:grid-cols-3 gap-8">
//             {[
//               {
//                 title: "Custom Software Development",
//                 desc: "Tailored applications built from scratch to your specifications.",
//                 items: ["Web Apps", "Mobile Apps", "Desktop Solutions"]
//               },
//               {
//                 title: "Digital Transformation",
//                 desc: "Modernize legacy systems with cloud-native architectures.",
//                 items: ["Cloud Migration", "API Integration", "Data Pipelines"]
//               },
//               {
//                 title: "AI & Automation",
//                 desc: "Intelligent systems that learn and adapt.",
//                 items: ["Machine Learning", "Computer Vision", "Process Automation"]
//               }
//             ].map((solution, index) => (
//               <div key={index} className="bg-gray-800/50 hover:bg-gray-800/80 p-8 rounded-xl border border-gray-700 hover:border-green-500/30 transition-all duration-300">
//                 <h3 className="text-2xl font-bold mb-4">{solution.title}</h3>
//                 <p className="text-gray-400 mb-6">{solution.desc}</p>
//                 <ul className="space-y-2">
//                   {solution.items.map((item, i) => (
//                     <li key={i} className="flex items-center gap-2 text-gray-300">
//                       <FiCheck className="text-green-500" /> {item}
//                     </li>
//                   ))}
//                 </ul>
//               </div>
//             ))}
//           </div>
//         </div>
//       </section>
      
//       {/* Sección "Approach" */}
//       <section className="py-20">
//         <div className="container mx-auto px-6">
//           <h2 className="text-3xl md:text-4xl font-bold mb-4">Our <span className="text-green-500">Approach</span></h2>
//           <p className="text-xl text-gray-400 mb-16 max-w-3xl">
//             How we deliver exceptional results for clients across 12 countries
//           </p>
          
//           <div className="grid md:grid-cols-4 gap-8">
//             {[
//               { step: "01", title: "Discovery", desc: "Deep dive into your business objectives" },
//               { step: "02", title: "Prototyping", desc: "Rapid concept validation" },
//               { step: "03", title: "Development", desc: "Agile sprints with bi-weekly deliveries" },
//               { step: "04", title: "Scale", desc: "Optimization for growth" }
//             ].map((item, index) => (
//               <div key={index} className="group">
//                 <div className="text-green-500 text-2xl font-bold mb-2 opacity-80 group-hover:opacity-100 transition">
//                   {item.step}
//                 </div>
//                 <h3 className="text-xl font-bold mb-2">{item.title}</h3>
//                 <p className="text-gray-400">{item.desc}</p>
//                 <div className="h-0.5 bg-gray-800 mt-4 w-0 group-hover:w-full transition-all duration-500"></div>
//               </div>
//             ))}
//           </div>
//         </div>
//       </section>
//     </div>
//   );
// };

// export default Home;

import { useTranslations } from 'next-intl';

export default function Home() {
  const t = useTranslations('Home.hero');
  
  return (
    <div>
      <h1>{t('titlePart1')}</h1>
    </div>
  );
}
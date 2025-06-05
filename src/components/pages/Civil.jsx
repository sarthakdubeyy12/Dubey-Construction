import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";

const services = [
  {
    title: "Civil Special Project",
    image: "/specialcivil.webp",
  },
  {
    title: "Dams and Water Control",
    image: "/damscivil.webp",
  },
  {
    title: "Transit Station",
    image: "/transitcivil.webp",
  },
  {
    title: "Port Infrastructure",
    image: "/portcivil.webp",
  },
  {
    title: "Transportation Infrastructure",
    image: "/transcivil.webp",
  },
  {
    title: "Water Infrastructure",
    image: "/watercivil.webp",
  },
  
];

const BuildingsPage = () => {
  useEffect(() => {
    AOS.init({ once: false });
  }, []);

  return (
    <div>
      {/* First Section: Fullscreen Background */}
      <div
        className="relative w-full h-screen bg-cover bg-center"
        style={{ backgroundImage: `url('/civil12.webp')` }}
      >
        <div className="absolute top-40 right-10 text-white">
          <div className="flex items-center gap-2 mb-1">
            <div className="h-[2px] w-10 bg-yellow-500" />
            <span className="uppercase text-sm tracking-widest">Sector</span>
          </div>
          <h1 className="text-7xl font-bold">Civil</h1>
        </div>
      </div>

      {/* Second Section: Green Background */}
      <div className="relative bg-[#014C2A] text-white px-10 py-20">
        <div className="flex items-center gap-4 mb-6">
          <div className="h-[2px] w-10 bg-white" />
          <span className="uppercase tracking-widest text-sm opacity-75">
            Building Communities
          </span>
        </div>

        <div className="max-w-5xl text-3xl font-bold leading-relaxed">
          <p>
            From enhancing communities' access to clean water to rehabilitating
            aging infrastructure, we continually find new ways to deliver for a
            more diverse mix of civil infrastructure clients. Whether building 
            on land or over water, in busy cities or remote areas, we find the 
            best way forward and elevate your vision of success.

          </p>
        </div>

        
      </div>

      {/* Third Section: Full Background Image */}
      <div
        className="w-full h-[600px] bg-cover bg-center"
        style={{ backgroundImage: `url('/bridge.webp')` }}
      ></div>

      {/* “What We Build” Section with Decorative Triangles */}
      <section className="relative bg-white text-black px-6 md:px-16 py-24 overflow-hidden">
        <div className="absolute top-0 right-0 w-40 md:w-56 lg:w-64 h-40 md:h-56 lg:h-74 z-0 pointer-events-none">
          <svg
            viewBox="0 0 100 100"
            preserveAspectRatio="none"
            className="w-full h-full"
          >
            <polygon points="100,0 100,100 0,100" fill="#A7BFB6" />
            <polygon points="100,0 100,60 60,60" fill="#FEE7B5" />
          </svg>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto" data-aos="fade-up">
          <div className="flex items-center gap-4 mb-4">
            <div className="w-12 h-0.5 bg-black" />
            <p className="uppercase text-sm font-semibold tracking-widest text-gray-600">
              CIVIL MARKETS
            </p>
          </div>

          <h2 className="text-3xl md:text-4xl font-bold leading-relaxed text-black max-w-5xl">
              Leaders in Water and Wastewater Treatment Construction

          </h2>
        </div>
      </section>

      {/* Fourth Section: Services */}
            <h2 className="uppercase text-sm font-semibold tracking-widest text-gray-600">
                ------Featured Markets
            </h2>
      
      <section className="py-20 px-6 md:px-12 bg-white text-black">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-gray-100 p-6 rounded-2xl shadow hover:shadow-lg transition duration-300"
              data-aos="fade-up"
              data-aos-delay={index * 100}
            >
              <img
                src={service.image}
                alt={service.title}
                className="w-full h-48 object-cover rounded-xl mb-4"
              />
              <h3 className="text-xl font-bold mb-2">{service.title}</h3>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default BuildingsPage;

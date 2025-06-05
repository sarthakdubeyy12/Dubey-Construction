import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { Link } from 'react-router-dom';

const Diversity = () => {
  useEffect(() => {
    AOS.init({ once: true });
  }, []);

  return (
    <div className="text-gray-800 font-sans">
      {/* Hero Section */}
      <div className="relative w-full h-screen overflow-hidden">
        <div className="absolute inset-0">
          <div
            className="w-full h-full bg-cover bg-center filter blur-sm scale-105 opacity-90"
            style={{ backgroundImage: "url('/diversity.webp')" }}
          ></div>
        </div>

        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="absolute text-white text-6xl md:text-8xl font-extrabold tracking-wide drop-shadow-2xl bottom-[20%] right-[64%]"
        >
          DIVERSITY
        </motion.h1>
      </div>

      {/* D&I Statement */}
      <section className="relative bg-white py-24 px-6 md:px-20">
        <div className="max-w-6xl mx-auto" data-aos="fade-up">
          <h2 className="text-3xl md:text-4xl mb-6 uppercase font-semibold tracking-widest text-gray-800">
            At DUBEY CONSTRUCTION, We Choose to Include
          </h2>
          <p className="uppercase text-sm font-semibold tracking-widest text-gray-600">
            We recognize that everyone’s journey through life is not the same. To construct buildings for diverse communities and to thrive as a 100% employee-owned company, we need to include people of all backgrounds to ensure their perspectives and experiences are seen, heard and reflected through our work.
          </p>
        </div>
      </section>

      {/* Intentional Inclusivity */}
      <section className="px-6 md:px-20 py-20">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold mb-6">Intentional Inclusivity</h2>
          <p className="text-gray-700 mb-12 max-w-4xl">
            Our Diversity, Equity and Inclusion efforts go beyond occasional trainings and are always instead integrated throughout the entire company. At Dubey Construction, we value diversity and equity, and we’re intentionally inclusive in these areas:
          </p>

          <div className="grid md:grid-cols-2 gap-10 items-start">
            {/* Talent Card */}
            <div className="group transition-transform duration-300 hover:scale-105">
              <img src="/talent.webp" alt="Talent" className="w-full object-cover h-72 rounded shadow-md" />
              <h3 className="text-2xl font-bold mt-4">Talent</h3>
              <p className="text-gray-700 mt-2">
                We recognize diversity as a competitive advantage and focus on attracting and retaining the industry’s best talent through recruitment, engagement, and career development. We provide equitable opportunities for growth and advancement.
              </p>
            </div>

            {/* Workplace Card */}
            <div className="group transition-transform duration-300 hover:scale-105">
              <img src="/talent12.webp" alt="Workplace" className="w-full object-cover h-72 rounded shadow-md" />
              <h3 className="text-2xl font-bold mt-4">Workplace</h3>
              <p className="text-gray-700 mt-2">
                Our goal is to create a workplace that reflects the diverse communities we serve. We foster belonging, equity, and mutual respect through inclusive programs, policies, and a culture of ownership.
              </p>
            </div>
          </div>
        </div>

        <div className="max-w-7xl mx-auto mt-16">
          <div className="grid md:grid-cols-2 gap-10 items-start">
            <div className="group transition-transform duration-300 hover:scale-105">
              <img src="/talent.webp" alt="Talent" className="w-full object-cover h-72 rounded shadow-md" />
              <h3 className="text-2xl font-bold mt-4">Industry</h3>
              <p className="text-gray-700 mt-2">
                Dubey Construction delivers exceptional value to our clients by harnessing a diverse team of industry-leading professionals who drive solutions through innovative thinking, strong partnerships, and collaborative execution.
              </p>
            </div>

            <div className="group transition-transform duration-300 hover:scale-105">
              <img src="/talent12.webp" alt="Workplace" className="w-full object-cover h-72 rounded shadow-md" />
              <h3 className="text-2xl font-bold mt-4">Community</h3>
              <p className="text-gray-700 mt-2">
                Dubey Construction is deeply committed to the communities we serve, embracing a spirit of stewardship and volunteerism through active representation, engagement, and investment.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Green Section */}
      <div className="relative bg-[#014C2A] text-white px-10 py-20">
        <div className="flex items-center gap-4 mb-6">
          <div className="h-[2px] w-10 bg-white" />
          <span className="uppercase tracking-widest text-sm opacity-75">Vision-Centered</span>
        </div>

        <div className="max-w-5xl text-2xl font-bold leading-relaxed">
          <p>
            At Dubey Construction, we believe diversity builds more than structures — it builds stronger teams and stronger communities. We are committed to creating an inclusive environment where every voice is heard, every background respected, and every individual empowered to thrive.
          </p>
        </div>
      </div>

      {/* Including Our Communities */}
      <section className="bg-white py-24 px-6 md:px-20">
        <div className="max-w-7xl mx-auto text-center">
          <div className="flex items-center gap-4 justify-center mb-6">
            <div className="h-[2px] w-10 bg-black" />
            <span className="uppercase tracking-widest text-sm text-gray-800">Diversity In Action</span>
          </div>

          <h2 className="text-4xl font-bold mb-12">Including our Communities</h2>

          

          <div className="grid md:grid-cols-2 gap-10 items-center">
            <img
              src="/women.webp"
              alt="Women in Construction"
              className="w-full object-cover h-72 rounded shadow-md transition-transform duration-500 transform hover:scale-105 hover:brightness-110"
            />
            <div className="text-left">
              <h3 className="text-3xl font-bold mb-4">Women in Construction</h3>
              <p className="text-gray-700 mb-4">
                At Dubey Construction, we recognize and celebrate the crucial role that women play in driving innovation and forging new paths for future generations interested in exploring careers in science, technology, engineering, or math. We are actively empowering women to lead, innovate, and inspire.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Diversity;

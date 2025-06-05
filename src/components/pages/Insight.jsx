// Insight.jsx
import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { FaHardHat, FaGlobe, FaBuilding, FaHandshake, FaUsers } from 'react-icons/fa';

const Insight = () => {
  useEffect(() => {
    AOS.init({ once: true });
  }, []);

  return (
    <div className="bg-white text-gray-800 font-sans">
      {/* Hero Section */}
      <section className="relative h-[90vh] flex items-center justify-center bg-cover bg-center" style={{ backgroundImage: "url('/bigbigbig.jpg')" }}>
        <div />
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="relative z-10 text-center text-white"
        >
          <h1 className="text-5xl md:text-7xl font-extrabold mb-4">INSIGHTS THAT BUILD FUTURES</h1>
          <p className="text-lg md:text-2xl max-w-2xl mx-auto">See how Dubey Construction is shaping communities, innovating processes, and building better futures.</p>
        </motion.div>
      </section>

      {/* Key Values */}
      <section className="py-24 px-6 md:px-20 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-16">Our Core Pillars</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 text-center">
            {[
              { Icon: FaHardHat, title: 'Safety First', desc: 'We lead with safety to ensure every project protects lives and fosters trust.' },
              { Icon: FaHandshake, title: 'Integrity Always', desc: 'Honest practices and transparent partnerships are the foundation of our work.' },
              { Icon: FaGlobe, title: 'Sustainable Vision', desc: 'Building green and planning for tomorrow with environmentally conscious methods.' },
            ].map(({ Icon, title, desc }) => (
              <div key={title} data-aos="fade-up" className="p-6 bg-white rounded-xl shadow-md hover:shadow-xl transition-shadow duration-300">
                <Icon className="text-green-800 text-5xl mx-auto mb-4" />
                <h3 className="text-2xl font-semibold mb-2">{title}</h3>
                <p className="text-gray-600">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Innovation Highlight */}
      <section className="py-28 px-6 md:px-20 bg-white">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row gap-16 items-center">
          <img src="/platform1.jpg" alt="Innovation" className="w-full md:w-1/2 rounded-xl shadow-lg hover:scale-105 transition-transform duration-300" />
          <div data-aos="fade-left" className="md:w-1/2">
            <h2 className="text-4xl font-bold mb-4">Innovation in Every Beam</h2>
            <p className="text-gray-700 text-lg mb-4">
              From drone-assisted surveying to modular construction techniques, Dubey Construction is pushing the boundaries of what’s possible. Our innovation lab pilots bold ideas and brings them to life with our experienced teams.
            </p>
            <ul className="list-disc list-inside text-gray-600 space-y-2">
              <li>Cutting-edge technology adoption</li>
              <li>Lean building practices</li>
              <li>AI & automation in project planning</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Impact Section */}
      <section className="bg-[#F5F9F7] py-24 px-6 md:px-20">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold mb-16 text-center">Community Impact</h2>
          <div className="grid md:grid-cols-3 gap-10">
            {[
              { icon: FaBuilding, stat: '150+', label: 'Projects Completed' },
              { icon: FaUsers, stat: '2,000+', label: 'Jobs Created' },
              { icon: FaGlobe, stat: '12', label: 'Regions Served' },
            ].map(({ icon: Icon, stat, label }) => (
              <div key={label} className="text-center p-6 bg-white rounded-xl shadow-md" data-aos="zoom-in">
                <Icon className="text-green-700 text-4xl mx-auto mb-4" />
                <h3 className="text-3xl font-bold text-gray-800">{stat}</h3>
                <p className="text-gray-600">{label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Leadership Quote */}
      <section className="relative py-32 px-6 md:px-20 bg-fixed bg-center bg-cover" style={{ backgroundImage: "url('/hookup.jpg')" }}>
        <div className="absolute inset-0 bg-black opacity-60" />
        <div className="relative z-10 text-white text-center max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">"Great buildings start with great people."</h2>
          <p className="text-xl opacity-80">– B. Dubey, CEO & Founder</p>
        </div>
      </section>

      {/* Contact Call-to-Action */}
      <section className="py-24 px-6 md:px-20 bg-white text-black">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-4">Ready to Build a Better Tomorrow?</h2>
          <p className="text-lg mb-8">Get in touch with our expert team and start your project with confidence.</p>
        </div>
      </section>
    </div>
  );
};

export default Insight;

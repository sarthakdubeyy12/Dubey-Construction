import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import AOS from 'aos';
import 'aos/dist/aos.css';

const Safety = () => {
  useEffect(() => {
    AOS.init({ once: false });
  }, []);

  return (
    <div className="text-gray-800 font-sans">
      {/* Hero Section */}
      <div
        className="relative w-full h-screen bg-cover bg-center"
        style={{ backgroundImage: "url('/safety12.webp')" }}
      >
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="text-center px-6"
        ></motion.div>
      </div>

      {/* Safety Philosophy Section */}
      <section className="relative bg-white py-24 px-6 md:px-20">
        <div className="absolute top-0 right-0 w-40 md:w-52 h-40 md:h-52 z-0 pointer-events-none">
          <svg viewBox="0 0 100 100" preserveAspectRatio="none" className="w-full h-full">
            <polygon points="100,0 100,100 0,100" fill="#FEE7B5" />
          </svg>
        </div>

        <div className="relative z-10 max-w-6xl mx-auto" data-aos="fade-up">
          <h2 className="text-3xl md:text-4xl font-extrabold mb-6">
            Our safety professionals strive to ensure everyone returns home safe at the end of the day.
          </h2>
          <p className="text-lg leading-relaxed mb-4 text-gray-700">
            Safety is at the core of everything we do and is one of our central guiding principles. 
            We promote and foster a culture where people truly care about one another and where everyone 
            shares in our goal of zero incidents.
          </p>
          <p className="text-lg leading-relaxed text-gray-700">
            Health, safety and environment focuses on uncompromised safety core values, personal commitment 
            and a passionate belief in achieving zero injuries. We look to achieve this through frontline leadership, 
            positive recognition, safe work behaviors, accountability at all levels and reducing exposure.
          </p>
        </div>
      </section>

      {/* New Safety Section Based on Screenshot */}
      <section className="bg-white py-20 px-6 md:px-20">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-16 items-center">
          {/* Image Left */}
          <div className="overflow-hidden rounded-lg hover:scale-105 transition-transform duration-300 shadow-md">
            <img src="/safety13.webp" alt="PCL Safety Gear" className="w-full h-auto object-cover" />
          </div>

          {/* Text Right */}
          <div>
            <h2 className="text-3xl md:text-4xl font-extrabold mb-4">Leading the Way</h2>
            <p className="text-base md:text-lg text-gray-700 leading-relaxed">
              We all contribute to the success of PCL’s safety program: the executives who instill a strong safety
              culture, the superintendent who leads the way, the project coordinator who helps trade partners understand
              our safety practices, the tradesperson who guides young apprentices, and so many more.
            </p>
          </div>
        </div>

        {/* Second Row */}
        <div className="mt-20 grid md:grid-cols-2 gap-16 items-center">
          {/* Text Left */}
          <div>
            <h2 className="text-3xl md:text-4xl font-extrabold mb-4">Safety Stats</h2>
            <p className="text-base md:text-lg text-gray-700 leading-relaxed">
              We maintain best in class industry safety with an average of more than 50 million hours worked annually and an overall total recordable incident rate and overall lost-time frequency rate, among the industry's lowest.
            </p>
          </div>

          {/* Image Right */}
          <div className="overflow-hidden rounded-lg hover:scale-105 transition-transform duration-300 shadow-md">
            <img src="/safety14.webp" alt="Apprentices Working" className="w-full h-auto object-cover" />
          </div>
        </div>
      </section>

      <section className="bg-white py-20 px-6 md:px-20">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-16 items-center">
          {/* Image Left */}
          <div className="overflow-hidden rounded-lg hover:scale-105 transition-transform duration-300 shadow-md">
            <img src="/safety15.webp" alt="PCL Safety Gear" className="w-full h-auto object-cover" />
          </div>

          {/* Text Right */}
          <div>
            <h2 className="text-3xl md:text-4xl font-extrabold mb-4">Continuous Improvement</h2>
            <p className="text-base md:text-lg text-gray-700 leading-relaxed">
             We recognize that our people are our most valuable asset, and we are dedicated to 
             providing and maintaining a safe and healthy work environment for all. We’re 
             continuously looking for innovative ways to improve our safety practices and to 
             work with our trade partners to embrace a mindset that is unwilling to compromise
             when it comes to keeping people safe at work.
            </p>
          </div>
        </div>

      </section>

      
    </div>
  );
};

export default Safety;

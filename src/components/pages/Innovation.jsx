import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const Innovation = () => {
  useEffect(() => {
    AOS.init({ once: true, duration: 200 });
  }, []);

  return (
    <div className="font-sans text-white">
      {/* HERO SECTION */}
      <div className="relative h-screen w-full overflow-hidden">
        <div className="absolute inset-0 animated-gradient"></div>
        <div className="absolute inset-0 bg-black/50"></div>
        <div className="relative z-20 flex flex-col items-center justify-center h-full px-6 text-center">
          <h1
            className="text-5xl md:text-6xl lg:text-7xl font-extrabold tracking-tight mb-4"
            data-aos="fade-up"
          >
            Innovation at Dubey Construction
          </h1>
          <p
            className="text-lg md:text-xl max-w-4xl text-gray-200 mb-30"
            data-aos="fade-up"
            data-aos-delay="200"
          >
            Empowering the future of infrastructure through intelligent design and bold engineering.
            Where groundbreaking ideas meet sustainable, real-world solutions.
          </p>
          
        </div>
      </div>

      {/* INTRO SECTION */}
      <div className="relative w-full overflow-hidden h-96">
        <img
          src="/innovate2.webp"
          alt="Innovation"
          className="absolute inset-0 w-full h-full "
        />
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="bg-black/40 p-8 rounded-xl text-center max-w-xl" data-aos="zoom-in">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Building Tomorrow, Today
            </h2>
            <p className="text-gray-200 text-base md:text-lg">
              From conceptual sketches to fully realized smart infrastructure, our R&D lab fuses cutting-edge technology with sustainable practices.
            </p>
          </div>
        </div>
      </div>

      {/* FEATURES */}
      <section className="bg-[#1F1F1F] py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <h3 className="text-4xl font-bold text-center mb-12" data-aos="fade-up">
            Our Core Innovations
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Card 1 */}
            <div
              className="bg-[#2A2A2A] rounded-2xl overflow-hidden shadow-lg transform hover:scale-105 transition-transform"
              data-aos="fade-up"
              data-aos-delay="100"
            >
              <img
                src="/modeling.webp"
                alt="AI Modeling"
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h4 className="text-2xl font-semibold mb-3">AI-Driven Modeling</h4>
                <p className="text-gray-300 text-sm mb-4">
                  Leveraging machine learning to optimize structural designs, anticipate load distributions, and minimize material waste.
                </p>
              </div>
            </div>

            {/* Card 2 */}
            <div
              className="bg-[#2A2A2A] rounded-2xl overflow-hidden shadow-lg transform hover:scale-105 transition-transform"
              data-aos="fade-up"
              data-aos-delay="200"
            >
              <img
                src="/smart.webp"
                alt="Smart Buildings"
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h4 className="text-2xl font-semibold mb-3">Smart Building Systems</h4>
                <p className="text-gray-300 text-sm mb-4">
                  Integrating IoT, automation, and renewable energy to create self-regulating and sustainable buildings.
                </p>
                
              </div>
            </div>

            {/* Card 3 */}
            <div
              className="bg-[#2A2A2A] rounded-2xl overflow-hidden shadow-lg transform hover:scale-105 transition-transform"
              data-aos="fade-up"
              data-aos-delay="300"
            >
              <img
                src="/sustainable12.webp"
                alt="Sustainable Materials"
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h4 className="text-2xl font-semibold mb-3">Sustainable Materials</h4>
                <p className="text-gray-300 text-sm mb-4">
                  Developing and sourcing new-age materials that reduce carbon footprints without compromising durability.
                </p>
                
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FINAL CTA */}
      <div className="relative h-64 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-[#000000] to-[#2A2A2A] animate-pulse opacity-80"></div>
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center px-6" data-aos="fade-up">
            <h4 className="text-3xl md:text-4xl font-extrabold mb-4">
              Ready to Revolutionize Your Next Project?
            </h4>
            <button className="mt-2 px-8 py-3 bg-[#C59B7A] hover:bg-[#b38b6d] text-white font-semibold rounded-full transition-colors">
              Get in Touch
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Innovation;

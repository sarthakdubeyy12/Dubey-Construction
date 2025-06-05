import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";


const BuildingsPage = () => {
  useEffect(() => {
    AOS.init({ once: false });
  }, []);

  return (
    <div>
      {/* First Section: Fullscreen Background */}
      <div
        className="relative w-full h-screen bg-cover bg-center"
        style={{ backgroundImage: `url('/12industrial.webp')` }}
      >
        <div className="absolute top-40 right-10 text-white">
          <div className="flex items-center gap-2 mb-1">
            <div className="h-[2px] w-10 bg-yellow-500" />
            <span className="uppercase text-sm tracking-widest">Sector</span>
          </div>
          <h1 className="text-7xl font-bold text-amber-200">Industrial</h1>
        </div>
      </div>

      {/* Second Section: Green Background */}
      <div className="relative bg-[#014C2A] text-white px-10 py-20">
        <div className="flex items-center gap-4 mb-6">
          <div className="h-[2px] w-10 bg-white" />
          <span className="uppercase tracking-widest text-sm opacity-75">
            TAILORED SOLUTIONS
          </span>
        </div>

        <div className="max-w-5xl text-3xl font-bold leading-relaxed">
          <p>
            With operations ranging from the Gulf Coast to the Canadian North,
             and from east to west, PCL has executed projects of every scope 
             and size across a wide variety of markets. We offer our clients 
             a fully tailorable solution from fabrication to site execution 
             to ongoing facility maintenance. Our deep experience and relationships 
             allow us to provide clients a variety of delivery and commercial terms.


          </p>
        </div>

        
      </div>

      {/* Third Section: Full Background Image */}
      <div
        className="w-full h-[600px] bg-cover bg-center"
        style={{ backgroundImage: `url('/indu.webp')` }}
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
              From planning to execution to maintenance, we walk with our clients at every step of the project.
          </h2>
        </div>
      </section>

      {/* Fourth Section: Services */}
            <h2 className="uppercase text-sm font-semibold tracking-widest text-gray-600">
                ------FROM VISION TO EXECUTION
            </h2>

      {/* ───── FABRICATION AND MODULARIZATION SECTION ───── */}
      <section className="bg-white py-24">
        <div className="container mx-auto px-6 md:px-12 lg:px-24">
          <div className="flex flex-col md:flex-row items-center gap-12">
            {/* Left: Welding Image */}
            <div
              className="md:w-1/2"
              data-aos="fade-right"
              data-aos-duration="800"
            >
              <img
                src="/Fabrication.webp"
                alt="Welding in Industrial Fabrication"
                className="w-full rounded-2xl shadow-2xl hover:scale-105 transform transition duration-500 ease-in-out"
              />
            </div>
            {/* Right: Text */}
            <div
              className="md:w-1/2"
              data-aos="fade-left"
              data-aos-duration="800"
            >
              <div className="flex items-center gap-2 mb-2">
                <div className="h-[2px] w-12 bg-yellow-500" />
                <span className="uppercase text-sm tracking-wider text-gray-500">
                  INDUSTRIAL SERVICES
                </span>
              </div>
              <h3 className="text-4xl lg:text-5xl font-extrabold text-gray-800 mb-6">
                Fabrication and Modularization
              </h3>
              <p className="text-gray-700 leading-relaxed mb-6">
                With state-of-the-art fabrication and modularization facilities across India, Dubey Construction is a trusted and experienced fabricator of industrial buildings, pipe spools, skids, and process vessels. No matter the size, shape, or complexity of your industrial fabrication needs, we have the technical expertise and production capacity to deliver with precision and reliability.
              </p>
              
            </div>
          </div>
        </div>
      </section>

      {/* ───── ENGINEERING AND PLANNING SECTION ───── */}
      <section className="bg-gray-50 py-24">
        <div className="container mx-auto px-6 md:px-12 lg:px-24">
          <div className="flex flex-col md:flex-row items-center gap-12">
            {/* Left: Text */}
            <div
              className="md:w-1/2 order-2 md:order-1"
              data-aos="fade-right"
              data-aos-duration="800"
            >
              <div className="flex items-center gap-2 mb-2">
                <div className="h-[2px] w-12 bg-green-700" />
                <span className="uppercase text-sm tracking-wider text-gray-500">
                  ENGINEERING & PLANNING
                </span>
              </div>
              <h3 className="text-4xl lg:text-5xl font-extrabold text-gray-800 mb-6">
                Engineering and Planning
              </h3>
              <p className="text-gray-700 leading-relaxed mb-6">
                In order to service the demands of our projects, Dubey Construction
                maintains a staff of highly engaged construction engineers with
                decades of combined lift‐engineering experience. Our in-house
                design capabilities—including three-dimensional modeling and finite
                element analysis—allow us to provide truly custom solutions to
                unique problems. From initial site assessments to onsite execution
                coordination, our engineers walk you through every step of your
                project lifecycle.
              </p>
              
            </div>
            {/* Right: Engineering Image */}
            <div
              className="md:w-1/2 order-1 md:order-2"
              data-aos="fade-left"
              data-aos-duration="800"
            >
              <img
                src="/planning.webp"
                alt="Engineers Reviewing 3D Model"
                className="w-full rounded-2xl shadow-2xl hover:scale-105 transform transition duration-500 ease-in-out"
              />
            </div>
          </div>
        </div>
      </section>

      {/* ───── FABRICATION AND MODULARIZATION SECTION ───── */}
      <section className="bg-white py-24">
        <div className="container mx-auto px-6 md:px-12 lg:px-24">
          <div className="flex flex-col md:flex-row items-center gap-12">
            {/* Left: Welding Image */}
            <div
              className="md:w-1/2"
              data-aos="fade-right"
              data-aos-duration="800"
            >
              <img
                src="/delivery.webp"
                alt="Welding in Industrial Fabrication"
                className="w-full rounded-2xl shadow-2xl hover:scale-105 transform transition duration-500 ease-in-out"
              />
            </div>
            {/* Right: Text */}
            <div
              className="md:w-1/2"
              data-aos="fade-left"
              data-aos-duration="800"
            >
              <div className="flex items-center gap-2 mb-2">
                <div className="h-[2px] w-12 bg-yellow-500" />
                <span className="uppercase text-sm tracking-wider text-gray-500">
                  Project delivery
                </span>
              </div>
              <h3 className="text-4xl lg:text-5xl font-extrabold text-gray-800 mb-6">
                Full-Service Scalable Project Delivery

              </h3>
              <p className="text-gray-700 leading-relaxed mb-6">
                Leveraging our deep industry knowledge and extensive project experience, Dubey Construction is equipped to adapt to the unique demands of every project. Whether it’s adopting lean construction principles, implementing customized project strategies, or collaborating with our in-house engineering teams, we ensure that every phase—from concept to completion—is handled with precision and care.
              </p>
              
            </div>
          </div>
        </div>
      </section>

      {/* ───── ENGINEERING AND PLANNING SECTION ───── */}
      <section className="bg-gray-50 py-24">
        <div className="container mx-auto px-6 md:px-12 lg:px-24">
          <div className="flex flex-col md:flex-row items-center gap-12">
            {/* Left: Text */}
            <div
              className="md:w-1/2 order-2 md:order-1"
              data-aos="fade-right"
              data-aos-duration="800"
            >
              <div className="flex items-center gap-2 mb-2">
                <div className="h-[2px] w-12 bg-green-700" />
                <span className="uppercase text-sm tracking-wider text-gray-500">
                  Maintenance
                </span>
              </div>
              <h3 className="text-4xl lg:text-5xl font-extrabold text-gray-800 mb-6">
                Maintenance, Turnarounds and Outages

              </h3>
              <p className="text-gray-700 leading-relaxed mb-6">
                From day one, our embedded planning teams integrate with your operations to develop and execute a comprehensive scope of work. With our deep expertise and agile approach, we are fully equipped to adapt swiftly to evolving site conditions, ensuring your project stays efficient, safe, and on schedule.

              </p>
              
            </div>
            {/* Right: Engineering Image */}
            <div
              className="md:w-1/2 order-1 md:order-2"
              data-aos="fade-left"
              data-aos-duration="800"
            >
              <img
                src="/maintenance1.webp"
                alt="Engineers Reviewing 3D Model"
                className="w-full rounded-2xl shadow-2xl hover:scale-105 transform transition duration-500 ease-in-out"
              />
            </div>
          </div>
        </div>
      </section>
    
      
    </div>
  );
};

export default BuildingsPage;

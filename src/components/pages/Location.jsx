import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const locations = [
  {
    name: "Headquarters",
    addressLine1: "MP NAGAR NEAR DB MALL",
    city: "BHOPAL",
    phone: "+91-9179637299",
    hours: "Mon – Fri: 8am – 6pm",
    mapQuery: "MP+NAGAR+NEAR+DB+MALL+BHOPAL",
  },
  {
    name: "SITE OFFICE",
    addressLine1: "VIJAY NAGAR",
    city: "JABALPUR",
    phone: "+91-9425859209",
    hours: "Mon – Fri: 8am – 5pm",
    mapQuery: "VIJAY+NAGAR+JABALPUR",
  },
  {
    name: "BRANCH OFFICE",
    addressLine2: "MITTAL ENCLAVE",
    city: "KATNI",
    phone: "+91-8770210699",
    hours: "Mon – Fri: 9am – 5pm",
    mapQuery: "MITTAL+ENCLAVE+KATNI",
  },
];

const LocationPage = () => {
  useEffect(() => {
    AOS.init({ once: true, duration: 800 });
  }, []);

  return (
    <div className="font-sans antialiased overflow-x-hidden">
      {/* ───────────────────────────────────────────── */}
      {/* HERO / BANNER SECTION */}
      {/* ───────────────────────────────────────────── */}
      <section
        className="relative w-full h-screen bg-cover bg-center"
        style={{ backgroundImage: `url('/location12.jpg')` }}
      >
        <div className="relative z-10 flex flex-col items-center justify-center h-full text-center text-white px-6">
          <div className="flex items-center gap-2 mb-2" data-aos="fade-down">
            <div className="h-[2px] w-14 bg-yellow-500"></div>
            <span className="uppercase text-sm tracking-widest text-yellow-300">
              Contact &amp; Locate
            </span>
          </div>
          <h1
            className="text-5xl md:text-7xl font-extrabold leading-tight drop-shadow-lg"
            data-aos="zoom-in"
            data-aos-delay="200"
          >
            Our Locations
          </h1>
          <p
            className="mt-4 text-lg md:text-xl max-w-2xl text-gray-200 leading-relaxed"
            data-aos="fade-up"
            data-aos-delay="400"
          >
            Dubey Construction is proud to maintain multiple offices across
            India. Find the location nearest to you and visit us to discuss
            your next big project.
          </p>
        </div>
      </section>

      {/* ───────────────────────────────────────────── */}
      {/* LOCATIONS GRID SECTION */}
      {/* ───────────────────────────────────────────── */}
      <section className="relative py-16 px-6 md:px-12 lg:px-24 -mt-12 z-10 bg-gradient-to-b from-gray-50 via-white to-gray-100">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            {locations.map((loc, idx) => (
              <div
                key={idx}
                className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transform hover:-translate-y-1 transition-all duration-300 p-6 flex flex-col"
                data-aos="fade-up"
                data-aos-delay={idx * 150}
              >
                <div className="flex items-center mb-4">
                  <svg
                    className="w-8 h-8 text-yellow-600 mr-3"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10 2a6 6 0 00-6 6c0 4.2 5.5 9.6 5.8 9.9a.75.75 0 001.1 0c.3-.3 5.8-5.7 5.8-9.9a6 6 0 00-6-6zm0 2a4 4 0 014 4c0 2.2-2.7 5.3-4 6.9-1.3-1.6-4-4.7-4-6.9a4 4 0 014-4z"
                      clipRule="evenodd"
                    />
                    <circle cx="10" cy="8" r="2" />
                  </svg>
                  <h3 className="text-2xl font-bold text-gray-800">
                    {loc.name}
                  </h3>
                </div>
                <div className="flex-1">
                  <p className="text-gray-600 leading-snug">
                    {loc.addressLine1}
                    {loc.addressLine2 && (
                      <>
                        <br />
                        {loc.addressLine2}
                      </>
                    )}
                    <br />
                    {loc.city}
                  </p>
                  <p className="mt-4 text-gray-600">
                    <strong>Phone:</strong> {loc.phone}
                  </p>
                  <p className="mt-2 text-gray-600">
                    <strong>Hours:</strong> {loc.hours}
                  </p>
                </div>
                <div className="mt-6">
                  <a
                    href={`https://www.google.com/maps/search/?api=1&query=${loc.mapQuery}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block bg-yellow-600 text-white px-5 py-3 rounded-lg font-semibold uppercase tracking-wide shadow hover:bg-yellow-700 transform hover:-translate-y-0.5 transition duration-300"
                  >
                    Get Directions
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ───────────────────────────────────────────── */}
      {/* EMBEDDED GOOGLE MAP SECTION */}
      {/* ───────────────────────────────────────────── */}
      <section className="relative w-full h-[400px] md:h-[600px] lg:h-[700px] overflow-hidden -mt-8 z-0">
        <iframe
          title="Dubey Construction Office Locations"
          className="absolute inset-0 w-full h-full border-0"
          src="https://www.google.com/maps/d/u/0/embed?mid=1ZiiQEl1Y6WHC37D_bz05yrnla1tq0po"
          allowFullScreen
        ></iframe>
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 to-black/30 z-0"></div>
        <div className="relative z-10 flex flex-col items-center justify-center h-full text-center text-white px-6">
          <h2
            className="text-3xl md:text-4xl font-extrabold drop-shadow-lg"
            data-aos="zoom-in"
          >
            Find Us on the Map
          </h2>
          <p
            className="mt-3 text-lg md:text-xl max-w-xl leading-relaxed"
            data-aos="fade-up"
            data-aos-delay="200"
          >
            Click on any office marker to view address details, hours, and get
            turn-by-turn directions.
          </p>
          <h2>
            sdf
          </h2>
        </div>
      </section>
    </div>
    
  );
};

export default LocationPage;

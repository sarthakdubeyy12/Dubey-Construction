import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const History = () => {
  useEffect(() => {
    AOS.init({ once: true, duration: 800 });
  }, []);

  return (
    <div className="font-sans antialiased text-gray-800 overflow-x-hidden">
      {/* ─────────────────────────────────────────────────────────────── */}
      {/* FULL-SCREEN HERO WITH GRAYSCALE BACKGROUND & OVERLAY */}
      {/* ─────────────────────────────────────────────────────────────── */}
      <section
        className="relative h-screen w-full bg-center bg-cover filter grayscale"
        style={{ backgroundImage: "url('/black.jpg')" }}
      >
        {/* Dark overlay */}
        <div className="absolute inset-0 bg-black/70"></div>

        {/* Top-left: Dubey Construction Logo */}
        <div className="absolute top-6 right-6 z-10">
          <img
            src="/dubey.jpg"
            alt="Dubey Construction Logo"
            className="w-24 h-auto"
          />
        </div>

        

        {/* Hero content */}
        <div className="relative z-10 flex flex-col items-center justify-center h-full text-center px-6">
          {/* Vertical timeline indicator */}
          <div
            className="flex flex-col items-center text-white mb-6"
            data-aos="fade-down"
          >
            <div className="w-1 h-2 bg-white rounded-full mb-2"></div>
            <div className="w-1 h-2 bg-white rounded-full mb-2"></div>
            <div className="w-1 h-2 bg-white rounded-full"></div>
          </div>

          {/* Title */}
          <h1
            className="text-4xl md:text-5xl lg:text-6xl font-extrabold leading-tight tracking-tight text-white mb-4"
            data-aos="fade-up"
          >
            OUR STORY
          </h1>
          {/* Subtitle */}
          <p
            className="text-lg md:text-xl text-gray-200"
            data-aos="fade-up"
            data-aos-delay="200"
          >
            1974 – Today
          </p>
        </div>
      </section>

      {/* ─────────────────────────────────────────────────────────────── */}
      {/* MAIN CONTENT: HISTORY TIMELINE & TEXT (ROYAL ACCENTS) */}
      {/* ─────────────────────────────────────────────────────────────── */}
      <main className="bg-gray-50 py-20 px-6 md:px-12 lg:px-24">
        {/* Intro blurb */}
        <div
          className="max-w-4xl mx-auto mb-16 text-center"
          data-aos="fade-up"
        >
          <h2 className="text-3xl md:text-4xl font-serif font-semibold mb-4 text-[#C59B7A]">
            A Legacy Built on Excellence
          </h2>
          <p className="text-gray-600 leading-relaxed text-lg">
            Since our founding in 1974 as a small, family‐run builder, Dubey
            Construction has steadily grown into one of the region’s most
            respected firms. Our journey is defined by craftsmanship,
            integrity, and a commitment to transforming communities—one
            landmark at a time.
          </p>
        </div>

        {/* Timeline events */}
        <div className="max-w-5xl mx-auto space-y-20">
          {/* 1974 */}
          <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-center">
            {/* Year circle */}
            <div
              className="col-span-2 flex justify-center md:justify-end"
              data-aos="fade-right"
            >
              <div className="flex items-center justify-center w-16 h-16 bg-[#C59B7A] rounded-full">
                <span className="text-lg font-semibold text-white">1974</span>
              </div>
            </div>
            {/* Line connecting circle */}
            <div className="hidden md:block col-span-1">
              <div className="w-[2px] h-full bg-gray-300 mx-auto"></div>
            </div>
            {/* Description */}
            <div
              className="col-span-9"
              data-aos="fade-left"
              data-aos-delay="200"
            >
              <p className="text-gray-700 leading-relaxed">
                In 1974, our founder, Braj Bhushan Dubey, opened the first Dubey
                Construction office in a small warehouse off Main Street. Driven
                by a passion for quality and an unwavering work ethic, he laid
                the groundwork for a company built on craftsmanship and trust.
              </p>
            </div>
          </div>

          {/* 1980s */}
          <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-center">
            <div
              className="col-span-2 flex justify-center md:justify-end"
              data-aos="fade-right"
            >
              <div className="flex items-center justify-center w-16 h-16 bg-[#C59B7A] rounded-full">
                <span className="text-lg font-semibold text-white">1980s</span>
              </div>
            </div>
            <div className="hidden md:block col-span-1">
              <div className="w-[2px] h-full bg-gray-300 mx-auto"></div>
            </div>
            <div
              className="col-span-9"
              data-aos="fade-left"
              data-aos-delay="200"
            >
              <p className="text-gray-700 leading-relaxed">
                Throughout the 1980s, Dubey Construction expanded across the
                state, earning a reputation for exceptional residential and
                commercial builds. We introduced new technologies—steel framing
                and precast panels—solidifying our foothold in modern
                construction methods.
              </p>
            </div>
          </div>

          {/* 2000s */}
          <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-center">
            <div
              className="col-span-2 flex justify-center md:justify-end"
              data-aos="fade-right"
            >
              <div className="flex items-center justify-center w-16 h-16 bg-[#C59B7A] rounded-full">
                <span className="text-lg font-semibold text-white">2000s</span>
              </div>
            </div>
            <div className="hidden md:block col-span-1">
              <div className="w-[2px] h-full bg-gray-300 mx-auto"></div>
            </div>
            <div
              className="col-span-9"
              data-aos="fade-left"
              data-aos-delay="200"
            >
              <p className="text-gray-700 leading-relaxed">
                As the new millennium dawned, we embraced digital innovation.
                Dubey Construction invested in 3D modeling, Building Information
                Modeling (BIM), and green‐building certifications. We completed
                our first LEED Gold–certified commercial tower in 2008.
              </p>
            </div>
          </div>

          {/* 2010s */}
          <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-center">
            <div
              className="col-span-2 flex justify-center md:justify-end"
              data-aos="fade-right"
            >
              <div className="flex items-center justify-center w-16 h-16 bg-[#C59B7A] rounded-full">
                <span className="text-lg font-semibold text-white">2010s</span>
              </div>
            </div>
            <div className="hidden md:block col-span-1">
              <div className="w-[2px] h-full bg-gray-300 mx-auto"></div>
            </div>
            <div
              className="col-span-9"
              data-aos="fade-left"
              data-aos-delay="200"
            >
              <p className="text-gray-700 leading-relaxed">
                By 2015, Dubey Construction had become a regional leader in
                sustainable design. We launched our “Green Foundations” initiative,
                reducing waste on every job site and partnering with local
                communities to build eco-friendly public spaces.
              </p>
            </div>
          </div>

          {/* Today */}
          <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-center">
            <div
              className="col-span-2 flex justify-center md:justify-end"
              data-aos="fade-right"
            >
              <div className="flex items-center justify-center w-16 h-16 bg-[#C59B7A] rounded-full">
                <span className="text-lg font-semibold text-white">Today</span>
              </div>
            </div>
            <div className="hidden md:block col-span-1">
              <div className="w-[2px] h-full bg-gray-300 mx-auto"></div>
            </div>
            <div
              className="col-span-9"
              data-aos="fade-left"
              data-aos-delay="200"
            >
              <p className="text-gray-700 leading-relaxed">
                Over four decades since our founding, Dubey Construction remains
                an employee‐owned company with over 500 dedicated team members.
                From bespoke residences to multi-million-dollar developments,
                we continue to set the standard for excellence, innovation, and
                community impact.
              </p>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default History;

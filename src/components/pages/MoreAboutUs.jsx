import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";

const MoreAboutUs = () => {
  useEffect(() => {
    AOS.init({ once: true, duration: 800 });
  }, []);

  return (
    <div className="font-sans antialiased overflow-x-hidden">
      {/* ─────────────────────────────────────────────────────────────── */}
      {/* TOP BANNER IMAGE SECTION */}
      {/* ─────────────────────────────────────────────────────────────── */}
      <section
        className="h-screen bg-cover bg-center flex items-center justify-start text-gray-700 px-10"
        style={{ backgroundImage: `url('/buildingpage.jpg')` }}
      >
        <div data-aos="fade-right">
          <h1 className="text-4xl md:text-5xl font-extrabold mt-4 leading-tight text-black-400 max-w-2xl">
            More About Us
          </h1>
        </div>
      </section>

      {/* ─────────────────────────────────────────────────────────────── */}
      {/* HERO / SECTION HEADER */}
      {/* ─────────────────────────────────────────────────────────────── */}
      <section className="relative w-full bg-white">
        {/* Decorative Top‐Right SVG */}
        <svg
          className="absolute top-0 right-0 w-64 h-64 md:w-80 md:h-80"
          viewBox="0 0 200 200"
          xmlns="http://www.w3.org/2000/svg"
        >
          <polygon points="200,0 200,100 100,0" fill="#FDD47E" />
          <polygon points="100,200 200,100 200,200" fill="#3E7553" />
          <polygon points="200,100 200,200 100,200" fill="#FFC72C" />
        </svg>

        <div className="absolute inset-0 bg-white/50"></div>

        <div
          className="relative mx-auto max-w-7xl px-6 py-32 text-left"
          data-aos="fade-down"
        >
          <div className="w-full max-w-4xl mx-auto">
            <div className="flex items-center gap-2 mb-8">
              <div className="h-[2px] w-12 bg-yellow-500"></div>
              <span className="uppercase text-sm tracking-widest text-gray-700">
                About DUBEY CONSTRUCTION
              </span>
            </div>
            <h1 className="uppercase text-sm tracking-widest text-gray-700">
              Dubey Construction is a trusted industry leader delivering
              innovative, high-quality infrastructure and building solutions
              with a commitment to excellence and integrity.
            </h1>
          </div>
        </div>
      </section>

      {/* ─────────────────────────────────────────────────────────────── */}
      {/* ENHANCED BACKGROUND SECTION */}
      {/* ─────────────────────────────────────────────────────────────── */}
      <section
        className="relative text-white px-6 md:px-12 lg:px-24 py-28 bg-fixed bg-center bg-cover"
        style={{ backgroundImage: "url('/your-fancy-background.jpg')" }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-black/70 z-0"></div>

        <div className="relative z-10 mx-auto max-w-5xl text-center">
          <h2
            className="text-4xl md:text-5xl lg:text-6xl font-extrabold leading-tight mb-8 tracking-tight"
            data-aos="fade-up"
          >
            Together, We Build Success
          </h2>

          <p
            className="text-lg md:text-xl leading-relaxed mb-6 text-gray-200"
            data-aos="fade-up"
            data-aos-delay="200"
          >
            From transformative renovations to iconic billion-dollar landmarks — from cutting-edge sports arenas to vital
            infrastructure and petrochemical powerhouses — Dubey Construction delivers with precision and purpose.
          </p>

          <p
            className="text-lg md:text-xl leading-relaxed mb-6 text-gray-200"
            data-aos="fade-up"
            data-aos-delay="400"
          >
            We don’t just build structures — we engineer experiences. As trailblazers in turnkey solutions, our approach
            merges innovation with craftsmanship, ensuring every project exceeds industry standards and client expectations.
          </p>

          <p
            className="text-lg md:text-xl leading-relaxed text-gray-200"
            data-aos="fade-up"
            data-aos-delay="600"
          >
            Fueled by collaboration, driven by purpose, and empowered by technology — we elevate your vision into bold,
            lasting realities.
          </p>
        </div>
      </section>

      {/* ─────────────────────────────────────────────────────────────── */}
      {/* HERO / BANNER SECTION */}
      {/* ─────────────────────────────────────────────────────────────── */}
      <section
        className="h-screen bg-cover bg-center flex items-center justify-start text-white px-10"
        style={{ backgroundImage: `url('/buckle.jpg')` }}
      >
      </section>

      {/* ─────────────────────────────────────────────────────────────── */}
      {/* GREEN SECTION: Building Communities */}
      {/* ─────────────────────────────────────────────────────────────── */}
      <div className="relative bg-[#1b443a] text-white px-10 py-20">
        <div className="flex items-center gap-4 mb-6">
          <div className="h-[2px] w-10 bg-white" />
          <span className="uppercase tracking-widest text-sm opacity-75">
            OUR COMMITMENTS

          </span>
        </div>

        <div className="max-w-5xl text-3xl font-bold leading-relaxed">
          <p>
            Our commitments to safety, quality, sustainability and community stewardship ensure your lasting success.
          </p>
        </div>

        
      </div>

      <section className="bg-white py-20 px-6 md:px-12 lg:px-24">
  <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 text-center">
    {/* Safety */}
    <div>
      <div className="flex justify-center mb-4">
        <img src="/safety.jpg" alt="Safety Icon" className="w-30 h-30 object-contain" />
      </div>
      <h3 className="text-lg font-semibold mb-2">Safety</h3>
      <p className="text-gray-700 mb-4">
        We will never compromise the safety of our people. Our goal is zero incidents and our lost time frequency rate is industry leading.
      </p>
      
    </div>

    {/* Quality */}
    <div>
      <div className="flex justify-center mb-4">
        <img src="/quality.jpg" alt="Quality Icon" className="w-30 h-30 object-contain" />
      </div>
      <h3 className="text-lg font-semibold mb-2">Quality</h3>
      <p className="text-gray-700 mb-4">
        Consistency ensures success. We see projects through and proactively develop solutions to exceed expectations.
      </p>
    </div>

    {/* Sustainability */}
    <div>
      <div className="flex justify-center mb-4">
        <img src="/sus.jpg" alt="Sustainability Icon" className="w-30 h-30 object-contain" />
      </div>
      <h3 className="text-lg font-semibold mb-2">Sustainability</h3>
      <p className="text-gray-700 mb-4">
        We look beyond sustainable construction with a holistic approach to corporate social responsibility that addresses partners, people, projects, practices and places.
      </p>
      
    </div>

    {/* Stewardship */}
    <div>
      <div className="flex justify-center mb-4">
        <img src="/stewardship.jpg" alt="Stewardship Icon" className="w-30 h-30 object-contain" />
      </div>
      <h3 className="text-lg font-semibold mb-2">Stewardship</h3>
      <p className="text-gray-700">
        Our culture of giving empowers employees to give back to the community. In 2019, more than $9.4 million was donated to community organizations by PCL and our employees.
      </p>
    </div>
  </div>
</section>

    </div>
  );
};

export default MoreAboutUs;

import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { motion } from "framer-motion";

const Careers = () => {
  useEffect(() => {
    AOS.init({ once: true });
  }, []);

  const legacySections = [
    {
      img: "/public/architect-1080589_1920.jpg",
      title: "Build with Vision",
      text: "We're crafting a tomorrow rooted in precision, responsibility, and vision. Join us in projects that inspire progress.",
    },
    {
      img: "/public/heaven-3395811_1920.jpg",
      title: "Shape the Skyline",
      text: "From towering structures to sustainable spaces, be a part of projects that define the urban landscape.",
    },
    {
      img: "/public/glass-facade-8016589_1920.jpg",
      title: "Lead with Integrity",
      text: "Our foundation is built on trust. We value ethical leadership and hands-on innovation in every build.",
    },
    {
      img: "/public/facade-9182972_1920.jpg",
      title: "Design Your Future",
      text: "Empowering every team member with growth opportunities, mentorship, and an open platform for ideas.",
    },
  ];

  return (
    <div className="text-gray-800 font-sans">
      {/* Hero Section */}
      <header className="relative w-full h-[90vh] overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center filter blur-sm scale-130 opacity-120"
          style={{ backgroundImage: "url('/careers1.jpg')" }}
        />
        <div className="absolute inset-0 bg-black opacity-40" />
        <div className="relative z-10 flex flex-col items-center justify-center h-full text-center px-4">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="text-white text-5xl md:text-7xl font-bold mb-4"
          >
            Careers at Dubey Construction
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2 }}
            className="text-white text-lg max-w-2xl"
          >
            Join our team of passionate builders, innovators, and leaders shaping the future of infrastructure across India.
          </motion.p>
        </div>
      </header>

      {/* Why Work With Us */}
      <section className="py-20 px-6 md:px-20 bg-[#f3f4f6]">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-12" data-aos="fade-up">
            Why Work With Us
          </h2>
          <div className="grid md:grid-cols-3 gap-10">
            {[{
              title: "Growth Opportunities",
              desc: "We invest in your career through training, mentorship, and leadership development programs."
            }, {
              title: "Inclusive Culture",
              desc: "Our diverse team thrives in a collaborative environment that values every perspective."
            }, {
              title: "Impactful Work",
              desc: "Be part of projects that shape communities and make a lasting difference."
            }].map((item, i) => (
              <div
                key={i}
                className="bg-white p-8 rounded-lg shadow-md hover:shadow-xl transition duration-300"
                data-aos="fade-up"
                data-aos-delay={i * 100}
              >
                <h3 className="text-2xl font-semibold mb-3">{item.title}</h3>
                <p className="text-gray-700">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Current Openings */}
      <section
        className="relative py-32 px-6 md:px-20 bg-fixed bg-center bg-cover text-white"
        style={{ backgroundImage: "url('/new1212.jpg')" }}
      >
        <div className="absolute inset-0 bg-black opacity-70" />
        <div className="relative z-10 max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-12" data-aos="fade-up">
            Current Job Openings
          </h2>
          <div className="space-y-10">
            {[{
              title: "Project Manager",
              location: "Mumbai",
              type: "Full-time",
              desc: "Lead large-scale construction projects ensuring timely delivery and quality execution."
            }, {
              title: "Site Engineer",
              location: "Delhi NCR",
              type: "Full-time",
              desc: "Oversee day-to-day site operations, manage vendors, and enforce safety protocols."
            }, {
              title: "Design Architect",
              location: "Bengaluru",
              type: "Contract",
              desc: "Collaborate on innovative infrastructure and sustainable design solutions."
            }].map((job, i) => (
              <div
                key={i}
                className="border border-white/20 p-6 rounded-lg hover:bg-white/10 backdrop-blur-sm transition"
                data-aos="fade-up"
                data-aos-delay={i * 100}
              >
                <h3 className="text-2xl font-semibold mb-2">{job.title}</h3>
                <p className="text-sm mb-2">{job.location} | {job.type}</p>
                <p className="mb-4">{job.desc}</p>
                <button className="bg-white text-[#014C2A] px-6 py-2 rounded hover:bg-gray-200 transition">
                  Apply Now
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Life at Dubey Construction */}
      <section className="bg-[#f0f5f9] py-24 px-6 md:px-20">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-14" data-aos="fade-up">
            Life at Dubey Construction
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
            {[{
              title: "People-First Culture",
              desc: "We believe our strength lies in our people. Regular townhalls, team bonding, and a supportive atmosphere make us more than just coworkers."
            }, {
              title: "Innovation Every Day",
              desc: "From smart construction tools to AI-powered planning, we embrace future-ready technology that enhances efficiency and creativity."
            }, {
              title: "Green Thinking",
              desc: "Sustainability isn’t an initiative—it’s our mindset. Whether it's eco-friendly materials or waste reduction strategies, we build responsibly."
            }, {
              title: "Career Acceleration",
              desc: "We provide clear career paths, mentorship programs, and industry certifications to help you achieve your full potential."
            }, {
              title: "Celebrating Together",
              desc: "From annual retreats to milestone celebrations, we make time to recognize hard work and cherish shared moments."
            }, {
              title: "Meaningful Projects",
              desc: "Join transformative projects that impact cities, people, and futures. Your contribution shapes the nation’s landscape."
            }].map((item, i) => (
              <div
                key={i}
                className="bg-white rounded-2xl p-6 shadow-md hover:shadow-xl transition duration-300"
                data-aos="fade-up"
                data-aos-delay={i * 100}
              >
                <h3 className="text-2xl font-semibold mb-3">{item.title}</h3>
                <p className="text-gray-600 leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Legacy Build Section - Image/Text Alternating */}
      <section className="py-24 px-6 md:px-20 bg-[#fff]">
        <div className="max-w-7xl mx-auto space-y-20">
          {legacySections.map((item, i) => (
            <div
              key={i}
              className={`flex flex-col md:flex-row ${i % 2 === 1 ? 'md:flex-row-reverse' : ''} items-center gap-12 group`}
              data-aos="fade-up"
            >
              <div className="flex-1 overflow-hidden rounded-2xl shadow-lg">
                <img
                  src={item.img}
                  alt={item.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="flex-1 text-center md:text-left">
                <h3 className="text-3xl font-bold mb-4">{item.title}</h3>
                <p className="text-lg text-gray-700 leading-relaxed">{item.text}</p>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Careers;

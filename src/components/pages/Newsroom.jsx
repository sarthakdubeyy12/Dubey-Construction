import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { motion } from "framer-motion";

const Newsroom = () => {
  useEffect(() => {
    AOS.init({ once: true });
  }, []);

  const blogPosts = [
    {
      title: "Dubey Construction Launches Sustainability Initiative",
      image: "/hello1.webp",
      summary:
        "We're proud to announce our Green Build Initiative focused on reducing environmental impact through smarter construction methods and material choices.",
    },
    {
      title: "Celebrating Women in Construction",
      image: "/hello2.webp",
      summary:
        "Dubey Construction continues its commitment to diversity and inclusion by celebrating the women who are shaping our projects every day.",
    },
    {
      title: "Dubey Partners with Local Trade Schools",
      image: "/hello3.webp",
      summary:
        "To address workforce shortages and upskill the next generation, Dubey Construction is investing in trade school partnerships across the region.",
    },
    {
      title: "New HQ Opening in Mumbai",
      image: "/hello4.webp",
      summary:
        "We’ve officially opened our new headquarters in Mumbai — a state-of-the-art building designed with sustainability and collaboration in mind.",
    },
    {
      title: "Dubey Wins National Safety Award",
      image: "/hello5.webp",
      summary:
        "Recognized for excellence in jobsite safety and compliance, our teams are setting new industry standards.",
    },
    {
      title: "Celebrating 25 Years of Excellence",
      image: "/hello6.webp",
      summary:
        "Join us as we look back on 25 years of innovation, growth, and impact across India.",
    },
    {
      title: "Tech Integration in Smart Sites",
      image: "/hello7.webp",
      summary:
        "Drones, AR glasses, and real-time data — our sites are transforming with cutting-edge technology.",
    },
    {
      title: "Community Outreach in Jaipur",
      image: "/hello8.webp",
      summary:
        "From job fairs to building classrooms, we’re deepening our roots through community-driven initiatives.",
    },
    {
      title: "Intern Spotlight: Building Futures",
      image: "/hello9.webp",
      summary:
        "A look into our internship program and how it empowers young talent with hands-on experience.",
    }
  ];

  return (
    <div className="text-gray-800 font-sans">
      {/* Header */}
      <header className="relative w-full h-[90vh] overflow-hidden">
        {/* Blurred Background Layer */}
        <div
          className="absolute inset-0 bg-cover bg-center scale-110 filter "
          style={{ backgroundImage: "url('/woww.webp')" }}
        />
        {/* Dark Overlay */}
        <div />
        {/* Foreground Content */}
        <div className="relative z-10 flex items-start justify-center h-full pt-30">
  <motion.h1
    initial={{ opacity: 0, y: 30 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 1 }}
    className="text-gray-500 text-5xl md:text-7xl font-bold drop-shadow-lg text-center"
  >
    Newsroom
  </motion.h1>
</div>

      </header>

      {/* Blog Grid */}
      <section className="py-20 px-6 md:px-20 bg-[#f8f9fa]">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center" data-aos="fade-up">
            What's Happening at Dubey Construction
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
            {blogPosts.map((post, index) => (
              <div
                key={index}
                className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-xl transition duration-300 group"
                data-aos="fade-up"
                data-aos-delay={index * 100}
              >
                <img
                  src={post.image}
                  alt={post.title}
                  className="w-full h-56 object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-2">{post.title}</h3>
                  <p className="text-gray-600 text-sm">{post.summary}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Quote Section */}
      <section
        className="relative py-32 px-6 md:px-20 bg-fixed bg-center bg-cover"
        style={{ backgroundImage: "url('/new1212.webp')" }}
      >
        <div className="absolute inset-0 bg-black opacity-60" />
        <div className="relative z-10 text-white text-center max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            "Every brick tells a story — and we're here to share them with the world."

          </h2>
          <p className="text-xl opacity-80">– The Dubey Construction Team
          </p>
        </div>
      </section>

      {/* Newsletter Call To Action */}
      <section className="bg-white py-20 px-6 md:px-20 text-center">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Stay Connected</h2>
          <p className="text-gray-700 mb-8">
            Subscribe to our newsletter for the latest construction insights, project updates, and company news from Dubey Construction.
          </p>
          <form className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <input
              type="email"
              placeholder="Enter your email"
              className="px-6 py-3 border border-gray-300 rounded-lg w-full sm:w-auto focus:outline-none focus:ring-2 focus:ring-[#014C2A]"
            />
            <button
              type="submit"
              className="bg-[#014C2A] hover:bg-green-900 text-white px-6 py-3 rounded-lg transition"
            >
              Subscribe
            </button>
          </form>
        </div>
      </section>
    </div>
  );
};

export default Newsroom;

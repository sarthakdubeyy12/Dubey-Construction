const Services = () => {
  const services = [
    {
      title: "Residential Construction",
      description:
        "Your idea, our work. Build your customized dream home with Dubey Construction expert craftsmanship tailored to your vision and lifestyle.",
      image: "/residential.webp",
    },
    {
      title: "Commercial Construction",
      description:
        "From business complexes to hotels, Dubey Construction delivers superior quality and efficiency in commercial construction, ensuring it reflects professionalism and functionality.",
      image: "/commercial.webp",
    },
    {
      title: "Interiors",
      description:
        "Right before moving in, we make your house a home with our top-notch interior design service. It is fully customized to reflect your unique style and preferences.",
      image: "/interior.webp",
    },
    {
      title: "Maintenance",
      description:
        "Ensure the longevity and optimal performance of your property with Dubey Construction comprehensive building maintenance services. We help you keep your investment in top condition.",
      image: "/maintenance.webp",
    },
  ];

  return (
    <section className="py-20 px-6 md:px-12 bg-white text-black">
      <div className="text-center mb-10">
        <h2 className="text-4xl md:text-5xl font-extrabold">
          Services <span className="text-yellow-500">We Offer</span>
        </h2>
        <button className="mt-4 px-6 py-2 bg-yellow-400 text-black font-bold rounded-full shadow hover:bg-yellow-500 transition">
          See All Services
        </button>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-7xl mx-auto">
        {services.map((service, index) => (
          <div
            key={index}
            className="bg-gray-100 p-6 rounded-2xl shadow hover:shadow-lg transition duration-300"
          >
            <img
              src={service.image}
              alt={service.title}
              className="w-full h-48 object-cover rounded-xl mb-4"
            />
            <h3 className="text-xl font-bold mb-2">{service.title}</h3>
            <p className="text-gray-700 text-sm mb-4">{service.description}</p>
            <a href="#" className="text-yellow-600 font-semibold">
              Know More →
            </a>
          </div>
        ))}
      </div>

      {/* Extended Fancy Section */}
      <div className="mt-24 bg-gradient-to-br from-yellow-50 to-white py-16 px-6 md:px-20 rounded-3xl shadow-xl max-w-7xl mx-auto">
        <h3 className="text-3xl md:text-4xl font-extrabold text-center text-gray-800 mb-10">
          Why Choose <span className="text-yellow-500">Dubey Construction?</span>
        </h3>
        <div className="grid md:grid-cols-2 gap-10 text-lg text-gray-700">
          <div className="space-y-6">
            <p>✔️ End-to-End Construction Solutions</p>
            <p>✔️ Transparent Pricing & Timely Delivery</p>
            <p>✔️ Dedicated Project Managers</p>
            <p>✔️ Customized Interior & Exterior Options</p>
          </div>
          <div className="space-y-6">
            <p>✔️ Professional Architects & Engineers</p>
            <p>✔️ High-Quality Material Standards</p>
            <p>✔️ Regular Site Updates & Reports</p>
            <p>✔️ Reliable Post-Construction Support</p>
          </div>
        </div>
      </div>

      {/* Final CTA */}
      <div className="text-center mt-20">
        <h4 className="text-3xl font-bold text-gray-800 mb-4">
          Let’s Build Something <span className="text-yellow-500">Incredible Together</span>
        </h4>
        <p className="text-gray-600 mb-6 max-w-xl mx-auto">
          Whether it's a home, an office, or an entire complex, we are equipped and excited to help you shape the future.
        </p>
        <button className="px-8 py-3 bg-yellow-400 text-black font-bold rounded-full shadow-lg hover:bg-yellow-500 transition">
          Contact Our Experts
        </button>
      </div>

      {/* Extended Scroll Section */}
      <div className="mt-32 py-24 px-6 md:px-20 bg-gradient-to-br from-[#fefce8] via-[#fef3c7] to-[#fcd34d] text-gray-800">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-extrabold mb-10">
            Excellence in Every Brick
          </h2>
          <p className="text-lg md:text-xl mb-10 max-w-3xl mx-auto">
            With Dubey Construction, you don't just build a structure—you create a legacy. Our approach to quality, technology, and design delivers a future-forward experience for every client.
          </p>
          <div className="grid md:grid-cols-3 gap-10">
            <div className="bg-white rounded-3xl shadow-xl p-8">
              <h3 className="text-2xl font-bold text-yellow-500 mb-4">01. Consultation</h3>
              <p>Understand your vision, goals, and budget to tailor a personalized plan of action.</p>
            </div>
            <div className="bg-white rounded-3xl shadow-xl p-8">
              <h3 className="text-2xl font-bold text-yellow-500 mb-4">02. Planning & Design</h3>
              <p>Architectural and interior planning, with 3D visualization and expert approvals.</p>
            </div>
            <div className="bg-white rounded-3xl shadow-xl p-8">
              <h3 className="text-2xl font-bold text-yellow-500 mb-4">03. Execution & Handover</h3>
              <p>From foundation to finishing, we ensure flawless delivery—on time, every time.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
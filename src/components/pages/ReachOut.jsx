import { useState } from "react";
import { Mail, PhoneCall, MapPin, Users, ShieldCheck, Briefcase } from "lucide-react";

const ReachOut = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
    alert("Thank you for reaching out! We'll get back to you soon.");
    setFormData({ name: "", email: "", phone: "", message: "" });
  };

  return (
    <section
      className="relative py-32 px-6 md:px-20 bg-fixed bg-center bg-cover text-white"
      style={{ backgroundImage: "url('/city.webp')" }}
    >
      <div className="absolute inset-0 bg-black opacity-70" />
      <div className="relative z-10 max-w-4xl mx-auto">
        <h2
          className="text-4xl font-bold text-center mb-12"
          data-aos="fade-up"
        >
          Reach Out to Us
        </h2>
        <form
          onSubmit={handleSubmit}
          className="space-y-6 border border-white/20 p-6 rounded-lg backdrop-blur-sm bg-white/5"
          data-aos="fade-up"
        >
          <div className="grid md:grid-cols-2 gap-6">
            <input
              type="text"
              name="name"
              placeholder="Your Name"
              value={formData.name}
              onChange={handleChange}
              required
              className="w-full p-3 rounded bg-white/10 text-white placeholder-white/70 border border-white/20 focus:outline-none focus:ring-2 focus:ring-yellow-400"
            />
            <input
              type="email"
              name="email"
              placeholder="Email Address"
              value={formData.email}
              onChange={handleChange}
              required
              className="w-full p-3 rounded bg-white/10 text-white placeholder-white/70 border border-white/20 focus:outline-none focus:ring-2 focus:ring-yellow-400"
            />
          </div>
          <input
            type="tel"
            name="phone"
            placeholder="Phone Number"
            value={formData.phone}
            onChange={handleChange}
            required
            className="w-full p-3 rounded bg-white/10 text-white placeholder-white/70 border border-white/20 focus:outline-none focus:ring-2 focus:ring-yellow-400"
          />
          <textarea
            name="message"
            rows="5"
            placeholder="Your Message"
            value={formData.message}
            onChange={handleChange}
            required
            className="w-full p-3 rounded bg-white/10 text-white placeholder-white/70 border border-white/20 focus:outline-none focus:ring-2 focus:ring-yellow-400"
          ></textarea>
          <div className="text-center">
            <button
              type="submit"
              className="bg-white text-[#014C2A] px-8 py-3 rounded hover:bg-gray-200 transition font-semibold"
            >
              Send Message
            </button>
          </div>
        </form>

        <div className="mt-20 text-center max-w-3xl mx-auto space-y-4 text-white/90">
          <p className="text-lg" data-aos="fade-up" data-aos-delay="100">
            Our team is here to help you plan, build, and deliver your next big project.
          </p>
          <p className="text-lg" data-aos="fade-up" data-aos-delay="200">
            Whether you have questions about our services, want to collaborate, or just want to say hello—feel free to get in touch.
          </p>
          <p className="text-lg" data-aos="fade-up" data-aos-delay="300">
            You can also reach us directly at <strong>contact@dubeyconstruction.in</strong>
          </p>
        </div>

        {/* Contact Info Section */}
        <div className="mt-32 max-w-5xl mx-auto text-white/90 grid md:grid-cols-3 gap-10 text-center">
          <div data-aos="fade-up" className="space-y-4">
            <Mail className="mx-auto text-yellow-400 w-8 h-8" />
            <h3 className="text-xl font-semibold">Email Us</h3>
            <p>contact@dubeyconstruction.in</p>
          </div>
          <div data-aos="fade-up" data-aos-delay="100" className="space-y-4">
            <PhoneCall className="mx-auto text-yellow-400 w-8 h-8" />
            <h3 className="text-xl font-semibold">Call Us</h3>
            <p>+91 9876543210</p>
          </div>
          <div data-aos="fade-up" data-aos-delay="200" className="space-y-4">
            <MapPin className="mx-auto text-yellow-400 w-8 h-8" />
            <h3 className="text-xl font-semibold">Visit Us</h3>
            <p>123, Main Street, New Delhi, India</p>
          </div>
        </div>

        {/* Additional Content Section */}
        <div className="mt-32 max-w-6xl mx-auto grid md:grid-cols-3 gap-10 text-white/90 text-center">
          <div data-aos="fade-up" className="p-6 bg-white/10 rounded-lg border border-white/20 backdrop-blur-sm">
            <Users className="mx-auto text-yellow-400 w-10 h-10 mb-4" />
            <h3 className="text-xl font-semibold mb-2">Our Team</h3>
            <p>Dedicated experts committed to delivering excellence on every project.</p>
          </div>
          <div data-aos="fade-up" data-aos-delay="100" className="p-6 bg-white/10 rounded-lg border border-white/20 backdrop-blur-sm">
            <ShieldCheck className="mx-auto text-yellow-400 w-10 h-10 mb-4" />
            <h3 className="text-xl font-semibold mb-2">Our Promise</h3>
            <p>Quality, safety, and transparency are at the heart of everything we do.</p>
          </div>
          <div data-aos="fade-up" data-aos-delay="200" className="p-6 bg-white/10 rounded-lg border border-white/20 backdrop-blur-sm">
            <Briefcase className="mx-auto text-yellow-400 w-10 h-10 mb-4" />
            <h3 className="text-xl font-semibold mb-2">Join Our Mission</h3>
            <p>Work with us and be part of reshaping the future of infrastructure.</p>
          </div>
        </div>

        <div className="py-20" /> {/* Space to end content and scroll */}
      </div>
    </section>
  );
};

export default ReachOut;

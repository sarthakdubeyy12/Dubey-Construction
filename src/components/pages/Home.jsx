import { useEffect, useState, useRef } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { ChevronRight } from "lucide-react";

// Backgrounds to preload
const backgroundImages = [
  "/dropdown11.webp",
  "/dropdown21.webp",
  "/dropdown12.webp",
  "/dropdown13.webp",
];

const preloadImages = (urls) => {
  urls.forEach((url) => {
    const img = new Image();
    img.src = url;
  });
};

const Home = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [prevIndex, setPrevIndex] = useState(null);
  const timeoutRef = useRef(null);

  useEffect(() => {
    AOS.init({ duration: 200, easing: "ease-in-out" });
    preloadImages(backgroundImages);
  }, []);

  useEffect(() => {
    startAutoSlide();
    return () => stopAutoSlide();
  }, [currentIndex]);

  const startAutoSlide = () => {
    stopAutoSlide();
    timeoutRef.current = setTimeout(() => {
      handleNextImage();
    }, 5000);
  };

  const stopAutoSlide = () => {
    if (timeoutRef.current) clearTimeout(timeoutRef.current);
  };

  const handleNextImage = () => {
    setPrevIndex(currentIndex);
    setCurrentIndex((prevIndex) => (prevIndex + 1) % backgroundImages.length);
  };

  const nextImage = () => {
    stopAutoSlide();
    handleNextImage();
  };

  return (
    <>
      {/* Background Image Carousel */}
      <div className="relative h-screen overflow-hidden">
        {/* Preloaded previous image (for transition) */}
        {prevIndex !== null && (
          <div
            className="absolute top-0 left-0 w-full h-full bg-cover bg-center transition-opacity duration-1000 opacity-0 z-0"
            style={{ backgroundImage: `url(${backgroundImages[prevIndex]})` }}
          />
        )}

        {/* Current Image */}
        <div
          className="absolute top-0 left-0 w-full h-full bg-cover bg-center transition-opacity duration-1000 opacity-100 z-10"
          style={{ backgroundImage: `url(${backgroundImages[currentIndex]})` }}
        />

        {/* Navigation Button */}
        <button
          onClick={nextImage}
          className="absolute right-6 top-1/2 transform -translate-y-1/2 bg-white/20 text-white p-2 rounded-full hover:bg-white/40 transition z-20"
          aria-label="Next Slide"
        >
          <ChevronRight className="w-5 h-5" />
        </button>
      </div>

      {/* WHO WE ARE SECTION */}
      <section className="bg-white text-black px-10 py-20" data-aos="fade-up">
        <div className="max-w-7xl mx-auto grid md:grid-cols-3 gap-10 items-start">
          <div className="md:col-span-2 space-y-6">
            <h2 className="text-5xl font-extrabold leading-tight mb-4">
              When we focus on mutual success, everyone wins.
            </h2>
            <p className="text-lg">
              The flexibility to mobilize the right people to deliver unique
              solutions, an unwavering focus on delivering value to your
              business bottom line, and the capability to leverage innovation to
              meet emerging challenges and keep you at the forefront. This is
              Dubey Construction.
            </p>
            <p className="text-lg">
              As a company that is 100 percent employee-owned, we collaborate
              and innovate to help our partners thrive. Our culture of ownership
              is the foundation that drives your success.
            </p>
            <p className="text-lg">
              From advanced digital construction technologies to innovative
              offsite modular manufacturing, and the cutting edge of sustainable
              building practices, we lead the industry—just as we have for over
              a century. We draw from our vast experience to help our clients
              and partners build structures and relationships that stand the
              test of time.
            </p>
            <p className="text-lg">
              With a deep understanding of the Indian infrastructure landscape
              and a commitment to excellence, Dubey Construction is here to
              build the future of India—sustainably, smartly, and boldly.
            </p>
            <button className="mt-8 px-6 py-3 border-2 border-green-700 text-green-700 font-bold rounded hover:bg-green-700 hover:text-white transition">
              ABOUT US
            </button>
          </div>

          <div className="space-y-8 pt-6 md:pt-0">
            <div>
              <p className="text-4xl font-extrabold text-green-700">40</p>
              <p className="text-lg font-semibold">Years in Operation</p>
            </div>
            <div>
              <p className="text-4xl font-extrabold text-green-700">$8.3B+</p>
              <p className="text-lg font-semibold">
                Annual Construction Volume
              </p>
            </div>
            <div>
              <p className="text-4xl font-extrabold text-green-700">#11</p>
              <p className="text-lg font-semibold">
                Rank in Top 400 Contractors in India
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* EMPLOYEE OWNED SECTION */}
      <section className="bg-white text-black px-10 py-20" data-aos="fade-up">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-10 items-center">
          <div>
            <img
              src="/photo.webp"
              alt="Employee Owned"
              className="w-full h-auto rounded-xl shadow-lg object-cover"
            />
          </div>
          <div className="space-y-8">
            <h2 className="text-4xl font-extrabold leading-tight">
              100% Employee Owned
            </h2>
            <p className="text-lg">
              We are proud to be 100% employee-owned, with over 1,000 active
              projects currently running across multiple industries and regions.
              Our dedication and ownership mindset help us deliver excellence in
              everything we do.
            </p>
            <div className="space-y-6">
              <div>
                <p className="text-5xl font-bold text-green-700">100%</p>
                <p className="text-lg font-semibold">Employee Owned</p>
              </div>
              <div>
                <p className="text-5xl font-bold text-green-700">100+</p>
                <p className="text-lg font-semibold">Active Projects</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* STUNNING STRUCTURES SECTION */}
      <section className="bg-white text-black px-10 py-20" data-aos="fade-up">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-10 items-center">
          <div>
            <img
              src="/building.webp"
              alt="Stunning Structures"
              className="w-full h-auto rounded-xl shadow-lg object-cover"
            />
          </div>
          <div className="space-y-6">
            <h2 className="text-4xl font-extrabold leading-tight">
              Stunning structures, sustainably built
            </h2>
            <p className="text-lg">
              Dubey Construction’s network of skilled professionals rises to the
              challenges of India’s diverse building landscape, delivering added
              value to every educational, institutional, residential, and
              commercial project we undertake.
            </p>
          </div>
        </div>
      </section>

      {/* WHAT WE BUILD SECTION */}
      <section
        className="relative bg-white text-black px-6 md:px-16 py-24 overflow-hidden"
        data-aos="fade-up"
      >
        <div className="absolute top-0 right-0 w-40 md:w-56 lg:w-64 h-40 md:h-56 lg:h-74 z-0">
          <svg
            viewBox="0 0 100 100"
            preserveAspectRatio="none"
            className="w-full h-full"
          >
            <polygon points="100,0 100,100 0,100" fill="#A7BFB6" />
            <polygon points="100,0 100,60 60,60" fill="#FEE7B5" />
          </svg>
        </div>
        <div className="relative z-10 max-w-8xl mx-auto">
          <div className="flex items-center gap-4 mb-4">
            <div className="w-12 h-0.5 bg-black" />
            <p className="uppercase text-sm font-semibold tracking-widest text-gray-600">
              What We Build
            </p>
          </div>
          <h2 className="text-4xl md:text-5xl font-extrabold leading-tight text-gray-900 mb-6">
            We look beyond your immediate construction needs to develop
            comprehensive solutions for each project
          </h2>
        </div>
      </section>

      {/* FANCY CONSISTENT EXTENDED SECTION */}
      <section
        className="relative bg-gradient-to-br from-[#f1f5f9] to-[#e2e8f0] text-black px-6 md:px-20 py-28"
        data-aos="fade-up"
      >
        <div className="absolute inset-0 opacity-40 bg-[url('/dropdown.webp')] bg-cover bg-center"></div>
        <div className="relative z-10 max-w-7xl mx-auto space-y-28">
          {/* Section 1 */}
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div className="space-y-6 text-lg">
              <h2 className="text-5xl font-extrabold mb-6 leading-tight">
                Redefining the Skyline, One Vision at a Time
              </h2>
              <p>
                At{" "}
                <span className="text-blue-600 font-semibold">
                  Dubey Construction
                </span>
                , our projects are not just concrete and steel—they're landmarks
                of ingenuity. From monumental high-rises that define city
                skylines to green campuses that echo harmony with nature, our
                portfolio showcases excellence, innovation, and artistry.
              </p>
              <p>
                Every line drawn on our blueprints represents not just an
                architectural feature, but a bold idea backed by the power of
                technology and human spirit. We collaborate with global firms
                and leverage generative AI, VR-enabled walkthroughs, and
                parametric modeling to ensure every structure reflects modernity
                and legacy together.
              </p>
              <p>
                What makes us different is our ability to{" "}
                <strong className="text-blue-700">dream big</strong>, plan
                meticulously, and execute flawlessly.
              </p>
            </div>
            <div>
              <img
                src="/dropdown1.webp"
                alt="Visionary Construction"
                className="rounded-2xl shadow-2xl w-full object-cover"
              />
            </div>
          </div>

          {/* Section 2 */}
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div>
              <img
                src="/dropdown2.webp"
                alt="Innovation & Sustainability"
                className="rounded-2xl shadow-2xl w-full object-cover"
              />
            </div>
            <div className="space-y-6 text-lg">
              <h2 className="text-5xl font-extrabold mb-6 leading-tight">
                Our Commitment to Innovation & Sustainability
              </h2>
              <p>
                At{" "}
                <span className="text-blue-600 font-semibold">
                  Dubey Construction
                </span>
                , our legacy is built on a strong foundation of innovation and
                sustainability. From high-performance buildings to smart
                infrastructure, our approach reduces environmental impact while
                maximizing project value.
              </p>
              <p>
                We integrate{" "}
                <span className="font-semibold">BIM, IoT, Digital Twins</span>{" "}
                and more, delivering precision, performance, and eco-conscious
                results.
              </p>
              <p>
                Sustainability isn't just a word—it's our philosophy. Every
                project aligns with green certifications, energy-efficient
                materials, and biodiversity goals that nurture nature while
                supporting thriving communities.
              </p>
            </div>
          </div>

          {/* Section 3 */}
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div className="space-y-6 text-lg">
              <h2 className="text-5xl font-extrabold mb-6 leading-tight">
                People. Planet. Progress.
              </h2>
              <p>
                We prioritize the well-being of our workforce, the satisfaction
                of our clients, and the health of our planet. Our goal is not
                just to build iconic structures but to foster{" "}
                <strong className="text-blue-700">
                  resilient, thriving communities
                </strong>
                .
              </p>
              <p>
                Through initiatives in local hiring, skill development, and
                sustainability education, we uplift regions and deliver enduring
                impact.
              </p>
            </div>
            <div>
              <img
                src="/dropdown3.webp"
                alt="People Planet Progress"
                className="rounded-2xl shadow-2xl w-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* CALL TO ACTION */}
      <section
        className="relative bg-gradient-to-br from-[#f7fafc] to-[#e2e8f0] text-gray-800 px-6 md:px-20 py-24"
        data-aos="fade-up"
      >
        <div className="absolute inset-0 opacity-10 bg-[url('/patterns/subtle-wave.svg')] bg-cover bg-center"></div>
        <div className="relative z-10 max-w-5xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Let's Create Tomorrow, Together.
          </h2>
          <p className="text-lg mb-8 max-w-2xl mx-auto">
            Whether you're planning your dream project or looking for a partner
            to deliver excellence, Dubey Construction is here to turn your ideas
            into lasting landmarks.
          </p>
          <button className="px-8 py-3 bg-[#7f91b9] text-white font-semibold rounded-xl shadow-md hover:bg-[#1d4ed8] transition">
            Connect With Us
          </button>
        </div>
      </section>
    </>
  );
};

export default Home;

import { useState, useRef, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { ChevronDown, ChevronRight, Search } from "lucide-react";

const sectorData = {
  Buildings: {
    title: "Buildings",
    description:
      "We rise to the challenges associated with a diverse buildings portfolio to bring added value to every project...",
    image: "/buildingpage.webp",
  },
  Civil: {
    title: "Civil",
    description:
      "Our Civil sector focuses on infrastructure—roads, bridges, water treatment, and more...",
    image: "/civil.webp",
  },
  Industrial: {
    title: "Industrial",
    description:
      "In Industrial, we tackle factories, warehouses, and manufacturing plants with precision...",
    image: "/industrial.webp",
  },
};

const Navbar = () => {
  const location = useLocation();

  const [isOpen, setIsOpen] = useState({
    sectors: false,
    services: false,
    who: false,
    careers: false,
  });

  const [activeSector, setActiveSector] = useState("Buildings");

  const wrapperRefSectors = useRef(null);
  const wrapperRefWho = useRef(null);
  const wrapperRefCareers = useRef(null);

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (
        wrapperRefSectors.current &&
        !wrapperRefSectors.current.contains(e.target)
      ) {
        setIsOpen((prev) => ({ ...prev, sectors: false }));
      }
      if (
        wrapperRefWho.current &&
        !wrapperRefWho.current.contains(e.target)
      ) {
        setIsOpen((prev) => ({ ...prev, who: false }));
      }
      if (
        wrapperRefCareers.current &&
        !wrapperRefCareers.current.contains(e.target)
      ) {
        setIsOpen((prev) => ({ ...prev, careers: false }));
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const toggleDropdown = (key) => {
    setIsOpen((prev) => ({
      sectors: false,
      services: false,
      who: false,
      careers: false,
      [key]: !prev[key],
    }));
  };

  const isActive = (path) => location.pathname === path;
  const isPathMatch = (prefix) => location.pathname.startsWith(prefix);
  const current = sectorData[activeSector];

  return (
    <nav className="bg-gradient-to-r from-[#003057] to-[#4a4a4a] text-white px-8 py-4 shadow-md fixed top-0 left-0 w-full z-50">

      <div className="max-w-7xl mx-auto flex justify-between items-center">
        {/* Logo */}
        <Link to="/" className="flex items-center space-x-4">
          <img
            src="/dubey.webp"
            alt="Dubey Construction Logo"
            className="w-14 h-14 rounded-full object-cover border-2 border-[#C59B7A]"
          />
          <span className="text-2xl font-semibold tracking-wider text-[#C59B7A]">
            CONSTRUCTION
          </span>
        </Link>

        {/* Navigation Links */}
        <div className="flex space-x-6 items-center text-sm font-semibold relative">
          <Link
            to="/"
            className={`transition ${
              isActive("/") ? "text-yellow-400 font-bold underline" : "hover:text-yellow-300"
            }`}
          >
            Home
          </Link>

          {/* Sectors Dropdown */}
          <div className="relative" ref={wrapperRefSectors}>
            <button
              onClick={() => toggleDropdown("sectors")}
              className={`flex items-center transition ${
                isPathMatch("/sectors") ? "text-yellow-400 font-bold underline" : "hover:text-yellow-300"
              }`}
            >
              Sectors <ChevronDown size={16} className="ml-1" />
            </button>
            {isOpen.sectors && (
              <div
                className="absolute left-0 top-full mt-2 bg-white text-black shadow-2xl rounded-xl overflow-hidden flex w-[600px] h-[320px] z-[100] border border-gray-200 transition-all duration-300"
                onMouseLeave={() =>
                  setIsOpen((prev) => ({ ...prev, sectors: false }))
                }
              >
                <div className="w-1/3 bg-gradient-to-b from-gray-50 to-white border-r border-gray-200 p-3 space-y-3">
                  <h3 className="uppercase text-gray-600 text-xs tracking-widest mb-2">Sectors</h3>
                  {Object.keys(sectorData).map((sector) => (
                    <button
                      key={sector}
                      onClick={() => setActiveSector(sector)}
                      className={`w-full text-left px-3 py-2 flex items-center justify-between rounded-lg transition-all duration-200 ${
                        activeSector === sector
                          ? "font-semibold text-[#003057] bg-white shadow-sm"
                          : "text-gray-700 hover:bg-gray-100"
                      }`}
                    >
                      <span className="text-sm">{sector}</span>
                      <ChevronRight
                        size={14}
                        className={
                          activeSector === sector
                            ? "text-[#003057]"
                            : "text-gray-400"
                        }
                      />
                    </button>
                  ))}
                </div>
                <div className="w-2/3 flex flex-col bg-white rounded-r-xl overflow-hidden">
                  <div
                    className="h-40 bg-cover bg-center transition-transform duration-300 transform hover:scale-105 rounded-tr-xl"
                    style={{ backgroundImage: `url(${current.image})` }}
                  />
                  <div className="flex-1 p-4">
                    <h3 className="text-lg font-bold mb-1 relative inline-block">
                      {current.title}
                      <span className="block w-10 h-1 bg-[#003057] mt-1 rounded-full"></span>
                    </h3>
                    <p className="text-gray-700 text-xs leading-snug mb-2">{current.description}</p>
                    <Link
                      to={`/sectors/${activeSector.toLowerCase()}`}
                      className="inline-block text-yellow-400 text-sm font-semibold hover:underline"
                    >
                      Learn More
                    </Link>
                  </div>
                </div>
              </div>
            )}
          </div>

          <Link
            to="/services"
            className={`transition ${
              isActive("/services") ? "text-yellow-400 font-bold underline" : "hover:text-yellow-300"
            }`}
          >
            Services
          </Link>

          {/* Who We Are Dropdown */}
          <div className="relative" ref={wrapperRefWho}>
            <button
              onClick={() => toggleDropdown("who")}
              className={`flex items-center transition ${
                isPathMatch("/who-we-are") ? "text-yellow-400 font-bold underline" : "hover:text-yellow-300"
              }`}
            >
              Who We Are <ChevronDown size={16} className="ml-1" />
            </button>
            {isOpen.who && (
              <div
                className="absolute left-0 top-full mt-2 bg-white text-black shadow-2xl rounded-xl overflow-hidden flex w-[600px] h-[320px] z-[100] border border-gray-200 transition-all duration-300"
                onMouseLeave={() =>
                  setIsOpen((prev) => ({ ...prev, who: false }))
                }
              >
                <div className="w-1/3 bg-gradient-to-b from-gray-50 to-white border-r border-gray-200 p-3 space-y-3">
                  <h3 className="uppercase text-gray-600 text-xs tracking-widest mb-2">Who We Are</h3>
                  {[
                    { name: "More About Us", path: "/who-we-are/more-about-us" },
                    { name: "Our History", path: "/who-we-are/history" },
                    { name: "Innovation", path: "/who-we-are/innovation" },
                    { name: "Safety", path: "/who-we-are/safety" },
                    { name: "Diversity and Equity", path: "/who-we-are/diversity" },
                    { name: "Privacy Policy", path: "/who-we-are/privacy-policy" },
                  ].map((item) => (
                    <Link
                      key={item.name}
                      to={item.path}
                      className={`w-full text-left px-3 py-2 flex items-center justify-between rounded-lg text-sm font-medium ${
                        isActive(item.path)
                          ? "text-yellow-400 font-bold underline"
                          : "text-gray-700 hover:bg-gray-100"
                      }`}
                    >
                      {item.name}
                    </Link>
                  ))}
                </div>
                <div className="w-2/3 flex flex-col bg-white rounded-r-xl overflow-hidden">
                  <div
                    className="h-90 bg-cover bg-center transition-transform duration-300 transform hover:scale-105 rounded-tr-xl"
                    style={{ backgroundImage: `url('/building2.webp')` }}
                  />
                  <div className="flex-1 p-4" />
                </div>
              </div>
            )}
          </div>

          <Link
            to="/location"
            className={`transition ${
              isActive("/location") ? "text-yellow-400 font-bold underline" : "hover:text-yellow-300"
            }`}
          >
            Locations
          </Link>

          <Link
            to="/insight"
            className={`transition ${
              isActive("/insight") ? "text-yellow-400 font-bold underline" : "hover:text-yellow-300"
            }`}
          >
            Insights
          </Link>

          <Link
            to="/newsroom"
            className={`transition ${
              isActive("/newsroom") ? "text-yellow-400 font-bold underline" : "hover:text-yellow-300"
            }`}
          >
            Newsroom
          </Link>

          <Link
            to="/careers"
            className={`transition ${
              isActive("/careers") ? "text-yellow-400 font-bold underline" : "hover:text-yellow-300"
            }`}
          >
            Careers
          </Link>

          <Link
            to="/reach-out"
            className={`transition ${
              isActive("/reach-out") ? "text-yellow-400 font-bold underline" : "hover:text-yellow-300"
            }`}
          >
            Reach Out
          </Link>

          <button className="hover:text-yellow-300 transition">
            <Search size={18} />
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/pages/Footer";
import Home from "./components/pages/Home";
import Sector from "./components/pages/Sector";
import Services from "./components/pages/Services";
import OurWork from "./components/pages/OurWork";
import Location from "./components/pages/Location";
import Newsroom from "./components/pages/Newsroom";
import Insight from "./components/pages/Insight";
import WhoWeAre from "./components/pages/WhoWeAre";
import Buildings from "./components/pages/Buildings";
import Civil from "./components/pages/Civil";
import Industrial from "./components/pages/Industrial";
import MoreAboutUs from "./components/pages/MoreAboutUs";
import History from "./components/pages/History";
import Innovation from "./components/pages/Innovation";
import Safety from "./components/pages/Safety";
import Diversity from './components/pages/Diversity';
import Careers from './components/pages/Careers';
import ReachOut from './components/pages/ReachOut';
import PrivacyPolicy from './components/pages/PrivacyPolicy';
import Ethics from './components/pages/Ethics';







function App() {
  return (
    <Router>
      <div className="flex flex-col min-h-screen">
        <Navbar />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/sector" element={<Sector />} />
            <Route path="/services" element={<Services />} />
            <Route path="/our-work" element={<OurWork />} />
            <Route path="/location" element={<Location />} />
            <Route path="/newsroom" element={<Newsroom />} />
            <Route path="/insight" element={<Insight />} />
            <Route path="/who-we-are" element={<WhoWeAre />} />
            <Route path="/sectors/buildings" element={<Buildings />} />
            <Route path="/sectors/civil" element={<Civil />} />
            <Route path="/sectors/industrial" element={<Industrial />} />
            <Route path="/who-we-are/more-about-us" element={<MoreAboutUs />} />
            <Route path="/who-we-are/history" element={<History />} />
            <Route path="/who-we-are/innovation" element={<Innovation />} />
            <Route path="/who-we-are/safety" element={<Safety />} />
            <Route path="/who-we-are/diversity" element={<Diversity />} />
            <Route path="/careers" element={<Careers />} />
            <Route path="/reach-out" element={<ReachOut />} />
            <Route path="/who-we-are/privacy-policy" element={<PrivacyPolicy />} />
            <Route path="/reach-out" element={<ReachOut />} />
            <Route path="/ethics" element={<Ethics />} />
            
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;

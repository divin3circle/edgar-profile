import "./Global.css";
import "./App.css";

import Footer from "./componets/Footer/Footer";
import Navbar from "./componets/Header/Navbar";
import Hero from "./componets/UI/Hero";

import { FaBeer } from "react-icons/fa";

import { useEffect } from "react";
import Aos from "aos";
import Certifications from "./componets/UI/Certifications";
import Services from "./componets/UI/Services";
import Contact from "./componets/UI/Contact";

function App() {
  useEffect(() => {
    Aos.init();
  }, []);

  return (
    <div className="xxs:overflow-hidden">
      <Navbar />
      <main className="">
        <Hero />
        <Certifications />
        <Services />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;

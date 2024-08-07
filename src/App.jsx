import { useEffect, useRef } from "react";
import { BrowserRouter } from "react-router-dom";
import { Contact, Hero, Navbar, Portfolio, Member } from "./components";
import Footer from "./components/Footer";

const App = () => {
  const wrapperRef = useRef(null);

  return (
    <BrowserRouter>
      <div className="relative z-0 bg-primary">
        <Navbar />
        <div className="wrapper" ref={wrapperRef}>
          <div id="hero" className="z-10">
            <Hero scrollContainer={wrapperRef} />
          </div>
          <div id="portfolio" className="relative z-30 bg-primary mt-[-2px]">
            <Portfolio />
          </div>
          <div id="member" className="relative z-30 bg-primary">
            <Member />
          </div>
          <div id="contact" className="relative z-30 bg-primary">
            <Contact />
          </div>
          <div id="contact" className="relative z-30 bg-primary">
            <Footer />
          </div>
        </div>
      </div>
    </BrowserRouter>
  );
};

export default App;

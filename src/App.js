import React, { useEffect } from "react";

import Navigation from "./components/Navigation";
import Footer from "./components/Footer";
import Homepage from "./views/Homepage";
import Rellax from "rellax";


function App() {

  useEffect(() => {
    onScroll();

    const rellax = new Rellax('.rellax', {
      center: true,
    });
    const rellaxCta = new Rellax('.rellax', {
      center: true,
      wrapper: '.cta-rellax',
    });
  }, [])

  const navLinks = [
    {title: 'Start' , link: 'home-section'},
    {title: 'Projects' , link: 'projects-section'},
    // {title: 'FAQ' , link: 'faq-section'},
    {title: 'About Me' , link: 'about-me-section'},
    {title: 'Contact' , link: 'contact-section'},
  ];

  return (
    <div className="min-h-screen">
      <Navigation navData={ navLinks } />
      <Homepage />
      <Footer navData={ navLinks } />
    </div>
  )
}

export default App;

function onScroll(){
  const callback = function(entries) {
    entries.forEach(entry => {

      if (entry.isIntersecting) {
        entry.target.classList.add("motion-safe:animate-slideIn");
      } else {
        entry.target.classList.remove("motion-safe:animate-slideIn");
      }
    });
  };
  const observer = new IntersectionObserver(callback);

  const targets = document.querySelectorAll(".animate-on-scroll");
  targets.forEach(function(target) {
    target.classList.add("-translate-x-40");
    observer.observe(target);
  });
}
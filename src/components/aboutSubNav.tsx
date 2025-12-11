"use client";

import { useState, useEffect } from "react";

interface NavItem {
  id: string;
  label: string;
}

const AboutSubNav = () => {
  const [activeSection, setActiveSection] = useState("overview");

  const navItems: NavItem[] = [
    { id: "overview", label: "Overview" },
    { id: "why-us", label: "Why us" },
    { id: "vision-mission", label: "Vision & Mission" },
    { id: "quality-assurance", label: "Quality Assurance" },
    { id: "industry-we-serve", label: "Industry we serve" },
    { id: "infrastructure", label: "Infrastructure" },
    { id: "r-d", label: "R&D" },
    { id: "team", label: "Team" },
    { id: "certifications", label: "Certifications" },
    { id: "faq", label: "Frequently asked questions" },
    { id: "testimonials", label: "Testimonials" },
    { id: "clientele", label: "Clientele" },
  ];

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + 150; // Offset for sticky nav
      
      // Find the section that is currently in view
      let currentSection = navItems[0].id;

      for (let i = navItems.length - 1; i >= 0; i--) {
        const element = document.getElementById(navItems[i].id);
        if (element) {
          const rect = element.getBoundingClientRect();
          const elementTop = rect.top + window.scrollY;
          
          if (scrollPosition >= elementTop - 100) {
            currentSection = navItems[i].id;
            break;
          }
        }
      }

      setActiveSection(currentSection);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll(); // Initial check

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    // Immediately set active section on click for instant feedback
    setActiveSection(id);
    
    const element = document.getElementById(id);
    if (element) {
      const navHeight = 60; // Approximate height of sticky nav
      const offset = 20; // Additional offset
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.scrollY - navHeight - offset;

      window.scrollTo({
        top: Math.max(0, offsetPosition),
        behavior: "smooth",
      });
    }
  };

  return (
    <nav className="about-subnav">
      <div className="about-subnav__container">
        <div className="about-subnav__wrapper">
          {navItems.map((item, index) => (
            <div key={item.id} className="about-subnav__item-wrapper">
              {index > 0 && <div className="about-subnav__separator" />}
              <button
                className={`about-subnav__item ${
                  activeSection === item.id ? "about-subnav__item--active" : ""
                }`}
                onClick={() => scrollToSection(item.id)}
              >
                {item.label}
              </button>
            </div>
          ))}
        </div>
      </div>
    </nav>
  );
};

export default AboutSubNav;


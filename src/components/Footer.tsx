"use client";

import { useState } from "react";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  const [showPhoneNumber, setShowPhoneNumber] = useState(false);
  const [selectedLanguage, setSelectedLanguage] = useState("EN");
  const [expandedSections, setExpandedSections] = useState<{
    products: boolean;
    about: boolean;
  }>({
    products: false,
    about: false,
  });

  const toggleSection = (section: "products" | "about") => {
    setExpandedSections((prev) => ({
      ...prev,
      [section]: !prev[section],
    }));
  };

  // Sample product data structure
  const productLinks = [
    "Mini Vertical Band Sealing Machine",
    "Horizontal Band Sealer - Stainless",
    "Product 3",
    "Product 4",
  ];

  const aboutLinks = [
    "About Us",
    "Infrastructure",
    "Quality Assurance",
    "Team",
  ];

  return (
    <footer className="footer">
      <div className="footer__container">
        {/* Upper Section - Main Content */}
        <div className="footer__main">
          {/* Left Column - Company Information */}
          <div className="footer__company">
            <div className="footer__logo-section">
              <div className="footer__logo">
                <svg
                  width="40"
                  height="40"
                  viewBox="0 0 40 40"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M20 5L35 12V28L20 35L5 28V12L20 5Z"
                    stroke="white"
                    strokeWidth="2"
                    fill="none"
                  />
                  <path
                    d="M20 15L28 19V26L20 30L12 26V19L20 15Z"
                    stroke="white"
                    strokeWidth="2"
                    fill="none"
                  />
                </svg>
              </div>
              <h2 className="footer__company-name">Pectra Plast</h2>
            </div>

            <p className="footer__description">
              Leading manufacturer and exporter of modular belts, slat chains,
              and conveyor components. Serving industries worldwide with
              innovative material handling solutions.
            </p>

            {/* Contact Information */}
            <div className="footer__contact">
              {/* Address */}
              <div className="footer__contact-item">
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 20 20"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M10 10C11.3807 10 12.5 8.88071 12.5 7.5C12.5 6.11929 11.3807 5 10 5C8.61929 5 7.5 6.11929 7.5 7.5C7.5 8.88071 8.61929 10 10 10Z"
                    stroke="white"
                    strokeWidth="1.5"
                  />
                  <path
                    d="M10 17.5C13.5 13.5 16.25 10.9625 16.25 8.125C16.25 5.2875 13.9625 3 10 3C6.0375 3 3.75 5.2875 3.75 8.125C3.75 10.9625 6.5 13.5 10 17.5Z"
                    stroke="white"
                    strokeWidth="1.5"
                  />
                </svg>
                <div>
                  <strong className="footer__contact-label">
                    Spectra Plast Pvt. Ltd.
                  </strong>
                  <p className="footer__contact-text">
                    No. 1A, Buddha 4th Street, Ramakrishnapuram, Ganapathy,
                    Coimbatore - 641006, India
                  </p>
                </div>
              </div>

              {/* Phone */}
              <div className="footer__contact-item">
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 20 20"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M17.5 14.375V16.875C17.5 17.3723 17.3025 17.8492 16.9478 18.2038C16.5932 18.5585 16.1163 18.756 15.619 18.756C6.991 18.756 0 11.765 0 3.137C0 2.63973 0.197544 2.16281 0.552228 1.80813C0.906913 1.45344 1.38383 1.2559 1.881 1.2559H4.381C4.87827 1.2559 5.35519 1.45344 5.70987 1.80813C6.06456 2.16281 6.262 2.63973 6.262 3.137C6.262 4.131 6.456 5.1 6.831 5.994C6.978 6.328 7.05 6.694 7.038 7.063C7.025 7.432 6.929 7.791 6.756 8.113L5.494 10.637C6.881 13.237 9.137 15.494 11.737 16.881L14.262 15.619C14.584 15.446 14.943 15.35 15.312 15.338C15.681 15.325 16.047 15.397 16.381 15.544C17.275 15.919 18.244 16.113 19.238 16.113C19.7353 16.113 20.2122 16.3105 20.5669 16.6652C20.9216 17.0199 21.119 17.4968 21.119 17.994L17.5 14.375Z"
                    stroke="white"
                    strokeWidth="1.5"
                    fill="none"
                  />
                </svg>
                <div className="footer__contact-phone-wrapper">
                  <p className="footer__contact-text">
                    {showPhoneNumber ? "+91 12345 67890" : "+91 9**** ****0"}
                  </p>
                  <button
                    className="btn-view-number"
                    onClick={() => setShowPhoneNumber(!showPhoneNumber)}
                  >
                    <svg
                      width="16"
                      height="16"
                      viewBox="0 0 16 16"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <rect
                        x="3"
                        y="6"
                        width="10"
                        height="6"
                        rx="1"
                        stroke="white"
                        strokeWidth="1.5"
                        fill="none"
                      />
                      <path
                        d="M5 6V4C5 2.89543 5.89543 2 7 2H9C10.1046 2 11 2.89543 11 4V6"
                        stroke="white"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        fill="none"
                      />
                      <circle
                        cx="8"
                        cy="9"
                        r="1"
                        fill="white"
                      />
                    </svg>
                    View Number
                  </button>
                </div>
              </div>

              {/* Email */}
              <div className="footer__contact-item">
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 20 20"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M2.5 5L10 10L17.5 5M2.5 5H17.5M2.5 5V15H17.5V5"
                    stroke="white"
                    strokeWidth="1.5"
                    fill="none"
                  />
                </svg>
                <p className="footer__contact-text">Email@company.com</p>
              </div>
            </div>

            {/* Social Media */}
            <div className="footer__social">
              <span className="footer__social-label">Share</span>
              <div className="footer__social-icons">
                <a href="#" aria-label="LinkedIn">
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M16 8C17.5913 8 19.1174 8.63214 20.2426 9.75736C21.3679 10.8826 22 12.4087 22 14V21H18V14C18 13.4696 17.7893 12.9609 17.4142 12.5858C17.0391 12.2107 16.5304 12 16 12C15.4696 12 14.9609 12.2107 14.5858 12.5858C14.2107 12.9609 14 13.4696 14 14V21H10V14C10 12.4087 10.6321 10.8826 11.7574 9.75736C12.8826 8.63214 14.4087 8 16 8Z"
                      stroke="white"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      fill="none"
                    />
                    <path
                      d="M6 9H2V21H6V9Z"
                      stroke="white"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      fill="none"
                    />
                    <path
                      d="M4 6C5.10457 6 6 5.10457 6 4C6 2.89543 5.10457 2 4 2C2.89543 2 2 2.89543 2 4C2 5.10457 2.89543 6 4 6Z"
                      stroke="white"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      fill="none"
                    />
                  </svg>
                </a>
                <a href="#" aria-label="Instagram">
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <rect
                      x="2"
                      y="2"
                      width="20"
                      height="20"
                      rx="5"
                      ry="5"
                      stroke="white"
                      strokeWidth="1.5"
                      fill="none"
                    />
                    <path
                      d="M16 11.37C16.1234 12.2022 15.9813 13.0522 15.5938 13.799C15.2063 14.5458 14.5932 15.1514 13.8416 15.5297C13.0901 15.9079 12.2385 16.0396 11.4078 15.9059C10.5771 15.7723 9.80976 15.3801 9.21484 14.7852C8.61993 14.1902 8.22768 13.4229 8.09402 12.5922C7.96035 11.7615 8.09202 10.9099 8.47028 10.1584C8.84854 9.40685 9.45414 8.79374 10.2009 8.40624C10.9477 8.01874 11.7978 7.87659 12.63 8C13.4789 8.12588 14.2649 8.55146 14.8717 9.15822C15.4785 9.76499 15.9041 10.551 16.03 11.4L16 11.37Z"
                      stroke="white"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      fill="none"
                    />
                    <path
                      d="M17.5 6.5H17.51"
                      stroke="white"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      fill="none"
                    />
                  </svg>
                </a>
                <a href="#" aria-label="Facebook">
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M18 2H15C13.6739 2 12.4021 2.52678 11.4645 3.46447C10.5268 4.40215 10 5.67392 10 7V10H7V14H10V22H14V14H17L18 10H14V7C14 6.73478 14.1054 6.48043 14.2929 6.29289C14.4804 6.10536 14.7348 6 15 6H18V2Z"
                      stroke="white"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      fill="none"
                    />
                  </svg>
                </a>
                <a href="#" aria-label="YouTube">
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M22.54 6.42C22.4212 5.94541 22.1793 5.51057 21.8387 5.15941C21.4981 4.80824 21.0697 4.55318 20.6 4.42C18.88 4 12 4 12 4C12 4 5.12 4 3.4 4.42C2.93025 4.55318 2.50188 4.80824 2.1613 5.15941C1.82072 5.51057 1.57879 5.94541 1.46 6.42C1.14521 8.15956 0.990803 9.92862 1 11.7C0.990803 13.4714 1.14521 15.2404 1.46 16.98C1.57879 17.4546 1.82072 17.8894 2.1613 18.2406C2.50188 18.5918 2.93025 18.8468 3.4 18.98C5.12 19.4 12 19.4 12 19.4C12 19.4 18.88 19.4 20.6 18.98C21.0697 18.8468 21.4981 18.5918 21.8387 18.2406C22.1793 17.8894 22.4212 17.4546 22.54 16.98C22.8548 15.2404 23.0092 13.4714 23 11.7C23.0092 9.92862 22.8548 8.15956 22.54 6.42Z"
                      stroke="white"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      fill="none"
                    />
                    <path
                      d="M9.75 15.02L15.5 11.7L9.75 8.38V15.02Z"
                      stroke="white"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      fill="none"
                    />
                  </svg>
                </a>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="footer__actions">
              <button className="btn-footer-action">
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 20 20"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M17.5 3.75H2.5C1.67157 3.75 1 4.42157 1 5.25V15.25C1 16.0784 1.67157 16.75 2.5 16.75H5.25L7.75 19.25L10.25 16.75H17.5C18.3284 16.75 19 16.0784 19 15.25V5.25C19 4.42157 18.3284 3.75 17.5 3.75Z"
                    stroke="white"
                    strokeWidth="1.5"
                    fill="none"
                  />
                  <path
                    d="M6.25 10H13.75"
                    stroke="white"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                  />
                  <path
                    d="M6.25 7.5H13.75"
                    stroke="white"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                  />
                </svg>
                Send Message
              </button>
              <button className="btn-footer-action">
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 20 20"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M2.5 5L10 10L17.5 5M2.5 5H17.5M2.5 5V15H17.5V5"
                    stroke="white"
                    strokeWidth="1.5"
                    fill="none"
                  />
                </svg>
                Send Email
              </button>
            </div>
          </div>

          {/* Navigation Sections - Mobile Accordion, Desktop Links */}
          <div className="footer__navigation">
            {/* Products Section */}
            <div className="footer__nav-section">
              <button
                className="footer__nav-toggle"
                onClick={() => toggleSection("products")}
                aria-expanded={expandedSections.products}
              >
                <h3 className="footer__links-heading">Products</h3>
                <svg
                  className={`footer__toggle-icon ${
                    expandedSections.products ? "footer__toggle-icon--open" : ""
                  }`}
                  width="20"
                  height="20"
                  viewBox="0 0 20 20"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M10 5V15M5 10H15"
                    stroke="white"
                    strokeWidth="2"
                    strokeLinecap="round"
                  />
                </svg>
              </button>
              <div
                className={`footer__nav-content ${
                  expandedSections.products ? "footer__nav-content--open" : ""
                }`}
              >
                <ul className="footer__links-list">
                  {productLinks.map((product, index) => (
                    <li key={index}>
                      <a href="#">{product}</a>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* About Us Section */}
            <div className="footer__nav-section">
              <button
                className="footer__nav-toggle"
                onClick={() => toggleSection("about")}
                aria-expanded={expandedSections.about}
              >
                <h3 className="footer__links-heading">About us</h3>
                <svg
                  className={`footer__toggle-icon ${
                    expandedSections.about ? "footer__toggle-icon--open" : ""
                  }`}
                  width="20"
                  height="20"
                  viewBox="0 0 20 20"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M10 5V15M5 10H15"
                    stroke="white"
                    strokeWidth="2"
                    strokeLinecap="round"
                  />
                </svg>
              </button>
              <div
                className={`footer__nav-content ${
                  expandedSections.about ? "footer__nav-content--open" : ""
                }`}
              >
                <ul className="footer__links-list">
                  {aboutLinks.map((link, index) => (
                    <li key={index}>
                      <a href="#">{link}</a>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Contact Us - Simple Link */}
            <div className="footer__nav-section footer__nav-section--simple">
              <a href="#" className="footer__contact-link">
                Contact us
              </a>
            </div>
          </div>
        </div>

        {/* Social Media - Bottom */}
        <div className="footer__social-bottom">
          <div className="footer__social-icons">
            <a href="#" aria-label="LinkedIn">
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M16 8C17.5913 8 19.1174 8.63214 20.2426 9.75736C21.3679 10.8826 22 12.4087 22 14V21H18V14C18 13.4696 17.7893 12.9609 17.4142 12.5858C17.0391 12.2107 16.5304 12 16 12C15.4696 12 14.9609 12.2107 14.5858 12.5858C14.2107 12.9609 14 13.4696 14 14V21H10V14C10 12.4087 10.6321 10.8826 11.7574 9.75736C12.8826 8.63214 14.4087 8 16 8Z"
                  stroke="white"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  fill="none"
                />
                <path
                  d="M6 9H2V21H6V9Z"
                  stroke="white"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  fill="none"
                />
                <path
                  d="M4 6C5.10457 6 6 5.10457 6 4C6 2.89543 5.10457 2 4 2C2.89543 2 2 2.89543 2 4C2 5.10457 2.89543 6 4 6Z"
                  stroke="white"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  fill="none"
                />
              </svg>
            </a>
            <a href="#" aria-label="Instagram">
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <rect
                  x="2"
                  y="2"
                  width="20"
                  height="20"
                  rx="5"
                  ry="5"
                  stroke="white"
                  strokeWidth="1.5"
                  fill="none"
                />
                <path
                  d="M16 11.37C16.1234 12.2022 15.9813 13.0522 15.5938 13.799C15.2063 14.5458 14.5932 15.1514 13.8416 15.5297C13.0901 15.9079 12.2385 16.0396 11.4078 15.9059C10.5771 15.7723 9.80976 15.3801 9.21484 14.7852C8.61993 14.1902 8.22768 13.4229 8.09402 12.5922C7.96035 11.7615 8.09202 10.9099 8.47028 10.1584C8.84854 9.40685 9.45414 8.79374 10.2009 8.40624C10.9477 8.01874 11.7978 7.87659 12.63 8C13.4789 8.12588 14.2649 8.55146 14.8717 9.15822C15.4785 9.76499 15.9041 10.551 16.03 11.4L16 11.37Z"
                  stroke="white"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  fill="none"
                />
                <path
                  d="M17.5 6.5H17.51"
                  stroke="white"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  fill="none"
                />
              </svg>
            </a>
            <a href="#" aria-label="Facebook">
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M18 2H15C13.6739 2 12.4021 2.52678 11.4645 3.46447C10.5268 4.40215 10 5.67392 10 7V10H7V14H10V22H14V14H17L18 10H14V7C14 6.73478 14.1054 6.48043 14.2929 6.29289C14.4804 6.10536 14.7348 6 15 6H18V2Z"
                  stroke="white"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  fill="none"
                />
              </svg>
            </a>
            <a href="#" aria-label="YouTube">
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M22.54 6.42C22.4212 5.94541 22.1793 5.51057 21.8387 5.15941C21.4981 4.80824 21.0697 4.55318 20.6 4.42C18.88 4 12 4 12 4C12 4 5.12 4 3.4 4.42C2.93025 4.55318 2.50188 4.80824 2.1613 5.15941C1.82072 5.51057 1.57879 5.94541 1.46 6.42C1.14521 8.15956 0.990803 9.92862 1 11.7C0.990803 13.4714 1.14521 15.2404 1.46 16.98C1.57879 17.4546 1.82072 17.8894 2.1613 18.2406C2.50188 18.5918 2.93025 18.8468 3.4 18.98C5.12 19.4 12 19.4 12 19.4C12 19.4 18.88 19.4 20.6 18.98C21.0697 18.8468 21.4981 18.5918 21.8387 18.2406C22.1793 17.8894 22.4212 17.4546 22.54 16.98C22.8548 15.2404 23.0092 13.4714 23 11.7C23.0092 9.92862 22.8548 8.15956 22.54 6.42Z"
                  stroke="white"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  fill="none"
                />
                <path
                  d="M9.75 15.02L15.5 11.7L9.75 8.38V15.02Z"
                  stroke="white"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  fill="none"
                />
              </svg>
            </a>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="footer__bottom">
          <div className="footer__bottom-left">
            <p className="footer__copyright">
              © {currentYear} Spectra Plast. All rights reserved.
            </p>
          </div>
          <div className="footer__bottom-right">
            <button
              className="btn-language-selector"
              onClick={() => {
                /* Handle language selection */
              }}
            >
              <svg
                width="16"
                height="16"
                viewBox="0 0 16 16"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <circle
                  cx="8"
                  cy="8"
                  r="7"
                  stroke="white"
                  strokeWidth="1.5"
                  fill="none"
                />
                <path
                  d="M8 1C10.5 3.5 11.5 6 11.5 8C11.5 10 10.5 12.5 8 15M8 1C5.5 3.5 4.5 6 4.5 8C4.5 10 5.5 12.5 8 15M8 1C4.5 1 1 4.5 1 8C1 11.5 4.5 15 8 15"
                  stroke="white"
                  strokeWidth="1.5"
                  fill="none"
                />
              </svg>
              {selectedLanguage}
              <svg
                width="16"
                height="16"
                viewBox="0 0 16 16"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M4 6L8 10L12 6"
                  stroke="white"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </button>
            <div className="footer__legal-links">
              <span>© {currentYear} by Business Name. All Rights Reserved.</span>
              <a href="#">Privacy Policy</a>
              <span>|</span>
              <a href="#">Terms of Use</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

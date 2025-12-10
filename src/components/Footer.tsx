"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  const [showPhoneNumber, setShowPhoneNumber] = useState(false);
  const [selectedLanguage, setSelectedLanguage] = useState("EN");
  const [expandedSections, setExpandedSections] = useState<{
    products: boolean;
    company: boolean;
  }>({
    products: false,
    company: false,
  });

  const toggleSection = (section: "products" | "company") => {
    setExpandedSections((prev) => ({
      ...prev,
      [section]: !prev[section],
    }));
  };

  // Product data structure - three columns, each with three groups
  const productGroups = [
    {
      groupName: "Group1",
      products: [
        "Mini Vertical Band Sealing Machine",
        "Horizontal Band Sealer - Stainless",
      ],
    },
    {
      groupName: "Group2",
      products: [
        "Mini Vertical Band Sealing Machine",
        "Horizontal Band Sealer - Stainless",
      ],
    },
    {
      groupName: "Group3",
      products: [
        "Mini Vertical Band Sealing Machine",
        "Horizontal Band Sealer - Stainless",
      ],
    },
  ];

  const companyLinks = [
    "About Us",
    "Infrastructure",
    "Quality Assurance",
    "Team",
    "Contact us",
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
                <Link href="/" className="flex items-center gap-2">
                  <Image
                    src="/images/logoWhite.png"
                    alt="Scale Logo"
                    width={221}
                    height={45}
                  />
                </Link>
              </div>
            </div>

            <p className="footer__description">
              Leading manufacturer and exporter of modular belts, sla and
              conveyor components. Serving industries worldwide innovative
              material handling solutions.
            </p>

            {/* Contact Information */}
            <div className="footer__contact">
              <h6 className="footer__contact-label">
                    Spectra Plast Pvt. Ltd.
              </h6>
              {/* Address */}
              <div className="footer__contact-item">
                <Image
                    src="/images/location.png"
                    alt="location"
                    width={24}
                    height={24}
                />
                <div>
                  <p className="footer__contact-text">
                    No. 1A, Buddha 4th Street, Ramakrishnapuram, Ganapathy,
                    Coimbatore - 641006, India
                  </p>
                </div>
              </div>

              {/* Phone */}
              <div className="footer__contact-item">
                <Image
                    src="/images/call.png"
                    alt="Scale Logo"
                    width={24}
                    height={24}
                />
                <div className="footer__contact-phone-wrapper">
                  <p className="footer__contact-text">
                    {showPhoneNumber ? "+91 12345 67890" : "+91 ***** ****0"}
                  </p>
                  <button
                    className="btn-view"
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
                <Image
                    src="/images/mail.png"
                    alt="Scale Logo"
                    width={24}
                    height={24}
                />
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
              <button className="btn-footer">
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
              <button className="btn-footer">
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
            <div className="footer__nav-row">
              {/* Company Section */}
              <div className="footer__nav-section">
              <button
                className="footer__nav-toggle"
                onClick={() => toggleSection("company")}
                aria-expanded={expandedSections.company}
              >
                <h3 className="footer__links-heading">Company</h3>
                <svg
                  className={`footer__toggle-icon ${
                    expandedSections.company ? "footer__toggle-icon--open" : ""
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
                  expandedSections.company ? "footer__nav-content--open" : ""
                }`}
              >
                <ul className="footer__links-list">
                  {companyLinks.map((link, index) => (
                    <li key={index}>
                      <a href="#">{link}</a>
                    </li>
                  ))}
                </ul>
              </div>
              </div>

              {/* Products Section - Three Columns */}
              <div className="footer__nav-section footer__nav-section--products">
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
                <div className="footer__products-columns">
                  {/* Three columns, each with three groups */}
                  {[1, 2, 3].map((columnIndex) => (
                    <div key={columnIndex} className="footer__products-column">
                      {productGroups.map((group, groupIndex) => (
                        <div
                          key={groupIndex}
                          className="footer__products-group"
                        >
                          <h4 className="footer__products-group-title">
                            {group.groupName}
                          </h4>
                          <ul className="footer__links-list">
                            {group.products.map((product, productIndex) => (
                              <li key={productIndex}>
                                <a href="#">{product}</a>
                              </li>
                            ))}
                          </ul>
                        </div>
                      ))}
                    </div>
                  ))}
                </div>
              </div>
              </div>
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
        <div className="footer__bottom-row">

          {/* Left + Center merged here */}
          <div className="footer__bottom-left-center">
            <div className="d-flex align-items-center flex-wrap gap-3">

              <p className="footer__copyright">
                © {currentYear} Spectra Plast. All rights reserved.
              </p>

              <button
                className="btn-language-selector"
                onClick={() => {
                  /* Handle language selection */
                }}
              >
                <Image
                  src="/images/world-white.png"
                  alt="Language"
                  width={24}
                  height={24}
                  className="header-lang-icon"
                />

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

            </div>
          </div>

          {/* Right column unchanged */}
          <div className="footer__bottom-right">
            <div className="footer__legal-links">
              <span>© {currentYear} by Business Name. All Rights Reserved.</span>
              <a href="#">Privacy Policy</a>
              <span>|</span>
              <a href="#">Terms of Use</a>
            </div>
          </div>

        </div>
      </div>
      </div>
    </footer>
  );
};

export default Footer;

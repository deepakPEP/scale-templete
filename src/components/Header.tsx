"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";

const Header = () => {
  const [isAboutOpen, setIsAboutOpen] = useState(false);
  const [isProductsOpen, setIsProductsOpen] = useState(false);
  const [isLangOpen, setIsLangOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isMobileAboutOpen, setIsMobileAboutOpen] = useState(false);
  const [isMobileProductsOpen, setIsMobileProductsOpen] = useState(false);

  const navigation = [
    { name: "Home", href: "/" },
    {
      name: "About us",
      href: "/about",
      hasDropdown: true,
      items: [
        {
          name: "Company",
        },
        {
          name: "Team",

        },
        {
          name: "History",

        },
      ],
    },
    {
      name: "Products",
      href: "/products",
      hasDropdown: true,
      items: [
        {
          name: "Category 1",
          desc: "This is a short description",
        },
        {
          name: "Category 2",
          desc: "Brief details about category",
        },
        {
          name: "Category 3",
          desc: "Category three description goes",
        },
      ],
    },
    { name: "Contact", href: "/contact" },
  ];

  return (
    <header className="header-main bg-white sticky top-0 z-50 border-b border-gray-200">
      <div className="container header-container">
        <div className="header-content">
          {/* Desktop: Left Logo */}
          <div className="header-logo header-logo-desktop">
            <Link href="/" className="flex items-center gap-2">
              <Image
                src="/images/scaleLogo.png"
                alt="Scale Logo"
                width={221}
                height={45}
              />
            </Link>
          </div>

          {/* Mobile: Hamburger Menu Button (Left) */}
          <button
            className="header-mobile-menu-btn"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle menu"
          >
            <svg
              className="header-mobile-menu-icon"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </button>

          {/* Mobile: Center Logo */}
          <div className="header-logo header-logo-mobile">
            <Link href="/" className="flex items-center gap-2">
              <Image
                src="/images/scaleLogo.png"
                alt="Scale Logo"
                width={122}
                height={25}
              />
            </Link>
          </div>

          {/* Desktop: Middle Navigation */}
          <nav className="header-nav">
            <div className="header-nav-links">
              {navigation.map((item) => (
                <div key={item.name} className="header-nav-item">
                  {item.hasDropdown ? (
                    <div
                      className="header-nav-link-with-dropdown"
                      onMouseEnter={() =>
                        item.name === "About us"
                          ? setIsAboutOpen(true)
                          : setIsProductsOpen(true)
                      }
                      onMouseLeave={() =>
                        item.name === "About us"
                          ? setIsAboutOpen(false)
                          : setIsProductsOpen(false)
                      }
                    >
                      <Link href={item.href} className="header-nav-link">
                        {item.name}
                        <svg
                          className="header-dropdown-icon"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M19 9l-7 7-7-7"
                          />
                        </svg>
                      </Link>
                      {(item.name === "About us"
                        ? isAboutOpen
                        : isProductsOpen) && (
                          <div className="header-dropdown">
                          {item.items?.map((subItem) => {
                            const itemName = typeof subItem === "string" ? subItem : subItem.name;
                            const itemDesc = typeof subItem === "object" && "desc" in subItem ? subItem.desc : undefined;
                            const itemHref = `${item.href}/${itemName.toLowerCase().replace(" ", "-")}`;

                            return (
                              <Link
                                key={itemName}
                                href={itemHref}
                                className="header-dropdown-item"
                              >
                                <span className="header-dropdown-item-name">{itemName}</span>
                                {itemDesc && (
                                  <span className="header-dropdown-item-desc">{itemDesc}</span>
                                )}
                              </Link>
                            );
                          })}
                          </div>
                        )}
                    </div>
                  ) : (
                    <Link href={item.href} className="header-nav-link">
                      {item.name}
                    </Link>
                  )}
                </div>
              ))}
            </div>
          </nav>

          {/* Desktop: Right Actions (Language, Search, CTA) */}
          <div className="header-actions header-actions-desktop">
            {/* Language Selector */}
            <div
              className="header-lang-selector"
              onMouseEnter={() => setIsLangOpen(true)}
              onMouseLeave={() => setIsLangOpen(false)}
            >
              <button className="header-lang-button">
                <Image
                  src="/icons/globe-alt.svg"
                  alt="Language"
                  width={24}
                  height={24}
                  className="header-lang-icon"
                />
                <span className="header-lang-text">EN</span>
                <svg
                  className="header-lang-dropdown-icon"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              </button>
              {isLangOpen && (
                <div className="header-lang-dropdown">
                  <button className="header-lang-dropdown-item">English</button>
                  <button className="header-lang-dropdown-item">Español</button>
                  <button className="header-lang-dropdown-item">
                    Français
                  </button>
                </div>
              )}
            </div>

            {/* Search Bar */}
            <div className="header-search">
              <svg
                className="header-search-icon"
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <circle cx="11" cy="11" r="8"></circle>
                <path d="m21 21-4.35-4.35"></path>
              </svg>
              <input
                type="text"
                placeholder="Search for products..."
                className="header-search-input"
              />
            </div>

            {/* Request Quote Button */}
            <Link href="/contact" className="header-cta-button">
              Request Quote
            </Link>
          </div>

          {/* Mobile: Right Actions (Search Icon, Contact Us) */}
          <div className="header-actions header-actions-mobile">
            {/* Search Icon Button */}
            <button className="header-mobile-search-btn" aria-label="Search">
              <Image
                src="/icons/search.svg"
                alt="Scale Logo"
                width={24}
                height={24}
              />
            </button>

            {/* Contact Us Button */}
            <Link href="/contact" className="header-mobile-cta-button">
              Contact Us
            </Link>
          </div>
        </div>

        {/* Mobile Menu Overlay */}
        {isMobileMenuOpen && (
          <>
            <div
              className="header-mobile-overlay"
              onClick={() => setIsMobileMenuOpen(false)}
            />
            <div
              className={`header-mobile-menu ${isMobileMenuOpen ? "header-mobile-menu-open" : ""
                }`}
            >
              <div className="header-mobile-menu-content">
                {navigation.map((item) => (
                  <div
                    key={item.name}
                    className="header-mobile-menu-item-wrapper"
                  >
                    {item.hasDropdown ? (
                      <div className="header-mobile-menu-accordion">
                        <div className="header-mobile-menu-accordion-header">
                          <Link
                            href={item.href}
                            className="header-mobile-menu-accordion-link"
                            onClick={(e) => {
                              // Allow navigation when clicking the link
                              setIsMobileMenuOpen(false);
                            }}
                          >
                            {item.name}
                          </Link>
                          <button
                            className="header-mobile-menu-accordion-toggle"
                            onClick={(e) => {
                              e.preventDefault();
                              e.stopPropagation();
                              if (item.name === "About us") {
                                setIsMobileAboutOpen(!isMobileAboutOpen);
                              } else if (item.name === "Products") {
                                setIsMobileProductsOpen(!isMobileProductsOpen);
                              }
                            }}
                            aria-label="Toggle submenu"
                          >
                            <svg
                              className={`header-mobile-menu-accordion-icon ${(
                                  item.name === "About us"
                                    ? isMobileAboutOpen
                                    : isMobileProductsOpen
                                )
                                  ? "header-mobile-menu-accordion-icon-open"
                                  : ""
                                }`}
                              fill="none"
                              stroke="currentColor"
                              viewBox="0 0 24 24"
                            >
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M19 9l-7 7-7-7"
                              />
                            </svg>
                          </button>
                        </div>
                        {(item.name === "About us"
                          ? isMobileAboutOpen
                          : isMobileProductsOpen) && (
                            <div className="header-mobile-menu-accordion-content">
                             {item.items?.map((subItem) => {
                               const itemName = typeof subItem === "string" ? subItem : subItem.name;
                               const itemDesc = typeof subItem === "object" && "desc" in subItem ? subItem.desc : undefined;
                               const itemHref = `${item.href}/${itemName.toLowerCase().replace(" ", "-")}`;

                               return (
                                 <Link
                                   key={itemName}
                                   href={itemHref}
                                   className="header-mobile-menu-accordion-item"
                                   onClick={() => setIsMobileMenuOpen(false)}
                                 >
                                   <span className="header-mobile-menu-accordion-item-name">{itemName}</span>
                                   {itemDesc && (
                                     <span className="header-mobile-menu-accordion-item-desc">{itemDesc}</span>
                                   )}
                                 </Link>
                               );
                             })}
                            </div>
                          )}
                      </div>
                    ) : (
                      <Link
                        href={item.href}
                        onClick={() => setIsMobileMenuOpen(false)}
                        className="header-mobile-menu-item"
                      >
                        {item.name}
                      </Link>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </>
        )}
      </div>
    </header>
  );
};

export default Header;

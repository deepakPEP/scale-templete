"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const navigation = [
    { name: "Home", href: "/" },
    { name: "Products", href: "/products" },
    { name: "About us", href: "/about" },
  ];

  return (
    <>
      {/* Main Header */}
      <header className="bg-white sticky top-0 z-50">
        <div className="container navbar">
          <div className="flex justify-between items-center">
            <div className="navbar-logo">
              <div className="navlogo flex items-center">
                <Link href="/" className="flex items-center">
                  <Image
                    src="/images/logo.png"
                    alt="Logo"
                    width={184}
                    height={36}
                  />
                </Link>
              </div>

              <button className="navCategories flex items-center space-x-2">
                <Image
                  src="/icons/menu-icon.svg"
                  alt="menu"
                  width={20}
                  height={20}
                />
                <span className="font-medium">All Categories</span>
              </button>
            </div>

            <div className="navbar-search">
              <div className="navbar-search--main">
                <svg
                  className="h-5 w-5 text-gray-400 mr-3"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                  />
                </svg>
                <input
                  type="text"
                  placeholder="What are you looking for?"
                  className="flex-1 outline-none "
                />
                <div className="flex items-center space-x-4 ml-3">
                  <button>
                    <svg
                      className="h-5 w-5 text-gray-400"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M19 11a7 7 0 01-7 7m0 0a7 7 0 01-7-7m7 7v4m0 0H8m4 0h4m-4-8a3 3 0 01-3-3V5a3 3 0 116 0v6a3 3 0 01-3 3z"
                      />
                    </svg>
                  </button>
                  <button>
                    <svg
                      className="h-5 w-5 text-gray-400"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"
                      />
                    </svg>
                  </button>
                </div>
              </div>
            </div>

            <div className="navbar-actions">
              <div className="navbar-actions--lang">
                <Image
                  src="/icons/globe-alt.svg"
                  alt="Logo"
                  width={24}
                  height={24}
                />
                <span className="font-medium">EN</span>
                <svg
                  className="h-4 w-4"
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
              </div>

              {/* Notifications */}
              <button className="cursor-pointer">
                <Image
                  src="/icons/bell.svg"
                  alt="Logo"
                  width={24}
                  height={24}
                />
              </button>

              {/* App Menu */}
              <button className="hidden md:block! cursor-pointer">
                <Image
                  src="/icons/dot-menu.svg"
                  alt="Logo"
                  width={18}
                  height={18}
                />
              </button>

              <button className=" cursor-pointer">
                <Image
                  src="/icons/profile-icon.svg"
                  alt="Logo"
                  width={24}
                  height={24}
                />
              </button>
            </div>
          </div>
        </div>
      </header>
      <div className="navigationBar">
        <div className="container">
          <div className="flex justify-between items-center">
            <div className="hidden md:flex!">
              {navigation.map((item, index) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className={`navigationBar-link px-6 py-2 font-medium text-gray-800 bg-white 
              ${index === 0 ? "rounded-l-[40px]" : ""} 
              ${index === navigation.length - 1 ? "rounded-r-[40px]" : ""} 
              ${
                index !== navigation.length - 1
                  ? "border-r border-black/40"
                  : ""
              }`}
                >
                  {item.name}
                </Link>
              ))}
            </div>

            {/* Mobile Navigation */}
            <div className="md:hidden relative">
              <button
                onClick={() => setIsOpen(!isOpen)}
                className="flex items-center"
              >
                <Image
                  src="/icons/menu-icon.svg"
                  alt="menu"
                  width={20}
                  height={20}
                />
              </button>

              {isOpen && (
                <div className="absolute left-0 mt-2 w-48 rounded-lg shadow-lg bg-white border border-gray-200">
                  {navigation.map((item) => (
                    <Link
                      key={item.name}
                      href={item.href}
                      onClick={() => setIsOpen(false)}
                      className="block px-4 py-2 text-gray-800 hover:bg-gray-100"
                    >
                      {item.name}
                    </Link>
                  ))}
                </div>
              )}
            </div>

            <Link className="btn-primary" href="/contact">
              Contact Us
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;

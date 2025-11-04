/* eslint-disable @typescript-eslint/no-explicit-any */
'use client';

import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

interface HeroBannerProps {
  className?: string;
}

const HeroBanner: React.FC<HeroBannerProps> = ({ className = '' }) => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
    arrows: true,
    fade: true,
    cssEase: 'linear',
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    customPaging: (i: number) => <div className="hero-banner__dot" />,
    dotsClass: 'hero-banner__dots',
  };

  const bannerData = [
    {
      id: 1,
      title: 'This is your Hero Text for Banner',
      description:
        'Manufacturer & exporter of world-class modular belts, slat chains, and complete conveyor components serving Food & Beverage, Packaging, Pharma, Automotive and more.',
    },
    {
      id: 2,
      title: 'This is your Hero Text for Banner',
      description:
        'Manufacturer & exporter of world-class modular belts, slat chains, and complete conveyor components serving Food & Beverage, Packaging, Pharma, Automotive and more.',
    },
    {
      id: 3,
      title: 'This is your Hero Text for Banner',
      description:
        'Manufacturer & exporter of world-class modular belts, slat chains, and complete conveyor components serving Food & Beverage, Packaging, Pharma, Automotive and more.',
    },
  ];

  return (
    <section className={`hero-banner container ${className}`}>
      <Slider {...settings}>
        {bannerData.map((slide) => (
          <div key={slide.id} className="hero-banner__slide">
            {/* Gradient Background */}
            <div className="hero-banner__background" />

            {/* Abstract Shapes on Right */}
            <div className="hero-banner__shapes">
              <div className="hero-banner__shape hero-banner__shape--1" />
              <div className="hero-banner__shape hero-banner__shape--2" />
              <div className="hero-banner__shape hero-banner__shape--3" />
              <div className="hero-banner__shape hero-banner__shape--4" />
            </div>

            {/* Content */}
            <div className="hero-banner__content">
              <div className="hero-banner__text-container">
                <h1 className="hero-banner__title">{slide.title}</h1>
                <p className="hero-banner__description">{slide.description}</p>
                <button className="hero-banner__button">
                  View Products
                  <svg
                    width="20"
                    height="20"
                    viewBox="0 0 20 20"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M7.5 5L12.5 10L7.5 15"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </button>
              </div>
            </div>
          </div>
        ))}
      </Slider>
    </section>
  );
};

// Custom Arrow Components
const NextArrow = (props: any) => {
  const { className, onClick } = props;
  return (
    <div
      className={`${className} hero-banner__arrow hero-banner__arrow--next`}
      onClick={onClick}
    >
      <svg
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M9 18L15 12L9 6"
          stroke="white"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </div>
  );
};

const PrevArrow = (props: any) => {
  const { className, onClick } = props;
  return (
    <div
      className={`${className} hero-banner__arrow hero-banner__arrow--prev`}
      onClick={onClick}
    >
      <svg
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M15 18L9 12L15 6"
          stroke="white"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </div>
  );
};

export default HeroBanner;

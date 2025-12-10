/* eslint-disable @typescript-eslint/no-explicit-any */
'use client';

import React from 'react';
import Image from 'next/image';
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
            <div className="hero-banner__background">
              <Image
              src="/images/scaleimg.png"
              alt="Business Growth Illustration"
              width={42}
              height={42}
              unoptimized
              className="overview-section__image"
            />
            </div>

            {/* Content */}
            <div className="hero-banner__content">
              <div className="hero-banner__text-container">
                <h1 className="hero-banner__title">{slide.title}</h1>
                <p className="hero-banner__description">{slide.description}</p>
                <button className="hero-banner__button">
                  View Products
                  <Image
                    src="/icons/arrowleftline-black.png"
                    alt="Scale Growth"
                    width={18}
                    height={18}
                    className="overview-section__image"
                  />
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
      <Image
        src="/icons/whiteArrowright.svg"
        alt="arrow"
        width={20}
        height={20}
        className="overview-section__image"
      />
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
      <Image
        src="/icons/whiteArrowLeft.svg"
        alt="arrow"
        width={20}
        height={20}
        className="overview-section__image"
      />
    </div>
  );
};

export default HeroBanner;

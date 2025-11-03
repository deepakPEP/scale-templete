/* eslint-disable @typescript-eslint/no-explicit-any */
'use client';

import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Image from 'next/image';

interface HeroBannerProps {
  className?: string;
}

const HeroBanner: React.FC<HeroBannerProps> = ({ className = '' }) => {
  const settings = {
    dots: false,
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
  };

  const bannerData = [
    {
      id: 1,
      image: '/images/banner-image.png',
      title: 'Title goes here. Use this space to promote the business',
      description: 'Describe the Important features, pricing and other relevant info',
    },
    {
      id: 2,
      image: '/images/banner-second.png',
      title: 'Title goes here. Use this space to promote the business',
      description: 'Describe the Important features, pricing and other relevant info',
    },
    {
      id: 3,
      image: '/images/banner-image.png',
      title: 'Title goes here. Use this space to promote the business',
      description: 'Describe the Important features, pricing and other relevant info',
    },
  ];

  return (
    <section className={`hero-banner container ${className}`}>
      <Slider {...settings}>
        {bannerData.map((slide) => (
          <div key={slide.id} className="hero-banner__slide">
            <div className="hero-banner__image-container">
              <Image
                src={slide.image}
                alt={slide.title}
                fill
                className="hero-banner__image"
                priority={slide.id === 1}
              />
            </div>
            <div className="hero-banner__content">
              <div className="hero-banner__text-container">
                <h1 className="hero-banner__title">{slide.title}</h1>
                <p className="hero-banner__description">{slide.description}</p>
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
    </div>
  );
};

export default HeroBanner;

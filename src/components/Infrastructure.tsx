"use client";

import React, { useState } from "react";
import Image from "next/image";

interface InfrastructureProps {
  className?: string;
}

const Infrastructure: React.FC<InfrastructureProps> = ({ className = "" }) => {
  const [currentSlide, setCurrentSlide] = useState(0);

  // Sample images - replace with your actual images
  const sliderImages = [
    "/images/sliderimage.png",
    "/images/banner-second.png",
    "/images/logo-group.png",
  ];

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % sliderImages.length);
  };

  const prevSlide = () => {
    setCurrentSlide(
      (prev) => (prev - 1 + sliderImages.length) % sliderImages.length
    );
  };

  const goToSlide = (index: number) => {
    setCurrentSlide(index);
  };

  return (
    <section className={`infrastructure-section ${className}`}>
      <div className="infrastructure-section__container">
        <div className="infrastructure-section__left">
          <div className="infrastructure-section__content">
            <h2 className="infrastructure-section__heading">Infrastructure</h2>
            <p className="infrastructure-section__description">
              Use this space to promote the business, its products or its services. Help people become familiar with the business and its offerings, creating a sense of connection and trust. Focus on what makes the business unique and how users can benefit from choosing it.
            </p>
          </div>
          <div className="infrastructure-section__grid">
            <div className="infrastructure-section__grid-items">
              <Image
                src="/icons/briefcase.png"
                alt="Briefcase"
                width={32}
                height={32}
                className="infrastructure-section__image"
              />
              <h3>Capacity</h3>
              <span>3,000 MT to 45,000 MT.</span>
            </div>
            <div className="infrastructure-section__grid-items">
              <Image
                src="/icons/briefcase.png"
                alt="Briefcase"
                width={32}
                height={32}
                className="infrastructure-section__image"
              />
              <h3>Factory Size</h3>
              <span>1000 square feet</span>
            </div>
            <div className="infrastructure-section__grid-items">
              <Image
                src="/icons/briefcase.png"
                alt="Briefcase"
                width={32}
                height={32}
                className="infrastructure-section__image"
              />
              <h3>No. Of Employees</h3>
              <span>501 to 1000 People</span>
            </div>
            <div className="infrastructure-section__grid-items">
              <Image
                src="/icons/briefcase.png"
                alt="Briefcase"
                width={32}
                height={32}
                className="infrastructure-section__image"
              />
              <h3>Monthly Production Capacity</h3>
              <span>-</span>
            </div>
          </div>          
        </div>

        <div className="infrastructure-section__right">
          <div className="infrastructure-section__visual">
            <div className="slider-container">
              <div className="slider-wrapper">
                <Image
                  src={sliderImages[currentSlide]}
                  alt={`Infrastructure image ${currentSlide + 1}`}
                  width={500}
                  height={400}
                  className="slider-image"
                />
                <button
                  className="slider-arrow slider-arrow--prev"
                  onClick={prevSlide}
                  aria-label="Previous image"
                ></button>
                <button
                  className="slider-arrow slider-arrow--next"
                  onClick={nextSlide}
                  aria-label="Next image"
                ></button>
              </div>

              {/* Dot Indicators */}
              <div className="slider-dots">
                {sliderImages.map((_, index) => (
                  <button
                    key={index}
                    className={`slider-dot ${
                      index === currentSlide ? "slider-dot--active" : ""
                    }`}
                    onClick={() => goToSlide(index)}
                    aria-label={`Go to slide ${index + 1}`}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Infrastructure;

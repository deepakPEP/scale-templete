"use client";

import React, { useRef } from "react";
import Image from "next/image";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

interface Testimonial {
  id: number;
  text: string;
  authorName: string;
  companyName: string;
}

interface TestimonialProps {
  className?: string;
}

// Custom Arrow Components
const PrevArrow = ({ onClick }: { onClick?: () => void }) => (
  <button
    type="button"
    className="testimonial-section__arrow testimonial-section__arrow--prev"
    onClick={onClick}
    aria-label="Previous testimonial"
  >
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <line x1="19" y1="12" x2="5" y2="12" />
      <polyline points="12 19 5 12 12 5" />
    </svg>
  </button>
);

const NextArrow = ({ onClick }: { onClick?: () => void }) => (
  <button
    type="button"
    className="testimonial-section__arrow testimonial-section__arrow--next"
    onClick={onClick}
    aria-label="Next testimonial"
  >
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <line x1="5" y1="12" x2="19" y2="12" />
      <polyline points="12 5 19 12 12 19" />
    </svg>
  </button>
);

const Testimonial: React.FC<TestimonialProps> = ({ className = "" }) => {
  const sliderRef = useRef<Slider>(null);

  const testimonials: Testimonial[] = [
    {
      id: 1,
      text: "SpectraNav SLAM navigation technology revolutionized our material handling efficiency. Their autonomous mobile robot solutions seamlessly integrated with our production line.",
      authorName: "G***R",
      companyName: "Chennai Manufacturing Corp",
    },
    {
      id: 2,
      text: "SpectraNav SLAM navigation technology revolutionized our material handling efficiency. Their autonomous mobile robot solutions seamlessly integrated with our production line.",
      authorName: "G***R",
      companyName: "Chennai Manufacturing Corp",
    },
    {
      id: 3,
      text: "SpectraNav SLAM navigation technology revolutionized our material handling efficiency. Their autonomous mobile robot solutions seamlessly integrated with our production line.",
      authorName: "G***R",
      companyName: "Chennai Manufacturing Corp",
    },
    {
      id: 4,
      text: "SpectraNav SLAM navigation technology revolutionized our material handling efficiency. Their autonomous mobile robot solutions seamlessly integrated with our production line.",
      authorName: "G***R",
      companyName: "Chennai Manufacturing Corp",
    },
  ];

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: false,
    arrows: true,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          arrows: true,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          arrows: true,
        },
      },
    ],
  };

  return (
    <section className={`testimonial-section ${className}`}>
      <div className="testimonial-section__container">
        <div className="testimonial-section__header">
          <h2 className="testimonial-section__heading">
            Trusted by Leading Companies Across Industries
          </h2>
          <p className="testimonial-section__subtitle">
            Since 2018, we have delivered innovative robotics solutions to diverse industries, building lasting partnerships through excellence and reliability.
          </p>
        </div>

        <div className="testimonial-section__slider-wrapper">
          <Slider ref={sliderRef} {...settings} className="testimonial-section__slider">
            {testimonials.map((testimonial) => (
              <div key={testimonial.id} className="testimonial-section__slide">
                <div className="testimonial-section__card">
                  <div className="testimonial-section__quote-icon">
                    <Image
                      src="/icons/colan.svg"
                      alt="Business Growth Illustration"
                      width={42}
                      height={42}
                      className="overview-section__image"
                    />
                  </div>
                  <p className="testimonial-section__text">{testimonial.text}</p>
                  <div className="testimonial-section__separator" />
                  <div className="testimonial-section__author">
                    <h3 className="testimonial-section__author-name">{testimonial.authorName}</h3>
                    <p className="testimonial-section__company-name">{testimonial.companyName}</p>
                  </div>
                </div>
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </section>
  );
};

export default Testimonial;


/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import React, { useEffect, useRef, useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Image from "next/image";

interface CompanyProps {
  className?: string;
}

const Company: React.FC<CompanyProps> = ({ className = "" }) => {
  const sliderRef = useRef<Slider>(null);
  const [windowWidth, setWindowWidth] = useState(0);
  const [isClient, setIsClient] = useState(false);

  const getSlidesToShow = (width: number) => {
    if (width <= 480) return 1;
    if (width <= 768) return 2;
    if (width <= 1024) return 3;
    return 4;
  };

  useEffect(() => {
    const handleResize = () => {
      const newWidth = window.innerWidth;
      setWindowWidth(newWidth);

      setTimeout(() => {
        if (sliderRef.current) {
          sliderRef.current.slickGoTo(0);
          const slider = sliderRef.current as any;
          if (slider.slickRefresh) {
            slider.slickRefresh();
          }
        }
      }, 100);
    };

    const initialWidth = window.innerWidth;
    setWindowWidth(initialWidth);
    setIsClient(true);

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: isClient ? getSlidesToShow(windowWidth) : 4,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    arrows: true,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          arrows: true,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          arrows: true,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          arrows: true,
        },
      },
    ],
  };

  const companyData = [
    {
      id: 1,
      icon: (
        <div className="company-card__icon">
          <Image
            src="/icons/legalOwner.svg"
            alt="Legal Owner"
            width={40}
            height={40}
          />
        </div>
      ),
      title: "Legal Owner Name",
      subtitle: "Owner name",
    },
    {
      id: 2,
      icon: (
        <div className="company-card__icon">
          <Image
            src="/icons/legalOwner.svg"
            alt="Legal Owner"
            width={40}
            height={40}
          />
        </div>
      ),
      title: "Legal Status",
      subtitle: "Legal status of company",
    },
    {
      id: 3,
      icon: (
        <div className="company-card__icon">
          <Image
            src="/icons/legalOwner.svg"
            alt="Legal Owner"
            width={40}
            height={40}
          />
        </div>
      ),
      title: "Business Type",
      subtitle: "Type of business",
    },
    {
      id: 4,
      icon: (
        <div className="company-card__icon">
          <Image
            src="/icons/legalOwner.svg"
            alt="Legal Owner"
            width={40}
            height={40}
          />
        </div>
      ),
      title: "Industry",
      subtitle: "Industry you are into",
    },
    {
      id: 5,
      icon: (
        <div className="company-card__icon">
          <Image
            src="/icons/legalOwner.svg"
            alt="Legal Owner"
            width={40}
            height={40}
          />
        </div>
      ),
      title: "Company Rating",
      subtitle: "Overall business rating",
    },
    {
      id: 6,
      icon: (
        <div className="company-card__icon">
          <Image
            src="/icons/legalOwner.svg"
            alt="Legal Owner"
            width={40}
            height={40}
          />
        </div>
      ),
      title: "Business License",
      subtitle: "License and permits",
    },
  ];

  return (
    <section className={`company-section ${className}`}>
      <div className="company-section__container">
        <div className="company-section__logo">
          <div className="company-section__logo-card">
            <Image
              src="/icons/starFrame.svg"
              alt="Company Logo"
              width={80}
              height={80}
            />
            <span className="company-section__logo-text">Logo</span>
          </div>
        </div>

        <div className="company-section__slider">
          <Slider key={`slider-${windowWidth}`} ref={sliderRef} {...settings}>
            {companyData.map((item) => (
              <div key={item.id} className="company-card">
                {item.icon}
                <div>
                  <h3 className="company-card__title">{item.title}</h3>
                  <p className="company-card__subtitle">{item.subtitle}</p>
                </div>
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </section>
  );
};

const NextArrow = (props: any) => {
  const { className, onClick } = props;
  return (
    <div
      className={`${className} company-section__arrow company-section__arrow--next`}
      onClick={onClick}
    >
    </div>
  );
};

const PrevArrow = (props: any) => {
  const { className, onClick } = props;
  return (
    <div
      className={`${className} company-section__arrow company-section__arrow--prev`}
      onClick={onClick}
    >
    </div>
  );
};

export default Company;

/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import React, { useEffect, useRef, useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Image from "next/image";

interface CertificationsProps {
  className?: string;
}

const Certifications: React.FC<CertificationsProps> = ({ className = "" }) => {
  const sliderRef = useRef<Slider>(null);
  const [windowWidth, setWindowWidth] = useState(0);
  const [isClient, setIsClient] = useState(false);

  const getSlidesToShow = (width: number) => {
    if (width <= 480) return 2;
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
    autoplay: false,
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
    ],
  };

  const certificationData = [
    {
      id: 1,
      name: "Certificate 1",
      logo: "/images/Certification.png",
    },
    {
      id: 2,
      name: "Certificate 2",
      logo: "/images/Certification.png",
    },
    {
      id: 3,
      name: "Certificate 3",
      logo: "/images/Certification.png",
    },
    {
      id: 4,
      name: "Certificate 4",
      logo: "/images/Certification.png",
    },
    {
      id: 5,
      name: "Certificate 5",
      logo: "/images/Certification.png",
    },
    {
      id: 6,
      name: "Certificate 6",
      logo: "/images/Certification.png",
    },
  ];

  return (
    <section className={`certifications-section ${className}`}>
      <div className="certifications-section__container">

        <div className="certifications-section__slider">
        <div className="certifications-section__header">
          <h2 className="certifications-section__heading">Certifications</h2>
        </div>
          <Slider
            key={`certifications-slider-${windowWidth}`}
            ref={sliderRef}
            {...settings}
          >
            {certificationData.map((cert) => (
              <div key={cert.id} className="certifications-section__item">
                  <Image
                    src={cert.logo}
                    alt={cert.name}
                    unoptimized
                    width={120}
                    height={80}
                    className="certifications-section__logo"
                  />
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
      className={`${className} certifications-section__arrow certifications-section__arrow--next`}
      onClick={onClick}
    ></div>
  );
};

const PrevArrow = (props: any) => {
  const { className, onClick } = props;
  return (
    <div
      className={`${className} certifications-section__arrow certifications-section__arrow--prev`}
      onClick={onClick}
    ></div>
  );
};

export default Certifications;

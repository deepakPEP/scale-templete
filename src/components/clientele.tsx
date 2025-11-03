/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import React, { useEffect, useRef, useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Image from "next/image";

interface ClienteleProps {
  className?: string;
}

const Clientele: React.FC<ClienteleProps> = ({ className = "" }) => {
  const sliderRef = useRef<Slider>(null);
  const [windowWidth, setWindowWidth] = useState(0);
  const [isClient, setIsClient] = useState(false);

  // Calculate initial slidesToShow based on window width
  const getSlidesToShow = (width: number) => {
    if (width <= 480) return 1;
    if (width <= 768) return 3;
    if (width <= 1024) return 4;
    if (width <= 1200) return 5;
    return 6;
  };

  // Handle window resize to refresh slider
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
    slidesToShow: isClient ? getSlidesToShow(windowWidth) : 6,
    slidesToScroll: 1,
    autoplay: false,
    autoplaySpeed: 3000,
    arrows: true,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    responsive: [
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 5,
          slidesToScroll: 1,
          arrows: true,
        },
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 1,
          arrows: true,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          arrows: true,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          arrows: true,
        },
      },
    ],
  };

  const clienteleData = [
    {
      id: 1,
      name: "Client 1",
      logo: "/images/logo-group.png",
    },
    {
      id: 2,
      name: "Client 2",
      logo: "/images/logo-group.png",
    },
    {
      id: 3,
      name: "Client 3",
      logo: "/images/logo-group.png",
    },
    {
      id: 4,
      name: "Client 4",
      logo: "/images/logo-group.png",
    },
    {
      id: 5,
      name: "Client 5",
      logo: "/images/logo-group.png",
    },
    {
      id: 6,
      name: "Client 6",
      logo: "/images/logo-group.png",
    },
    {
      id: 7,
      name: "Client 7",
      logo: "/images/logo-group.png",
    },
    {
      id: 8,
      name: "Client 8",
      logo: "/images/logo-group.png",
    },
  ];

  return (
    <section className={`clientele-section ${className}`}>
      <div className="clientele-section__container">
        <div className="clientele-section__slider">
          <div className="clientele-section__header">
            <h2 className="clientele-section__heading">Clientele</h2>
          </div>
          <Slider
            key={`clientele-slider-${windowWidth}`}
            ref={sliderRef}
            {...settings}
          >
            {clienteleData.map((client) => (
              <div key={client.id} className="clientele-section__item">
                <div className="clientele-section__logo-container">
                  <Image
                    src={client.logo}
                    alt={client.name}
                    width={120}
                    height={80}
                    className="clientele-section__logo"
                  />
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
      className={`${className} clientele-section__arrow clientele-section__arrow--next`}
      onClick={onClick}
    ></div>
  );
};

const PrevArrow = (props: any) => {
  const { className, onClick } = props;
  return (
    <div
      className={`${className} clientele-section__arrow clientele-section__arrow--prev`}
      onClick={onClick}
    ></div>
  );
};

export default Clientele;

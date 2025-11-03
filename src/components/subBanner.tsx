"use client";

import React from "react";
import Image from "next/image";

interface SubBannerProps {
  title?: string;
  description?: string;
  className?: string;
}

const SubBanner: React.FC<SubBannerProps> = ({ 
  title = "Profile",
  description = "Describe the important features, pricing and other relevant info",
  className = "" 
}) => {
  return (
    <section className={`sub-banner-section ${className}`}>
      <div className="sub-banner-section__background">
        <Image
          src="/images/subBanner.png"
          alt="Banner background"
          fill
          className="sub-banner-section__bg-image"
          priority
        />
      </div>
      <div className="sub-banner-section__container">
        <div className="sub-banner-section__content">
          <h1 className="sub-banner-section__title">{title}</h1>
          <p className="sub-banner-section__description">{description}</p>
        </div>
      </div>
    </section>
  );
};

export default SubBanner;

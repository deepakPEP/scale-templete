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
  description = "Home /",
  className = "" 
}) => {
  return (
    <section className={`sub-banner-section ${className}`}>
      <div className="sub-banner-section__container">
        <div className="sub-banner-section__content">
          <p className="sub-banner-section__description">{description}</p>
          <h1 className="sub-banner-section__title">{title}</h1>
        </div>
      </div>
    </section>
  );
};

export default SubBanner;

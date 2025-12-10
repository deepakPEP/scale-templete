"use client";

import React from "react";
import Image from "next/image";

interface industryProps {
  className?: string;
}

const industryWeserve: React.FC<industryProps> = ({ className = "" }) => {
  return (
    <section className={`industryWeserve ${className}`}>
      <div className="industryWeserve__container">
        <div className="industryWeserve--overview">
          <h3>Industry we serve</h3>
          <p>
              Manufacturer & Exporter of Modular belts, Slat Chains and a complete range of conveyor components.
          </p>
        </div>
        <div className="industryWeserve--feature">
          <div className="industryWeserve--feature-item">
            <Image
              src="/icons/industry1.svg"
              alt="Business Growth Illustration"
              width={42}
              height={42}
              className="overview-section__image"
            />
            <h3>Industry Name</h3>
          </div>
          <div className="industryWeserve--feature-item">
            <Image
              src="/icons/industry2.svg"
              alt="Business Growth Illustration"
              width={42}
              height={42}
              className="overview-section__image"
            />
            <h3>Pointer 2</h3>
            
          </div>
          <div className="industryWeserve--feature-item">
            <Image
              src="/icons/industry3.svg"
              alt="Business Growth Illustration"
              width={42}
              height={42}
              className="overview-section__image"
            />
            <h3>Pointer 3</h3>
            
          </div>
          <div className="industryWeserve--feature-item">
            <Image
              src="/icons/industry4.svg"
              alt="Business Growth Illustration"
              width={42}
              height={42}
              className="overview-section__image"
            />
            <h3>Pointer 4</h3>
            
          </div>
          <div className="industryWeserve--feature-item">
            <Image
              src="/icons/industry5.svg"
              alt="Business Growth Illustration"
              width={42}
              height={42}
              className="overview-section__image"
            />
            <h3>Pointer 5</h3>
            
          </div>
          <div className="industryWeserve--feature-item">
            <Image
              src="/icons/industry6.svg"
              alt="Business Growth Illustration"
              width={42}
              height={42}
              className="overview-section__image"
            />
            <h3>Pointer 6</h3>
            
          </div>
          <div className="industryWeserve--feature-item">
            <Image
              src="/icons/industry7.svg"
              alt="Business Growth Illustration"
              width={42}
              height={42}
              className="overview-section__image"
            />
            <h3>Pointer 7</h3>
            
          </div>
          <div className="industryWeserve--feature-item">
            <Image
              src="/icons/industry8.svg"
              alt="Business Growth Illustration"
              width={42}
              height={42}
              className="overview-section__image"
            />
            <h3>Pointer 8</h3>
            
          </div>
        </div>
      </div>
    </section>
  );
};

export default industryWeserve;

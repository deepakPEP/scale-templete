"use client";

import React from "react";
import Image from "next/image";

interface VisionMissionProps {
  className?: string;
}

const VisionMission: React.FC<VisionMissionProps> = ({ className = "" }) => {
  return (
    <section className={`vision-mission ${className}`}>
      <div className="vision-mission__container">
        <div className="vision-mission__card">
          <div className="vision-mission__icon">
            <Image
              src="/icons/eye.svg"
              alt="Business Growth Illustration"
              width={70}
              height={70}
              className="overview-section__image"
            />
          </div>
          <div>
            <h3 className="vision-mission__title">Vision</h3>
            <p className="vision-mission__text">
              Use this space to promote the business, its products or its
              services. Help people become familiar with the business and its
              offerings, creating a sense of connection and trust.
            </p>
          </div>
        </div>

        {/* Mission Card */}
        <div className="vision-mission__card">
          <div className="vision-mission__icon">
            <Image
              src="/icons/flag.svg"
              alt="Business Growth Illustration"
              width={70}
              height={70}
              className="overview-section__image"
            />
          </div>
          <div>
            <h3 className="vision-mission__title">Mission</h3>
            <p className="vision-mission__text">
              Use this space to promote the business, its products or its
              services. Help people become familiar with the business and its
              offerings, creating a sense of connection and trust.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default VisionMission;

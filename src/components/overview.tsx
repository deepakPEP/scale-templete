"use client";

import React from "react";
import Image from "next/image";

interface OverviewProps {
  className?: string;
}

const Overview: React.FC<OverviewProps> = ({ className = "" }) => {
  return (
    <section className={`overview-section ${className}`}>
      <div className="overview-section__container">
        <div className="overview-section__left">
          <div className="overview-section__content">
            <h2 className="overview-section__heading">Overview</h2>
            <p className="overview-section__description">
              Medium length section heading goes here
            </p>
          </div>
        </div>

        {/* Right Side - Content, Image, and Button */}
        <div className="overview-section__right">
          <div className="overview-section__visual">
            <p>
              Use this space to promote the business, its products or its
              services. Help people become familiar with the business and its
              offerings, creating a sense of connection and trust. Focus on what
              makes the business unique and how users can benefit from choosing
              it.
            </p>
              <Image
                src="/images/truVerified.png"
                alt="Business Growth Illustration"
                width={107}
                height={152}
                className="overview-section__image"
              />
            <button className="btn btn-primary">Know More</button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Overview;

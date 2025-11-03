"use client";

import React from "react";
import Image from "next/image";

interface WhyUsProps {
  className?: string;
}

const Whyus: React.FC<WhyUsProps> = ({ className = "" }) => {
  return (
    <section className={`whyus-section ${className}`}>
      <div className="whyus-section__container">
        <div className="whyus-section--overview">
          <h3>Why us</h3>
          <p>
            Use this space to promote the business, its products or its
            services. Help people become familiar with the business and its
            offerings, creating a sense of connection and trust. Focus on what
            makes the business unique and how users can benefit from choosing
            it.
          </p>
        </div>
        <div className="whyus-section--feature">
          <div className="whyus-section--feature-item">
            <Image
              src="/icons/buildings.svg"
              alt="Business Growth Illustration"
              width={42}
              height={42}
              className="overview-section__image"
            />
            <h3>Feature One</h3>
            <p>Use this space to promote the business, </p>
          </div>
          <div className="whyus-section--feature-item">
            <Image
              src="/icons/buildings.svg"
              alt="Business Growth Illustration"
              width={42}
              height={42}
              className="overview-section__image"
            />
            <h3>Feature One</h3>
            <p>Use this space to promote the business, </p>
          </div>
          <div className="whyus-section--feature-item">
            <Image
              src="/icons/buildings.svg"
              alt="Business Growth Illustration"
              width={42}
              height={42}
              className="overview-section__image"
            />
            <h3>Feature One</h3>
            <p>Use this space to promote the business, </p>
          </div>
          <div className="whyus-section--feature-item">
            <Image
              src="/icons/buildings.svg"
              alt="Business Growth Illustration"
              width={42}
              height={42}
              className="overview-section__image"
            />
            <h3>Feature One</h3>
            <p>Use this space to promote the business, </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Whyus;

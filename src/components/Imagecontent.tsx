"use client";

import React from "react";
import Image from "next/image";

interface ImagecontentProps {
  className?: string;
}

const Imagecontent: React.FC<ImagecontentProps> = ({ className = "" }) => {
  return (
    <section className={`Imagecontent-section ${className}`}>
      <div className="Imagecontent-section--left">
        <Image
          src="/images/sliderimage.png"
          alt="Slider Image"
          width={864}
          height={650}
          className="Imagecontent-section__image"
        />
      </div>
      <div className="Imagecontent-section--right">
        <h3>Quality Assurance</h3>
        <p>
          Use this space to promote the business, its products or its services.
          Help people become familiar with the business and its offerings,
          creating a sense of connection and trust. Focus on what makes the
          business unique and how users can benefit from choosing it.
        </p>
      </div>
    </section>
  );
};

export default Imagecontent;

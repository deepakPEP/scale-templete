"use client";

import React from "react";
import Image from "next/image";

interface ImagecontentProps {
  className?: string;
  heading: string;
  description: string;
}

const Imagecontent: React.FC<ImagecontentProps> = ({ className = "",
  heading,
  description, }) => {
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
        <h3>{heading}</h3>
        <p>
          {description}
        </p>
      </div>
    </section>
  );
};

export default Imagecontent;

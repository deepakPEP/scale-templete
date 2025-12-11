"use client";

import React from "react";
import Image from "next/image";

interface TeammatesProps {
  className?: string;
}

interface TeamMember {
  id: number;
  name: string;
  designation: string;
  image?: string;
}

const Teammates: React.FC<TeammatesProps> = ({ className = "" }) => {
  const teamMembers: TeamMember[] = [
    {
      id: 1,
      name: "Teammate 1",
      designation: "Designation",
    },
    {
      id: 2,
      name: "Teammate 2",
      designation: "Designation",
    },
    {
      id: 3,
      name: "Teammate 3",
      designation: "Designation",
    },
    {
      id: 4,
      name: "Teammate 4",
      designation: "Designation",
    },
  ];

  return (
    <section className={`teammates-section ${className}`}>
      <div className="teammates-section__container">
        {/* Header Section */}
        <div className="teammates-section__header">
          <h2 className="teammates-section__title">Team</h2>
          <p className="teammates-section__subtitle">
            Manufacturer & Exporter of Modular belts, Slat Chains and a complete
            range of conveyor components.
          </p>
        </div>

        {/* Team Members Grid */}
        <div className="teammates-section__grid">
          {teamMembers.map((member) => (
            <div key={member.id} className="teammates-section__card">
              <div className="teammates-section__image-wrapper">
                {member.image ? (
                  <Image
                    src={member.image}
                    alt={member.name}
                    width={200}
                    height={200}
                    className="teammates-section__image"
                  />
                ) : (
                  <Image
                    src="/images/product-placeholder.png"
                    alt="Slider Image"
                    width={384}
                    height={424}
                    className="Imagecontent-section__image"
                  />
                )}
              </div>
              <div className="teammates-section__info">
                <h3 className="teammates-section__name">{member.name}</h3>
                <p className="teammates-section__designation">
                  {member.designation}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* View All Button */}
        <div className="teammates-section__button-wrapper">
          <button className="teammates-section__button">View All</button>
        </div>
      </div>
    </section>
  );
};

export default Teammates;


"use client";

import React from "react";
import Image from "next/image";

interface OverviewProps {
  className?: string;
  topClassName?: string;
}

interface CompanyDetail {
  id: number;
  label: string;
  value: string;
  icon: React.ReactElement;
}

const Overview: React.FC<OverviewProps> = ({ topClassName = "" }) => {
  const companyDetails: CompanyDetail[] = [
    {
      id: 1,
      label: "Verification Status",
      value: "Verified",
      icon: (
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="1.5" />
          <path
            d="M8 12L11 15L16 9"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <circle cx="12" cy="12" r="3" stroke="currentColor" strokeWidth="1.5" />
        </svg>
      ),
    },
    {
      id: 2,
      label: "Legal Owner",
      value: "Mr. Ramkumar",
      icon: (
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <circle cx="12" cy="8" r="4" stroke="currentColor" strokeWidth="1.5" />
          <path
            d="M6 21C6 17 9 14 12 14C15 14 18 17 18 21"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
          />
        </svg>
      ),
    },
    {
      id: 3,
      label: "No. of Employees",
      value: "200 to 300 People",
      icon: (
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <circle cx="9" cy="7" r="3" stroke="currentColor" strokeWidth="1.5" />
          <path
            d="M3 21C3 17 5.5 14 9 14C12.5 14 15 17 15 21"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
          />
          <circle cx="17" cy="7" r="3" stroke="currentColor" strokeWidth="1.5" />
          <path
            d="M15 21C15 18.5 16 16.5 17.5 15.5"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
          />
        </svg>
      ),
    },
    {
      id: 4,
      label: "Registered Office Size",
      value: "3456/ Sft.",
      icon: (
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <rect
            x="4"
            y="6"
            width="16"
            height="14"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinejoin="round"
          />
          <path
            d="M4 10H20"
            stroke="currentColor"
            strokeWidth="1.5"
          />
          <path
            d="M8 6V4C8 3.44772 8.44772 3 9 3H15C15.5523 3 16 3.44772 16 4V6"
            stroke="currentColor"
            strokeWidth="1.5"
          />
          <circle cx="9" cy="14" r="1" fill="currentColor" />
          <circle cx="15" cy="14" r="1" fill="currentColor" />
        </svg>
      ),
    },
    {
      id: 5,
      label: "Countries",
      value: "25",
      icon: (
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="1.5" />
          <circle cx="12" cy="12" r="6" stroke="currentColor" strokeWidth="1.5" />
          <path
            d="M12 2V6M12 18V22M2 12H6M18 12H22"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
          />
          <circle cx="12" cy="12" r="1.5" fill="currentColor" />
        </svg>
      ),
    },
    {
      id: 6,
      label: "Business Type",
      value: "Manufacturer",
      icon: (
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <rect
            x="5"
            y="7"
            width="14"
            height="12"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinejoin="round"
          />
          <path
            d="M5 11H19"
            stroke="currentColor"
            strokeWidth="1.5"
          />
          <path
            d="M9 7V5C9 4.44772 9.44772 4 10 4H14C14.5523 4 15 4.44772 15 5V7"
            stroke="currentColor"
            strokeWidth="1.5"
          />
          <rect x="7" y="13" width="2" height="2" fill="currentColor" />
          <rect x="11" y="13" width="2" height="2" fill="currentColor" />
          <rect x="15" y="13" width="2" height="2" fill="currentColor" />
        </svg>
      ),
    },
    {
      id: 7,
      label: "Satisfied Customers",
      value: "2500",
      icon: (
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <circle cx="12" cy="9" r="3" stroke="currentColor" strokeWidth="1.5" />
          <path
            d="M7 18C7 15.5 9 14 12 14C15 14 17 15.5 17 18"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
          />
          <path
            d="M16 6C16 7.1 16.9 8 18 8C19.1 8 20 7.1 20 6C20 4.9 19.1 4 18 4C16.9 4 16 4.9 16 6Z"
            fill="currentColor"
          />
          <path
            d="M18 8V10C18 11.1 18.9 12 20 12H22"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      ),
    },
    {
      id: 8,
      label: "Contract Manufacturing",
      value: "No",
      icon: (
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <circle cx="12" cy="8" r="4" stroke="currentColor" strokeWidth="1.5" />
          <path
            d="M6 21C6 17 9 14 12 14C15 14 18 17 18 21"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
          />
        </svg>
      ),
    },
  ];

  return (
    <section className={`overview-section`}>
      <div className="overview-section__container">
        {/* Top Section */}
        <div className={`overview-section__top ${topClassName}`.trim()}>
          {/* Left Side - Content */}
          <div className="overview-section__left">
            <div className="overview-section__content">
              <h2 className="overview-section__heading">Overview</h2>
              <h1 className="overview-section__title">
                Our Commitment to Reliable Infrastructure
              </h1>
              <p className="overview-section__description">
                Pinak Industries operates a modern in-house manufacturing setup
                equipped with CNC turning and machining centers, laser cutting,
                welding, dust-proof painting, and packaging facilities. Using
                premium-grade materials and energy-efficient designs, the company
                follows ISO 9001:2015 standards and strict Good Manufacturing
                Practices.
              </p>
              <button className="overview-section__button">
                Learn More
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 16 16"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M6 12L10 8L6 4"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </button>
            </div>
          </div>

          {/* Right Side - Badges */}
          <div className="overview-section__right">
            <div className="overview-section__badges">
                <Image
                  src="/images/truSecure.png"
                  alt="truSecure"
                  width={200}
                  height={200}
                  className="overview-section__image"
                />

                <Image
                  src="/images/ecoVerified.png"
                  alt="ecoVerified"
                  width={200}
                  height={200}
                  className="overview-section__image"
                />
            </div>
          </div>
        </div>

        {/* Bottom Section - Company Details Grid */}
        <div className="overview-section__details">
          <div className="overview-section__details-grid">
            {companyDetails.map((detail) => (
              <div key={detail.id} className="overview-section__detail-info">
                <div className="overview-section__detail-icon">{detail.icon}</div>
                <div className="overview-section__detail-item">
                <div className="overview-section__detail-label">{detail.label}</div>
                <div className="overview-section__detail-value">{detail.value}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Overview;

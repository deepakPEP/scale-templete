"use client";

import React, { useState } from "react";

interface CompanyDetailsProps {
  className?: string;
}

interface DetailItem {
  id: number;
  title: string;
  value: string;
  icon: React.ReactElement;
}

const CompanyDetails: React.FC<CompanyDetailsProps> = ({ className = "" }) => {
  const [showAll, setShowAll] = useState(false);

  const details: DetailItem[] = [
    {
      id: 1,
      title: "IEC Number",
      value: "IEC*****000000",
      icon: (
        <svg
          width="32"
          height="32"
          viewBox="0 0 32 32"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <rect
            x="8"
            y="8"
            width="8"
            height="8"
            stroke="currentColor"
            strokeWidth="1.5"
            fill="none"
          />
          <rect
            x="12"
            y="4"
            width="8"
            height="8"
            stroke="currentColor"
            strokeWidth="1.5"
            fill="none"
          />
          <rect
            x="4"
            y="12"
            width="8"
            height="8"
            stroke="currentColor"
            strokeWidth="1.5"
            fill="none"
          />
        </svg>
      ),
    },
    {
      id: 2,
      title: "No. Production Lines",
      value: "5",
      icon: (
        <svg
          width="32"
          height="32"
          viewBox="0 0 32 32"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M6 28L6 10L16 4L26 10L26 28L6 28Z"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinejoin="round"
          />
          <path
            d="M6 10L16 4L26 10"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinejoin="round"
          />
          <rect
            x="10"
            y="14"
            width="4"
            height="8"
            stroke="currentColor"
            strokeWidth="1.5"
            fill="none"
          />
          <rect
            x="18"
            y="14"
            width="4"
            height="8"
            stroke="currentColor"
            strokeWidth="1.5"
            fill="none"
          />
        </svg>
      ),
    },
    {
      id: 3,
      title: "Anuual Production",
      value: "1,000 Units",
      icon: (
        <svg
          width="32"
          height="32"
          viewBox="0 0 32 32"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M6 8L6 24L16 28L26 24L26 8L6 8Z"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinejoin="round"
          />
          <path
            d="M6 8L16 12L26 8"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinejoin="round"
          />
          <path
            d="M26 8L26 24L16 28L16 12L26 8Z"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinejoin="round"
          />
          <path d="M8 10L8 22" stroke="currentColor" strokeWidth="1.5" />
          <path d="M18 12L18 20" stroke="currentColor" strokeWidth="1.5" />
        </svg>
      ),
    },
    {
      id: 4,
      title: "Annual Output Value",
      value: "< $1 M",
      icon: (
        <svg
          width="32"
          height="32"
          viewBox="0 0 32 32"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <circle
            cx="16"
            cy="16"
            r="10"
            stroke="currentColor"
            strokeWidth="1.5"
          />
          <circle
            cx="16"
            cy="16"
            r="6"
            stroke="currentColor"
            strokeWidth="1.5"
          />
          <line
            x1="16"
            y1="6"
            x2="16"
            y2="10"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
          />
          <line
            x1="16"
            y1="22"
            x2="16"
            y2="26"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
          />
        </svg>
      ),
    },
    {
      id: 5,
      title: "Export Percentage",
      value: "80%",
      icon: (
        <svg
          width="32"
          height="32"
          viewBox="0 0 32 32"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <rect
            x="8"
            y="20"
            width="4"
            height="6"
            stroke="currentColor"
            strokeWidth="1.5"
            fill="none"
          />
          <rect
            x="14"
            y="14"
            width="4"
            height="12"
            stroke="currentColor"
            strokeWidth="1.5"
            fill="none"
          />
          <rect
            x="20"
            y="10"
            width="4"
            height="16"
            stroke="currentColor"
            strokeWidth="1.5"
            fill="none"
          />
        </svg>
      ),
    },
    {
      id: 6,
      title: "Main Markets",
      value: "Asia, India, USA, UK,",
      icon: (
        <svg
          width="32"
          height="32"
          viewBox="0 0 32 32"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <circle
            cx="16"
            cy="16"
            r="12"
            stroke="currentColor"
            strokeWidth="2"
          />
          <circle cx="16" cy="10" r="1.5" fill="currentColor" />
          <circle cx="16" cy="22" r="1.5" fill="currentColor" />
          <circle cx="10" cy="16" r="1.5" fill="currentColor" />
          <circle cx="22" cy="16" r="1.5" fill="currentColor" />
        </svg>
      ),
    },
    {
      id: 7,
      title: "Nearest Port",
      value: "Vishkapatanam",
      icon: (
        <svg
          width="32"
          height="32"
          viewBox="0 0 32 32"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M4 12L6 16H8V28H24V16H26L28 12H4ZM8 14H24V26H8V14Z"
            fill="currentColor"
          />
          <path d="M10 18H22V20H10V18Z" fill="currentColor" />
        </svg>
      ),
    },
    {
      id: 8,
      title: "Language Spoken",
      value: "Hindi, English",
      icon: (
        <svg
          width="32"
          height="32"
          viewBox="0 0 32 32"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M8 10C8 8.9 8.9 8 10 8H22C23.1 8 24 8.9 24 10V12C24 13.1 23.1 14 22 14H10C8.9 14 8 13.1 8 12V10Z"
            fill="currentColor"
          />
          <path d="M12 18H14V24H12V18Z" fill="currentColor" />
          <path d="M16 18H18V22H16V18Z" fill="currentColor" />
          <path d="M20 18H22V26H20V18Z" fill="currentColor" />
        </svg>
      ),
    },
  ];

  return (
    <section className={`company-details ${className}`}>
      <div className="company-details__container">
        <div className="company-details__grid">
          {details.map((detail, index) => (
            <div
              key={detail.id}
              className={`company-details__card ${
                index >= 6 && !showAll ? "company-details__card--hidden" : ""
              }`}
            >
              <h3 className="company-details__title">{detail.title}</h3>
              <p className="company-details__value">{detail.value}</p>
              <div className="company-details__icon">{detail.icon}</div>
            </div>
          ))}
        </div>
        <div className="company-details__button-wrapper">
          <button
            className="btn-outline"
            onClick={() => setShowAll(!showAll)}
          >
            {showAll ? "Show less" : "Show more"}
          </button>
        </div>
      </div>
    </section>
  );
};

export default CompanyDetails;

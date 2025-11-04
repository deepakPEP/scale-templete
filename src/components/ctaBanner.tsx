"use client";

import React from "react";

interface CTABannerProps {
  className?: string;
}

const CTABanner: React.FC<CTABannerProps> = ({ className = "" }) => {
  const handleQuoteRequest = () => {
    // Add your quote request logic here
    console.log("Request a Quote clicked");
  };

  return (
    <section className={`cta-banner ${className}`}>
      <div className="cta-banner__container">
        <div className="cta-banner__content">
          <div className="cta-banner__text">
            <h2 className="cta-banner__heading">Ready to Optimize Your Operations?</h2>
            <p className="cta-banner__subtitle">
              Get the latest insights on conveyor technology, industry trends, and product updates.
            </p>
          </div>
          <button 
            type="button" 
            className="cta-banner__button"
            onClick={handleQuoteRequest}
          >
            <span>Request a Quote</span>
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <line x1="5" y1="12" x2="19" y2="12" />
              <polyline points="12 5 19 12 12 19" />
            </svg>
          </button>
        </div>
      </div>
    </section>
  );
};

export default CTABanner;


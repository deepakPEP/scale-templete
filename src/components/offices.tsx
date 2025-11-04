"use client";

import React, { useState } from "react";

interface Office {
  companyName: string;
  addressLine1: string;
  addressLine2: string;
  cityCountryPincode: string;
}

interface OfficesProps {
  className?: string;
}

const Offices: React.FC<OfficesProps> = ({ className = "" }) => {
  const [activeTab, setActiveTab] = useState<"branch" | "factory">("branch");

  // Sample data - replace with actual data
  const branchOffices: Office[] = [
    {
      companyName: "Company name",
      addressLine1: "#No, Address line 1",
      addressLine2: "Address line 2,",
      cityCountryPincode: "City, Country, Pincode/Zipcode",
    },
    {
      companyName: "Company name",
      addressLine1: "#No, Address line 1",
      addressLine2: "Address line 2,",
      cityCountryPincode: "City, Country, Pincode/Zipcode",
    },
    {
      companyName: "Company name",
      addressLine1: "#No, Address line 1",
      addressLine2: "Address line 2,",
      cityCountryPincode: "City, Country, Pincode/Zipcode",
    },
    {
      companyName: "Company name",
      addressLine1: "#No, Address line 1",
      addressLine2: "Address line 2,",
      cityCountryPincode: "City, Country, Pincode/Zipcode",
    },
    {
      companyName: "Company name",
      addressLine1: "#No, Address line 1",
      addressLine2: "Address line 2,",
      cityCountryPincode: "City, Country, Pincode/Zipcode",
    },
    {
      companyName: "Company name",
      addressLine1: "#No, Address line 1",
      addressLine2: "Address line 2,",
      cityCountryPincode: "City, Country, Pincode/Zipcode",
    },
    {
      companyName: "Company name",
      addressLine1: "#No, Address line 1",
      addressLine2: "Address line 2,",
      cityCountryPincode: "City, Country, Pincode/Zipcode",
    },
    {
      companyName: "Company name",
      addressLine1: "#No, Address line 1",
      addressLine2: "Address line 2,",
      cityCountryPincode: "City, Country, Pincode/Zipcode",
    },
  ];

  const factoryOffices: Office[] = [
    {
      companyName: "Factory Name",
      addressLine1: "#No, Address line 1",
      addressLine2: "Address line 2,",
      cityCountryPincode: "City, Country, Pincode/Zipcode",
    },
    {
      companyName: "Factory Name",
      addressLine1: "#No, Address line 1",
      addressLine2: "Address line 2,",
      cityCountryPincode: "City, Country, Pincode/Zipcode",
    },
    {
      companyName: "Factory Name",
      addressLine1: "#No, Address line 1",
      addressLine2: "Address line 2,",
      cityCountryPincode: "City, Country, Pincode/Zipcode",
    },
    {
      companyName: "Factory Name",
      addressLine1: "#No, Address line 1",
      addressLine2: "Address line 2,",
      cityCountryPincode: "City, Country, Pincode/Zipcode",
    },
    {
      companyName: "Factory Name",
      addressLine1: "#No, Address line 1",
      addressLine2: "Address line 2,",
      cityCountryPincode: "City, Country, Pincode/Zipcode",
    },
    {
      companyName: "Factory Name",
      addressLine1: "#No, Address line 1",
      addressLine2: "Address line 2,",
      cityCountryPincode: "City, Country, Pincode/Zipcode",
    },
    {
      companyName: "Factory Name",
      addressLine1: "#No, Address line 1",
      addressLine2: "Address line 2,",
      cityCountryPincode: "City, Country, Pincode/Zipcode",
    },
    {
      companyName: "Factory Name",
      addressLine1: "#No, Address line 1",
      addressLine2: "Address line 2,",
      cityCountryPincode: "City, Country, Pincode/Zipcode",
    },
  ];

  const currentOffices = activeTab === "branch" ? branchOffices : factoryOffices;

  return (
    <section className={`offices-section ${className}`}>
      <div className="offices-section__container">
        {/* Tab Navigation */}
        <div className="offices-section__tabs">
          <button
            type="button"
            className={`offices-section__tab ${activeTab === "branch" ? "offices-section__tab--active" : ""}`}
            onClick={() => setActiveTab("branch")}
          >
            Branch Office
          </button>
          <button
            type="button"
            className={`offices-section__tab ${activeTab === "factory" ? "offices-section__tab--active" : ""}`}
            onClick={() => setActiveTab("factory")}
          >
            Factory
          </button>
        </div>

        {/* Tab Separator */}
        <div className="offices-section__separator" />

        {/* Heading */}
        <h2 className="offices-section__heading">Offices</h2>

        {/* Office Cards Grid */}
        <div className="offices-section__grid">
          {currentOffices.map((office, index) => (
            <div key={index} className="offices-section__card">
              <h3 className="offices-section__card-company">{office.companyName}</h3>
              <p className="offices-section__card-address">{office.addressLine1}</p>
              <p className="offices-section__card-address">{office.addressLine2}</p>
              <p className="offices-section__card-address">{office.cityCountryPincode}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Offices;


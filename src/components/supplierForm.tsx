"use client";

import React, { useState } from "react";

interface SupplierFormProps {
  className?: string;
}

const SupplierForm: React.FC<SupplierFormProps> = ({ className = "" }) => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    location: "",
    description: "",
  });

  const [showPhone, setShowPhone] = useState(false);
  const phoneNumber = "+91 98765 43210"; // Replace with actual phone number

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    // Add your form submission logic here
  };

  const togglePhoneVisibility = () => {
    setShowPhone(!showPhone);
  };

  const maskedPhone = showPhone ? phoneNumber : "+91 ********0";

  return (
    <section className={`supplierForm-section ${className}`}>
      <div className="supplierForm-section__container">
        {/* Left Side - Contact Information */}
        <div className="supplierForm-section__left">
          <div className="supplierForm-section__content">
            <div className="supplierForm-section__head-content">
              <h2 className="supplierForm-section__heading">Get in touch</h2>
              <p className="supplierForm-section__subtitle">
                Drop us a line sed id semper risus in hendrerit gravida rutrum.
              </p>
            </div>


            {/* Address Section */}
            <div className="supplierForm-section__info-section">
              <h3 className="supplierForm-section__info-heading">Address</h3>
              <div className="supplierForm-section__info-text">
                <p>Company Name</p>
                <p>2nd Floor, # 13, old No.246, 13th Cross Rd,</p>
                <p>Wilson Garden, Bengaluru,</p>
                <p>Karnataka 560027, India</p>
              </div>
            </div>

            {/* Phone Section */}
            <div className="supplierForm-section__info-section">
              <h3 className="supplierForm-section__info-heading">Phone</h3>
              <div className="supplierForm-section__phone-wrapper">
                <span className="supplierForm-section__phone-number">{maskedPhone}</span>
                <button
                  type="button"
                  onClick={togglePhoneVisibility}
                  className="supplierForm-section__view-number-btn"
                >
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    {showPhone ? (
                      <path d="M17.94 17.94A10.07 10.07 0 0112 20c-7 0-11-8-11-8a18.45 18.45 0 015.06-5.94M9.9 4.24A9.12 9.12 0 0112 4c7 0 11 8 11 8a18.5 18.5 0 01-2.16 3.19m-6.72-1.07a3 3 0 11-4.24-4.24M1 1l22 22" />
                    ) : (
                      <>
                        <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z" />
                        <circle cx="12" cy="12" r="3" />
                      </>
                    )}
                  </svg>
                  <span>View Number</span>
                </button>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="supplierForm-section__action-buttons">
              <button type="button" className="supplierForm-section__action-btn">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="#000000" stroke="none" strokeWidth="0">
                  <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07 19.5 19.5 0 01-6-6 19.79 19.79 0 01-3.07-8.67A2 2 0 014.11 2h3a2 2 0 012 1.72 12.84 12.84 0 00.7 2.81 2 2 0 01-.45 2.11L8.09 9.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45 12.84 12.84 0 002.81.7A2 2 0 0122 16.92z" />
                </svg>
                <span>Call Us</span>
              </button>
              <button type="button" className="supplierForm-section__action-btn">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#000000" strokeWidth="2">
                  <path d="M21 15a2 2 0 01-2 2H7l-4 4V5a2 2 0 012-2h14a2 2 0 012 2z" />
                </svg>
                <span>Send Message</span>
              </button>
              <button type="button" className="supplierForm-section__action-btn">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#000000" strokeWidth="2">
                  <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                  <polyline points="22,6 12,13 2,6" />
                </svg>
                <span>Send Email</span>
              </button>
            </div>
          </div>
        </div>

        {/* Right Side - Form */}
        <div className="supplierForm-section__right">
        <form className="supplierForm-section__form" onSubmit={handleSubmit}>
          {/* Grid for first 4 inputs */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-10! gap-y-6!">
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleInputChange}
              placeholder="Your name*"
              className="supplierForm-section__input w-full"
              required
            />

            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleInputChange}
              placeholder="Email*"
              className="supplierForm-section__input w-full"
              required
            />

            <input
              type="tel"
              id="phone"
              name="phone"
              value={formData.phone}
              onChange={handleInputChange}
              placeholder="Phone"
              className="supplierForm-section__input w-full"
            />

            <input
              type="text"
              id="company"
              name="company"
              value={formData.company}
              onChange={handleInputChange}
              placeholder="Company"
              className="supplierForm-section__input w-full"
            />
          </div>

          {/* Remaining inputs below */}
          <input
            type="text"
            id="location"
            name="location"
            value={formData.location}
            onChange={handleInputChange}
            placeholder="Location"
            className="supplierForm-section__input "
          />

          <textarea
            id="description"
            name="description"
            value={formData.description}
            onChange={handleInputChange}
            placeholder="Description"
            className="supplierForm-section__textarea "
            rows={4}
          />

        <div className="supplierForm-section__actions">
          <p className="supplierForm-section__privacy-notice">
            By clicking on "Submit" button you accept the Privacy Policy and Processing of personal data
          </p>

          <div className="supplierForm-section__submit">
            <button type="submit" className="supplierForm-section__submit-btn">
              <span>Submit</span>
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                <line x1="5" y1="12" x2="19" y2="12" />
                <polyline points="12 5 19 12 12 19" />
              </svg>
            </button>
          </div>
        </div>

        </form>
        </div>
      </div>
    </section>
  );
};

export default SupplierForm;
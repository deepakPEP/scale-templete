"use client";

import React, { useState } from "react";

interface SupplierFormProps {
  className?: string;
}

const SupplierForm: React.FC<SupplierFormProps> = ({ className = "" }) => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    mobile: "",
    country: "",
    location: "",
    message: "",
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
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

  return (
    <section className={`supplierForm-section ${className}`}>
      <div className="supplierForm-section__container">
        {/* Left Side - Heading and Privacy Text */}
        <div className="supplierForm-section__left">
          <div className="supplierForm-section__content">
            <h2 className="supplierForm-section__heading">Connect with this supplier</h2>
            <div className="supplierForm-section__privacy">
              <p className="supplierForm-section__privacy-text">We respect your privacy. No spam.</p>
              <p className="supplierForm-section__response-text">Suppliers typically respond within 24-48 hours.</p>
            </div>
          </div>
        </div>

        {/* Right Side - Form */}
        <div className="supplierForm-section__right">
          <form className="supplierForm-section__form" onSubmit={handleSubmit}>
            <div className="supplierForm-section__form-row">
              <div className="supplierForm-section__form-group">
                <label htmlFor="name" className="supplierForm-section__label">Name</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  placeholder="Full Name (as per business card)"
                  className="supplierForm-section__input"
                  required
                />
              </div>
              <div className="supplierForm-section__form-group">
                <label htmlFor="email" className="supplierForm-section__label">Email</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  placeholder="Business Email Address"
                  className="supplierForm-section__input"
                  required
                />
              </div>
            </div>

            <div className="supplierForm-section__form-row">
              <div className="supplierForm-section__form-group">
                <label htmlFor="mobile" className="supplierForm-section__label">Mobile</label>
                <input
                  type="tel"
                  id="mobile"
                  name="mobile"
                  value={formData.mobile}
                  onChange={handleInputChange}
                  placeholder="Mobile / WhatsApp Number"
                  className="supplierForm-section__input"
                  required
                />
              </div>
              <div className="supplierForm-section__form-group">
                <label htmlFor="country" className="supplierForm-section__label">Country</label>
                <select
                  id="country"
                  name="country"
                  value={formData.country}
                  onChange={handleInputChange}
                  className="supplierForm-section__select"
                  required
                >
                  <option value="">Select Country</option>
                  <option value="US">United States</option>
                  <option value="UK">United Kingdom</option>
                  <option value="CA">Canada</option>
                  <option value="AU">Australia</option>
                  <option value="DE">Germany</option>
                  <option value="FR">France</option>
                  <option value="IN">India</option>
                  <option value="CN">China</option>
                  <option value="JP">Japan</option>
                  <option value="BR">Brazil</option>
                </select>
              </div>
            </div>

            <div className="supplierForm-section__form-group">
              <label htmlFor="location" className="supplierForm-section__label">Location</label>
              <div className="supplierForm-section__input-container">
                <input
                  type="text"
                  id="location"
                  name="location"
                  value={formData.location}
                  onChange={handleInputChange}
                  placeholder="Your Business Location"
                  className="supplierForm-section__input supplierForm-section__input--with-icon"
                  required
                />
                <svg className="supplierForm-section__search-icon" width="16" height="16" viewBox="0 0 24 24" fill="none">
                  <path d="M21 21L16.514 16.506M19 10.5C19 15.194 15.194 19 10.5 19C5.806 19 2 15.194 2 10.5C2 5.806 5.806 2 10.5 2C15.194 2 19 5.806 19 10.5Z" 
                        stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
            </div>

            <div className="supplierForm-section__form-group">
              <label htmlFor="message" className="supplierForm-section__label">Message</label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleInputChange}
                placeholder="Briefly describe your requirement. E.g., Product type, specs, quantity, target price, delivery needs."
                className="supplierForm-section__textarea"
                rows={4}
                required
              />
            </div>

            <div className="supplierForm-section__submit">
              <button type="submit" className="btn btn-primary">
                Send
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default SupplierForm;
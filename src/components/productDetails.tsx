"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";

interface Product {
  id: number;
  name: string;
  description?: string;
  attributes: string[];
  group: string;
  image: string;
  price?: string;
  rating?: number;
  reviews?: number;
  moq?: string;
  variations?: {
    platform: string[];
    capacity: string[];
  };
  keyAttributes?: {
    industry: Array<{ label: string; value: string }>;
    other: Array<{ label: string; value: string }>;
  };
  shipping?: {
    international?: boolean;
    mode: string;
    fee?: string;
    delivery?: string;
  };
  images?: string[];
}

interface ProductDetailsProps {
  productId: number;
  group?: string;
}

const ProductDetails: React.FC<ProductDetailsProps> = ({
  productId,
  group,
}) => {
  const [selectedImageIndex, setSelectedImageIndex] = useState(0);
  const [selectedPlatform, setSelectedPlatform] = useState("Variation 1");
  const [selectedCapacity, setSelectedCapacity] = useState("Option 1");
  const [isAttributesOpen, setIsAttributesOpen] = useState(true);

  // Sample product data - In a real app, this would come from an API
  const allProducts: Product[] = [
    {
      id: 1,
      name: "Product name goes here",
      description:
        "Enhance your packaging operations with our high-performance Vertical Band Sealing Machine. Designed for continuous sealing of pre-formed bags and pouches, this machine ensures secure and consistent seals. Perfect for food, pharmaceutical, and general packaging applications. Features include adjustable temperature control, variable speed sealing, and user-friendly operation. Enhance your packaging operations with our high-performance Vertical Band Sealing Machine. Designed for continuous sealing of pre-formed bags and pouches, this machine ensures secure and consistent seals.",
      attributes: ["Attribute Value 1", "Attribute Value 2"],
      group: "Featured",
      image: "/images/product-placeholder.png",
      price: "$1468.88 Per Unit",
      rating: 4.8,
      reviews: 23424,
      moq: "MOQ 1box",
      variations: {
        platform: ["Variation 1", "Variation 2", "Variation 3", "Variation 4"],
        capacity: ["Option 1", "Option 2", "Option 3", "Option 4", "Option 5"],
      },
      keyAttributes: {
        industry: [
          { label: "Label", value: "Value" },
          { label: "Label", value: "Value" },
          { label: "Label", value: "Value" },
          { label: "Label", value: "Value" },
        ],
        other: [
          { label: "Label", value: "Value" },
          { label: "Label", value: "Value" },
          { label: "Label", value: "Value" },
          { label: "Label", value: "Value" },
          { label: "Label", value: "Value" },
          { label: "Label", value: "Value" },
        ],
      },
      shipping: {
        international: true,
        mode: "Express",
        fee: "₹12,245.62",
        delivery: "5-12 business days",
      },
      images: [
        "/images/product-placeholder.png",
        "/images/product-placeholder.png",
        "/images/product-placeholder.png",
        "/images/product-placeholder.png",
        "/images/product-placeholder.png",
      ],
    },
    {
      id: 2,
      name: "Product name goes here",
      description:
        "Small Short description goes here to lorem ipusm this is dummy textSmall Short description goes here",
      attributes: ["Attribute Value 1", "Attribute Value 2"],
      group: "Featured",
      image: "/images/product-placeholder.png",
      price: "$1468.88 Per Unit",
      rating: 4.8,
      reviews: 23424,
      moq: "MOQ 1box",
      variations: {
        platform: ["Variation 1", "Variation 2", "Variation 3", "Variation 4"],
        capacity: ["Option 1", "Option 2", "Option 3", "Option 4", "Option 5"],
      },
      keyAttributes: {
        industry: [
          { label: "Label", value: "Value" },
          { label: "Label", value: "Value" },
        ],
        other: [
          { label: "Label", value: "Value" },
          { label: "Label", value: "Value" },
        ],
      },
      shipping: {
        international: true,
        mode: "Express",
        fee: "₹12,245.62",
        delivery: "5-12 business days",
      },
      images: [
        "/images/product-placeholder.png",
        "/images/product-placeholder.png",
        "/images/product-placeholder.png",
        "/images/product-placeholder.png",
        "/images/product-placeholder.png",
      ],
    },
    {
      id: 3,
      name: "SP-881 SERIES",
      description:
        "Enhance your packaging operations with our high-performance Vertical Band Sealing Machine. Designed for continuous sealing of pre-formed bags and pouches, this machine ensures secure and consistent seals.",
      attributes: ["Attribute Value 1", "Attribute Value 2"],
      group: "Featured",
      image: "/images/product-placeholder.png",
      price: "$1468.88 Per Unit",
    },
    {
      id: 4,
      name: "Product name goes here",
      description:
        "Enhance your packaging operations with our high-performance Vertical Band Sealing Machine. Designed for continuous sealing of pre-formed bags and pouches, this machine ensures secure and consistent seals.",
      attributes: ["Attribute Value 1", "Attribute Value 2"],
      group: "Featured",
      image: "/images/product-placeholder.png",
      price: "$1468.88 Per Unit",
    },
    {
      id: 5,
      name: "Product name goes here",
      description:
        "Enhance your packaging operations with our high-performance Vertical Band Sealing Machine. Designed for continuous sealing of pre-formed bags and pouches, this machine ensures secure and consistent seals.",
      attributes: ["Attribute Value 1", "Attribute Value 2"],
      group: "Featured",
      image: "/images/product-placeholder.png",
      price: "$1468.88 Per Unit",
    },
    {
      id: 6,
      name: "Product name goes here",
      description:
        "Enhance your packaging operations with our high-performance Vertical Band Sealing Machine. Designed for continuous sealing of pre-formed bags and pouches, this machine ensures secure and consistent seals.",
      attributes: ["Attribute Value 1", "Attribute Value 2"],
      group: "Featured",
      image: "/images/product-placeholder.png",
      price: "$1468.88 Per Unit",
    },
    // Modular Belts products
    {
      id: 7,
      name: "Product name goes here",
      description:
        "Small Short description goes here to lorem ipusm this is dummy textSmall Short description goes here",
      attributes: ["Attribute Value 1", "Attribute Value 2"],
      group: "Modular Belts",
      image: "/images/product-placeholder.png",
      price: "$1468.88 Per Unit",
    },
  ];

  // Find current product
  const currentProduct =
    allProducts.find((p) => p.id === productId) || allProducts[0];

  // Find related products from same group (excluding current product)
  const relatedProducts = allProducts.filter(
    (p) => p.group === (group || currentProduct.group) && p.id !== productId
  );

  // Ensure we have images array
  const productImages = currentProduct.images || [currentProduct.image];

  return (
    <section className="product-details">
      <div className="product-details__container">
        {/* Mobile: Product Title at Top */}
        <h1 className="product-details__title product-details__title--mobile">
          {currentProduct.name || "Product name goes here"}
        </h1>

        {/* Main Product Section */}
        <div className="product-details__main">
          <div className="product-details__left">
            {/* Image Gallery */}
            <div className="product-details__gallery">
              <div className="product-details__main-image">
                <div className="product-details__image-placeholder">
                  <svg
                    width="200"
                    height="200"
                    viewBox="0 0 200 200"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <rect
                      x="20"
                      y="20"
                      width="160"
                      height="160"
                      rx="8"
                      stroke="#e0e0e0"
                      strokeWidth="2"
                      fill="none"
                    />
                    <circle cx="100" cy="70" r="25" fill="#f0f0f0" />
                    <path
                      d="M60 120L80 140L140 80"
                      stroke="#e0e0e0"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </div>
              </div>
              {/* Mobile: Dots Navigation */}
              <div className="product-details__dots">
                {productImages.map((img, index) => (
                  <button
                    key={index}
                    className={`product-details__dot ${
                      selectedImageIndex === index
                        ? "product-details__dot--active"
                        : ""
                    }`}
                    onClick={() => setSelectedImageIndex(index)}
                    aria-label={`View image ${index + 1}`}
                  />
                ))}
              </div>
              {/* Desktop: Thumbnails */}
              <div className="product-details__thumbnails">
                {productImages.map((img, index) => (
                  <button
                    key={index}
                    className={`product-details__thumbnail ${
                      selectedImageIndex === index
                        ? "product-details__thumbnail--active"
                        : ""
                    }`}
                    onClick={() => setSelectedImageIndex(index)}
                  >
                    <div className="product-details__thumbnail-placeholder">
                      {selectedImageIndex === index && (
                        <span className="product-details__thumbnail-indicator" />
                      )}
                      <svg
                        width="60"
                        height="60"
                        viewBox="0 0 60 60"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <rect
                          x="5"
                          y="5"
                          width="50"
                          height="50"
                          rx="4"
                          stroke="#e0e0e0"
                          strokeWidth="2"
                          fill="none"
                        />
                        <circle cx="30" cy="20" r="8" fill="#f0f0f0" />
                      </svg>
                    </div>
                  </button>
                ))}
              </div>
            </div>

            {/* Product Description */}
            <div className="product-details__description-section">
              <h2 className="product-details__section-title">
                Product Description
              </h2>
              <p className="product-details__description-text">
                {currentProduct.description ||
                  "Enhance your packaging operations with our high-performance Vertical Band Sealing Machine. Designed for continuous sealing of pre-formed bags and pouches, this machine ensures secure and consistent seals. Perfect for food, pharmaceutical, and general packaging applications. Features include adjustable temperature control, variable speed sealing, and user-friendly operation. Enhance your packaging operations with our high-performance Vertical Band Sealing Machine. Designed for continuous sealing of pre-formed bags and pouches, this machine ensures secure and consistent seals."}
              </p>
            </div>
          </div>

          <div className="product-details__right">
            {/* Desktop: Product Title */}
            <h1 className="product-details__title product-details__title--desktop">
              {currentProduct.name || "Product name goes here"}
            </h1>

            {/* Rating and Reviews */}
            <div className="product-details__rating">
              <div className="product-details__stars">
                {[1, 2, 3, 4, 5].map((star) => (
                  <svg
                    key={star}
                    width="20"
                    height="20"
                    viewBox="0 0 20 20"
                    fill={star <= (currentProduct.rating || 4.8) ? "#FFD700" : "none"}
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M10 1L12.5 7H19L13.5 10.5L16 17L10 13L4 17L6.5 10.5L1 7H7.5L10 1Z"
                      stroke={star <= (currentProduct.rating || 4.8) ? "#FFD700" : "#e0e0e0"}
                      strokeWidth="1.5"
                      fill={star <= (currentProduct.rating || 4.8) ? "#FFD700" : "none"}
                    />
                  </svg>
                ))}
              </div>
              <span className="product-details__rating-text">
                {currentProduct.rating || 4.8}/5
              </span>
              <span className="product-details__reviews">
                ({currentProduct.reviews || 23424} Reviews)
              </span>
            </div>

            {/* Price and MOQ */}
            <div className="product-details__price-section">
              <div className="product-details__price-row">
                <div>
                  <p className="product-details__price">
                    {currentProduct.price || "$1468.88 Per Unit"}
                  </p>
                  <p className="product-details__moq">
                    {currentProduct.moq || "MOQ 1box"}
                  </p>
                </div>
                <span className="product-details__customizable">Customizable</span>
              </div>
            </div>

            {/* Variations */}
            {currentProduct.variations && (
              <div className="product-details__variations">
                <div className="product-details__variations-header">
                  <h3 className="product-details__variations-title">Variations</h3>
                  <div className="product-details__variations-info-row">
                    <p className="product-details__variations-info">
                      Total options: {currentProduct.variations.platform.length}{" "}
                      Platform ; {currentProduct.variations.capacity.length} Capacity
                    </p>
                    <button className="product-details__select-variant-link">
                      Select Multiple Variants
                    </button>
                  </div>
                </div>

                {/* Platform Size */}
                <div className="product-details__variation-group">
                  <label className="product-details__variation-label">
                    Platform Size:
                  </label>
                  <div className="product-details__variation-options">
                    {currentProduct.variations.platform.map((option) => (
                      <button
                        key={option}
                        className={`product-details__variation-btn ${
                          selectedPlatform === option
                            ? "product-details__variation-btn--active"
                            : ""
                        }`}
                        onClick={() => setSelectedPlatform(option)}
                      >
                        {option}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Capacity */}
                <div className="product-details__variation-group">
                  <label className="product-details__variation-label">
                    Capacity (in tons):
                  </label>
                  <div className="product-details__variation-options">
                    {currentProduct.variations.capacity.map((option) => (
                      <button
                        key={option}
                        className={`product-details__variation-btn ${
                          selectedCapacity === option
                            ? "product-details__variation-btn--active"
                            : ""
                        }`}
                        onClick={() => setSelectedCapacity(option)}
                      >
                        {option}
                      </button>
                    ))}
                  </div>
                </div>
              </div>
            )}

            {/* Key Attributes - Collapsible */}
            {currentProduct.keyAttributes && (
              <div className="product-details__key-attributes">
                <button
                  className="product-details__attributes-toggle"
                  onClick={() => setIsAttributesOpen(!isAttributesOpen)}
                >
                  <h3 className="product-details__section-title">Key Attributes</h3>
                  <svg
                    className={`product-details__toggle-icon ${
                      isAttributesOpen ? "product-details__toggle-icon--open" : ""
                    }`}
                    width="20"
                    height="20"
                    viewBox="0 0 20 20"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M5 12.5L10 7.5L15 12.5"
                      stroke="currentColor"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </button>
                {isAttributesOpen && (
                  <div className="product-details__attributes-content">
                    {/* Industry-specific Attributes */}
                    {currentProduct.keyAttributes.industry && (
                      <div className="product-details__attributes-subsection">
                        <h4 className="product-details__attributes-subtitle">
                          Industry-specific Attributes
                        </h4>
                        <div className="product-details__attributes-table">
                          {currentProduct.keyAttributes.industry.map((attr, index) => (
                            <div key={index} className="product-details__attribute-row">
                              <span className="product-details__attribute-label">
                                {attr.label}
                              </span>
                              <span className="product-details__attribute-value">
                                {attr.value}
                              </span>
                            </div>
                          ))}
                        </div>
                      </div>
                    )}
                    {/* Other Attributes */}
                    {currentProduct.keyAttributes.other && (
                      <div className="product-details__attributes-subsection">
                        <h4 className="product-details__attributes-subtitle">
                          Other Attributes
                        </h4>
                        <div className="product-details__attributes-table">
                          {currentProduct.keyAttributes.other.map((attr, index) => (
                            <div key={index} className="product-details__attribute-row">
                              <span className="product-details__attribute-label">
                                {attr.label}
                              </span>
                              <span className="product-details__attribute-value">
                                {attr.value}
                              </span>
                            </div>
                          ))}
                        </div>
                      </div>
                    )}
                  </div>
                )}
              </div>
            )}

            {/* Shipping Information */}
            {currentProduct.shipping && (
              <div className="product-details__shipping">
                <h3 className="product-details__section-title">Shipping</h3>
                <div className="product-details__shipping-details">
                  <div className="product-details__shipping-row">
                    <span className="product-details__shipping-label">Express</span>
                  </div>
                  {currentProduct.shipping.fee && (
                    <div className="product-details__shipping-row">
                      <span className="product-details__shipping-label">
                        Shipping fee: Ext. {currentProduct.shipping.fee} for 1 set
                      </span>
                    </div>
                  )}
                  {currentProduct.shipping.delivery && (
                    <div className="product-details__shipping-row">
                      <span className="product-details__shipping-label">
                        Estimated delivery in {currentProduct.shipping.delivery}
                      </span>
                    </div>
                  )}
                </div>
              </div>
            )}

            {/* Action Buttons */}
            <div className="product-details__actions">
              <button className="product-details__action-btn product-details__action-btn--chat">
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 20 20"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M17.5 5C17.5 4.46957 17.2893 3.96086 16.9142 3.58579C16.5391 3.21071 16.0304 3 15.5 3H4.5C3.96957 3 3.46086 3.21071 3.08579 3.58579C2.71071 3.96086 2.5 4.46957 2.5 5V12.5C2.5 13.0304 2.71071 13.5391 3.08579 13.9142C3.46086 14.2893 3.96957 14.5 4.5 14.5H5.5L7.5 16.5L9.5 14.5H15.5C16.0304 14.5 16.5391 14.2893 16.9142 13.9142C17.2893 13.5391 17.5 13.0304 17.5 12.5V5Z"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    fill="none"
                  />
                  <path
                    d="M6.25 7.5H13.75M6.25 10H13.75"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                  />
                </svg>
                Chat now
              </button>
              <button className="product-details__action-btn product-details__action-btn--quote">
                Request for Quote
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 20 20"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M7.5 5L12.5 10L7.5 15"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </button>
            </div>
          </div>
        </div>

        {/* Related Products Section */}
        {relatedProducts.length > 0 && (
          <div className="product-details__related">
            <h2 className="product-details__related-title">Related Products</h2>
            <div className="product-details__related-list">
              {relatedProducts.map((product) => (
                <Link
                  key={product.id}
                  href={`/products/${product.id}?group=${encodeURIComponent(product.group)}`}
                  className="product-details__related-card"
                >
                  <div className="product-details__related-image">
                    <div className="product-details__related-image-placeholder">
                      <svg
                        width="100"
                        height="100"
                        viewBox="0 0 100 100"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <rect
                          x="10"
                          y="10"
                          width="80"
                          height="80"
                          rx="4"
                          stroke="#e0e0e0"
                          strokeWidth="2"
                          fill="none"
                        />
                        <circle cx="50" cy="35" r="10" fill="#f0f0f0" />
                        <path
                          d="M35 65L45 75L65 55"
                          stroke="#e0e0e0"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    </div>
                  </div>
                  <div className="product-details__related-content">
                    <h3 className="product-details__related-name">{product.name}</h3>
                    <span className="product-details__related-customizable">
                      Customizable
                    </span>
                  </div>
                  <div className="product-details__related-action">
                    <span className="product-details__related-link">
                      View Details
                      <svg
                        width="16"
                        height="16"
                        viewBox="0 0 16 16"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M4 6L8 10L12 6"
                          stroke="currentColor"
                          strokeWidth="1.5"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    </span>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default ProductDetails;


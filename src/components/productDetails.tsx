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

// Component for rendering related product details
const RelatedProductDetails: React.FC<{ product: Product }> = ({ product }) => {
  const [localImageIndex, setLocalImageIndex] = useState(0);
  const [localPlatform, setLocalPlatform] = useState("Variation 1");
  const [localCapacity, setLocalCapacity] = useState("Option 1");
  const [localAttributesOpen, setLocalAttributesOpen] = useState(true);

  const productImages = product.images || [product.image];

  return (
    <div className="product-details__related-full-details">
      <div className="product-details__related-main">
        <div className="product-details__related-left">
          {/* Image Gallery */}
          <div className="product-details__related-gallery">
            <div className="product-details__related-main-image">
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
            <div className="product-details__related-dots">
              {productImages.map((img, index) => (
                <button
                  key={index}
                  className={`product-details__related-dot ${
                    localImageIndex === index
                      ? "product-details__related-dot--active"
                      : ""
                  }`}
                  onClick={() => setLocalImageIndex(index)}
                  aria-label={`View image ${index + 1}`}
                />
              ))}
            </div>
            {/* Desktop: Thumbnails */}
            <div className="product-details__related-thumbnails">
              {productImages.map((img, index) => (
                <button
                  key={index}
                  className={`product-details__related-thumbnail ${
                    localImageIndex === index
                      ? "product-details__related-thumbnail--active"
                      : ""
                  }`}
                  onClick={() => setLocalImageIndex(index)}
                >
                  <div className="product-details__related-thumbnail-placeholder">
                    {localImageIndex === index && (
                      <span className="product-details__related-thumbnail-indicator" />
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
          <div className="product-details__related-description-section">
            <h2 className="product-details__related-section-title">
              Product Description
            </h2>
            <p className="product-details__related-description-text">
              {product.description ||
                "Enhance your packaging operations with our high-performance Vertical Band Sealing Machine. Designed for continuous sealing of pre-formed bags and pouches, this machine ensures secure and consistent seals."}
            </p>
          </div>
        </div>

        <div className="product-details__related-right">
          {/* Rating and Reviews */}
          {product.rating && (
            <div className="product-details__related-rating">
              <div className="product-details__related-stars">
                {[1, 2, 3, 4, 5].map((star) => (
                  <svg
                    key={star}
                    width="20"
                    height="20"
                    viewBox="0 0 20 20"
                    fill={star <= (product.rating || 4.9) ? "#FFD700" : "none"}
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M10 1L12.5 7H19L13.5 10.5L16 17L10 13L4 17L6.5 10.5L1 7H7.5L10 1Z"
                      stroke={star <= (product.rating || 4.9) ? "#FFD700" : "#e0e0e0"}
                      strokeWidth="1.5"
                      fill={star <= (product.rating || 4.9) ? "#FFD700" : "none"}
                    />
                  </svg>
                ))}
              </div>
              <span className="product-details__related-rating-text">
                {product.rating || 4.9}/5
              </span>
              <span className="product-details__related-reviews">
                ({product.reviews || 2424} Reviews)
              </span>
            </div>
          )}

          {/* Price and MOQ */}
          <div className="product-details__related-price-section">
            <div className="product-details__related-price-row">
              <div>
                <p className="product-details__related-price">
                  {product.price || "$1468.88 Per Unit"}
                </p>
                {product.moq && (
                  <p className="product-details__related-moq">{product.moq}</p>
                )}
              </div>
              <span className="product-details__related-customizable">Customizable</span>
            </div>
          </div>

          {/* Variations */}
          {product.variations && (
            <div className="product-details__related-variations">
              <div className="product-details__related-variations-header">
                <h3 className="product-details__related-variations-title">Variations</h3>
                <div className="product-details__related-variations-info-row">
                  <p className="product-details__related-variations-info">
                    Total options: {product.variations.platform.length} Platforms :{" "}
                    {product.variations.capacity.length} Capacity
                  </p>
                </div>
              </div>

              {/* Reform Size */}
              <div className="product-details__related-variation-group">
                <label className="product-details__related-variation-label">
                  Reform Size
                </label>
                <div className="product-details__related-variation-options">
                  {product.variations.platform.map((option) => (
                    <button
                      key={option}
                      className={`product-details__related-variation-btn ${
                        localPlatform === option
                          ? "product-details__related-variation-btn--active"
                          : ""
                      }`}
                      onClick={() => setLocalPlatform(option)}
                    >
                      {option}
                    </button>
                  ))}
                </div>
              </div>

              {/* Capacity */}
              <div className="product-details__related-variation-group">
                <label className="product-details__related-variation-label">
                  Capacity (in tons):
                </label>
                <div className="product-details__related-variation-options">
                  {product.variations.capacity.map((option) => (
                    <button
                      key={option}
                      className={`product-details__related-variation-btn ${
                        localCapacity === option
                          ? "product-details__related-variation-btn--active"
                          : ""
                      }`}
                      onClick={() => setLocalCapacity(option)}
                    >
                      {option}
                    </button>
                  ))}
                </div>
              </div>
            </div>
          )}

          {/* Key Attributes */}
          {product.keyAttributes && (
            <div className="product-details__related-key-attributes">
              <button
                className="product-details__related-attributes-toggle"
                onClick={() => setLocalAttributesOpen(!localAttributesOpen)}
              >
                <h3 className="product-details__related-section-title">Key Attributes</h3>
                <svg
                  className={`product-details__related-toggle-icon ${
                    localAttributesOpen
                      ? "product-details__related-toggle-icon--open"
                      : ""
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
              {localAttributesOpen && (
                <div className="product-details__related-attributes-content">
                  <div className="product-details__related-attributes-table">
                    {product.keyAttributes.industry &&
                      product.keyAttributes.industry.map((attr, index) => (
                        <div
                          key={`industry-${index}`}
                          className="product-details__related-attribute-row"
                        >
                          <span className="product-details__related-attribute-label">
                            {attr.label}
                          </span>
                          <span className="product-details__related-attribute-value">
                            {attr.value}
                          </span>
                        </div>
                      ))}
                    {product.keyAttributes.other &&
                      product.keyAttributes.other.map((attr, index) => (
                        <div
                          key={`other-${index}`}
                          className="product-details__related-attribute-row"
                        >
                          <span className="product-details__related-attribute-label">
                            {attr.label}
                          </span>
                          <span className="product-details__related-attribute-value">
                            {attr.value}
                          </span>
                        </div>
                      ))}
                  </div>
                </div>
              )}
            </div>
          )}

          {/* Shipping Information */}
          {product.shipping && (
            <div className="product-details__related-shipping">
              <h3 className="product-details__related-section-title">Shipping</h3>
              <div className="product-details__related-shipping-details">
                {product.shipping.delivery && (
                  <div className="product-details__related-shipping-row">
                    <span className="product-details__related-shipping-label">
                      {product.shipping.delivery}
                    </span>
                  </div>
                )}
                <div className="product-details__related-shipping-row">
                  <span className="product-details__related-shipping-label">
                    Shipping location
                  </span>
                  <span className="product-details__related-shipping-value">
                    {product.shipping.international ? "Yes" : "No"}
                  </span>
                </div>
                <div className="product-details__related-shipping-row">
                  <span className="product-details__related-shipping-label">
                    Shipment Mode
                  </span>
                  <span className="product-details__related-shipping-value">
                    {product.shipping.mode || "Air, Ship"}
                  </span>
                </div>
              </div>
            </div>
          )}

          {/* Action Buttons */}
          <div className="product-details__related-actions">
            <button className="product-details__related-action-btn product-details__related-action-btn--download">
              <svg
                width="20"
                height="20"
                viewBox="0 0 20 20"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M10 12.5V3.75M10 12.5L6.25 8.75M10 12.5L13.75 8.75M3.75 15.625H16.25"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
              Download Brochure
            </button>
            <button className="product-details__related-action-btn product-details__related-action-btn--chat">
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
            <button className="product-details__related-action-btn product-details__related-action-btn--quote">
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
    </div>
  );
};

const ProductDetails: React.FC<ProductDetailsProps> = ({
  productId,
  group,
}) => {
  const [selectedImageIndex, setSelectedImageIndex] = useState(0);
  const [selectedPlatform, setSelectedPlatform] = useState("Variation 1");
  const [selectedCapacity, setSelectedCapacity] = useState("Option 1");
  const [isAttributesOpen, setIsAttributesOpen] = useState(true);
  const [openProductId, setOpenProductId] = useState<number | null>(null);

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
      rating: 4.9,
      reviews: 2424,
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
      rating: 4.9,
      reviews: 2424,
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

  // Set first product as open by default
  useEffect(() => {
    if (relatedProducts.length > 0 && openProductId === null) {
      setOpenProductId(relatedProducts[0].id);
    }
  }, [relatedProducts.length, openProductId]);

  const toggleProduct = (productId: number) => {
    // Close current if clicking the same, otherwise open the clicked one
    setOpenProductId(openProductId === productId ? null : productId);
  };

  return (
    <section className="product-details">
      <div className="product-details__container">
        {/* Related Products Section - Accordion */}
        {relatedProducts.length > 0 && (
          <div className="product-details__related">
            <div className="product-details__related-list">
              {relatedProducts.map((product) => {
                const isOpen = openProductId === product.id;
                return (
                  <div key={product.id} className="product-details__related-accordion-item">
                    {/* Header - Only show when collapsed */}
                    {!isOpen && (
                      <button
                        className="product-details__related-toggle"
                        onClick={() => toggleProduct(product.id)}
                      >
                        <div className="product-details__related-toggle-content">
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
                          <div className="product-details__related-header-content">
                            <h3 className="product-details__related-name">{product.name}</h3>
                            {product.description && (
                              <p className="product-details__related-description-snippet">
                                {product.description.length > 100
                                  ? `${product.description.substring(0, 100)}...`
                                  : product.description}
                              </p>
                            )}
                            {product.price && (
                              <p className="product-details__related-price-snippet">
                                {product.price}
                              </p>
                            )}
                          </div>
                        </div>
                        <div className="product-details__related-header-actions">
                          <Link
                            href={`/products/${product.id}?group=${encodeURIComponent(product.group)}`}
                            className="product-details__related-view-link"
                            onClick={(e) => e.stopPropagation()}
                          >
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
                          </Link>
                        </div>
                      </button>
                    )}
                    {/* Full Details - Only show when expanded */}
                    {isOpen && (
                      <div className="product-details__related-content-wrapper product-details__related-content-wrapper--open">
                        <RelatedProductDetails product={product} />
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default ProductDetails;


"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";

interface Product {
  id: number;
  name: string;
  description?: string;
  attributes: string[];
  group: string;
  image: string;
}

interface ProductListProps {
  className?: string;
  maxItems?: number; // 6 for home page, 12 for products page
}

const ProductList: React.FC<ProductListProps> = ({ className = "", maxItems = 6 }) => {
  const [activeTab, setActiveTab] = useState("Featured");

  const categories = [
    "Featured",
    "Modular Belts",
    "Conveyor Components",
    "Bearing blocks",
    "Polypropylene Tank",
    "Chain Guide",
    "Slat Chains",
    "Wear Strips",
    "Engineering Plastic",
    "Industrial Cleaning Brushes",
    "Wire Mesh",
  ];

  // Sample product data
  const allProducts: Product[] = [
    {
      id: 1,
      name: "Product Name",
      description:
        "Small Short description goes here to lorem ipusm this is dummy textSmall Short description goes here",
      attributes: ["Attribute Value 1", "Attribute Value 2"],
      group: "Featured",
      image: "/images/product-placeholder.png",
    },
    {
      id: 2,
      name: "Product Name",
      description:
        "Small Short description goes here to lorem ipusm this is dummy textSmall Short description goes here",
      attributes: ["Attribute Value 1", "Attribute Value 2"],
      group: "Featured",
      image: "/images/product-placeholder.png",
    },
    {
      id: 3,
      name: "Product Name",
      description:
        "Small Short description goes here to lorem ipusm this is dummy textSmall Short description goes here",
      attributes: ["Attribute Value 1", "Attribute Value 2"],
      group: "Featured",
      image: "/images/product-placeholder.png",
    },
    {
      id: 4,
      name: "Product Name",
      description:
        "Small Short description goes here to lorem ipusm this is dummy textSmall Short description goes here",
      attributes: ["Attribute Value 1", "Attribute Value 2"],
      group: "Featured",
      image: "/images/product-placeholder.png",
    },
    {
      id: 5,
      name: "Product Name",
      description:
        "Small Short description goes here to lorem ipusm this is dummy textSmall Short description goes here",
      attributes: ["Attribute Value 1", "Attribute Value 2"],
      group: "Featured",
      image: "/images/product-placeholder.png",
    },
    {
      id: 6,
      name: "Product Name",
      description:
        "Small Short description goes here to lorem ipusm this is dummy textSmall Short description goes here",
      attributes: ["Attribute Value 1", "Attribute Value 2"],
      group: "Featured",
      image: "/images/product-placeholder.png",
    },
    {
      id: 7,
      name: "Product Name",
      description:
        "Small Short description goes here to lorem ipusm this is dummy textSmall Short description goes here",
      attributes: ["Attribute Value 1", "Attribute Value 2"],
      group: "Modular Belts",
      image: "/images/product-placeholder.png",
    },
    {
      id: 8,
      name: "Product Name",
      description:
        "Small Short description goes here to lorem ipusm this is dummy textSmall Short description goes here",
      attributes: ["Attribute Value 1", "Attribute Value 2"],
      group: "Modular Belts",
      image: "/images/product-placeholder.png",
    },
    {
      id: 9,
      name: "Product Name",
      description:
        "Small Short description goes here to lorem ipusm this is dummy textSmall Short description goes here",
      attributes: ["Attribute Value 1", "Attribute Value 2"],
      group: "Conveyor Components",
      image: "/images/product-placeholder.png",
    },
    {
      id: 10,
      name: "Product Name",
      description:
        "Small Short description goes here to lorem ipusm this is dummy textSmall Short description goes here",
      attributes: ["Attribute Value 1", "Attribute Value 2"],
      group: "Conveyor Components",
      image: "/images/product-placeholder.png",
    },
    {
      id: 11,
      name: "Product Name",
      description:
        "Small Short description goes here to lorem ipusm this is dummy textSmall Short description goes here",
      attributes: ["Attribute Value 1", "Attribute Value 2"],
      group: "Bearing blocks",
      image: "/images/product-placeholder.png",
    },
    {
      id: 12,
      name: "Product Name",
      description:
        "Small Short description goes here to lorem ipusm this is dummy textSmall Short description goes here",
      attributes: ["Attribute Value 1", "Attribute Value 2"],
      group: "Bearing blocks",
      image: "/images/product-placeholder.png",
    },
  ];

  const handleTabClick = (category: string) => {
    setActiveTab(category);
  };

  // Filter products based on active tab
  let filteredProducts =
    activeTab === "Featured"
      ? allProducts.filter((product) => product.group === "Featured")
      : allProducts.filter((product) => product.group === activeTab);

  // Limit the number of products displayed
  filteredProducts = filteredProducts.slice(0, maxItems);

  const hasMoreProducts = allProducts.length > maxItems;

  return (
    <section className={`product-list-section ${className}`}>
      <div className="product-list-section__container">
        {/* Header */}
        <div className="product-list-section__header">
          <h1 className="product-list-section__title">Products</h1>
          <p className="product-list-section__subtitle">
            Manufacturer & Exporter of Modular belts, Slat Chains and a complete
            range of conveyor components.
          </p>
        </div>

        {/* Tab Navigation */}
        <div className="product-list-section__tabs">
          <div className="product-list-section__tabs-wrapper">
            {categories.map((category) => (
              <button
                key={category}
                className={`product-list-section__tab ${
                  activeTab === category ? "product-list-section__tab--active" : ""
                }`}
                onClick={() => handleTabClick(category)}
              >
                {category}
              </button>
            ))}
          </div>
        </div>

        {/* Product Grid */}
        <div className="product-list-section__grid">
          {filteredProducts.map((product) => (
            <Link
              key={product.id}
              href={`/products/${product.id}?group=${encodeURIComponent(product.group)}`}
              className="product-card"
            >
              <div className="product-card__image-container">
                <div className="product-card__image-placeholder">
                  <svg
                    width="120"
                    height="120"
                    viewBox="0 0 120 120"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <rect
                      x="15"
                      y="15"
                      width="90"
                      height="90"
                      rx="8"
                      stroke="#e0e0e0"
                      strokeWidth="2"
                      fill="none"
                    />
                    <path
                      d="M30 60L40 70L70 40"
                      stroke="#e0e0e0"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <circle cx="60" cy="40" r="15" fill="#f0f0f0" />
                  </svg>
                </div>
              </div>
              <div className="product-card__content">
                <h3 className="product-card__name">{product.name}</h3>
                {product.description && (
                  <p className="product-card__description">{product.description}</p>
                )}
                <div className="product-card__attributes">
                  {product.attributes.length > 0 && (
                    <span className="product-card__attribute">
                      {product.attributes[0]}
                    </span>
                  )}
                  {product.attributes.length > 1 && (
                    <span className="product-card__attribute product-card__attribute--more">
                      +{product.attributes.length - 1}
                    </span>
                  )}
                </div>
                <div className="product-card__actions">
                  <button className="product-card__button product-card__button--chat">
                    <svg
                      width="16"
                      height="16"
                      viewBox="0 0 16 16"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M14 4C14 3.46957 13.7893 2.96086 13.4142 2.58579C13.0391 2.21071 12.5304 2 12 2H4C3.46957 2 2.96086 2.21071 2.58579 2.58579C2.21071 2.96086 2 3.46957 2 4V10C2 10.5304 2.21071 11.0391 2.58579 11.4142C2.96086 11.7893 3.46957 12 4 12H5L7 14L9 12H12C12.5304 12 13.0391 11.7893 13.4142 11.4142C13.7893 11.0391 14 10.5304 14 10V4Z"
                        stroke="currentColor"
                        strokeWidth="1.5"
                        fill="none"
                      />
                      <path
                        d="M5 7H11M5 9H9"
                        stroke="currentColor"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                      />
                    </svg>
                    Chat now
                  </button>
                  <button className="product-card__button product-card__button--quote">
                    Request for Quote
                    <svg
                      width="16"
                      height="16"
                      viewBox="0 0 16 16"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M6 4L10 8L6 12"
                        stroke="currentColor"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </button>
                </div>
              </div>
            </Link>
          ))}
        </div>

        {/* View All Button */}
        {hasMoreProducts && (
          <div className="product-list-section__actions">
            <button className="product-list-section__view-all">
              View All
            </button>
          </div>
        )}
      </div>
    </section>
  );
};

export default ProductList;

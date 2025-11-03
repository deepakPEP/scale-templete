"use client";

import React, { useState } from "react";
import Image from "next/image";

interface ProductListingProps {
  className?: string;
}

interface Product {
  id: number;
  name: string;
  price: string;
  minOrder: string;
  availability: string;
  shipsIn: string;
  isNewlyAdded: boolean;
  image: string;
  group: string;
}

const ProductListing: React.FC<ProductListingProps> = ({ className = "" }) => {
  const [activeCategory, setActiveCategory] = useState("Group Category 1");
  const [viewMode, setViewMode] = useState<"list" | "grid">("list");
  const [displayCount, setDisplayCount] = useState(10);
  const [showMobileFilter, setShowMobileFilter] = useState(false);
  const [selectedFilterCategory, setSelectedFilterCategory] =
    useState("Group Category 1");

  const categoryNames = [
    "Group Category 1",
    "Group Category 2",
    "Group Category 3",
    "Group Category 4",
    "Group Category 5",
    "Other Products",
  ];

  const allProducts: Product[] = [
    {
      id: 1,
      name: "Detailed product name goes here",
      price: "$170.35 - 256.75",
      minOrder: "Min. order: 100 (Pieces)",
      availability: "Available",
      shipsIn: "Ships in 7 days",
      isNewlyAdded: true,
      image: "/images/product-placeholder.png",
      group: "Group Category 1",
    },
    {
      id: 2,
      name: "Detailed product name goes here",
      price: "$170.35 - 256.75",
      minOrder: "Min. order: 100 (Pieces)",
      availability: "Available",
      shipsIn: "Ships in 7 days",
      isNewlyAdded: false,
      image: "/images/product-placeholder.png",
      group: "Group Category 1",
    },
    {
      id: 3,
      name: "Detailed product name goes here",
      price: "$170.35 - 256.75",
      minOrder: "Min. order: 100 (Pieces)",
      availability: "Available",
      shipsIn: "Ships in 7 days",
      isNewlyAdded: true,
      image: "/images/product-placeholder.png",
      group: "Group Category 2",
    },
    {
      id: 4,
      name: "Detailed product name goes here",
      price: "$170.35 - 256.75",
      minOrder: "Min. order: 100 (Pieces)",
      availability: "Available",
      shipsIn: "Ships in 7 days",
      isNewlyAdded: false,
      image: "/images/product-placeholder.png",
      group: "Group Category 2",
    },
    {
      id: 5,
      name: "Detailed product name goes here",
      price: "$170.35 - 256.75",
      minOrder: "Min. order: 100 (Pieces)",
      availability: "Available",
      shipsIn: "Ships in 7 days",
      isNewlyAdded: false,
      image: "/images/product-placeholder.png",
      group: "Group Category 3",
    },
    {
      id: 6,
      name: "Detailed product name goes here",
      price: "$170.35 - 256.75",
      minOrder: "Min. order: 100 (Pieces)",
      availability: "Available",
      shipsIn: "Ships in 7 days",
      isNewlyAdded: true,
      image: "/images/product-placeholder.png",
      group: "Group Category 3",
    },
    {
      id: 7,
      name: "Detailed product name goes here",
      price: "$170.35 - 256.75",
      minOrder: "Min. order: 100 (Pieces)",
      availability: "Available",
      shipsIn: "Ships in 7 days",
      isNewlyAdded: false,
      image: "/images/product-placeholder.png",
      group: "Group Category 4",
    },
    {
      id: 8,
      name: "Detailed product name goes here",
      price: "$170.35 - 256.75",
      minOrder: "Min. order: 100 (Pieces)",
      availability: "Available",
      shipsIn: "Ships in 7 days",
      isNewlyAdded: false,
      image: "/images/product-placeholder.png",
      group: "Group Category 4",
    },
    {
      id: 9,
      name: "Detailed product name goes here",
      price: "$170.35 - 256.75",
      minOrder: "Min. order: 100 (Pieces)",
      availability: "Available",
      shipsIn: "Ships in 7 days",
      isNewlyAdded: false,
      image: "/images/product-placeholder.png",
      group: "Group Category 5",
    },
    {
      id: 10,
      name: "Detailed product name goes here",
      price: "$170.35 - 256.75",
      minOrder: "Min. order: 100 (Pieces)",
      availability: "Available",
      shipsIn: "Ships in 7 days",
      isNewlyAdded: true,
      image: "/images/product-placeholder.png",
      group: "Group Category 5",
    },
    {
      id: 11,
      name: "Detailed product name goes here",
      price: "$170.35 - 256.75",
      minOrder: "Min. order: 100 (Pieces)",
      availability: "Available",
      shipsIn: "Ships in 7 days",
      isNewlyAdded: false,
      image: "/images/product-placeholder.png",
      group: "Other Products",
    },
    {
      id: 12,
      name: "Detailed product name goes here",
      price: "$170.35 - 256.75",
      minOrder: "Min. order: 100 (Pieces)",
      availability: "Available",
      shipsIn: "Ships in 7 days",
      isNewlyAdded: false,
      image: "/images/product-placeholder.png",
      group: "Other Products",
    },
    {
      id: 13,
      name: "Detailed product name goes here",
      price: "$170.35 - 256.75",
      minOrder: "Min. order: 100 (Pieces)",
      availability: "Available",
      shipsIn: "Ships in 7 days",
      isNewlyAdded: false,
      image: "/images/product-placeholder.png",
      group: "Group Category 1",
    },
    {
      id: 14,
      name: "Detailed product name goes here",
      price: "$170.35 - 256.75",
      minOrder: "Min. order: 100 (Pieces)",
      availability: "Available",
      shipsIn: "Ships in 7 days",
      isNewlyAdded: false,
      image: "/images/product-placeholder.png",
      group: "Group Category 2",
    },
    {
      id: 15,
      name: "Detailed product name goes here",
      price: "$170.35 - 256.75",
      minOrder: "Min. order: 100 (Pieces)",
      availability: "Available",
      shipsIn: "Ships in 7 days",
      isNewlyAdded: true,
      image: "/images/product-placeholder.png",
      group: "Group Category 3",
    },
  ];

  // Derive category counts dynamically from products
  const categories = categoryNames.map((name) => ({
    name,
    count: allProducts.filter((p) => p.group === name).length,
    active: name === activeCategory,
  }));

  const filteredProducts = allProducts.filter(
    (p) => p.group === activeCategory
  );
  const displayedProducts = filteredProducts.slice(0, displayCount);
  const hasMoreProducts = displayCount < filteredProducts.length;

  const handleLoadMore = () => {
    setDisplayCount((prev) => prev + 5);
  };

  const handleCategoryClick = (categoryName: string) => {
    setActiveCategory(categoryName);
    setDisplayCount(10);
  };

  const handleMobileFilterOpen = () => {
    setSelectedFilterCategory(activeCategory);
    setShowMobileFilter(true);
  };

  const handleMobileFilterClose = () => {
    setShowMobileFilter(false);
    setSelectedFilterCategory(activeCategory);
  };

  const handleMobileFilterApply = () => {
    setActiveCategory(selectedFilterCategory);
    setDisplayCount(10);
    setShowMobileFilter(false);
  };

  const handleClearAll = () => {
    setSelectedFilterCategory("Group Category 1");
  };

  return (
    <section className={`product-listing ${className}`}>
      {/* Mobile Header */}
      <div className="product-listing__mobile-header">
        <button
          className="product-listing__mobile-filter-btn"
          onClick={handleMobileFilterOpen}
          aria-label="Filter"
        >
          <Image
            src="/icons/adjustments.svg"
            alt="filter icon"
            width={24}
            height={24}
            className="filter-icons"
          />
        </button>
        <div className="product-listing__mobile-category-input">
          <button
            className="product-listing__mobile-clear-btn"
            onClick={() => {
              setActiveCategory("Group Category 1");
              setDisplayCount(10);
            }}
          >
            ✕
          </button>
          <span className="product-listing__mobile-category-text">
            {activeCategory}
          </span>
        </div>
        <div className="product-listing__mobile-view-toggle">
          <button
            className={`product-listing__mobile-toggle-btn ${
              viewMode === "grid"
                ? "product-listing__mobile-toggle-btn--active"
                : ""
            }`}
            onClick={() => setViewMode("grid")}
            aria-label="Grid view"
          >
            <Image
              src="/icons/view-grid.svg"
              alt="view grid icon"
              width={28}
              height={28}
              className="grid-icons"
            />
          </button>
          <button
            className={`product-listing__mobile-toggle-btn ${
              viewMode === "list"
                ? "product-listing__mobile-toggle-btn--active"
                : ""
            }`}
            onClick={() => setViewMode("list")}
            aria-label="List view"
          >
            <Image
              src="/icons/view-list.svg"
              alt="view list icon"
              width={28}
              height={28}
              className="list-icons"
            />
          </button>
        </div>
      </div>
      <div className="product-listing__container">
        <div className="product-listing__content">
          {/* Left Sidebar - Categories */}
          <aside className="product-listing__sidebar">
            <h2 className="product-listing__sidebar-title">Products</h2>
            <ul className="product-listing__categories">
              {categories.map((category) => (
                <li
                  key={category.name}
                  className={`product-listing__category ${
                    category.active ? "product-listing__category--active" : ""
                  }`}
                  onClick={() => handleCategoryClick(category.name)}
                >
                  <span className="product-listing__category-name">
                    {category.name}
                  </span>
                  {category.count > 0 && (
                    <span className="product-listing__category-count">
                      {category.count}
                    </span>
                  )}
                </li>
              ))}
            </ul>
          </aside>

          {/* Main Content Area */}
          <div className="product-listing__main">
            <div className="product-listing__header">
              <h2 className="product-listing__main-title">{activeCategory}</h2>
              <div className="product-listing__view-toggle">
                <button
                  className={`product-listing__toggle-btn ${
                    viewMode === "grid"
                      ? "product-listing__toggle-btn--active"
                      : ""
                  }`}
                  onClick={() => setViewMode("grid")}
                  aria-label="Grid view"
                >
                  <Image
                    src="/icons/view-grid.svg"
                    alt="view grid icon"
                    width={28}
                    height={28}
                    className="grid-icons"
                  />
                </button>
                <button
                  className={`product-listing__toggle-btn ${
                    viewMode === "list"
                      ? "product-listing__toggle-btn--active"
                      : ""
                  }`}
                  onClick={() => setViewMode("list")}
                  aria-label="List view"
                >
                  <Image
                    src="/icons/view-list.svg"
                    alt="view list icon"
                    width={28}
                    height={28}
                    className="list-icons"
                  />
                </button>
              </div>
            </div>

            {/* Product List/Grid */}
            <div
              className={`product-listing__products ${
                viewMode === "grid"
                  ? "product-listing__products--grid"
                  : "product-listing__products--list"
              }`}
            >
              {displayedProducts.map((product) => (
                <div key={product.id} className="product-listing__item">
                  <div className="product-listing__item-image">
                    {product.isNewlyAdded && (
                      <span className="product-listing__badge">
                        Newly added
                      </span>
                    )}
                    <Image
                      src={product.image}
                      alt={product.name}
                      width={200}
                      height={200}
                      className="product-listing__item-img"
                    />
                  </div>
                  <div className="product-listing__item-content">
                    <div className="product-listing__item-details">
                      <h3 className="product-listing__item-name">
                        {product.name}
                      </h3>
                      <div className="product-listing__item-meta">
                        <p className="product-listing__item-price">
                          {product.price}
                        </p>
                        <p className="product-listing__item-info">
                          {product.minOrder}
                        </p>
                        <p className="product-listing__item-info">
                          <span className="available">
                            {product.availability}
                          </span>
                          <span className="product-listing__item-shipping">
                            <Image
                              src="/icons/truck.svg"
                              alt="truck icon"
                              width={16}
                              height={16}
                              className="bg-image"
                            />
                            {product.shipsIn}
                          </span>
                        </p>
                      </div>
                    </div>
                    <div className="product-listing__item-actions">
                      <button className="btn btn-outline">Chat Now</button>
                      <button className="btn btn-primary">Send Enquiry</button>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Load More Button */}
            {hasMoreProducts && (
              <div className="product-listing__load-more">
                <button
                  onClick={handleLoadMore}
                  className="product-listing__load-more-btn"
                >
                  Load More
                </button>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Mobile Filter Bottom Sheet */}
      {showMobileFilter && (
        <div
          className="product-listing__bottom-sheet"
          role="dialog"
          aria-modal="true"
        >
          <div
            className="product-listing__bottom-sheet-backdrop"
            onClick={handleMobileFilterClose}
          ></div>
          <div className="product-listing__bottom-sheet-panel">
            <div className="product-listing__bottom-sheet-header">
              <h3 className="product-listing__bottom-sheet-title">Filter</h3>
              <button
                className="product-listing__clear-all"
                onClick={handleClearAll}
              >
                Clear all
              </button>
            </div>

            <div className="product-listing__bottom-sheet-content">
              <div className="product-listing__bottom-sheet-group">
                <span className="product-listing__bottom-sheet-group-title">
                  Groups
                </span>
                <ul className="product-listing__radio-list">
                  {categories.map((c) => (
                    <li key={c.name} className="product-listing__radio-item">
                      <label className="product-listing__radio-label">
                        <input
                          type="radio"
                          name="mobile-group"
                          value={c.name}
                          checked={selectedFilterCategory === c.name}
                          onChange={(e) =>
                            setSelectedFilterCategory(e.target.value)
                          }
                        />
                        <span className="product-listing__radio-text">
                          {c.name}
                        </span>
                        {c.count > 0 && (
                          <span className="product-listing__radio-count">
                            {c.count}
                          </span>
                        )}
                      </label>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="product-listing__bottom-sheet-actions">
              <button
                className="product-listing__action-btn product-listing__action-btn--secondary"
                onClick={handleMobileFilterClose}
              >
                Cancel
              </button>
              <button
                className="product-listing__action-btn product-listing__action-btn--primary"
                onClick={handleMobileFilterApply}
              >
                Okay
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default ProductListing;

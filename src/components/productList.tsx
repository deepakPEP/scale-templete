"use client";

import React, { useState } from "react";
import Image from "next/image";

interface Product {
  id: number;
  title: string;
  price: string;
  stock: string;
  availability: string;
  delivery: string;
  isTrending: boolean;
  image: string;
}

interface ProductListProps {
  className?: string;
}

const ProductList: React.FC<ProductListProps> = ({ className = "" }) => {
  const [displayCount, setDisplayCount] = useState(10);
  const [sortBy, setSortBy] = useState("relevance");

  // Sample product data
  const allProducts: Product[] = [
    {
      id: 1,
      title: "Product Title Goes Here",
      price: "$99.00",
      availability: "Instock",
      stock: " Min. order: 20 pieces",
      delivery: "Expected Delivery by 15 April",
      isTrending: false,
      image: "/images/product-placeholder.png",
    },
    {
      id: 2,
      title: "Product Title Goes Here",
      price: "$99.00",
      availability: "Instock",
      stock: " Min. order: 20 pieces",
      delivery: "Expected Delivery by 15 April",
      isTrending: true,
      image: "/images/product-placeholder.png",
    },
    {
      id: 3,
      title: "Product Title Goes Here",
      price: "$99.00",
      availability: "Instock",
      stock: " Min. order: 20 pieces",
      delivery: "Expected Delivery by 15 April",
      isTrending: false,
      image: "/images/product-placeholder.png",
    },
    {
      id: 4,
      title: "Product Title Goes Here",
      price: "$99.00",
      availability: "Instock",
      stock: " Min. order: 20 pieces",
      delivery: "Expected Delivery by 15 April",
      isTrending: false,
      image: "/images/product-placeholder.png",
    },
    {
      id: 5,
      title: "Product Title Goes Here",
      price: "$99.00",
      availability: "Instock",
      stock: " Min. order: 20 pieces",
      delivery: "Expected Delivery by 15 April",
      isTrending: false,
      image: "/images/product-placeholder.png",
    },
    {
      id: 6,
      title: "Product Title Goes Here",
      price: "$99.00",
      availability: "Instock",
      stock: " Min. order: 20 pieces",
      delivery: "Expected Delivery by 15 April",
      isTrending: true,
      image: "/images/product-placeholder.png",
    },
    {
      id: 7,
      title: "Product Title Goes Here",
      price: "$99.00",
      availability: "Instock",
      stock: " Min. order: 20 pieces",
      delivery: "Expected Delivery by 15 April",
      isTrending: false,
      image: "/images/product-placeholder.png",
    },
    {
      id: 8,
      title: "Product Title Goes Here",
      price: "$99.00",
      availability: "Instock",
      stock: " Min. order: 20 pieces",
      delivery: "Expected Delivery by 15 April",
      isTrending: false,
      image: "/images/product-placeholder.png",
    },
    {
      id: 9,
      title: "Product Title Goes Here",
      price: "$99.00",
      availability: "Instock",
      stock: " Min. order: 20 pieces",
      delivery: "Expected Delivery by 15 April",
      isTrending: false,
      image: "/images/product-placeholder.png",
    },
    {
      id: 10,
      title: "Product Title Goes Here",
      price: "$99.00",
      availability: "Instock",
      stock: " Min. order: 20 pieces",
      delivery: "Expected Delivery by 15 April",
      isTrending: false,
      image: "/images/product-placeholder.png",
    },
    {
      id: 11,
      title: "Product Title Goes Here",
      price: "$99.00",
      availability: "Instock",
      stock: " Min. order: 20 pieces",
      delivery: "Expected Delivery by 15 April",
      isTrending: false,
      image: "/images/product-placeholder.png",
    },
    {
      id: 12,
      title: "Product Title Goes Here",
      price: "$99.00",
      availability: "Instock",
      stock: " Min. order: 20 pieces",
      delivery: "Expected Delivery by 15 April",
      isTrending: true,
      image: "/images/product-placeholder.png",
    },
    {
      id: 13,
      title: "Product Title Goes Here",
      price: "$99.00",
      availability: "Instock",
      stock: " Min. order: 20 pieces",
      delivery: "Expected Delivery by 15 April",
      isTrending: false,
      image: "/images/product-placeholder.png",
    },
    {
      id: 14,
      title: "Product Title Goes Here",
      price: "$99.00",
      availability: "Instock",
      stock: " Min. order: 20 pieces",
      delivery: "Expected Delivery by 15 April",
      isTrending: false,
      image: "/images/product-placeholder.png",
    },
    {
      id: 15,
      title: "Product Title Goes Here",
      price: "$99.00",
      availability: "Instock",
      stock: " Min. order: 20 pieces",
      delivery: "Expected Delivery by 15 April",
      isTrending: false,
      image: "/images/product-placeholder.png",
    },
    {
      id: 16,
      title: "Product Title Goes Here",
      price: "$99.00",
      availability: "Instock",
      stock: " Min. order: 20 pieces",
      delivery: "Expected Delivery by 15 April",
      isTrending: false,
      image: "/images/product-placeholder.png",
    },
    {
      id: 17,
      title: "Product Title Goes Here",
      price: "$99.00",
      availability: "Instock",
      stock: " Min. order: 20 pieces",
      delivery: "Expected Delivery by 15 April",
      isTrending: false,
      image: "/images/product-placeholder.png",
    },
    {
      id: 18,
      title: "Product Title Goes Here",
      price: "$99.00",
      availability: "Instock",
      stock: " Min. order: 20 pieces",
      delivery: "Expected Delivery by 15 April",
      isTrending: false,
      image: "/images/product-placeholder.png",
    },
    {
      id: 19,
      title: "Product Title Goes Here",
      price: "$99.00",
      availability: "Instock",
      stock: " Min. order: 20 pieces",
      delivery: "Expected Delivery by 15 April",
      isTrending: false,
      image: "/images/product-placeholder.png",
    },
    {
      id: 20,
      title: "Product Title Goes Here",
      price: "$99.00",
      availability: "Instock",
      stock: " Min. order: 20 pieces",
      delivery: "Expected Delivery by 15 April",
      isTrending: false,
      image: "/images/product-placeholder.png",
    },
    {
      id: 21,
      title: "Product Title Goes Here",
      price: "$99.00",
      availability: "Instock",
      stock: " Min. order: 20 pieces",
      delivery: "Expected Delivery by 15 April",
      isTrending: false,
      image: "/images/product-placeholder.png",
    },
    {
      id: 22,
      title: "Product Title Goes Here",
      price: "$99.00",
      availability: "Instock",
      stock: " Min. order: 20 pieces",
      delivery: "Expected Delivery by 15 April",
      isTrending: false,
      image: "/images/product-placeholder.png",
    },
    {
      id: 23,
      title: "Product Title Goes Here",
      price: "$99.00",
      availability: "Instock",
      stock: " Min. order: 20 pieces",
      delivery: "Expected Delivery by 15 April",
      isTrending: false,
      image: "/images/product-placeholder.png",
    },
    {
      id: 24,
      title: "Product Title Goes Here",
      price: "$99.00",
      availability: "Instock",
      stock: "Min. order: 20 pieces",
      delivery: "Expected Delivery by 15 April",
      isTrending: false,
      image: "/images/product-placeholder.png",
    },
    {
      id: 25,
      title: "Product Title Goes Here",
      price: "$99.00",
      availability: "Instock",
      stock: " Min. order: 20 pieces",
      delivery: "Expected Delivery by 15 April",
      isTrending: false,
      image: "/images/product-placeholder.png",
    },
    {
      id: 26,
      title: "Product Title Goes Here",
      price: "$99.00",
      availability: "Instock",
      stock: " Min. order: 20 pieces",
      delivery: "Expected Delivery by 15 April",
      isTrending: false,
      image: "/images/product-placeholder.png",
    },
  ];

  const displayedProducts = allProducts.slice(0, displayCount);
  const hasMoreProducts = displayCount < allProducts.length;

  const handleViewMore = () => {
    setDisplayCount((prev) => prev + 6);
  };

  const handleSortChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setSortBy(e.target.value);
  };

  return (
    <section className={`product-list-section ${className}`}>
      <div className="product-list-section__container">
        {/* Header */}
        <div className="product-list-section__header">
          <h1 className="product-list-section__title">Products</h1>
          <div className="product-list-section__sort">
            <select
              value={sortBy}
              onChange={handleSortChange}
              className="product-list-section__sort-select"
            >
              <option value="relevance">Sort by relevance</option>
              <option value="price-low">Price: Low to High</option>
              <option value="price-high">Price: High to Low</option>
              <option value="newest">Newest First</option>
              <option value="popular">Most Popular</option>
            </select>
          </div>
        </div>

        {/* Product Grid */}
        <div className="product-list-section__grid">
          {displayedProducts.map((product) => (
            <div key={product.id} className="product-card">
              <div className="product-card__image-container">
                {product.isTrending && (
                  <span className="product-card__trending">Trending</span>
                )}
                <Image
                  src={product.image}
                  alt="Product placeholder"
                  width={315}
                  height={315}
                  className="product-card__placeholder-icon"
                />
              </div>
              <div className="product-card__content">
                <h3 className="product-card__title">{product.title}</h3>
                <p className="product-card__price">{product.price}</p>
                <p className="product-card__stock"><span>{product.availability}</span> {product.stock}</p>
                <p className="product-card__delivery"> <Image src="/icons/truck.svg" alt="truck" width={22} height={22} /> {product.delivery}</p>
              </div>
            </div>
          ))}
        </div>

        {/* View More Button */}
        {hasMoreProducts && (
          <div className="product-list-section__actions">
            <button
              onClick={handleViewMore}
              className="btn btn-outline"
            >
              View all products
            </button>
          </div>
        )}
      </div>
    </section>
  );
};

export default ProductList;

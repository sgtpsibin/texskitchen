import React from "react";
import ProductCard from "./ProductCard";

const ProductsSection = ({ products = [] }) => {
  return (
    <>
      <div className="products-section">
        <div className="products-section__heading">
          <h2>Our foods</h2>
        </div>
        <div className="products-section__menu">
          {products.map(product => (
            <ProductCard key={product.id} {...product} />
          ))}
        </div>
      </div>
      <style jsx>{`
        .products-section {
          padding: 2rem;
        }
        .products-section__menu {
          display: flex;
          flex-wrap: wrap;
          // justify-content: center;
        }
        .products-section__heading {
          text-align: center;
          margin-bottom: 2rem;
        }
      `}</style>
    </>
  );
};

export default React.memo(ProductsSection);

import React from "react";

const THUMBNAIL_WIDTH = 300;
const THUMBNAIL_HEIGHT = 250;

const ProductCard = props => {
  return (
    <>
      <div className="product-card">
        <div
          style={{
            width: THUMBNAIL_WIDTH,
            height: THUMBNAIL_HEIGHT,
            overflow: "hidden",
            borderRadius: "8px 8px 0px 0px",
          }}
        >
          <img
            alt={props.title}
            src={props.thumbnail}
            loading="lazy"
            className="product-card__thumbnail"
          />
        </div>
        <div className="product-card__content">
          <h2 className="product-card__title">{props.title}</h2>
        </div>
      </div>
      <style jsx>{`
        .product-card {
        }

        .product-card__thumbnail {
          width: ${THUMBNAIL_WIDTH}px;
          height: ${THUMBNAIL_HEIGHT}px;
          transition: transform 0.7s ease;
        }
        .product-card__thumbnail:hover {
          transform: scale(1.5);
        }

        .product-card__content {
          padding: 0.5rem;
          border: 1px solid rgba(0, 0, 0, 0.12);
          border-top: none;
        }

        .product-card__title {
          font-size: 1.2rem;
          font-weight: 500;
        }
      `}</style>
    </>
  );
};

export default ProductCard;

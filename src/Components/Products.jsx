import React from "react";

export default function Products({ products, addToCart }) {
  return (
    <div className="products-container">
      {products.map((product, _) => {
        return (
          <div key={product.id} className="product-item">
            <h3 className="product-name">{product.name}</h3>
            <p className="product.description">{product.description}</p>
            <h4 className="product-price">₹{product.price} </h4>
            <img
              className="product-image"
              src={product.image}
              alt={product.name}
            />
            <button
              className="card-button"
              onClick={() => addToCart(product.id)}
            >
              Add to Cart
            </button>
          </div>
        );
      })}
    </div>
  );
}

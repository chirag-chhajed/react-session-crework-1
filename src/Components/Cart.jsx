import React from "react";

export default function Cart({ cartProducts, handleDeletion }) {
  return (
    <div className="cart">
      {cartProducts.map((cartProduct) => {
        return <div onClick={handleDeletion.bind(null, cartProduct.id)}></div>;
      })}
    </div>
  );
}

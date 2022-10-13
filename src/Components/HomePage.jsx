import React, { useEffect, useState } from "react";
import Cart from "./Cart";
import Navbar from "./Navbar";
import Products from "./Products";
import { products as productsData } from "../data/products";

function HomePage() {
  const [allProducts, setAllProducts] = useState(productsData);
  const [cartVisible, setCartVisible] = useState(false);
  const [cartProducts, setCartProducts] = useState([]);

  useEffect(() => {
    //products = call to api
    // setAllProducts(productsData)
  }, [])

  const handleCartClick = () => {
    console.log("Sahil");
    setCartVisible(!cartVisible);
  };

  const handleAddToCart = (id) => {
    const addedItem = allProducts.filter((product) => product.id === id);
    setCartProducts([...cartProducts, ...addedItem]);
  };

  const handleDeletion = (id) => {
    const cartAfterDeletion = cartProducts.filter(
      (product) => product.id !== id
    );
    setCartProducts(cartAfterDeletion);
  };

  return (
    <>
      <Navbar handleCartClick={handleCartClick} />
      <Products products={allProducts} addToCart={handleAddToCart} />
      {cartVisible && (
        <Cart cartProducts={cartProducts} handleDeletion={handleDeletion} />
      )}
    </>
  );
}

export default HomePage;

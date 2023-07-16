import React, { useContext } from "react";
import FeaturedProduct from "./FeaturedProduct";
import ShoppingAppContext  from "../context/ShoppingAppContext";
//import Loader from "../../loading/loader";
import "../styles/Shop.css";
import Header from "./Header";

const Shop = () => {
  const { products } = useContext(ShoppingAppContext);

  let allProducts = products.map((product) => (
    <FeaturedProduct {...product} key={product.id} />
  ));
  // if (products.length === 0) {
  //   allProducts = <Loader />;
  // }
  return (
    <>
      <Header />
      <div className="product-list-container">
        <h2 className="product-list-title">Shop</h2>
        <div className="product-list">{allProducts}</div>
      </div>
    </>
  );
};

export default Shop;

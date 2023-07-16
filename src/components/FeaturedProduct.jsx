import React, { useContext } from "react";
import  ShoppingAppContext  from "../context/ShoppingAppContext";
import "../styles/FeaturedProduct.css";
const FeaturedProduct = (props) => {
  const { title, image, price, id, description } = props;
  const product = { title, image, price, id, description };

 const { addToCart } = useContext(ShoppingAppContext);
  return (
    <div className="featured-product">
      <div
        className="featured-image"
      >
        <img src={image} alt="product" />
      </div>
      <div className="name-price">
        <h3>{title}</h3>
        <p>₦{Math.round(price)}</p>
       
          <button
            className="button is-black nomad-btn"
            onClick={() => addToCart(product)}
          >
            ADD TO CART
          </button>

      </div>
    </div>
  );
};

export default FeaturedProduct;

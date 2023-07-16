import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import shoppingBag from "../assets/shopping-bag.png";
import ShoppingAppContext from "../context/ShoppingAppContext";
import "../styles/CartIcon.css";

const CartIcon = () => {
  const navigate = useNavigate();
  const { cartItems} = useContext(ShoppingAppContext);
  
  
  
  return (
    <div className="cart-container" onClick={() => navigate("/cart")}>
      <img src={shoppingBag} alt="shopping-cart-icon" />
      {cartItems.length > 0 ? (
        <span className="cart-count">{cartItems.length}</span>
      ) : (
        <span className="cart-count">0</span>
      )}
    </div>
  );
};

export default CartIcon;

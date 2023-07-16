import React, {} from "react";
import "../styles/CartPage.css";

const Total = ({ total, clearCart, cartItems }) => {
 

  return (
    <div className="total-container">
    
      <div className="checkout">
      <div className="total">
        <p>Total Items: {cartItems.length}</p>
        <p>{`Total: ₦ ${Math.round(total)}`}</p>
      </div>
        <button className="btn is-white" onClick={() => {clearCart()}}>
          Clear{" "}
        </button>
      </div>
    
    </div>
  );
};

export default Total;
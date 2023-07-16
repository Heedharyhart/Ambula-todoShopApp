import React, { useContext } from "react";
import ShoppingAppContext  from "../context/ShoppingAppContext";
import CartItem from "./CartItem";
import "../styles/CartPage.css";
import Total from "../components/Total";


const CartItems = () => {
  const {
    cartItems,
    cartTotal,
    increaseQuantity,
    decreaseQuantity,
    removeFromCart,
    clearCart,
  } = useContext(ShoppingAppContext);
  const funcs = { increaseQuantity, decreaseQuantity, removeFromCart };
  return (
    <>
      <h1 className="cart-page-icon">Shopping Cart</h1>
      {cartItems.length === 0 ? (
        <div className="cart-section">
          {" "}
          <div className="empty-cart">Your Cart is empty</div>
          <div className="cart-img-div">
            <img
              className="cart-img"
              src="https://thumbs.dreamstime.com/b/trolley-shopping-cart-logo-icon-design-shop-symbol-vector-illustrations-161932537.jpg"
              alt="img"
            />{" "}
          </div>
        </div>
      ) : (
        <>
          <div className="cart-page">
            <div className="cart-item-container">
              {cartItems.map((item) => (
                <CartItem {...item} key={item.id} {...funcs} />
              ))}
            </div>
            <Total cartItems={cartItems} clearCart={clearCart} total={cartTotal} />
          </div>
        </>
      )}
    </>
  );
};
export default CartItems;
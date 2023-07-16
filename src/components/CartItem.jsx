import React from "react";
import { PlusCircleIcon, MinusCircleIcon, TrashIcon } from "./Icon.js";

const CartItem = (props) => {
    const { title, image, price, quantity, decreaseQuantity, id, increaseQuantity, removeFromCart } = props;
    
    return (
     <div>
           <div className="cart-item">
            <div className="item-image">
                <img src={image} alt="product" />
            </div>
            <div className="name-price">
                <h4>{title}</h4>
                <p>₦ {Math.round(price) * quantity}</p>
            </div>
            <div className="quantity">
                <p>{`Qty: ${quantity}`}</p>
            </div>
            <div className="btns-container">
                <button className="btn-increase" onClick={() => increaseQuantity(id)}>
                    <PlusCircleIcon width="20px" />
                </button>
                {quantity === 1 && (
                    <button className="btn-trash" onClick={() => removeFromCart(id)}>
                        <TrashIcon width="20px" />
                    </button>
                )}
                {quantity > 1 && (
                    <button className="btn-decrerase" onClick={() => decreaseQuantity(id)} >
                        <MinusCircleIcon width="20px" />
                    </button>
                )}
            </div>
        </div>
        <div></div>
     </div>
    );
};

export default CartItem;
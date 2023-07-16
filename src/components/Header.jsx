import React from "react";
import { Link } from "react-router-dom";
import "../styles/Header.css";
import CartIcon from "./CartIcon";

const Header = () => {
  return (
    <div className="header">
      <nav className="nav-menu">
      <Link to="/">
          <div className="logo">
          
            <img
            src="https://res.cloudinary.com/dzv98o7ds/image/upload/q_100/v1671707822/logo_x6llil.jpg"
            alt="img"
            className="logo-img"
            />
        </div>
        </Link>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/shop">Shop</Link>
          </li>
        </ul>
        <div className="my-account">
          <li>
            <Link to="/about">AboutUs</Link>
          </li>
          <li>
            <Link to="/contact">ContactUs</Link>
          </li>
        </div>
        <CartIcon />
      </nav>
    </div>
  );
};

export default Header;

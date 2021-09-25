import React from "react";
import "./Header.css";
import logo from "../../images/logo.png";

const Header = () => {
  return (
    <div className="header">
      <div className="logo">
        <img src={logo} alt="" height="80px" />
      </div>
      <nav>
        <ul>
          <li>
            <a href="/shop">Shop</a>
          </li>
          <li>
            <a href="/order">Order Review</a>
          </li>
          <li>
            <a href="/inventory">Manage Inventory Here</a>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Header;

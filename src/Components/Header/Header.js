import React from "react";
import "./Header.css";
import logo from "../../images/logo.png";
import { NavLink } from "react-router-dom";
import useAuth from "../../hooks/useAuth";

const Header = () => {
  const { user, logOut } = useAuth();
  return (
    <div className="header">
      <div className="logo">
        <img src={logo} alt="" height="80px" />
      </div>
      <nav>
        <ul>
          <li>
            <NavLink to="/shop">Shop</NavLink>
          </li>
          <li>
            <NavLink to="/order">Order Review</NavLink>
          </li>
          <li>
            <NavLink to="/inventory">Manage Inventory Here</NavLink>
          </li>
          <li>
            <NavLink to="/login">Login</NavLink>
          </li>
          {user.email && (
            <span>
              <span className="text-white me-2">{user.displayName}</span>
              <img src={user.photoURL} className="w-25 rounded-circle" alt="" />
            </span>
          )}
          <span>
            {user.email && (
              <button className="btn btn-success" onClick={logOut}>
                Logout
              </button>
            )}
          </span>
        </ul>
      </nav>
    </div>
  );
};

export default Header;

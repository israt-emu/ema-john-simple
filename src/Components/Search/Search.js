import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";
import "./Search.css";

const Search = (props) => {
  return (
    <div className="search">
      <input type="text" placeholder="Type Here To Search" />
      <FontAwesomeIcon className="cart-icon" icon={faShoppingCart} />;
      <span style={{ color: "white" }}>
        (<b>{props.cart.length}</b>)
      </span>
    </div>
  );
};

export default Search;

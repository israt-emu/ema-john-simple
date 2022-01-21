import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";
import "./Search.css";

const Search = (props) => {
  const { cart, handleSearch } = props;
  let totalQuantity = 0;
  for (const product of cart) {
    if (!product.quantity) {
      product.quantity = 1;
    }
    totalQuantity = totalQuantity + product.quantity;
  }
  return (
    <div className="search py-4">
      <input
        type="text"
        placeholder="Type Here To Search"
        onChange={handleSearch}
      />
      <FontAwesomeIcon className="cart-icon" icon={faShoppingCart} />;
      <span style={{ color: "white" }}>
        (<b>{totalQuantity}</b>)
      </span>
    </div>
  );
};

export default Search;

import React from "react";
import "./Cart.css";

const Cart = (props) => {
  console.log(props);
  const { cart } = props;
  let total = 0;
  let shipping = 0;
  for (const product of cart) {
    total = total + product.price;
    shipping = shipping + product.shipping;
  }
  const totalBeforeTax = total + shipping;
  const taxTotal = total * 0.1;
  const grandTotal = totalBeforeTax + taxTotal;
  return (
    <div className="cart">
      <div style={{ textAlign: "center" }}>
        <h3>Order Summary</h3>
        <p>Items ordered:{props.cart.length}</p>
      </div>
      <div className="price">
        <p>Items:</p>
        <p>${total.toFixed(2)}</p>
      </div>
      <div className="price">
        <p>Shipping & Handling:</p>
        <p>${shipping.toFixed(2)}</p>
      </div>
      <div className="price">
        <p>Total before tax:</p>
        <p>${totalBeforeTax.toFixed(2)}</p>
      </div>
      <div className="price">
        <p>Estimated Tax: </p>
        <p>${taxTotal.toFixed(2)}</p>
      </div>
      <div
        className="price"
        style={{ color: "#B12704", fontSize: "18px", fontWeight: "bold" }}
      >
        <p>Order Total</p>
        <p>${grandTotal.toFixed(2)}</p>
      </div>
      <button>Review Your Order</button>
    </div>
  );
};

export default Cart;

import React from "react";
import { useHistory } from "react-router";
import useCart from "../../hooks/useCart";
import useProducts from "../../hooks/useProducts";
import { clearTheCart, deleteFromDb } from "../../utilities/fakedb";
import Cart from "../Cart/Cart";
import ReviewItem from "../ReviewItem/ReviewItem";

const Review = () => {
  const [products, setProducts] = useProducts();
  const [cart, setCart] = useCart();
  const history = useHistory();
  const handleRemove = (key) => {
    const newCart = cart.filter((product) => product.key !== key);
    setCart(newCart);
    deleteFromDb(key);
  };
  //place order
  const handleOrder = () => {
    history.push("/placeorder");
    setCart([]);
    clearTheCart();
  };
  return (
    <div>
      <div className="shop-container">
        <div></div>
        <div className="product-container">
          {cart.map((product) => (
            <ReviewItem
              key={product.key}
              product={product}
              handleRemove={handleRemove}
            ></ReviewItem>
          ))}
        </div>
        <div className="cart-container">
          <Cart cart={cart}>
            <button onClick={handleOrder}>Place Order</button>
          </Cart>
        </div>
      </div>
    </div>
  );
};

export default Review;

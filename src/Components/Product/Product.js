import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";
import "./Product.css";
import Rating from "react-rating";

const Product = (props) => {
  console.log(props);
  const { name, img, price, stock, features, star } = props.product;
  // console.log(features);
  const element = <FontAwesomeIcon icon={faShoppingCart} />;
  return (
    <div className="product">
      <img src={img} alt="" />
      <div className="product-info">
        <p className="name">{name}</p>
        <p>${price}</p>
        <div className="product-bottom">
          <div>
            <p>only {stock} left in stock - order soon</p>
            <Rating
              initialRating={star}
              emptySymbol="far fa-star icon-color"
              fullSymbol="fas fa-star icon-color"
              readonly
            ></Rating>
            <br />
            <button onClick={() => props.handleAddToCart(props.product)}>
              {element}Add to cart
            </button>
          </div>
          <div className="feature">
            <h4>Features</h4>
            <ul>
              {features.map((feature) => {
                if (feature.length !== 0) {
                  return (
                    <div>
                      <li>
                        {feature.description}:<b>{feature.value}</b>
                      </li>
                    </div>
                  );
                }
              })}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Product;

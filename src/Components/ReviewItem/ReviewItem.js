import React from "react";

const ReviewItem = (props) => {
  const { name, quantity, price, key } = props.product;
  const { handleRemove } = props;
  return (
    <div>
      <div className="product" style={{ paddingBottom: "10px" }}>
        <div>
          <p className="name">{name}</p>
          <p>${price}</p>
          <p>Sold By:{name.split(" ")[0]}</p>
          <h4>Quantity:{quantity}</h4>
          <button onClick={() => handleRemove(key)}>Remove</button>
        </div>
      </div>
    </div>
  );
};

export default ReviewItem;

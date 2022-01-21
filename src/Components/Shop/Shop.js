import React, { useEffect, useState } from "react";
import "./Shop.css";
import { addToDb, getStoredCart } from "../../utilities/fakedb";
import Search from "../Search/Search";
import Product from "../Product/Product";
import Cart from "../Cart/Cart";
import { Link } from "react-router-dom";
import useCart from "../../hooks/useCart";

const Shop = () => {
  const [products, setProducts] = useState([]);
  const [cart, setCart] = useCart();
  const [page, setPage] = useState(0);
  const [pageCount, setPageCount] = useState(0);
  const [searchProducts, setSearchProducts] = useState([]);
  const size = 10;

  useEffect(() => {
    fetch(`http://localhost:5000/products?page=${page}&&size=${size}`)
      .then((res) => res.json())
      .then((data) => {
        setProducts(data.products);
        setSearchProducts(data.products);
        const count = data.count;
        const pageNumber = Math.ceil(count / size);
        setPageCount(pageNumber);
      });
  }, [page]);
  //localstorage to cart
  /* useEffect(() => {
    if (products.length) {
      const savedCart = getStoredCart();
      const storedCart = [];
      for (const key in savedCart) {
        const addedProduct = products.find((product) => product.key === key);
        if (addedProduct) {
          addedProduct.quantity = savedCart[key];
          storedCart.push(addedProduct);
        }
      }
      setCart(storedCart);
    }
  }, [products]); */
  //add to cart
  const handleAddToCart = (product) => {
    const exists = cart.find((pd) => pd.key === product.key);
    let newCart = [];
    if (exists) {
      const rest = cart.filter((pd) => pd.key !== product.key);
      exists.quantity = exists.quantity + 1;
      newCart = [...rest, exists];
    } else {
      product.quantity = 1;
      newCart = [...cart, product];
    }

    setCart(newCart);
    //add to localstorage
    addToDb(product.key);
  };

  //search event
  const handleSearch = (event) => {
    const searchText = event.target.value;
    const matchProduct = products.filter((pd) =>
      pd.name.toLowerCase().includes(searchText.toLowerCase())
    );
    setSearchProducts(matchProduct);
  };
  return (
    <div>
      <div className="search-container">
        <Search cart={cart} handleSearch={handleSearch}></Search>
      </div>

      <div className="shop-container">
        <div></div>
        <div className="product-container">
          {searchProducts.map((product) => (
            <Product
              key={product.key}
              product={product}
              handleAddToCart={handleAddToCart}
            ></Product>
          ))}
          <div className="pagination">
            {[...Array(pageCount).keys()].map((number) => (
              <button
                key={number}
                className={number === page ? "selected" : ""}
                onClick={() => setPage(number)}
              >
                {number + 1}
              </button>
            ))}
          </div>
        </div>
        <div className="cart-container">
          <Cart cart={cart}>
            <Link to="/order">
              <button>Review Your Order</button>
            </Link>
          </Cart>
        </div>
      </div>
    </div>
  );
};

export default Shop;

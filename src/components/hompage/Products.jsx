import React, { useEffect, useState } from "react";
import LoadingSpinner from "../LoadingSpinner";
import { Link } from "react-router-dom";
import "../style.css";
import { AddItem, DeleteItem } from "../../redux/action";
import { useDispatch, useSelector } from "react-redux";
import { toast } from "react-toastify";

export default function Products() {
  const [data, setData] = useState([]);
  const [filter, setFilter] = useState([]);
  const [loading, setLoading] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState("All");
  const dispatch = useDispatch();
  const cartItem = useSelector((state) => state.cartItems.carts);

  const getProducts = async () => {
    try {
      setLoading(true);
      const url = "https://fakestoreapi.com/products";
      const response = await fetch(url);
      const products = await response.json();
      setData(products);
      setFilter(products);
      setLoading(false);
    } catch (error) {
      console.log(error);
    }
  };

  const addToCart = (prod) => {
    dispatch(AddItem(prod));
    toast.success("Product added to cart successfully");
  };

  const removeFromCart = (prod) => {
    dispatch(DeleteItem(prod));
  };

  useEffect(() => {
    getProducts();
  }, []);

  const filterCategory = (category) => {
    if (category === "All") {
      setFilter(data);
    } else {
      const filtering = data.filter((x) => x.category === category);
      setFilter(filtering);
    }
    setSelectedCategory(category);
  };

  const ShowProduct = () => {
    return (
      <>
        <div className="d-flex justify-content-center mt-2 mb-5">
          <button
            onClick={() => filterCategory("All")}
            className={`btn btn-outline-secondary ${selectedCategory === "All" ? "active" : ""}`}
          >
            All
          </button>
          <button
            onClick={() => filterCategory("men's clothing")}
            className={`btn btn-outline-secondary ms-3 ${selectedCategory === "men's clothing" ? "active" : ""}`}
          >
            Men Clothing
          </button>
          <button
            onClick={() => filterCategory("women's clothing")}
            className={`btn btn-outline-secondary ms-3 ${selectedCategory === "women's clothing" ? "active" : ""}`}
          >
            Women Clothing
          </button>
          <button
            onClick={() => filterCategory("electronics")}
            className={`btn btn-outline-secondary ms-3 ${selectedCategory === "electronics" ? "active" : ""}`}
          >
            Electronics
          </button>
          <button
            onClick={() => filterCategory("jewelery")}
            className={`btn btn-outline-secondary ms-3 ${selectedCategory === "jewelery" ? "active" : ""}`}
          >
            Jewelery
          </button>
        </div>
        {filter.map((product) => {
          const isInCart = cartItem.some((item) => item.id === product.id);
          return (
            <div
              className="col-md-4 col-lg-3 col-sm-12 mb-2 my-4"
              key={product.id}
            >
              <div className="card text-center p-4 h-100 scale-hover-shadow">
              <Link to={`/products/${product.id}`}>
                <img
                  src={product.image}
                  className="Product"
                  alt={product.title}
                  height="250px"
                />
                </Link>
                <div className="card-body w">
                  <h6 className="card-title">
                    {product.title.substring(0, 18)}
                  </h6>
                  <p className="card-text fw-bold">${product.price}</p>
                  <div className="d-flex flex-md-column flex-xl-row gap-2 flex-lg-row justify-content-between">
                    {isInCart ? (
                      <button
                        onClick={() => removeFromCart(product)}
                        className="btn btn-outline-danger order-1 order-md-1"
                      >
                        Delete from cart
                      </button>
                    ) : (
                      <button
                        onClick={() => addToCart(product)}
                        className="btn btn-outline-success order-1 order-md-1"
                      >
                        Add to cart
                      </button>
                    )}
                    <Link
                      to={`/products/${product.id}`}
                      className="btn btn-outline-dark order-2 order-md-2"
                    >
                      More
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </>
    );
  };

  return (
    <div className="container my-4">
      <h1 className="display-6 fw-bold pt-4 p-2 text-center">
        Latest Products
      </h1>
      <hr />
      <div className="row">
        {loading ? <LoadingSpinner /> : <ShowProduct />}
      </div>
    </div>
  );
}

import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { DeleteTwoTone } from "@mui/icons-material";
import "../style.css";
import ProductionQuantityLimitsTwoToneIcon from "@mui/icons-material/ProductionQuantityLimitsTwoTone";
import { DecreaseQuantity, DeleteItem, IncreaseQuantity } from "../../redux/action";
import CheckoutCard from "./CheckoutCard";

export default function CartItems () {
  const data = useSelector((state) => state.cartItems.carts);
  const dispatch = useDispatch();

  const remove = (item) => {
    return dispatch(DeleteItem(item));
  };
  const increaseQuantity = (item) => {
    dispatch(IncreaseQuantity(item));
  };

  const decreaseQuantity = (item) => {
    dispatch(DecreaseQuantity(item));
  };
  const Noitem = () => {
    return (
      <div className="text-capitalize  mt-5 ">
        <p className="text-dark mx-auto display-6 text-center lead ">
          Your cart is Empty!{" "}
          <span className="text-danger">
            <ProductionQuantityLimitsTwoToneIcon fontSize="large" />
          </span>
        </p>
      </div>
    );
  };
  const iterate = (e,index) => {
    return (
      <div className="card mb-3 mt-5 bg-light shadow position-relative" key={e.id}>
      <div className="row g-0 align-items-center">
        <div className="col-12 col-md-2 text-center py-3">
          <img src={e.image} className="img-fluid rounded-start" alt={e.title} style={{ height: "100px", width: e.category === "jewelery" ? "130px" : "100px" }} />
        </div>

        <div className="col-12 col-md-4 text-center text-md-start py-3">
          <span className='text-secondary d-block'>{e.category}</span>
          <h5 className="card-title h6">{e.title}</h5>
        </div>

        <div className="col-12 col-md-2 text-center py-3">
          <div className="fw-bold">Price: ${e.price}</div>
        </div>

        <div
            class="col-12 col-md-2 px-4 text-center py-3 btn-group"
            role="group"
            aria-label="Basic outlined example"
          >
            <button type="button" class="btn btn-outline-success fw-bold fs-4" onClick={() => decreaseQuantity(e)}>
              -
            </button>
            <button type="button" className="col-12 col-md-2 btn border border-1 border-secondary fw-bold">{e.quantity}</button>
            <button type="button" class="btn btn-outline-success fw-bold" onClick={() => increaseQuantity(e)}>
              +
            </button>
          </div>

        <div className="col-12 col-md-2 text-center py-3">
          <div className="fw-bold">Total: ${(e.price * e.quantity).toFixed(2)}</div>
        </div>
      </div>
      
      <div className="position-absolute top-0 end-0 p-2">
      <button type="button" class="btn " data-bs-toggle="tooltip" data-bs-placement="right" title="delete">
      <DeleteTwoTone onClick={() => remove(e)} style={{ fontSize: "30px" }} className='text-danger scale-hover' />
</button>
      </div>
    </div>
    );
  };
  return (<div className="container col-12">
      {data.length === 0 ? <Noitem /> : data.map(iterate)}
      {data.length > 0 && <CheckoutCard  />}
    </div>)
}

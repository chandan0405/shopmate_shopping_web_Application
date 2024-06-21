import React from "react";
import { Slide } from "react-reveal";
import CartItems from "./CartItems";
export default function Cart() {
  return (
    <div className="container">
      <Slide top>
        {" "}
        <CartItems />
      </Slide>
    </div>
  );
}

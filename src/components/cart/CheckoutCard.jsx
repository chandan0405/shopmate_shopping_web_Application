import React from 'react'
import { useSelector } from 'react-redux'
import '../style.css'

export default function CheckoutCard () {
  const cartItems = useSelector((state) => state.cartItems.carts)

  const getTotalPrice = () => {
    return cartItems.reduce((total, item) => total + item.price * item.quantity, 0).toFixed(2)
  }
  const GST = (getTotalPrice() * 0.1).toFixed(2);
  return (
    <div className='card' style={{ width: "18rem" }}>
      <div className='card-header'>
        Home delivery
      </div>
      <ul className='list-group list-group-flush'>
        <li className='list-group-item d-flex justify-content-between'>
          <span>Subtotal</span>
          <span>${getTotalPrice()}</span>
        </li>
        <li className='list-group-item d-flex justify-content-between'>
          <span>GST</span>
          <span>${GST+`(10%)`}</span>
        </li>
        <li className='list-group-item d-flex justify-content-between'>
          <span>Total</span>
          <span>${(parseFloat(getTotalPrice()) + parseFloat(GST)).toFixed(2)}</span>
        </li>
        <li className='list-group-item'>
          <div className="d-grid gap-2 col-6 mx-auto">
            <button className="btn btn-success" type="button">Checkout</button>
          </div>
        </li>
      </ul>
    </div>
  )
}


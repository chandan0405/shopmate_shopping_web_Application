import React from 'react'
import { BrowserRouter as Router, Routes, Route  } from 'react-router-dom'
import Navbar from './components/hompage/Navbar'
import SingleProduct from './components/productDetail/SingleProduct'
import Cart from "./components/cart/Cart"
import Home from './components/hompage/Home'

const App = () => {
  return (
    <Router>
      <Navbar/>
      <Routes>
          <Route path="/" element={<Home />}/>
          <Route path='/products/:id' element={<SingleProduct />}/>
          <Route path='/cart' element={<Cart />}/>
      </Routes>
    </Router>
  )
}

export default App

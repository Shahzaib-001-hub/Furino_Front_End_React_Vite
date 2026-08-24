import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'

import Home from './Pages/Home'
import Shop from './Pages/Shop'
import Contact from './Pages/Contact'
import SingleProduct from './Pages/SingleProduct'
import Cart from './Pages/Cart'
import Checkout from './Pages/Checkout'
import Blog from './Pages/Blog'
import Comparison from './Pages/Comparison'

const App = () => {
  return (
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<Home />}/>
      <Route path='/shop' element={<Shop />}/>
      <Route path='/contact' element={<Contact />}/>
      <Route path='/blog' element={<Blog />}/>
      <Route path="/product/:id" element={<SingleProduct />}/>
      <Route path="/cart" element={<Cart />}/>  
      <Route path="/checkout" element={<Checkout />}/>
      <Route path='/comparison' element={<Comparison />}
        />
    </Routes>
    </BrowserRouter>
  )
}

export default App

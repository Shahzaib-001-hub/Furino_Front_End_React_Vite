import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'

import Home from './Pages/Home'
import Shop from './Pages/Shop'
import Contact from './Pages/Contact'
import About from './Pages/About'
import SingleProduct from './Pages/SingleProduct'

const App = () => {
  return (
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<Home />}/>
      <Route path='/shop' element={<Shop />}/>
      <Route path='/contact' element={<Contact />}/>
      <Route path='/about' element={<About />}/>
         <Route
          path="/product/:id"
          element={<SingleProduct />}
        />  
      
    </Routes>
    </BrowserRouter>
  )
}

export default App

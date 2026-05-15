import {BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import React from "react";

import Navbar from './Navbar';
import Home from './HomePage';
import Cart from './Cart';
import { useState } from 'react';

function App(){

  const [cart, setCart] = useState(0)

  return(
    <BrowserRouter>
      <Navbar cart={cart} />

      <Routes>
        <Route path="/" element={<Home cart={cart} setCart={setCart} />} />

        <Route path="/cart" element={<Cart cart={cart}  />} />
      </Routes>

    </BrowserRouter>
  )
}

export default App
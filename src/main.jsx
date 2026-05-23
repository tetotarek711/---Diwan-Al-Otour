import React, { useState } from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

import App from './App'
import Men from './pages/Men'
import Women from './pages/Women'
import Unisex from './pages/Unisex'
import Checkout from './pages/Checkout'
import './index.css'



function Root() {

  const [cart, setCart] = useState([]);

  return (
    <BrowserRouter>
      <Routes>

        <Route
          path="/"
          element={<App cart={cart} setCart={setCart} />}
        />

        <Route
          path="/checkout"
          element={<Checkout cart={cart} />}
        />

        <Route
  path="/men"
  element={
    <Men
      addToCart={(product) =>
        setCart((prev) => [...prev, product])
      }
    />
  }
/>

<Route
  path="/women"
  element={
    <Women
      addToCart={(product) =>
        setCart((prev) => [...prev, product])
      }
    />
  }
/>

<Route
  path="/unisex"
  element={
    <Unisex
      addToCart={(product) =>
        setCart((prev) => [...prev, product])
      }
    />
  }
/>
        
      </Routes>
    </BrowserRouter>
  );
}

ReactDOM.createRoot(document.getElementById('root')).render(
  <Root />
)

import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

import App from './App'
import Men from './pages/Men'
import Women from './pages/Women'
import Unisex from './pages/Unisex'
import Checkout from './pages/Checkout'

import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <BrowserRouter
    future={{
      v7_startTransition: true,
      v7_relativeSplatPath: true,
    }}
  >
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="/men" element={<Men />} />
      <Route path="/women" element={<Women />} />
      <Route path="/unisex" element={<Unisex />} />
      <Route path="/checkout" element={<Checkout />} />
    </Routes>
  </BrowserRouter>
)
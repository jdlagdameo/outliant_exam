import { useState } from 'react';
import { Route, Routes } from "react-router-dom"

import Home from './pages/Home';
import Products from './pages/Products';
import Navbar from './components/Navbar';
import Footer from './components/Footer';

import './sass/app.scss'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="container">
      <Navbar />
      <Routes>
        <Route path="/home" element={<Home />} />
        <Route path="/products" element={<Products />} />
      </Routes>
      <Footer />
    </div>
  )
}

export default App

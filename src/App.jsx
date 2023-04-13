/**
 * Main App JS File
 * 
 * @author: John Dave Lagdameo 
 * 
 * @since: 04/13/2023 
 * 
 * @internal revisions:
 * + 
 * + 
 * + 
 */
import { Route, Routes, Navigate } from "react-router-dom";

import Home from './pages/Home';
import Products from './pages/Products';
import RestrictionPage from "./pages/RestrictionPage";
import Navbar from './components/Navbar';
import Footer from './components/Footer';

import './sass/app.scss'

function App() {
  return (
    <>
    
      <Navbar />

      <div className="container-fluid">  
        <Routes>
          <Route path="/" element={<Navigate to="/home" />} />
          <Route path="/home" element={<Home />} />
          <Route path="/products" element={<Products />} />
          <Route path='*' element={<RestrictionPage />} />
        </Routes>
      </div>
      
      <Footer />

    </>
  )
}

export default App

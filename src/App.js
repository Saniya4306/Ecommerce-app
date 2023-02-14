import React from "react";
import Navbar from "./Component/Navbar";
import './App.css';
import Home from "./Component/Home";
import Product from "./Component/Product";
import Products from "./Component/Products";
import Cart from './Component/Cart';
import CheckOut from "./Component/CheckOut";
import Footer from './Component/Footer';
import {Route, Routes }from "react-router-dom";
import Contact from "./Component/Contact";
import About from "./Component/About"
import Login from "./Component/Login";
import Register from "./Component/Register";
import Thankyou from "./Component/Thankyou";


function App() {
  return (
  <>
    <Navbar/>
    <Routes>
      <Route exact path="/About" element={<About/>}/>
      <Route exact path="/" element={<Home/>}/>
      <Route exact path="/Cart" element={<Cart/>}/>
      <Route exact path="/Contact" element={<Contact/>}/>
      <Route exact path="/CheckOut" element={<CheckOut/>}/>
      <Route exact path="/Login" element={<Login/>}/>
      <Route exact path="/Register" element={<Register/>}/>
      <Route exact path="/Product" element={<Product/>}/>
      <Route exact path="/Product/:id" element={<Products/>}/>
      <Route exact path="/Thankyou" element={<Thankyou/>}/>
    </Routes>
    <Footer/>
    </>
  )
}

export default App;

import './App.css';
import React from 'react';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import ProductDetailsPage from "./Pages/ProductDetailsPage";
import CheckoutFormsPage from "./Pages/CheckoutFormsPage";
import Orderhistory from "./Pages/Orderhistory";

export default function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<ProductDetailsPage />} />
        <Route path="/CheckoutFormsPage" element={<CheckoutFormsPage />} />
        <Route path="/Orderhistory" element={<Orderhistory />} />
      </Routes>
    </BrowserRouter>
  )
}


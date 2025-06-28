import React from 'react';
import { Routes, Route } from 'react-router-dom';

// Pages
import Home from '../pages/Home';
import Menu from '../pages/Menu';
import Cart from '../pages/Cart';
import QRScanner from '../pages/QRScanner';
import AdminLogin from '../pages/AdminLogin';
import AdminDashboard from '../pages/AdminDashboard'; // ✅ Import the dashboard

const AppRoutes = () => (
  <Routes>
    <Route path="/" element={<Home />} />
    <Route path="/menu" element={<Menu />} />
    <Route path="/cart" element={<Cart />} />
    <Route path="/scan" element={<QRScanner />} />
    <Route path="/admin" element={<AdminLogin />} />
    <Route path="/admin/dashboard" element={<AdminDashboard />} /> {/* ✅ Dashboard Route */}
  </Routes>
);

export default AppRoutes;
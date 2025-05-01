import React from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from './Navbar';
import Footer from './Footer';

const Layout = () => {
  return (
    <div className="flex flex-col min-h-screen bg-gray-50">
      <div className="absolute inset-0 bg-gradient-radial from-primary-100/50 via-transparent to-transparent opacity-50 pointer-events-none" />
      <Navbar />
      <main className="flex-grow relative">
        <div className="container py-8 sm:py-12">
          <Outlet />
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Layout; 
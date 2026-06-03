import React from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from '../common/Navbar';
import Footer from '../common/Footer';

/**
 * Root Architecture Shell Wrapper managing global viewport placement controls.
 */
export default function MainLayout() {
  return (
    <div className="flex flex-col min-h-screen bg-secondary-gray text-text-dark antialiased">
      {/* Structural Persistent Navbar Layer */}
      <Navbar />
      
      {/* Dynamic Route View Changer Shell */}
      <main className="flex-grow animate-fade-in">
        <Outlet />
      </main>
      
      {/* Structural Persistent Footer Layer */}
      <Footer />
    </div>
  );
}
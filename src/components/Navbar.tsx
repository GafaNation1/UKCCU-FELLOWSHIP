
import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="bg-white py-4 sticky top-0 z-50 shadow-sm">
      <div className="container-custom flex items-center justify-between">
        <Link to="/" className="flex items-center gap-2">
          <div className="h-10 w-10 bg-primary rounded-full flex items-center justify-center">
            <svg 
              xmlns="http://www.w3.org/2000/svg" 
              viewBox="0 0 24 24" 
              fill="none" 
              stroke="currentColor" 
              strokeWidth="2" 
              strokeLinecap="round" 
              strokeLinejoin="round"
              className="w-6 h-6 text-white"
            >
              <path d="M12 2l1.3 1.3 1.3-1.3 1.3 1.3L17.2 2l1.3 1.3L19.8 2l1.3 1.3L22.4 2v9.5l-1.3 1.3 1.3 1.3-1.3 1.3 1.3 1.3-1.3 1.3 1.3 1.3-1.3 1.3v1H2v-1L0.7 19l1.3-1.3L0.7 16.4l1.3-1.3L0.7 13.8l1.3-1.3L0.7 11.2V2l1.3 1.3L3.3 2l1.3 1.3L5.9 2l1.3 1.3L8.5 2l1.3 1.3L11.1 2H12zm-3 4.5v2h6v-2zm0 4.5v2h6v-2z"/>
            </svg>
          </div>
          <span className="text-xl font-serif font-bold">Faith Union</span>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex space-x-1">
          <Link to="/" className="nav-link active-nav-link">Home</Link>
          <Link to="/about" className="nav-link">About</Link>
          <Link to="/events" className="nav-link">Events</Link>
          <Link to="/bible-study" className="nav-link">Bible Study</Link>
          <Link to="/prayer" className="nav-link">Prayer Wall</Link>
          <Link to="/get-involved" className="nav-link">Get Involved</Link>
        </div>

        {/* Mobile menu button */}
        <div className="md:hidden">
          <button 
            onClick={toggleMenu} 
            className="p-2 focus:outline-none"
            aria-label="Toggle menu"
          >
            {isMenuOpen ? (
              <X className="h-6 w-6" />
            ) : (
              <Menu className="h-6 w-6" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="container-custom md:hidden py-4 bg-white">
          <div className="flex flex-col space-y-3">
            <Link to="/" className="nav-link active-nav-link">Home</Link>
            <Link to="/about" className="nav-link">About</Link>
            <Link to="/events" className="nav-link">Events</Link>
            <Link to="/bible-study" className="nav-link">Bible Study</Link>
            <Link to="/prayer" className="nav-link">Prayer Wall</Link>
            <Link to="/get-involved" className="nav-link">Get Involved</Link>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;

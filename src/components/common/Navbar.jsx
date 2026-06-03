import React, { useState, useEffect } from 'react';
import { NavLink, useLocation, useNavigate } from 'react-router-dom';
import Container from '../ui/Container';
import Button from './Button';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  // Close mobile sidebar automatically on navigation event
  useEffect(() => {
    setIsOpen(false);
  }, [location]);

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'Courses', path: '/courses' },
    { name: 'Dashboard', path: '/dashboard' },
    { name: 'Contact', path: '/contact' }
  ];

  return (
    <nav className="sticky top-0 z-50 w-full bg-secondary-white/90 backdrop-blur-md border-b border-secondary-gray-dark shadow-xs">
      <Container>
        <div className="flex h-16 items-center justify-between">
          
          {/* Logo Brand Identifier */}
          <div className="flex-shrink-0 flex items-center cursor-pointer" onClick={() => navigate('/')}>
            <span className="text-xl font-extrabold tracking-tight text-primary-blue">
              Learn<span className="text-primary-green">X</span>
            </span>
          </div>

          {/* Desktop Navigation Links */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <NavLink
                key={link.path}
                to={link.path}
                className={({ isActive }) => `
                  text-sm font-medium transition-colors relative py-1
                  ${isActive ? 'text-primary-blue font-semibold' : 'text-text-muted hover:text-text-dark'}
                `}
              >
                {({ isActive }) => (
                  <>
                    {link.name}
                    {isActive && (
                      <span className="absolute bottom-0 left-0 w-full h-0.5 bg-primary-blue rounded-full animate-fade-in" />
                    )}
                  </>
                )}
              </NavLink>
            ))}
          </div>

          {/* Desktop Global CTA Target Block */}
          <div className="hidden md:flex items-center">
            <Button variant="primary" size="md" onClick={() => navigate('/courses')}>
              Start Learning
            </Button>
          </div>

          {/* Mobile Hamburguer Action Switch */}
          <div className="flex md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              type="button"
              className="inline-flex items-center justify-center p-2 rounded-md text-text-muted hover:text-text-dark hover:bg-secondary-gray-dark transition-colors"
              aria-controls="mobile-menu"
              aria-expanded={isOpen}
            >
              <span className="sr-only">Open main menu</span>
              {isOpen ? (
                <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                </svg>
              ) : (
                <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              )}
            </button>
          </div>
        </div>
      </Container>

      {/* Mobile Drawer Slide Navigation Element */}
      {isOpen && (
        <div className="md:hidden border-b border-secondary-gray-dark bg-secondary-white animate-fade-in" id="mobile-menu">
          <div className="space-y-1 px-4 pt-2 pb-4 flex flex-col gap-2">
            {navLinks.map((link) => (
              <NavLink
                key={link.path}
                to={link.path}
                className={({ isActive }) => `
                  block px-3 py-2.5 rounded-md text-base font-medium transition-colors
                  ${isActive ? 'bg-primary-blue/10 text-primary-blue font-bold' : 'text-text-muted hover:bg-secondary-gray-dark hover:text-text-dark'}
                `}
              >
                {link.name}
              </NavLink>
            ))}
            <div className="pt-2 border-t border-secondary-gray-dark mt-2">
              <Button variant="primary" size="lg" className="w-full" onClick={() => navigate('/courses')}>
                Start Learning
              </Button>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}
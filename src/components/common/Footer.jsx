import React from 'react';
import { Link } from 'react-router-dom';
import Container from '../ui/Container';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-secondary-white border-t border-secondary-gray-dark mt-auto">
      <Container className="py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 md:gap-12">
          
          {/* Brand Presentation Column */}
          <div className="md:col-span-2 space-y-4">
            <span className="text-xl font-extrabold tracking-tight text-primary-blue">
              Learn<span className="text-primary-green">X</span>
            </span>
            <p className="text-sm text-text-muted max-w-sm leading-relaxed">
              Empowering students globally by supplying top-tier technical training modules covering cutting edge Artificial Intelligence structures, Full Stack Web Development, and human-centric UI/UX design.
            </p>
          </div>

          {/* Quick Links Column Group 1 */}
          <div>
            <h3 className="text-sm font-semibold text-text-dark uppercase tracking-wider mb-4">Platform</h3>
            <ul className="space-y-2.5">
              <li><Link to="/" className="text-sm text-text-muted hover:text-primary-blue transition-colors">Home Landing</Link></li>
              <li><Link to="/courses" className="text-sm text-text-muted hover:text-primary-blue transition-colors">Course Catalog</Link></li>
              <li><Link to="/dashboard" className="text-sm text-text-muted hover:text-primary-blue transition-colors">Student Panel</Link></li>
            </ul>
          </div>

          {/* Quick Links Column Group 2 */}
          <div>
            <h3 className="text-sm font-semibold text-text-dark uppercase tracking-wider mb-4">Support</h3>
            <ul className="space-y-2.5">
              <li><Link to="/contact" className="text-sm text-text-muted hover:text-primary-blue transition-colors">Contact Support</Link></li>
              <li><a href="#faq" className="text-sm text-text-muted hover:text-primary-blue transition-colors">Common FAQs</a></li>
              <li><span className="text-sm text-text-muted cursor-not-allowed">Terms & Privacy</span></li>
            </ul>
          </div>

        </div>

        {/* Lower Legal Separation Layer */}
        <div className="mt-12 pt-6 border-t border-secondary-gray-dark flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-text-muted text-center sm:text-left">
            &copy; {currentYear} LearnX Inc. Codecelix Project Framework Task Assignment. All rights reserved.
          </p>
          <div className="flex gap-6 text-xs text-text-muted">
            <span>Designed in Pakistan</span>
          </div>
        </div>
      </Container>
    </footer>
  );
}
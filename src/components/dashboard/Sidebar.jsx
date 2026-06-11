import React from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';

const NavItem = ({ to, children }) => {
  const loc = useLocation();
  const navigate = useNavigate();

  // support targets like '/dashboard#progress'
  const handleClick = (e) => {
    if (!to.includes('#')) return; // let Link handle normal navigation
    e.preventDefault();
    const [path, hash] = to.split('#');
    const targetId = hash;

    // navigate to the path first (if not already there)
    if (loc.pathname !== path) {
      navigate(path);
      // allow the route to render then scroll
      setTimeout(() => {
        const el = document.getElementById(targetId);
        if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
        // also set hash for back/forward
        window.location.hash = `#${targetId}`;
      }, 80);
    } else {
      const el = document.getElementById(targetId);
      if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
      window.location.hash = `#${targetId}`;
    }
  };

  const active = loc.pathname === to.split('#')[0];
  return (
    <Link
      to={to}
      onClick={handleClick}
      className={`block text-sm px-3 py-2 rounded-md ${active ? 'bg-primary-blue/10 text-primary-blue font-medium' : 'text-text-muted hover:bg-gray-50'}`}>
      {children}
    </Link>
  );
};

export default function Sidebar() {
  return (
    <aside className="md:col-span-1 p-4 rounded-xl">
      <div className="mb-4">
        <h3 className="text-xs font-bold text-primary-blue uppercase tracking-wide">Student Panel</h3>
        <p className="text-sm text-text-muted">Quick links to your learning dashboard</p>
      </div>

      <nav className="flex flex-col gap-2">
        <NavItem to="/dashboard">My Courses</NavItem>
        <NavItem to="/dashboard/progress">Progress</NavItem>
        <NavItem to="/dashboard/certificates">Certificates</NavItem>
        <NavItem to="/courses">Browse Courses</NavItem>
      </nav>
    </aside>
  );
}

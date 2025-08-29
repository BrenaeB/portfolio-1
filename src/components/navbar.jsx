import React from 'react';
import { Link } from 'react-router-dom';
import '../css/navbar.css'; // adjust if your path is different

export default function NavBar() {
  const links = [
    { name: 'Home', path: '/' },
    { name: 'Projects', path: '/projects' },
    { name: 'About', path: '/about' },
    { name: 'Contact', path: '/contact' },
  ];

  return (
    <nav className="navbar" aria-label="Main navigation">
      <div className="navbar__inner container">
        <Link to="/" className="navbar__brand">Brenae Brooks</Link>
        <div className="navbar__links">
          {links.map((l) => (
            <Link key={l.name} to={l.path} className="navbar__link">
              {l.name}
            </Link>
          ))}
        </div>
      </div>
    </nav>
  );
}
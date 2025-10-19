import React from 'react';
import { Link } from 'react-router-dom';
import '../css/navbar.css';

export default function NavBar() {
  const links = [
    { name: 'Home', path: '/' },
    { name: 'Projects', path: '/projects' },
    { name: 'About', path: '/about' },
    { name: 'Contact', path: '/contact' },
  ];

  /*
  return (
    <nav>
      <h1>Brenae Brooks</h1>
      <div>
        {links.map((l) => (
          <Link key={l.path} to={l.path}>
            {l.name}
          </Link>
        ))}
      </div>
    </nav>
  );
  */

  return null;
}
import React from 'react';
import NavBar from '../components/navbar.jsx';

export default function Layout({ children }) {
  return (
    <>
      <NavBar />
      <main>{children}</main>
    </>
  );
}
import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import Layout from './components/layout.jsx';
import Home from './pages/home.jsx';
export default function App() {
return (
<BrowserRouter>
<Layout>
<Home />
</Layout>
</BrowserRouter>
);
}
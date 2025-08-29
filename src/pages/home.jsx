import React from 'react';
import '../css/home.css'; // adjust if your path is different

export default function Home() {
  return (
    <div className="home">
      <h1>Brenae Brooks</h1>
      <p>An enthusiastic front-end developer passionate about crafting clean, accessible, and responsive web experiences. This portfolio showcases some of my favorite projects, the technologies I enjoy, and a little about my approach to problem-solving.</p>

      {/* Inline additional sections can go here, or separate components */}
      <div className="skills">
        <h2>Skills</h2>
        <ul>
          <li>JavaScript</li>
          <li>React</li>
          <li>CSS</li>
          <li>Node.js</li>
        </ul>
      </div>
    </div>
    
  );
}
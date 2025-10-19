import React from 'react';
import '../css/home.css';
import '../css/projects.css'; // Import the projects CSS
export default function Home() {
const highlights = [
{
id: 1,
title: 'Client Page',
description: 'This personalized page highlights the unique style, interest, and personal hobbies of the client',
link: 'https://splendid-licorice-e508f6.netlify.app/'
},
{
id: 2,
title: 'Browse The Universe',
description: 'Browse the Universe is a user friendly application that allows you to search for date specific photos of the solar system.',
link: 'https://browsetheuniverse.netlify.app/'
},
{
id: 3,
title: 'The G-List',
description: 'The G-List is a collaborative platform for curating and sharing lists of resources.',
link: 'https://g-list.vercel.app/'
}
];
return (
<div className="home">
{/* Navigation */}
<nav>
<ul>
<li><a href="#home">Home</a></li>
<li><a href="#projects">Projects</a></li>
<li><a href="#about">About</a></li>
<li><a href="#contact">Contact</a></li>
</ul>
</nav>
{/* Home/Landing Section */}
<section id="home">
<h1>Brenae Brooks</h1>
<p>An enthusiastic front-end developer passionate about crafting clean, accessible, and responsive web experiences.</p>
</section>
{/* Projects Section */}
<section id="projects" className="projects-page">
<div>
<h1 className="projects-title">My Projects</h1>
<p className="projects-description">I design and build full-stack web applications with a focus on delivering polished, accessible user experiences. My work spans frontend development, backend logic, and JavaScript-driven tooling, emphasizing performance, scalability, and maintainability.</p>
</div>
<section className="projects-thumbs container" aria-label="Project highlights">
{highlights.map((h) => (
<article key={h.id} className="thumb-card" aria-label={h.title}>
<div className="thumb-card__content">
<h3 className="thumb-card__title">{h.title}</h3>
<p className="thumb-card__desc">{h.description}</p>
</div>
<a
href={h.link}
className="thumb-card__link"
aria-label={`Open ${h.title}`}
target="_blank"
rel="noopener noreferrer"
>
</a>
</article>
))}
</section>
</section>
{/* About Section */}
<section id="about">
<h2>About Me</h2>
<div className="skills">
<h3>Skills</h3>
<ul>
<li><span>JavaScript</span></li>
<li><span>React</span></li>
<li><span>CSS</span></li>
<li><span>Node.js</span></li>
</ul>
</div>
</section>
{/* Contact Section */}
<section id="contact">
<h2>Contact Me</h2>
{/* Add contact form or contact information */}
</section>
</div>
);
}
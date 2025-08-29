import React from 'react';
import '../css/projects.css';

export default function Projects() {
  const highlights = [
    {
      id: 1,
      title: 'Client Page',
      description: 'This personalizedpage highlights the unique style, interest, and personal hobbies of the client',
      link: 'https://splendid-licorice-e508f6.netlify.app/' // external URL
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
    <>
      <section className="projects-page">
        <h1 className="projects-title">My Projects</h1>
        <p className="projects-description">I design and build full-stack web applications with a focus on delivering polished, accessible user experiences. My work spans frontend development, backend logic, and JavaScript-driven tooling, emphasizing performance, scalability, and maintainability.</p>
      </section>

      {/* Three smaller colored containers beneath the main container */}
      <section className="projects-thumbs container" aria-label="Project highlights">
        {highlights.map((h) => (
          <article key={h.id} className="thumb-card" aria-label={h.title}>
            <div className="thumb-card__content">
              <h3 className="thumb-card__title">{h.title}</h3>
              <p className="thumb-card__desc">{h.description}</p>
            </div>
            <a href={h.link} className="thumb-card__link" aria-label={`Open ${h.title}`} target="_blank" rel="noopener noreferrer">
              View More
            </a>
          </article>
        ))}
      </section>
    </>
  );
}
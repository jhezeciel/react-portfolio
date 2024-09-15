import React from 'react';
import pfp from './pfp.jpg';

const Profile = () => {
  return (
    <div id="profile" className="container d-flex flex-column justify-content-center align-items-center" style={{ height: '70vh', paddingTop: '5rem' }}>
      <img
        src={pfp}
        alt="Profile Picture"
        className="rounded-circle img-fluid mt-4"
        style={{ width: '300px', height: '300px', objectFit: 'cover' }}
      />
      <h1><span>It's Jhezeciel!</span></h1>
      <h3 className="text-animation">
        I'm a <span className="type-text"></span>
      </h3>
      <p>
        As a dedicated web development student,
        I am looking forward to creating innovative
        and user-friendly digital experiences.
        Throughout this course, I've immersed myself
        in the world of coding, design, and technology,
        constantly pushing the boundaries of what I can achieve.
      </p>
      <div className="social-icons">
        <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
          <i className="fab fa-instagram"></i>
        </a>
        <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
          <i className="fab fa-facebook-f"></i>
        </a>
        <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
          <i className="fab fa-linkedin-in"></i>
        </a>
        <a href="mailto:your-email@gmail.com" target="_blank" rel="noopener noreferrer">
          <i className="fas fa-envelope"></i> {/* Gmail icon */}
        </a>
      </div>
      <a href="#contact" className="btn-hire-me">Hire Me</a> 
    </div>
  );
};

export default Profile;

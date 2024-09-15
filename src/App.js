import React from 'react';
import './App.css';
import Aboutme from './components/Aboutme'; 
import Project from './components/Project'; 
import Contact from './components/Contact'; 
import 'bootstrap/dist/css/bootstrap.min.css';
import 'boxicons/css/boxicons.min.css';
import '@fortawesome/fontawesome-free/css/all.min.css';


// App component
function App() {
  return (
    <div className="App">
      {/* Navigation Bar */}
      <nav className="navbar navbar-expand-lg navbar-bg fixed-top">
        <div className="container">
          <a className="navbar-brand" href="#Aboutme">
            <span className="brand-first-name">Jhezeciel </span>
            <span className="brand-last-name">Escalante</span>
          </a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse justify-content-end" id="navbarNav">
            <ul className="navbar-nav">
              <li className="nav-item">
                <a className="nav-link" href="#Aboutme">About Me</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#Project">Projects</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#Contact">Contact</a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
      <main>
        <section id="Aboutme">
          <Aboutme />
        </section>
        <section id="Project">
          <Project />
        </section>
        <section id="Contact">
          <Contact />
        </section>
      </main>
    </div>
  );
}

export default App;

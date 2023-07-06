import { Link, useLocation } from 'react-router-dom';
import React from 'react';
import '../assets/style/header.css';


const Header = () => {
  const location = useLocation();
  return (
    <header className="d-flex flex-wrap align-items-center">
      <h1>Céline ROUAIRE</h1>
      <nav>
        <ul className="nav col-12 col-lg-auto me-lg-auto mb-2 justify-content-center mb-md-0">
    <li className={`nav-item ${location.pathname === '/' ? 'active' : ''}`}>
             <Link exact to="/" className="nav-link px-2 text-white">Home</Link>
            </li>
            <li className={`nav-item ${location.pathname === '/Projects' ? 'active' : ''}`}>
              <Link exact to="/Projects" className="nav-link px-2 text-white">Projects</Link>
            </li>
            <li className={`nav-item ${location.pathname === '/About' ? 'active' : ''}`}>
              <Link exact to="/About" className="nav-link px-2 text-white">About</Link>
            </li>
           <li className={`nav-item ${location.pathname === '/CV' ? 'active' : ''}`}>
              <a href="/CV2023.pdf" target="_blank" rel="noopener noreferrer" className="nav-link px-2 text-white">
              CV
              </a>
             </li>
          </ul>
      </nav>
    </header>
  );
};

export default Header;


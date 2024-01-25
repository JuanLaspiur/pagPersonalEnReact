import React from 'react';
import './header.css'

const Header = () => {
    return (
        <header className="container-fluid mr-5 mt-2">
        <nav className="navbar navbar-expand-lg bg-body-tertiary">
          <div className="container-fluid">
            <a className="navbar-brand" href="#">
              <span style={{ color: '#34db74' }}>JUAN</span> LASPIUR
            </a>
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarText"
              aria-controls="navbarText"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="container-fluid collapse navbar-collapse" id="navbarText">
              <ul className="container-fluid navbar-nav me-auto mb-2 mb-lg-0">
                <li className="nav-item">
                  <a className="nav-link active" aria-current="page" href="#">
                    <i style={{ marginRight: '5px', marginLeft: '5px', color: '#34db74' }} className="bi bi-app-indicator"></i>Main
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#container2">
                    <i className="bi bi-person" style={{ marginRight: '5px', marginLeft: '5px' }}></i>About me
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#container3">
                    <i style={{ marginRight: '5px', marginLeft: '5px' }} className="bi bi-briefcase"></i>Services
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#container5">
                    <i style={{ marginRight: '5px', marginLeft: '5px' }} className="bi bi-inbox"></i>Contact
                  </a>
                </li>
              </ul>
            </div>
            <span className="navbar-text">
              Java Full Stack <span style={{ color: '#34db74' }}> Developer</span>
            </span>
          </div>
        </nav>
      </header>
      
    );
}

export default Header;

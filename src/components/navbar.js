/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';

function Navbar() {
  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-light bg-warning">
        <div className="container">
          <a className="navbar-brand" href="#">Jajal Movie</a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav ms-auto">
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="#">Home</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">Features</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">Collection</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">Contact Us</a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  )
}

export default Navbar;

import React from 'react'
import { Link } from 'react-router-dom';
import "./Navbar.css";

function Navbar() {
  return (
    <nav className="navbar">
      <ul>
        <div className="photo-m">
        <img src="https://preview.colorlib.com/theme/shop/img/logo.png.webp" alt="m" />
        </div>
        <div className="list">

          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/Category">Category</Link>
          </li>
          <li>
            <Link to="/Men">Men</Link>
          </li>
          <li>
            <Link to="/Women">Women</Link>
          </li>
          <li>
            <Link to="/Latest">Latest</Link>
          </li>
          <li>
            <Link to="/pages">Pages</Link>
          </li>
        
         
        </div>

      </ul>
    </nav>
  );
}

export default Navbar
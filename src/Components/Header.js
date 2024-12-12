import React from 'react'
import { Link } from 'react-router-dom'

export const Header = () => {
  return (
      <nav className="navbar navbar-expand-lg navbar-dark ftco_navbar bg-dark ftco-navbar-light" id="ftco-navbar">
	    <div className="container">
	      <a className="navbar-brand" href="index.html">Vegefoods</a>
	      <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#ftco-nav" aria-controls="ftco-nav" aria-expanded="false" aria-label="Toggle navigation">
	        <span className="oi oi-menu"></span> Menu
	      </button>

	      <div className="collapse navbar-collapse" id="ftco-nav">
	        <ul className="navbar-nav ml-auto">
	          <li className="nav-item active">
              <Link to="/" className="nav-link">Home</Link>
            </li>
            <li className="nav-item">
              <Link to="/About" className="nav-link">About</Link>
            </li>
            <li className="nav-item">
              <Link to="/Products" className="nav-link">Products</Link>
            </li>
	          <li className="nav-item">
              <Link to="/Blog" className="nav-link">Blog</Link>
            </li>
	          <li className="nav-item">
              <Link to="/Contact" className="nav-link">Contact</Link>
            </li>
	        </ul>
	      </div>
	    </div>
	  </nav>
  )
}

export default Header
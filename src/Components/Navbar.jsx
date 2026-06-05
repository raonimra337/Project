// import React from 'react'
import { Link } from 'react-router-dom'

function Navbar() {
  return (
    <div>
       {/* Navbar */}
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
            <div className="container">
                <Link to="/">
                    <img src="src/assets/logo.png" alt="Logo" width="230" />
                </Link>
                    <button
                        className="navbar-toggler"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#navbarNav"
                        // aria-controls="navbarNav"
                        // aria-expanded="false"
                        aria-label="Toggle navigation"
                        >
                        <span className="navbar-toggler-icon"></span>
                    </button>

                <div className="collapse navbar-collapse" id="navbarNav">

                    <ul className="navbar-nav d-flex mx-auto">
                        <li className="nav-item">
                            <Link className="nav-link" to="/">Home</Link>
                        </li>
                            
                        <li className="nav-item">
                            <Link className="nav-link" to="/about">About</Link>
                        </li>

                        <li className="nav-item">
                            <Link className="nav-link" to="/ourservices">Our Services</Link>
                        </li>

                        <li className="nav-item">
                            <Link className="nav-link" to="/portfolio">PORTFOLIO</Link>
                        </li>

                        <li className="nav-item">
                            <Link className="nav-link" to="/career">CAREER</Link>
                        </li>
                        
                        <li className="nav-item">
                            <Link className="nav-link" to="/blogs">BLOGS</Link>
                        </li>
                            
                        <Link to="/contact us">
                            <button className='btn btn-success'>Contact Us</button>
                        </Link>
                    </ul>

                </div>
            </div>
        </nav>
    </div>
  )
}

export default Navbar

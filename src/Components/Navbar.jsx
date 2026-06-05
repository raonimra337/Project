// import React from 'react'
import { Link } from 'react-router-dom'

function Navbar() {
  return (
    <div>
       {/* Navbar */}
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark fixed-top py-3">
            <div className="container">
                <div className='pe-5'>
                    <Link to="/" className=''>
                        <img src="src/assets/logo.png" alt="Logo" width="220" />
                    </Link>
                </div>
                    
                <button
                        className="navbar-toggler"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#navbarNav"
                        aria-label="Toggle navigation"
                        >
                        <span className="navbar-toggler-icon"></span>
                    </button>

                <div className="collapse navbar-collapse" id="navbarNav">

                    <ul className="navbar-nav">
                        <li className="nav-item pt-4 pe-5">
                            <Link className="nav-link text-white" to="/">Home</Link>
                        </li>
                            
                        <li className="nav-item pt-4 pe-5">
                            <Link className="nav-link text-white" to="/about">About</Link>
                        </li>

                        <li className="nav-item pt-4 pe-5">
                            <Link className="nav-link text-white" to="/ourservices">Our Services</Link>
                        </li>

                        <li className="nav-item pt-4 pe-5">
                            <Link className="nav-link text-white" to="/portfolio">PORTFOLIO</Link>
                        </li>

                        <li className="nav-item pt-4 pe-4">
                            <Link className="nav-link text-white" to="/career">CAREER</Link>
                        </li>
                        
                        <li className="nav-item pt-4 pe-4">
                            <Link className="nav-link text-white" to="/blogs">BLOGS</Link>
                        </li>
                            
                        <Link to="/contact us" className="pt-2 text-white">
                            <button className='btn btn-success p-5 pt-3 pb-2 fs-6'>Contact <br />Us</button>
                        </Link>
                    </ul>

                </div>
            </div>
        </nav>
    </div>
  )
}

export default Navbar

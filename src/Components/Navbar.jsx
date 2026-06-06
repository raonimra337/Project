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
                        className="navbar-toggler shadow"
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
                            <Link className="nav-link text-white" to="/">HOME</Link>
                        </li>
                            
                        <li className="nav-item pt-4 pe-4 dropdown">
                            <Link className="nav-link text-white dropdown-toggle" to="/about" id="navbarDropdownMenuLink" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                ABOUT
                            </Link>
                            
                            <ul className="dropdown-menu rounded-4 pt-3 pb-3" aria-labelledby="navbarDropdownMenuLink">
                                <li>
                                    <Link className="dropdown-item text-white p-2 ps-3" to="/">
                                        About Us
                                    </Link>

                                    <Link className="dropdown-item text-white p-2 ps-3" to="/">
                                        Our Process
                                    </Link>

                                    <Link className="dropdown-item text-white p-2 ps-3" to="/">
                                        Our Partners
                                    </Link>
                                </li>
                            </ul>
                        </li>

                        <li className="nav-item pt-4 pe-4 dropdown">
                            <Link className="nav-link text-white dropdown-toggle" to="/about" id="navbarDropdownMenuLink" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                OUR SERVICES
                            </Link>
                            
                            <ul className="dropdown-menu rounded-4 pt-3 pb-3" aria-labelledby="navbarDropdownMenuLink">
                                <li>
                                    <Link className="dropdown-item text-white p-2 ps-3" to="/">
                                        Architecture
                                    </Link>

                                    <Link className="dropdown-item text-white p-2 ps-3" to="/">
                                        Interior Design
                                    </Link>

                                    <Link className="dropdown-item text-white p-2 ps-3" to="/">
                                        Construction
                                    </Link>

                                    <Link className="dropdown-item text-white p-2 ps-3" to="/">
                                        Building Sustainability
                                    </Link>

                                    <Link className="dropdown-item text-white p-2 ps-3" to="/">
                                        Smart Building Technologies
                                    </Link>
                                </li>
                            </ul>
                        </li>

                        <li className="nav-item pt-4 pe-4">
                            <Link className="nav-link text-white" to="/portfolio">PORTFOLIO</Link>
                        </li>

                        <li className="nav-item pt-4 pe-4 dropdown">
                            <Link className="nav-link text-white dropdown-toggle" to="/about" id="navbarDropdownMenuLink" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                               CAREER
                            </Link>
                            <ul className="dropdown-menu rounded-4 pt-3 pb-3 p-2" aria-labelledby="navbarDropdownMenuLink">
                                <li>
                                    
                                    <Link className="dropdown-item text-white p-2 ps-3" to="/">
                                        Apply Internship
                                    </Link>

                                    <Link className="dropdown-item text-white p-2 ps-3" to="/">
                                        Apply Jobs
                                    </Link>

                                </li>
                            </ul>
                        </li>
                        
                        <li className="nav-item pt-4 pe-4">
                            <Link className="nav-link text-white" to="/blogs">BLOGS</Link>
                        </li>
                            
                        <Link to="/contact us" className="button pt-2 text-white">
                            <button className='btn p-5 pt-3 pb-2 fs-6'>Contact <br />Us</button>
                        </Link>
                    </ul>

                    

                </div>
            </div>
        </nav>
    </div>
  )
}

export default Navbar

// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from './assets/vite.svg'
// import heroImg from './assets/hero.png'
import './App.css'

import {Routes, Route} from 'react-router-dom'

import Navbar from './Components/Navbar'
import Home from './Components/Home'
import OurServices from './Components/OurServices'
import Portfolio from './Components/Portfolio'
import Career from './Components/Career'
import Blogs from './Components/Blogs'
import ContactUs from './Components/ContactUs'
import About from './Components/About'

function App() {

  return (
    <>
      <Navbar />

     <Routes>
      <Route path = "/" element = {<Home />} />
      <Route path = "about" element = {<About />} />
      <Route path = "ourservices" element = {<OurServices />} />
      <Route path = "portfolio" element = {<Portfolio />} />
      <Route path = "career" element = {<Career />} />
      <Route path = "blogs" element = {<Blogs />} />
      <Route path = "contactus" element = {<ContactUs />} />
      </Routes>
    </>  
  )
}

export default App

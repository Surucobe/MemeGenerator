import React from 'react'
import { Link } from 'react-router-dom'

import '../assets/styles/components/Navbar.css'

const Navbar = () =>(
  <div className="navbar-container">
    <Link to="/">
      <h2>Navbar (there may be an image here)</h2>
    </Link>
  </div>
)

export default Navbar
import React from 'react'
import { Link } from 'react-router-dom'

import '../assets/styles/components/Hero.scss'

const Hero = () =>(
  <>
    <div className="gallery-hero">
      <div className="navbar-container">
        <Link to="/">
          <h2>Meme Central</h2>
        </Link>
      </div>
        <p>Hero For Hire</p>
    </div>
  </>
)

export default Hero
import React from 'react'

import Navbar from '../Components/Navbar'
import Hero from '../Components/Hero'
import Footer from '../Components/Footer'

const Layout = (props) =>(
  <>
    <Navbar />
    <Hero />
      { props.children }
    <Footer />
  </>
)

export default Layout
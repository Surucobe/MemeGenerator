import React from 'react'

import Hero from '../Components/Hero'
import Footer from '../Components/Footer'

const Layout = (props) =>(
  <>
    <Hero />
      { props.children }
    <Footer />
  </>
)

export default Layout
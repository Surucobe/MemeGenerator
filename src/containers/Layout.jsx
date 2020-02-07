import React from 'react'

import Hero from '../Components/Hero'

import '../assets/styles/Layout.scss'

const Layout = (props) =>(
  <div className="Layout">
    <Hero />
      { props.children }
  </div>
)

export default Layout
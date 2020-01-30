import React from 'react'
import { connect } from 'react-redux'

import MemeCard from '../Components/MemeCard'

import '../assets/styles/gallery.css'

const Home = ({ memes }) =>(
  <div className="page-style">
    <div className="gallery-container">
      <div className="gallery">
        <div className="Gallery-Assambled">
          <MemeCard
          // memes= {memes}
          memes= {`${["hola", "dos"]}`}
          />
        </div>
      </div>
    </div>
  </div>
)

export default Home
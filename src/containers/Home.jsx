import React from 'react'
import hookState from '../hooks/hooksState'

import MemeCard from '../Components/MemeCard'
import Loader from '../Components/Loader'

import '../assets/styles/Home.scss'

const API = 'https://api.imgflip.com/get_memes'

const Home = () =>{
  const memeSource = hookState(API)

return(
  <div className="page-style">
    <div className="gallery-container">
      <div className="gallery">
        <div className="Banner"></div>
        <div className="Gallery-Assambled">
          { memeSource.length === 0 ?
          <div className="Loader-container">
            <Loader /> 
          </div> :
          <ul className="meme-lister">
            {memeSource.map( meme => 
              <MemeCard 
              key={meme.id}
              {...meme} />
            )}
          </ul>
          }
        </div>
        <div className="Banner"></div>
      </div>
    </div>
  </div>
)}

export default Home
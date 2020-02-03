import React from 'react'
import { Link } from 'react-router-dom'

import '../assets/styles/NewMeme.scss'

    //   const data = await fetch(`https://api.imgflip.com/get_memes`)
    //   const obj = data.json()
    //   console.log(obj)
    // }    
const MakeMeme = () =>(
  <>
    <Link to="/">
      <button className="back-button">Go back</button>
    </Link>
    <div className="image-container">
      <img src="https://cdnio.luscious.net/829/lusciousnet_pole_dance_1734517565.jpg" alt="sexy image"/>
    </div>
  </>
)

export default MakeMeme
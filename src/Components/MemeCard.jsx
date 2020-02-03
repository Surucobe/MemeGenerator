import React from 'react'
import { Link } from 'react-router-dom'

const MemeCard = (props) =>{
  const { url, title } = props

  return(
    <li>
      <Link className="Actual-Meme" to={`MakeMeme`}>
        <img className="Meme-Card" src={url} alt={title} />
      </Link>
    </li>
    )
  }

export default MemeCard
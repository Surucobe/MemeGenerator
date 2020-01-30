import React from 'react'
import { Link } from 'react-router-dom'

// const MemeCard = ({ memes }) =>(
const MemeCard = ({ memes }) =>(
  <ul className="meme-lister">
    {/* {props.memes.map((meme) => (
    ))} */}
      {/* <li key={ meme.id }> */}
      <li>
        {/* <Link className="Actual-Meme" data-line={ meme.box_count } to={`/${meme.id}/NewMeme`}> */}
        <Link className="Actual-Meme" to={`xnxx.com`}>
          {/* <img className="Meme-Card" src={ meme.url } alt={ meme.name } /> */}
          <img className="Meme-Card" src='' alt='here goes meme' />
        </Link>
      </li>
  </ul>
)

export default MemeCard
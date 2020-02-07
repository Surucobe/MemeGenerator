import React from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'

import '../assets/styles/MakeMeme.scss'

const MakeMeme = ({ editing }) =>{
  const { url, name } = editing

  return(
    <>
      <Link to="/">
        <button className="back-button">Go back</button>
      </Link>
      <div className="image-container" >
        <img
          src={ url }
          alt={ name } 
          className="meme-editing"
        />
      </div>
    </>
  )
}
const mapStateToProps = state => {
  return{
    editing: state.editing
  }
}

export default connect(mapStateToProps ,null)(MakeMeme)

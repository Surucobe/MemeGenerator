import React from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'

import '../assets/styles/MakeMeme.scss'

const MakeMeme = (props) =>{
  const dato = props.editing

  return(
    <>
      <Link to="/">
        <button className="back-button">Go back</button>
      </Link>
      <div className="image-container">
        {/* <img src="https://cdnio.luscious.net/829/lusciousnet_pole_dance_1734517565.jpg" alt="sexy image"/> */}
        <img src={ dato.url } alt={ dato.name } />
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

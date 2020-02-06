import React from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'

import { setEdit } from '../actions/index'

const MemeCard = (props) =>{
  const { url, name } = props
  const handleSetEdit = () => {
    props.setEdit(
      {
        url, name
      }
    )
  }

  return(
    <li>
      <Link className="Actual-Meme" to={`MakeMeme`}>
        <img className="Meme-Card"
          src={url} 
          alt={name}
	  onClick={handleSetEdit}
        />
      </Link>
    </li>
    )
  }

const mapDispatchToProps = {
  setEdit,
}


export default connect(null, mapDispatchToProps)(MemeCard)

import React from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'

import { setEdit } from '../actions/index'

const MemeCard = (props) =>{
  const { url, name, box_count } = props
  const handleSetEdit = () => {
    props.setEdit(
      {
        url, name, box_count
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
          line-set={box_count}
        />
      </Link>
    </li>
    )
  }

const mapDispatchToProps = {
  setEdit,
}


export default connect(null, mapDispatchToProps)(MemeCard)

import { useState, useEffect } from 'react'

const getMemes = (API) =>{
  const [ memes, setMemes ] = useState([])
  useEffect(() =>{
    fetch(API)
      .then(response => response.json())
      .then(data => setMemes(data.data.memes))
  }, [])
  return memes
}

export default getMemes
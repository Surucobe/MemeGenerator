import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux'
import { createStore } from 'redux'
import reducer from './reducers/index'

import App from './routes/App'

// const memes = async function(){
//   const call = await fetch('https://api.imgflip.com/get_memes')
//   const data = await call.json()
//   return data.data.memes
// }

const memeGallery = {
  "memes": [],
  "editing":{},
}

const store = createStore(reducer, memeGallery)

ReactDOM.render(
  <Provider store={store} >
    <App />
  </Provider>,
  document.getElementById('root')
);
const reducer = (state, action) =>{
  switch(action.type){
    case 'CALL_API':
      // fetch('https://api.imgflip.com/get_memes')
      // .then(response => response.json())
      // .then(data => data.data.memes)
      return{
        //...state,
        // memes: data
      }
    default:
      return state
  }
}

export default reducer
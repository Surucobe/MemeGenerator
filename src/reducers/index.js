const reducer = (state, action) =>{
  switch(action.type){
    case 'SET_EDIT':
      return{
        ...state,
        editing: {...action.payload}
      }
    default:
      return state
  }
}

export default reducer
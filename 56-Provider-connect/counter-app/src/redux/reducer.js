function reducer(oldstate = {count: 123}, action){
  switch(action.type){
    case "INCREASE_COUNTER":
      return {count: oldstate.count + action.payload}
    case "DECREASE_COUNTER":
      return {count: oldstate.count - action.payload}
    default:
      return oldstate
  }
}

export default reducer

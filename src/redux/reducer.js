const reducer = (state = { count: 0 }, action) => {
  if(action.type == "INC")
  return  {
      ...state,
      count:state.count+1
  }

  else if (action.type == "DESC")
  return {
      ...state,
      count:state.count-1
  }
  else
  return state

 
};

export default reducer;

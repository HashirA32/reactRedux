    const reducer = (state= 0,action) => {
    if(action.type==='AddtoCart') {
        return state + action.payload
    }

  
    else {
        return state;
    }
}   
export default reducer;
export const AddtoCartMoney = (amount) => {
    return (dispatch)=> {
        dispatch({
            type: 'AddtoCart',
            payload: amount
        })
    }
}


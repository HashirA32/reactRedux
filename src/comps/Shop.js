import React from 'react';
import { useDispatch } from 'react-redux';
import { bindActionCreators } from 'redux';
import { actionCreators } from '../state';

const Shop = () => {
  const dispatch = useDispatch();
  const {depositMoney, withdrawMoney} = bindActionCreators(actionCreators, dispatch); 
  return (
    <>
    <div className="container Container-Main">
    <dir>
    <div className='Heading'>Deposit/Widthdraw money</div>
    </dir>
    <dir>
    <button className="btn btn-primary m-3" onClick={()=>{withdrawMoney(100)}}>-</button>
    Update money
    <button className="btn btn-primary m-3" onClick={()=>{depositMoney(100)}}>+</button>
    </dir>
    </div>
      
    </>
  )
}

export default Shop

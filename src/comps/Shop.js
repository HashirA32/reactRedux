import React from 'react';
import { useDispatch } from 'react-redux';
import { bindActionCreators } from 'redux';
import { actionCreators } from '../state';

const Shop = () => {
  const dispatch = useDispatch();
  const {AddtoCartMoney} = bindActionCreators(actionCreators, dispatch); 
  return (
    <>
    <div className="container Container-Main">
    <dir>
    <div className='Heading'>Elevate Your Style with Timeless Leather – Where Craft Meets Class!</div>
    </dir>
    

    <div className="CardsContainer">

      
    <div class="card">
  <div class="image_container">
    <img src="./images/bag.jpg" alt="Product " class="image" />
  </div>
  <div class="title">
    <span>Leather Bag</span>
  </div>
  <div class="size">
    <span>Size</span>
    <ul class="list-size">
    <li class="item-list"><button class="item-list-button">small</button></li>     
      <li class="item-list"><button class="item-list-button">medium</button></li>
      <li class="item-list"><button class="item-list-button">large</button></li>
    </ul>
  </div>
  <div class="action">
    <div class="price">
      <span>RS:7099</span>
    </div>
    <button class="cart-button" onClick={()=>{AddtoCartMoney(1)}}>
      <svg
        class="cart-icon"
        stroke="currentColor"
        stroke-width="1.5"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 0 0-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 0 0-16.536-1.84M7.5 14.25 5.106 5.272M6 20.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Zm12.75 0a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Z"
          stroke-linejoin="round"
          stroke-linecap="round"
        ></path>
      </svg>
      <span>Add to cart</span>
    </button>
  </div>
</div>





<div class="card">
  <div class="image_container">
    <img src="./images/Shoes.jpg" alt="Product " class="image" />
  </div>
  <div class="title">
    <span>Leather Shoe</span>
  </div>
  <div class="size">
    <span>Size</span>
    <ul class="list-size">
    <li class="item-list"><button class="item-list-button">small</button></li>     
      <li class="item-list"><button class="item-list-button">medium</button></li>
      <li class="item-list"><button class="item-list-button">large</button></li>
    </ul>
  </div>
  <div class="action">
    <div class="price">
      <span>RS:4499</span>
    </div>
    <button class="cart-button" onClick={()=>{AddtoCartMoney(1)}}>
      <svg
        class="cart-icon"
        stroke="currentColor"
        stroke-width="1.5"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 0 0-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 0 0-16.536-1.84M7.5 14.25 5.106 5.272M6 20.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Zm12.75 0a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Z"
          stroke-linejoin="round"
          stroke-linecap="round"
        ></path>
      </svg>
      <span>Add to cart</span>
    </button>
  </div>
</div>







<div class="card">
  <div class="image_container">
    <img src="./images/Wallet.png" alt="Product " class="image" />
  </div>
  <div class="title">
    <span>Leather Wallet</span>
  </div>
  <div class="size">
    <span>Size</span>
    <ul class="list-size">
      <li class="item-list"><button class="item-list-button">small</button></li>     
      <li class="item-list"><button class="item-list-button">medium</button></li>
      <li class="item-list"><button class="item-list-button">large</button></li>
    </ul>
  </div>
  <div class="action">
    <div class="price">
      <span>RS:1099</span>
    </div>
    <button class="cart-button" onClick={()=>{AddtoCartMoney(1)}}>
      <svg
        class="cart-icon"
        stroke="currentColor"
        stroke-width="1.5"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 0 0-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 0 0-16.536-1.84M7.5 14.25 5.106 5.272M6 20.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Zm12.75 0a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Z"
          stroke-linejoin="round"
          stroke-linecap="round"
        ></path>
      </svg>
      <span>Add to cart</span>
    </button>
  </div>
</div>


    </div>







    </div>
   
  
      
    </>
  )
}

export default Shop

import React, { useState } from 'react'
import { FaCartArrowDown } from "react-icons/fa";
import Order from './Order';

const showOrders = (orders) => {
  return (<div>
    {orders.map((el) => (
              <Order key={el.id} item={el}/>
            ))} 
  </div>)  
}

const showNothing = () => {
  return (
    <div className='empty'>
      <h2>Корзина пока пуста...</h2>
    </div>
  )
}


const Header = ({orders}) => {

  const [cartOpen, setCartOpen] = useState(false);
  

  return (
    <header>
      <div>
        <span className='logo'>House Staff</span>
        <ul className='nav'>
          <li>О нас</li>
          <li>Контакты</li>
          <li>Личный кабинет</li>
        </ul>
        <FaCartArrowDown onClick={() => setCartOpen(!cartOpen)} className={`shop-cart-button ${cartOpen && 'active'}`}/>
        {cartOpen && (
          <div className='shop-cart'>
            {orders.length > 0 ?
              showOrders(orders) : showNothing()}
          </div>  
        )}
      </div>
      <div className='presentation'></div>
    </header>
  )
}

export default Header

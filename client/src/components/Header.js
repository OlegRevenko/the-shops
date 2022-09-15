import React, { useState } from 'react'
import { FaCartArrowDown } from "react-icons/fa";
import Order from './Order';

const showOrders = (orders,deleteOrder) => {
  let summa = 0;
  orders.forEach(el => summa += Number(el.price))
  return (<div>
    {orders.map((el) => (
              <Order deleteOrder={deleteOrder} key={el.id} item={el}/>
            ))}
       <p className='summa'>Сумма: {new Intl.NumberFormat().format(summa)} руб.</p>
  </div>)  
}

const showNothing = () => {
  return (
    <div className='empty'>
      <h2>Корзина пока пуста...</h2>
    </div>
  )
}


const Header = ({orders, deleteOrder}) => {

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
              showOrders(orders, deleteOrder) : showNothing()}
          </div>  
        )}
      </div>
      <div className='presentation'></div>
    </header>
  )
}

export default Header

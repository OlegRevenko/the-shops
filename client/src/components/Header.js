import React, { useState } from 'react'
import { FaCartArrowDown } from "react-icons/fa";

const Header = () => {

  const [cartOpen, setCartOpen] = useState(false);
  console.log(cartOpen);

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
          </div>  
        )}
      </div>
      <div className='presentation'></div>
    </header>
  )
}

export default Header

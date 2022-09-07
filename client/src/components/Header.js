import React from 'react'

const Header = () => {
  return (
    <header>
      <div>
        <span className='logo'>House Staff</span>
        <ul className='nav'>
          <li>О нас</li>
          <li>Контакты</li>
          <li>Личный кабинет</li>
        </ul>
      </div>
      <div className='presentation'></div>
    </header>
  )
}

export default Header

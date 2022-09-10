import React from 'react'

const Order = ({item}) => {
  return (
    <div className='item'>
      <img src={"./img/" + item.img} />
      <h2>{item.title}</h2>
      <p>{item.price}Руб</p>
    </div>
  )
}

export default Order
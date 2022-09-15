import React from 'react'
import {FaTrash} from 'react-icons/fa'

const Order = ({item, deleteOrder}) => {
  return (
    <div className='item'>
      <img src={"./img/" + item.img} />
      <h2>{item.title}</h2>
      <p>{item.price}Руб</p>
      <FaTrash onClick={() => deleteOrder(item.id)} className='delete-icon' />
    </div>
  )
}

export default Order
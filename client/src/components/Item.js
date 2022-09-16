/* eslint-disable jsx-a11y/alt-text */
import React from 'react'

export const Item = ({item, addToOrder, onShowItem}) => {

  

  return (
    <div className='item'>
      <img src={"./img/" + item.img} onClick={() => onShowItem(item)} />
      <h2>{item.title}</h2>
      <p>{item.desc}</p>
      <b>{item.price}Руб</b>
      <div onClick={() => addToOrder(item)} className='add-to-cart'>+</div>
    </div>
  )
}

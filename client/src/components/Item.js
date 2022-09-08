import React from 'react'
import { items } from '../data'

export const Item = ({item}) => {
  return (
    <div className='item'>
      <img src={"./img/" + item.img} />
      <h2>{item.title}</h2>
      <p>{item.desc}</p>
      <b>{item.price}Руб</b>
      <div className='add-to-cart'>+</div>
    </div>
  )
}

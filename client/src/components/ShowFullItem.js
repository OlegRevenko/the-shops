/* eslint-disable jsx-a11y/alt-text */
import React from 'react'

const ShowFullItem = ({item, addToOrder, onShowItem}) => {
 
  return (
    <div className='full-item'>
      <div>
        <img src={"./img/" + item.img} onClick={() => onShowItem(item)} />
        <h2>{item.title}</h2>
        <p>{item.desc}</p>
        <b>{item.price}Руб</b>
        <div onClick={() => addToOrder(item)} className='add-to-cart'>+</div>
        </div>
    </div>
  )
}

export default ShowFullItem
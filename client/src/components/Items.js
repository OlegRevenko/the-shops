import React from 'react'
import { Item } from './Item';

export const Items = ({items, item, addToOrder, onShowItem}) => {
  

  return (
    <main>
      {items.map((item) => <Item onShowItem={onShowItem} item={item} key={item.id} addToOrder={addToOrder} />)}
    </main>
  )
}

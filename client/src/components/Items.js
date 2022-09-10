import React from 'react'
import { Item } from './Item';

export const Items = ({items, item}) => {
  

  return (
    <main>
      {items.map((item) => <Item item={item} key={item.id} />)}
    </main>
  )
}

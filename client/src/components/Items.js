import React from 'react'
import { Item } from './Item';

export const Items = ({items, item}) => {
  console.log('nenenen', items);

  return (
    <main>
      {items.map((item) => <Item item={item} key={item.id} />)}
    </main>
  )
}

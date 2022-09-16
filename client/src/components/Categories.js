import React, { useState } from 'react'

const Categories = ({chooseCategory}) => {
  
  const [categories, setCategories] = useState([
    {
      key: 'all',
      name: 'Всё'
    },
    {
      key: 'Стулья зеленые',
      name: 'Стулья зеленые'
    },
    {
      key: 'Стулья розовые',
      name: 'Стулья розовые'
    },
    {
      key: 'Стулья серые',
      name: 'Стулья серые'
    },
    {
      key: 'Стулья голубые',
      name: 'Стулья голубые'
    },
  ])

  return (
    <div className='categories'>
      {categories.map(el => <div key={el.key} onClick={() => chooseCategory(el.key)}>{el.name}</div> )}
    </div>
  )
  
}

export default Categories

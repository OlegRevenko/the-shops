import Footer from "./components/Footer";
import Header from "./components/Header";
import React, {useState} from 'react';
import {items} from '../src/data'
import { Items } from "./components/Items";
import Categories from "./components/Categories";

const DATAARRAY = items;


function App() {

  const [items, setItems] = useState(DATAARRAY);
  const [orders, setOrders] = useState([]);
  const [currentItems, setCurrentItems] = useState(items)

  
  const addToOrder = (item) => {
  let isInArray = false;
  orders.forEach((el) => {
    if (el.id === item.id){
      isInArray = true;
    }
  })
    if (!isInArray) {
      setOrders((prev) => [...prev, item]);
  } 
  }

  const deleteOrder = (id) => {
    setOrders((prev) => prev.filter(el => el.id !== id))
  }

  const chooseCategory = (category) => {
    console.log(category, 'category');

    if (category === 'all') {
      setCurrentItems(items)
      return
    }
    setCurrentItems(items.filter(el => el.category === category))
  }


  return (
    <div className="wrapper">
      <Header orders={orders} deleteOrder={deleteOrder} />
      <Categories chooseCategory={chooseCategory} />
      <Items items={currentItems} addToOrder={addToOrder} />
      <Footer />
    </div>
  );
}

export default App;

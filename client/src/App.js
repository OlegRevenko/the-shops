import Footer from "./components/Footer";
import Header from "./components/Header";
import React, {useState} from 'react';
import {items} from '../src/data'
import { Items } from "./components/Items";
import Categories from "./components/Categories";
import ShowFullItem from "./components/ShowFullItem";

const DATAARRAY = items;


function App() {

  const [items, setItems] = useState(DATAARRAY);
  const [orders, setOrders] = useState([]);
  const [currentItems, setCurrentItems] = useState(items);
  const [showFullItem, setShowFullItem] = useState(false);
  const [fullItem, setFullItem] = useState({});

  console.log('fullItem', fullItem)
  
 
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
    if (category === 'all') {
      setCurrentItems(items)
      return
    }
    setCurrentItems(items.filter(el => el.category === category))
  }

  const onShowItem = (item) => {
    setFullItem(item)
    setShowFullItem(prev => !prev)
  }


  return (
    <div className="wrapper">
      <Header orders={orders} deleteOrder={deleteOrder} />
      <Categories chooseCategory={chooseCategory} />
      <Items onShowItem={onShowItem} items={currentItems} addToOrder={addToOrder} />
      {showFullItem && <ShowFullItem onShowItem={onShowItem} addToOrder={addToOrder}  item={fullItem} />}
      <Footer />
    </div>
  );
}

export default App;

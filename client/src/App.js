import Footer from "./components/Footer";
import Header from "./components/Header";
import React, {useState} from 'react';
import {items} from '../src/data'
import { Items } from "./components/Items";

const DATAARRAY = items;


function App() {

  const [items, setItems] = useState(DATAARRAY);
  const [orders, setOrders] = useState([]);

  
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


  return (
    <div className="wrapper">
      <Header orders={orders} deleteOrder={deleteOrder} />
      <Items items={items} addToOrder={addToOrder} />
      <Footer />
    </div>
  );
}

export default App;

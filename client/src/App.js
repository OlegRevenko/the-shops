import Footer from "./components/Footer";
import Header from "./components/Header";
import React, {useState} from 'react';
import {items} from '../src/data'
import { Items } from "./components/Items";

const res = items;




function App() {

  const [items, setItems] = useState(res);
  const [orders, setOrders] = useState([]);

  console.log('тек элемент', orders);
  
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


  return (
    <div className="wrapper">
      <Header orders={orders} />
      <Items items={items} addToOrder={addToOrder} />
      <Footer />
    </div>
  );
}

export default App;

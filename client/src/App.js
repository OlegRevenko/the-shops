import Footer from "./components/Footer";
import Header from "./components/Header";
import React, {useState} from 'react';
import {items} from '../src/data'
import { Items } from "./components/Items";

const res = items;




function App() {

  const [items, setItems] = useState(res);
  


  return (
    <div className="wrapper">
      <Header />
      <Items items={items} />
      <Footer />
    </div>
  );
}

export default App;

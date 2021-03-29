 
import './App.css';
import { useMemo, useState,useEffect, useCallback } from 'react';
import ProductList from './components/ProductList'
import ListCart from './components/ListCart';
import CartProvider from './components/CartProvider'
import Photos from './components/Photos'
import _   from 'lodash'
import axios from 'axios'

export default function App() {
  console.log("app render")
  const products = [{
    id: 1, 
    name : 'IPhone X',
    price : '100'
  },{
    id: 2,
    name : 'IPhone Pro max',
    price: '150'
  },{
    id: 3,
    name : 'Iphone ProX',
    price : '250'
  }]
  let [count, setCount] = useState(0);
 
 
    
  const fetch = useCallback(async () =>{
    const response =  await axios.get("https://jsonplaceholder.typicode.com/photos");
    return response
  },[])

  //  const fetch =  async () =>{
  //   const response =  await axios.get("https://jsonplaceholder.typicode.com/photos");
  //   return response
  // }
  return (
    <div className="App">
       {/* demo react memo */}
      <div>
          <h1>Demo Memo</h1>
          <h2>{count}</h2>
          <button onClick={()=>setCount(++count)}>Click</button>
      </div>

      {/* demo context api */}
      <CartProvider >
        <ProductList   data={products}/>
        <ListCart name="list"  />
      </CartProvider>
      

      <Photos fetch={fetch}/>


    </div>
  );
}

 
import React,{useState} from 'react';
import {CartContext} from './ReactContext'
import _ from 'lodash'

function CartProvider(props) {
 const [cart, setCart] = useState([{}])
   
  function addToCart(item){
    console.log("add to cart render")
    const idx = _.findIndex(cart,function (car){
        return item.id === car.id
    })
    if(idx !== -1){
      const news =  [
        ..._.slice(cart,0,idx),
        {...item, quantity : cart[idx]['quantity'] + 1},
        ..._.slice(cart,idx + 1)
      ] 
      setCart([...news]);
    }else{
      setCart([...cart,{
        ...item,
        quantity : 1
      }])
    }
  }
    return (
        <div>
            <CartContext.Provider
                value={ {
                    cart: cart,
                    addToCart:  addToCart
                  }}
            >
                {
                    props.children
                }
            </CartContext.Provider>
        </div>
    );
}

export default CartProvider;
import React,{useContext} from 'react';
import {CartConsumer} from './ReactContext'

function ListCart({name}) {
    //const [cart, setCart] = useContext(CartContext)
    console.log("cart render")
    return (
        <div>
            <h1>Danh sach cart {name}</h1>
            <ul>
                <CartConsumer>
                    {
                       ({cart}) => (
                            cart && cart.map(item => (
                                <li  key={item.id}>{item.name} - {item.quantity}</li>
                            ))
                        )
                    }
                </CartConsumer>
            </ul>
        </div>
    );
}

export default ListCart;
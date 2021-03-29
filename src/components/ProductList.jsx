import React, { useContext, useState } from 'react';
import {CartConsumer} from './ReactContext'

function ProductList({data}) {
    console.log("product render")
    return (
        <div>
            {data && data.map(item => (
                <div>
                    <p>{item.name}</p>
                    <p>{item.price}</p>
                    <CartConsumer>
                        {
                            ({addToCart}) => (
                                <button onClick={() => addToCart(item)}>Add</button>
                            )
                        }
                    </CartConsumer>
                </div>
            ))}
        </div>
    );
}

 
export default ProductList;
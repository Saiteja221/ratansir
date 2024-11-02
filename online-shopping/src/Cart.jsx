import React from 'react';
import { useSelector } from 'react-redux';

const Cart = () => {
    const cartItems = useSelector((state) => state.cart);  

    return (
        <>
            <h2>Cart</h2>
            <ul>
                {cartItems.map((item, index) => (
                    <li key={index}>
                        {item.name} - ${item.price} x {item.quantity}
                    </li>
                ))}
            </ul>
        </>
    );
};

export default Cart;
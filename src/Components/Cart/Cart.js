import React from 'react';

const Cart = (props) => {
    const {cart} = props;
    console.log(cart);
    let price = 0;
    let shipping = 0;
    let tax = 0;
    let total = 0;
    let quantity = 0;
    for(const product of cart){
        quantity = quantity + product.quantity;
        price = price + product.price * product.quantity;
        shipping = shipping + product.shipping;
        tax = ((price + shipping) * 0.1).toFixed(2);
        total = (price + shipping + parseFloat(tax)).toFixed(2);
    }
    return (
        <div>
            <h3>Order Summary:</h3>
            <h4>Selected Items: {quantity}</h4>
            <h4>Price: ${price}</h4>
            <h4>Shipping: ${shipping}</h4>
            <h4>Tax:{tax}</h4>
            <h4>Grand Total: {total}</h4>
        </div>
    );
};

export default Cart;
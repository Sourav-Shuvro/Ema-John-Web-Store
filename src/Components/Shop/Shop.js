import React, { useEffect, useState } from 'react';
import './Shop.css'
import Products from '../Products/Products';
import Cart from '../Cart/Cart';
import { addToDb, getShoppingCart } from '../utilities/fakedb';

const Shop = () => {
    const [products, setProducts] = useState([]);
    const [cart,setCart] = useState([]);
    

    useEffect(()=>{
        fetch('products.json')
        .then(res => res.json())
        .then(data => setProducts(data))
    },[])

    useEffect(()=>{
        const getItems = getShoppingCart();
        const savedCart = [];
        for(const id in getItems){
            const addedItem = products.find(product => product.id === id)
            if(addedItem){
                const quantity = getItems[id];
                addedItem.quantity = quantity;
                savedCart.push(addedItem);
            }
            console.log(addedItem)
        }
        setCart(savedCart);
    },[products])

    const clickHandler = (product) =>{
        // console.log('clicked',product);
        let newCart = [];
        const exists = cart.find(selectedProduct => selectedProduct.id === product.id);
        if(!exists){
            product.quantity =1;
            newCart = [...cart,product];
        }
        else{
            const rest = cart.filter(selectedProduct => selectedProduct.id !== product.id);
            exists.quantity = exists.quantity + 1;
            newCart = [...rest, exists];
        }
        setCart(newCart);
        addToDb(product.id);
        }
    return (
        <section className='product-container'>
            <div className='product-items'>
                {
                    products.map(product => <Products 
                    key={product.id}
                    products={product}
                    clickHandler={clickHandler}></Products>)
                }
            </div>
            <div className='summary'>
                <Cart cart={cart}></Cart>
            </div>
        </section>
    );
};

export default Shop;
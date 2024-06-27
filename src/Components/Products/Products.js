import React from 'react';
import './Products.css'

const Products = (props) => {
    // console.log(props)
    const {clickHandler,products} = props;
    const {name,img,price,ratings,seller} = products;
    return (
        <section className='product-items'>
            <div className='total-product'>
                <img src={img} alt="" />
                <div className='product-info'>
                    <h3>Name: {name}</h3>
                    <p>Price: {price}$</p>
                    <p><small>Manufacturer: <strong>{seller}</strong></small></p>
                    <p><small>Rating: {ratings}</small></p>
                </div>
                <button onClick={() => clickHandler(products)}>Add to Cart</button>
            </div>
        </section>
    );
};

export default Products;
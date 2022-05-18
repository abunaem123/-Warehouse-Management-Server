import React, { useEffect, useState } from 'react';
import Product from '../../Product/Product';
import './Products.css'

const Products = () => {
    const [products,setProducts] =useState([]);

    useEffect ( ()=>{
        fetch('data.json')
        .then(res => res.json())
        .then(data => setProducts(data.slice(0,6)));
    },[])

    return (
        <div className='my-4 container'>
            <h2 className='products-title'>Our Product</h2>
            <div className='products-container '>
            {
                products.map(product => <Product
                    key={product.id}
                    product={product}
                >

                </Product>)
            }
            </div>
            <button className='btn-primary my-4'>Manage Inventories</button>
        </div>
    );
};

export default Products;
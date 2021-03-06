import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Product from '../../Product/Product';
import './Products.css'

const Products = () => {
    const [products,setProducts] =useState([]);
    const navigate = useNavigate();

    useEffect ( ()=>{
        fetch('https://shrouded-coast-85356.herokuapp.com/inventories')
        .then(res => res.json())
        .then(data => setProducts(data.slice(0,6)));
    },[])

    return (
        <div className='my-4 container'>
            <h2 className='products-title'>Our Product</h2>
            <div className='products-container '>
            {
                products.map(product => <Product
                    key={product._id}
                    product={product}
                >

                </Product>)
            }
            </div>
            <button onClick={() => navigate('/manageinventory')} className='btn-primary my-4'>Manage Inventories</button>
        </div>
    );
};

export default Products;
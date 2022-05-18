import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';

const ProductDetail = () => {
    const { inventoryId } = useParams;
    const [inventory, setInventory] = useState({});
    const navigate = useNavigate();

    // const [res] = useState({});

    useEffect(() => {
        const url = `http://localhost:5000/inventory/${inventoryId}`;
        fetch(url)
            .then(res => res.json())
            .then(data => console.log(data));
    }, [])
    const { id,name} = inventory;
    
    return (
        <div className='container services'>
            <h2 className='text-center'>Service Detail Page: {id}</h2>
            <h3>Name: {name}</h3>
            <div className='text-center'>
            </div>
        </div>
    );
};

export default ProductDetail;
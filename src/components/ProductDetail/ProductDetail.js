import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import './ProductDetail.css'

const ProductDetail = () => {
    const {inventoryId}=useParams();
    const [inventory, setInventory]=useState({});
    const {name} = inventory;

    useEffect(()=>{
        const url = `http://localhost:5000/inventory/${inventoryId}`;
        
        fetch(url)
        .then(res => res.json())
        .then(data=>setInventory(data))
    },[])
    return (
        <div className='container '>
            <div className="card border-0 my-4" >
                        <div className="row g-0 shadow  my-4 bg-body rounded text-start">
                            <div className="col-md-4">
                                <img src={inventory.img} className="img-fluid rounded-start" alt="..."/>
                            </div>
                            <div className="col-md-8 P-0">
                                <div className="card-body ">
                                    <h5 className="card-title">{inventory.name}</h5>
                                    <p><b>Price: </b>{inventory.Price}</p>
                                    <p className="card-text">{inventory.about}</p>
                                    <p><b>Quantity: </b>{inventory.Quantity}</p>
                                    <p><b>SuplierName: </b>{inventory.SuplierName}</p>
                                   <div className='d-grid mt-2 w-50'>
                                       <button className='btn btn-primary p-2  my-2'>Delete Item</button>
                                       <button  className='btn btn-dark p-2 my-2'>Add Item</button>
                                       <button className='btn btn-success p-2 my-2'>Manage Item</button>
                                   </div>
                                </div>
                            </div>
                        </div>
                    </div>
        </div>
    );
};

export default ProductDetail;
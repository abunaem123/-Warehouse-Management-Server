import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import './ProductDetail.css'

const ProductDetail = () => {
    const { inventoryId } = useParams();
    const navigate = useNavigate();
    const [inventory, setInventory] = useState({});
    const [res, setRes] = useState({});
    const [reStock, setReStock] = useState(false);

    useEffect(() => {
        const url = `https://shrouded-coast-85356.herokuapp.com/inventory/${inventoryId}`;
        fetch(url)
            .then(res => res.json())
            .then(data => setInventory(data));
    }, [inventoryId, res])
    const { name, img, about, Price, Quantity, SuplierName } = inventory;

    //? Handle Delivery operation
    const handleDeliver = () => {
        if (Quantity > 0) {
            const newQuantity = {
                Quantity: (Quantity - 1)
            };

            const url = `https://shrouded-coast-85356.herokuapp.com/inventory/${inventoryId}`;
            fetch(url, {
                method: 'PUT',
                headers: {
                    'content-type': 'application/json'
                },
                body: JSON.stringify(newQuantity),
            })
                .then(res => res.json())
                .then(data => setRes(data));
        }
    }

    //? Handle restock submittion
    const handleForm = (event) => {
        event.preventDefault();
        const amount = parseInt(event.target.amount.value);
        const newQuantity = {
            Quantity: (Quantity + amount),
        }
        console.log(newQuantity)
        const url = `https://shrouded-coast-85356.herokuapp.com/inventory/${inventoryId}`;
        fetch(url, {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(newQuantity)
        })
            .then(res => res.json())
            .then(data => setRes(data))
    }
    return (
        <div className='container '>
            <div className="card border-0 my-4" >
                <div className="row g-0 shadow  my-4 bg-light rounded text-start">
                    <div className="col-md-4">
                        <img src={img} className="img-fluid rounded-start" alt="..." />
                    </div>
                    <div className="col-md-8 P-0">
                        <div className="card-body p-2 px-4">
                            <h5 className="card-title">{name}</h5>
                            <p><b>Price: </b>{Price}</p>
                            <p className="card-text">{about}</p>
                            <p><b>Quantity: </b>{Quantity}</p>
                            <p><b>SuplierName: </b>{SuplierName}</p>
                            <div className='d-grid mt-2 w-50'>
                                <button className='m-2 btn btn-primary' onClick={() => setReStock(!reStock)}>Restock</button>

                                <button className='m-2 btn btn-danger' onClick={handleDeliver}>Delivered</button>
                                <button onClick={() => navigate('/manageinventory')} className='m-2 btn btn-success'>Manage Invenotires</button>
                            </div>
                        </div>
                    </div>
                </div>
                {reStock && (
                                <div className="inventory_restock">
                                    <form onSubmit={handleForm}>
                                        <div className="inventory_restock_input_field">
                                            <input className="inventory_restock_input_field" type="number" name="amount" placeholder="Enter Amount" />
                                        </div>
                                        <div className="inventory_restock_input_field">
                                            <input className="inventory_restock_input_field" type="submit" value="Submit" />
                                        </div>
                                    </form>
                                </div>
                            )}
            </div>
        </div>
    );
};

export default ProductDetail;
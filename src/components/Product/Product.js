import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Product.css'
const Product = ({ product }) => {
    const {  _id, img, about, Price, Quantity, name, SuplierName } = product;
    const navigate = useNavigate();
    const handlenavigateToProductDetail = id => {
        navigate(`/inventory/${id}`)
    }
    return (

        <div className='card-group'>
            <div className="card ">
                <img src={img} className="card-img-top" alt="..." />
                <div className="card-body text-start">
                    <h4 className="card-title">{name}</h4>
                    <p><b>Price: </b>{Price}</p>
                    <p className="card-text">{about.slice(0,100)}</p>
                    <p><b>Quantity: </b>{Quantity}</p>
                    <p><b>SuplierName: </b>{SuplierName}</p>
                </div>
                <div className="card-footer">
                    <button className='product-btn btn btn-primary' onClick={() => handlenavigateToProductDetail(_id)}>Delivery</button>
                </div>
            </div>
        </div>
    );
};

export default Product;
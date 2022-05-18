import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Product.css'
const Product = ({ product }) => {
    const { id, img, about, Price, Quantity, name, SuplierName } = product;
    const navigate = useNavigate();
    const handlenavigateToProductDetail = id => {
        navigate(`/product/${id}`)
    }
    return (
        // <div  className='product shadow p-3 mb-5 bg-body rounded'>
        //     <img src={img} alt="" />
        //     <div className='product-content py-4'>
        //         <h3>{name}</h3>
        //         <h6><b>Price: </b>{Price}</h6>
        //         <p>{about}</p>
        //         <p><small>Quantity:{Quantity}</small></p>
        //         <p><small>SuplierName: {SuplierName}</small></p>
        //         <button className='product-btn btn btn-primary' onClick={()=> handlenavigateToProductDetail(id)}>Delivery</button>
        //     </div>

        // </div>


        <div>
            <div class="card">
                <img src={img} class="card-img-top" alt="..." />
                <div class="card-body text-start">
                    <h4 class="card-title">{name}</h4>
                    <p><b>Price: </b>{Price}</p>
                    <p class="card-text">{about.slice(0,100)}</p>
                    <p><b>Quantity: </b>{Quantity}</p>
                    <p><b>SuplierName: </b>{SuplierName}</p>
                </div>
                <div class="card-footer">
                    <button className='product-btn btn btn-primary' onClick={() => handlenavigateToProductDetail(id)}>Delivery</button>
                </div>
            </div>
        </div>
    );
};

export default Product;
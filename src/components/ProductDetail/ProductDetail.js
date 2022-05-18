import React from 'react';
import { useParams } from 'react-router-dom';

const ProductDetail = () => {
    const { productId } = useParams;
    return (
        <div className='container services'>
            <h2 className='text-center'>Service Detail Page: {productId}</h2>
            <div className='text-center'>
                {/* <Link to="/checkout">
                    <button className='btn btn-primary'>Book Now</button>
                </Link> */}
            </div>
        </div>
    );
};

export default ProductDetail;
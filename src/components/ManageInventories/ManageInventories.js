import React from 'react';
import { useNavigate } from 'react-router-dom';
import UseInventory from '../../hooks/UseInventory/UseInventory';

const ManageInventories = () => {
    const [inventories, setInventories] = UseInventory();
    const navigate = useNavigate();
        
        const handleDelete = id => {
            console.log(id)
    ;
            const proceed = window.confirm('Are you Sure?');
            if (proceed) {
                const url = `https://shrouded-coast-85356.herokuapp.com/inventory/${id}`;
                fetch(url, {
                    method: 'DELETE'
                })

                    .then(response => response.json())
                    .then(data => {
                        console.log(data);
                        const remaining = inventories.filter(inventory => inventory._id !== id)
                        setInventories(remaining)
                    })

            }
    }
    return (
        <div className='container text-start my-4'>
            {
                inventories.map(inventory => <div key={inventory._id}>
                    
                    
                    <div className="card mb-3" >
                        <div className="row g-0">
                            <div className="col-md-4">
                                <img src={inventory.img} className="img-fluid rounded-start" alt="..."/>
                            </div>
                            <div className="col-md-8 p-4">
                                <div className="card-body">
                                    <h5 className="card-title">{inventory.name}</h5>
                                    <p><b>Price: </b>{inventory.Price}</p>
                                    <p className="card-text">{inventory.about}</p>
                                    <p><b>Quantity: </b>{inventory.Quantity}</p>
                                    <p><b>SuplierName: </b>{inventory.SuplierName}</p>
                                   <div className='d-grid mt-2 w-50'>
                                       <button onClick={() => handleDelete(inventory._id)} className='btn btn-primary p-2  my-2'>Delete Item</button>
                                       <button onClick={() => navigate('/addmyitem')}  className='btn btn-dark p-2 my-2'>Add Item</button>
                                       {/* <div><button  className='btn btn-dark '>Add Item</button></div> */}
                                   </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>)

            }

        </div>
    );
};

export default ManageInventories;
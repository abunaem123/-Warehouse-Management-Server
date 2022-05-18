import React from 'react';
import { useNavigate } from 'react-router-dom';
import UseInventory from '../../hooks/UseInventory/UseInventory';

const ManageInventories = () => {
    const [inventories, setInventories] = UseInventory();
    //     const navigate = useNavigate();
    //     const handleDelete = id => {
    //         console.log(id)
    // ;
    //         const proceed = window.confirm('Are you Sure?');
    //         if (proceed) {
    //             const url = `http://localhost:5000/inventory/${id}`;
    //             fetch(url, {
    //                 method: 'DELETE'
    //             })

    //                 .then(response => response.json())
    //                 .then(data => {
    //                     console.log(data);
    //                     const remaining = inventories.filter(inventory => inventory._id !== id)
    //                     setInventories(remaining)
    //                 })

    //         }
    // }
    return (
        <div>
            {
                inventories.map(inventory => <div key={inventory._id}>
                    <img src={inventory.img} alt="" />
                    <h2>{inventory.name}</h2>
                    <p>{inventory.about}</p>
                    <p>{inventory.Price}</p>

                </div>)

            }

        </div>
    );
};

export default ManageInventories;
import React from 'react';
import { useForm } from 'react-hook-form';
import './AddMyItem.css'

const AddMyItem = () => {
    const { register, handleSubmit } = useForm();

    const onSubmit = data => {
        console.log(data);
        const url = `https://shrouded-coast-85356.herokuapp.com/addmyitem`;
        fetch(url, {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(data)
        })
            .then(res => res.json())
            .then(result => {
                console.log(result)
            })
    }

    return (
        <div className='add-item mx-auto mt-5 mb-5'>
            <h1 className='text-danger'> Please add Your Item</h1>
            <form className='d-flex flex-column mx-3 shadow p-3 my-5 text-start bg-light' onSubmit={handleSubmit(onSubmit)} >
                <label className="text-left ">
                    <h6>Item Name</h6>
                </label>
                <input className='mb-2 ' placeholder='Item Name'  {...register("name")} />

                <label className="text-left ">
                    <h6>Item Price</h6>
                </label>
                <input className='mb-2' placeholder='Item Price' type="number" {...register("Price")} />

                <label className="text-left ">
                    <h6>Item Quantity</h6>
                </label>
                <input className='mb-2' placeholder='Item Quantity' type="number" {...register("Quantity")} />


                <label className="text-left ">
                    <h6>Supplier Name</h6>
                </label>

                <input className='mb-2' placeholder='Supplier Name'  {...register("SuplierName")} />


                <label className="text-left ">
                    <h6>Item Description</h6>
                </label>
                <textarea className='mb-2' placeholder='Item Description' {...register("about")} />

                <label className="text-left ">
                    <h6>Item Photo URL</h6>
                </label>
                <input className='mb-2' placeholder='Item Photo URL' type="text" {...register("img")} />


                <input className='mt-2 btn btn-primary' type="submit" value='Add Item' />
            </form>
        </div>
    );
};

export default AddMyItem;
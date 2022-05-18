import React from 'react';
import { useForm } from 'react-hook-form';

const AddMyItem = () => {
    const { register, handleSubmit } = useForm();

    const onSubmit = data => {
        console.log(data);
        const url = `http://localhost:5000/addmyitem`;
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
        <div className='w-50 mx-auto mt-5 mb-5'>
            <h1 className='text-danger'> Please add Your Item</h1>
            <form className='d-flex flex-column mx-3 shadow p-3 my-5' onSubmit={handleSubmit(onSubmit)} >
                <label className="text-left ">
                    <h5>Item Name</h5>
                </label>
                <input className='mb-2 ' placeholder='Item Name'  {...register("name")} />

                <label className="text-left ">
                    <h5>Item Price</h5>
                </label>
                <input className='mb-2' placeholder='Item Price' type="number" {...register("Price")} />

                <label className="text-left ">
                    <h5>Item Quantity</h5>
                </label>
                <input className='mb-2' placeholder='Item Quantity' type="number" {...register("Quantity")} />


                <label className="text-left ">
                    <h5>Supplier Name</h5>
                </label>

                <input className='mb-2' placeholder='Supplier Name'  {...register("SuplierName")} />


                <label className="text-left ">
                    <h5>Item Description</h5>
                </label>
                <textarea className='mb-2' placeholder='Item Description' {...register("about")} />

                <label className="text-left ">
                    <h5>Item Photo URL</h5>
                </label>
                <input className='mb-2' placeholder='Item Photo URL' type="text" {...register("img")} />


                <input className='mt-2 btn btn-dark' type="submit" value='Add Item' />
            </form>
        </div>
    );
};

export default AddMyItem;
import axios from 'axios';
import React from 'react';
import { useForm } from "react-hook-form";
import './AddProduct.css';


const AddProduct = () => {
    const { register, handleSubmit, reset } = useForm();
  const onSubmit = data => {
	  console.log(data);
    fetch('https://mighty-retreat-45944.herokuapp.com/products' , data)
	.then(res=> {
        if(res.data.insertedId){
            alert('Added successfully');
			reset();
		}
	})

  }
    

    return (
        <div className="add-product">
            <h1 className="text-center">Add a new Product</h1>
            <form onSubmit={handleSubmit(onSubmit)} className="">
      <input {...register("name", { required: true, maxLength: 20 })} placeholder="name" />
      <textarea {...register("des")} placeholder="description" required />

      <input type="number" {...register("price")} placeholder="price" required />
      <input {...register("img")} placeholder="Image url" required />
      <input className="btn-info" type="submit" />
    </form>
        </div>
    );
};

export default AddProduct;


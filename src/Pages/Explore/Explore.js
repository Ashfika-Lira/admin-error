import { Grid } from '@mui/material';
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import SingleWatch from "./SingleWatch";

const Explore = () => {
	const [product, setProduct] = useState([]);

	useEffect(() => {
	  fetch('https://mighty-retreat-45944.herokuapp.com/products')
		.then((res) => res.json())
		.then((data) => setProduct(data));
	}, []);

   return (
      <div>
        
     
      <h1 className="Popular-service text-center  text-white bg-secondary">Our most popular products</h1>
      <p className="text-center mt-3">
        We are here to serve you the best as always.We are very much attentive to our products.We give the assurance of best quality product from all around the best places. We import watches from Germany, Japan, Switzerland 
      </p>
         <Grid container spacing={2}>
            <Grid item xs={12}>
               <div className='row gx-4 row-cols-lg-3 row-cols-1 m-4'>
                  {
                     product.map(watch => <SingleWatch key={watch._id} watch={watch}></SingleWatch>)
                  }
               </div>
            </Grid>
           </Grid>
   
      </div>
   );
};

export default Explore;
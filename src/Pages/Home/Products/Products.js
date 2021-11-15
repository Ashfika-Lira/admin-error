import { Grid } from '@mui/material';
import React, { useEffect, useState } from 'react';
import Product from './Product';

const Products = () => {
   const [watches, setWatches] = useState([]);
   useEffect(() => {
      fetch('https://mighty-retreat-45944.herokuapp.com/products')
         .then(res => res.json())
         .then(data => setWatches(data))
   }, [])
   return (
      <div>
         <h2 className='review-style py-2 bg-secondary text-light text-center'>Watches Collection</h2>
         <Grid container spacing={2}>
            <Grid item xs={12}>
               <div className='row gx-4 row-cols-lg-3 row-cols-1 m-4'>
                  {
                     watches.slice(0, 6).map(watch => <Product key={watch._id} watch={watch}></Product>)
                  }
               </div>
            </Grid>
         </Grid>

      </div>
   );
};

export default Products;




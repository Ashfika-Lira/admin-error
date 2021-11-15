import React, { useEffect, useState } from 'react';
import ManageProduct from './ManageProduct';
import { CircularProgress } from '@mui/material';


const ManageProducts = () => {
   const [watches, setWatches] = useState([]);
   const [loading, setLoading] = useState(false);
   useEffect(() => {
      fetch('https://mighty-retreat-45944.herokuapp.com/products')
         .then(res => res.json())
         .then(data => setWatches(data))
   }, [loading])
   return (
      <div>
         {
            loading ?
               <CircularProgress color="success" />


               :
               <div>
                  <h2 className='bg-info py-2 text-light'>Manage All Products</h2>
                  {
                     watches.map(watch => <ManageProduct key={watch._id} watch={watch} setLoading={setLoading}></ManageProduct>)
                  }
               </div>
         }
      </div>
   );
};

export default ManageProducts;
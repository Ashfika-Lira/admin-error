import { Button } from '@mui/material';
import React, { useState } from 'react';
import { Modal } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import useCart from '../../hooks/useCart';

const Product = ({ watch }) => {
   const { img, name, description } = watch;

   const { setCart } = useCart();
   const [show, setShow] = useState(false);
   const handleClose = () => setShow(false);

   const handlePurchase = () => {
      setShow(true);
   };

   const handleAddCart = id => {
      setCart(id)
   };
   return (
      <div class="col">
         <div class="card h-100">
            <img className='img-fluid p-4 border rounded' src={img} alt="" />
            <div class="card-body">
               <h5 className="card-title">{name}</h5>
			   <p className="mt-2">{description}</p>

            </div>
            <div class="card-footer">
               <Button onClick={handlePurchase} className='bg-primary' variant='contained' >Buy Now</Button>
            </div>
         </div>
         <Modal show={show} onHide={handleClose} animation={false}>
            <Modal.Header closeButton>
               <Modal.Title className='text-success'>{name}</Modal.Title>
            </Modal.Header>
            <Modal.Body>Do You want to Add This In Your Cart!</Modal.Body>
            <Modal.Footer>
               <Button className='bg-info' variant="secondary" onClick={handleClose}>
                  Close
               </Button>
               <Button variant="primary" onClick={() => handleAddCart(watch._id)}>
                  <Link className='btn btn-success' to='/buynow'>Buy Now</Link>
               </Button>
            </Modal.Footer>
         </Modal>
      </div>
   );
};

export default Product;
import { Button } from '@mui/material';
import React, { useState } from 'react';
import { Modal } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import useCart from '../hooks/useCart';

const SingleWatch = ({ watch }) => {
   const { name, price, img, description} = watch;

   const { setCart } = useCart();
   const [show, setShow] = useState(false);
   const handleClose = () => setShow(false);

   const handleAddCart = id => {
      setCart(id)
   };
   return (
		 <div class="col">
         <div class="card h-100">
            <img className='img-fluid p-4 border rounded' src={img} alt="" />
            <div class="card-body">
               <h5 className="card-title">{name}</h5>
			   <h5 className="mt-2">Watch Price: ${price}</h5>
			   <p className="mt-2">{description}</p>

            </div>
            <div class="card-footer">
			   <Button onClick={() => setShow(true)} variant='contained'>Buy Now</Button>
            </div>
         </div>
         <Modal show={show} onHide={handleClose} animation={false}>
            <Modal.Header closeButton>
               <Modal.Title className='text-success'>{name}</Modal.Title>
            </Modal.Header>
            <Modal.Body>Do You want to Add This In Your Cart!</Modal.Body>
            <Modal.Footer>
               <Button className='bg-info text-light' onClick={handleClose}>
                  Close
               </Button>
               <Button onClick={() => handleAddCart(watch._id)}>
                  <Link className='btn btn-success' to='/buynow'>Buy Now</Link>
               </Button>
            </Modal.Footer>
         </Modal>
      </div>
   );
};

export default SingleWatch;
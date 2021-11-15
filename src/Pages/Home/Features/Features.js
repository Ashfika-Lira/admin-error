import React from 'react';
import { Row } from 'react-bootstrap';

const Features = () => {
	return (
		<div>
		<div className="text-center pb-5">
            <h1 className="heading-text fs-1 pt-3 fw-bold text-info">Features to Know</h1>
            <h2 className="text-secondary">"All the necessary information you need to know about a good watch."</h2>
            </div>
           

          <div className="container">
          <Row className="">
                <div className="col-md-4">
                   <div>
                   <div className="necessary-link d-flex">
                        <h4 className="ps-3"> <small className="text-danger">1. </small> Automatic movement</h4>
                    </div>
                    <hr />
                   </div>
                   <div>
                   <div className="necessary-link d-flex">
                        <h4 className="ps-3"><small className="text-danger">2. </small>Best quality</h4>
                    </div>
                    <hr />
                   </div>
                   <div>
                   <div className="necessary-link d-flex">
                        <h4 className="ps-3"><small className="text-danger">3. </small>Synthetic sapphire</h4>
                    </div>
                    <hr />
                   </div>
                </div>
                <div className="col-md-4">
                   <div>
                   <div className="necessary-link d-flex">
                        <h4 className="ps-3"><small className="text-danger">4. </small>Chronometer rating</h4>
                    </div>
                    <hr />
                   </div>
                   <div>
                   <div className="necessary-link d-flex">
                        <h4 className="ps-3"><small className="text-danger">5. </small>Water resistant</h4>
                    </div>
                    <hr />
                   </div>
                   <div>
                   <div className="necessary-link d-flex">
                        <h4 className="ps-3"><small className="text-danger">6. </small>Reflective coating</h4>
                    </div>
                    <hr />
                   </div>
                </div>
                <div className="col-md-4">
                   <div>
                   <div className="necessary-link d-flex">
                        <h4 className="ps-3"><small className="text-danger">7. </small>Solid metal</h4>
                    </div>
                    <hr />
                   </div>
                   <div>
                   <div className="necessary-link d-flex">
                        <h4 className="ps-3"><small className="text-danger">8. </small>Metal bracelet</h4>
                    </div>
                    <hr />
                   </div>
                   <div>
                   <div className="necessary-link d-flex">
                        <h4 className="ps-3"><small className="text-danger">9. </small>Precious gemstones</h4>
                    </div>
                    <hr />
                   </div>
                </div>
               
               
            </Row>
          </div>	
		</div>
	);
};

export default Features;
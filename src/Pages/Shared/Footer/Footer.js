import React from 'react';
import { Link } from 'react-router-dom';
import './Footer.css';
import logo from '../../../images/logof2.png';

const Footer = () => {
	return (
			<div className="footerbg bg-success">
            <div className="container p-4">
                <div className="row row-cols-lg-3 row-cols-md-2 row-cols-sm-1 g-4">
                    <div className="col">
                        <img width="150px" src={logo} alt="" />
                    </div>
                    <div className="col text-light mt-3">
                        <h4  className="m-0">About TIMEKeeperS</h4><br />
                        <small  className="m-0">Read our blog</small><br />
                        <small className="m-0">Sign up to our site</small><br />
                        <small className="m-0">Add your opinion</small><br />
						<small className="m-0">Get help</small><br />
                        <small className="m-0">Read FAQ's</small><br />
                        <small className="m-0">View happy clients</small><br />
                        <small className="m-0"> Frequently travelled places</small><br />
                    </div>
                    <div className="col text-light mt-3">
					<h4>Partnership</h4>
            <div>
                <Link className="footer-link" to="/">Partnership club</Link>
            </div>
            <div>
                <Link className="footer-link" to="/">Get Involved</Link>
            </div>
            <div>
                <Link className="footer-link" to="/">Pricing</Link>
            </div>
            <div>
                <Link className="footer-link" to="/">Terms & Conditions</Link>
            </div> 
						
                    </div>
                </div>
                <div className="row d-flex align-items-center">
                    <div className="col-lg-8 col-md-6 col-sm-12">
                        <small className="text-light">copyright &copy; reserved TIME KeeperS</small>
                    </div>
                    <div className="col-lg-4 col-md-6 col-sm-12">
                    </div>
                </div>
            </div>
        </div>

	);
};

export default Footer;
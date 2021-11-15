import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';
import logo from '../../../images/logo.png';
import './Header.css'

const Header = () => {
  const {user, logOut} = useAuth();
    return (
        <div>
             <Navbar collapseOnSelect expand="lg" className="my-nav-bg bg-success" sticky="top">
  <Container>
  <Navbar.Brand as={Link} to="/home"><img src={logo} alt="" /> TIMEKeeperS</Navbar.Brand>
    <Navbar.Toggle aria-controls="basic-navbar-nav" />
    <Navbar.Collapse id="basic-navbar-nav">
      <Nav className="me-auto">
        <Nav.Link className="my-nav-link" as={Link} to="/home">Home</Nav.Link>
        <Nav.Link className="my-nav-link" as={Link} to="/explore">Explore</Nav.Link>
        <Nav.Link className="my-nav-link" as={Link} to="/dashboard">Dashboard</Nav.Link>
        
      </Nav>
    </Navbar.Collapse>
    <Navbar.Collapse className="justify-content-end">
      <Navbar.Text>
        {/* Signed in as: <a href="#login">Mark Otto</a>
        <Link className="my-nav-link" to="/login">Login</Link> */}
      { user?.email ? 
        <div>
          <Link className="my-nav-link me-2" to="/myBooking">My Booking</Link>
        <Link className="my-nav-link me-2" to="/">{user?.displayName}</Link>
        <Link onClick={logOut} className="my-nav-link" to="/home">
        <svg stroke="currentColor" fill="none" strokeWidth="2" viewBox="0 0 24 24" strokeLinecap="round" strokeLinejoin="round" className="cursor-pointer w-6 h-6 text-gray-700" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4"></path><polyline points="16 17 21 12 16 7"></polyline><line x1="21" y1="12" x2="9" y2="12"></line></svg>
        </Link>
        </div>
        :
        <div>
        <Link className="my-nav-link me-2" to="/register">Register</Link>
        <Link className="my-nav-link" to="/login">Login</Link>
        </div>
          }
      </Navbar.Text>
    </Navbar.Collapse>
  </Container>
</Navbar>
        </div>
    );
};

export default Header;
import React from 'react';
import { Container, Nav, Navbar, Button, NavDropdown } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import logo from '../../images/logo/brand-logov1.png';
import './Header.css'
import { Link } from 'react-router-dom';
import useFirebase from '../../Hooks/useFirebase';






const Header = () => {
    const { user, logOut, email } = useFirebase()
    return (
        <div>
            <Navbar bg="" expand="lg" className="primar-custom-color">
                <Container>
                    <Navbar.Brand href="#home"><img src={logo} alt="" /></Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="ms-auto  fw-bold">
                            <Nav.Link as={Link} to="/home">Home</Nav.Link>
                            <Nav.Link as={Link} to="/ManageAllOrders">Manage All Booking</Nav.Link>
                            <Nav.Link as={Link} to="/PlaceOrder">PlaceOrder</Nav.Link>
                            <Nav.Link as={Link} to="/MyOrder">My Order</Nav.Link>
                            <Nav.Link as={Link} to="/AddBooking">Add Booking</Nav.Link>


                            {user?.email ?
                                <Button onClick={logOut} variant="light">logOut</Button> :
                                <Nav.Link as={Link} to="/login">login</Nav.Link>
                            }
                            <NavDropdown id="collasible-nav-dropdown" className="primar-custom-color" >
                                {user?.email ? <li className="text-white fs-6"> <img className="placeOrder-photo" src={user.photoURL} alt="" /> <br /> {user.displayName} <br /> {user.email} </li> : <NavDropdown.Item href="#action/3.1"></NavDropdown.Item>}

                                <Nav.Link as={Link} to="/home">Home</Nav.Link>
                                <Nav.Link as={Link} to="/ManageAllOrders">Manage All Booking</Nav.Link>
                                <Nav.Link as={Link} to="/PlaceOrder">PlaceOrder</Nav.Link>
                                <Nav.Link as={Link} to="/MyOrder">My Order</Nav.Link>
                                <Nav.Link as={Link} to="/AddBooking">Add Booking</Nav.Link>
                            </NavDropdown>

                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    );
};

export default Header;
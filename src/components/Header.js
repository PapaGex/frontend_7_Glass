import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { LinkContainer } from 'react-router-bootstrap';

function Header() {

    const userLogin = useSelector(state => state.userLogin)
    const {userInfo} = userLogin

    const logoutHandler = () => {
        console.log('logout')
    }


    return (
        <Navbar bg="dark" variant="dark" expand="lg" collapseOnSelect className="bg-body-tertiary">
            <Container>
                <LinkContainer to='/'>
                    <Navbar.Brand>7 Glass Studio</Navbar.Brand>
                </LinkContainer>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                        <LinkContainer to='/'>
                            <Nav.Link>Home</Nav.Link>
                        </LinkContainer>
                        <LinkContainer to='/lessons'>
                            <Nav.Link>Lessons</Nav.Link>
                        </LinkContainer>
                        <LinkContainer to='/cart'>
                            <Nav.Link><i className="fas fa-shopping-cart"></i>Cart</Nav.Link>
                        </LinkContainer>

                        {userInfo ? (
                            <NavDropdown title={userInfo.name} id='username'>
                                <LinkContainer to='/profile'>
                                    <NavDropdown.Item>Profile</NavDropdown.Item>
                                </LinkContainer>
                                <NavDropdown.Item onClick={logoutHandler}>Logout</NavDropdown.Item>


                            </NavDropdown>
                        ): (
                        <LinkContainer to='/login'>
                            <Nav.Link><i className="fas fa-user"></i>Login</Nav.Link>
                        </LinkContainer>
                        )}


                        <LinkContainer to='/about'>
                            <Nav.Link>About Us</Nav.Link>
                        </LinkContainer>

                        <NavDropdown title="Store" id="basic-nav-dropdown">
                            <LinkContainer to='/ornaments'>
                                <NavDropdown.Item>Ornaments</NavDropdown.Item>
                            </LinkContainer>
                            <LinkContainer to='/'>
                                <NavDropdown.Item>Another action</NavDropdown.Item>
                            </LinkContainer>
                            <LinkContainer to='/'>
                                <NavDropdown.Item>Something</NavDropdown.Item>
                            </LinkContainer>
                            <NavDropdown.Divider />
                            <LinkContainer to='/'>
                                <NavDropdown.Item>Separated link</NavDropdown.Item>
                            </LinkContainer>
                        </NavDropdown>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}

export default Header
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { logout } from '../actions/authActions';
import { Navbar, Nav, Button } from 'react-bootstrap';

const AppNavbar = () => {
  const dispatch = useDispatch();
  const auth = useSelector((state) => state.auth);

  const onLogout = () => {
    dispatch(logout());
  };

  const authLinks = (
    <>
      <Nav.Link as={Link} to="/posts">Posts</Nav.Link>
      {auth.role === 'admin' && <Nav.Link as={Link} to="/create-post">Create Post</Nav.Link>}
      <Navbar.Text className="mr-3">Signed in as: {auth.user && auth.user.username}</Navbar.Text>
      <Button variant="outline-light" onClick={onLogout}>Logout</Button>
    </>
  );

  const guestLinks = (
    <>
      <Nav.Link as={Link} to="/register">Register</Nav.Link>
      <Nav.Link as={Link} to="/login">Login</Nav.Link>
    </>
  );

  return (
    <Navbar bg="dark" variant="dark" expand="lg">
      <Navbar.Brand as={Link} to="/">Blog</Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="ml-auto">
          {auth.isAuthenticated ? authLinks : guestLinks}
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default AppNavbar;

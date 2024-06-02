import React from 'react';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { logout } from '../actions/authActions';
import { Navbar, Nav, Button } from 'react-bootstrap';

const AppNavbar = () => {
  const dispatch = useDispatch();
  const { isAuthenticated, role } = useSelector(state => state.auth);

  const handleLogout = () => {
    dispatch(logout());
  };

  return (
    <Navbar bg="dark" variant="dark" expand="lg">
      <Navbar.Brand as={Link} to="/">Курган Р.В. АІ-203</Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mr-auto">
          <Nav.Link as={Link} to="/posts">Posts</Nav.Link>
          {isAuthenticated && role === 'admin' && <Nav.Link as={Link} to="/create">Create Post</Nav.Link>}
        </Nav>
        <Nav className="ml-auto">
          {isAuthenticated ? (
            <Button variant="outline-light" onClick={handleLogout}>Logout</Button>
          ) : (
            <>
              <Nav.Link as={Link} to="/login">Login</Nav.Link>
              <Nav.Link as={Link} to="/register">Register</Nav.Link>
            </>
          )}
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default AppNavbar;

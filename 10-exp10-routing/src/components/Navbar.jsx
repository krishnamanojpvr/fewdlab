import React from 'react';
import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { Modal, Button } from 'react-bootstrap'; // Import Bootstrap components directly

const Navbar = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [credentials, setCredentials] = useState({ username: '', password: '', name: ''});
  const [name, setName] = useState('');  
  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    const storedUser = localStorage.getItem('user');
    if (storedUser) {
      setIsLoggedIn(true);
      setName(JSON.parse(storedUser).name);
    }
  }, []);

  const handleLogin = () => {
    if (credentials.username && credentials.password && credentials.name) {
      localStorage.setItem('user', JSON.stringify(credentials));
      setIsLoggedIn(true);
      setName(credentials.name);
      setCredentials({ username: '', password: '', name: '' });
      setShowModal(false); // Close the modal after login
    }
  };

  const handleInputChange = (e) => {
    setCredentials({ ...credentials, [e.target.name]: e.target.value });
  };

  const handleLogout = () => {
    localStorage.removeItem('user');
    setIsLoggedIn(false);
    setName('');
  };

  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-white fixed-top shadow-sm">
      <div className="container">
        <Link className="navbar-brand fw-bold" to="/">
          <i className="bi bi-bag-heart-fill text-primary"></i> LuxeMarket
        </Link>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto">
            <li className="nav-item">
              <Link className="nav-link" to="/">Home</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/about">About Us</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/products">Products</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/gallery">Gallery</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/contact">Contact</Link>
            </li>
            <li className="nav-item">
              {isLoggedIn ? (
                <>
                  <span className="nav-link text-primary">Welcome, {name}</span>
                  <button className="nav-link btn btn-danger text-white ms-2 px-3" onClick={handleLogout}>
                    Logout
                  </button>
                </>
              ) : (
                <button 
                  className="nav-link btn btn-primary text-white ms-2 px-3"
                  onClick={() => setShowModal(true)}
                >
                  Login
                </button>
              )}
            </li>
          </ul>
        </div>
      </div>

      {/* React Bootstrap Modal */}
      <Modal show={showModal} onHide={() => setShowModal(false)} centered>
        <Modal.Header closeButton className="bg-primary text-white">
          <Modal.Title>Login</Modal.Title>
        </Modal.Header>
        <Modal.Body className="bg-secondary text-white">
          <div className="mb-3">
            <label htmlFor="name" className="form-label">Name</label>
            <input 
              type="text" 
              className="form-control" 
              id="name" 
              name="name" 
              value={credentials.name} 
              onChange={handleInputChange} 
            />
          </div>
          <div className="mb-3">
            <label htmlFor="username" className="form-label">Username</label>
            <input 
              type="text" 
              className="form-control" 
              id="username" 
              name="username" 
              value={credentials.username} 
              onChange={handleInputChange} 
            />
          </div>
          <div className="mb-3">
            <label htmlFor="password" className="form-label">Password</label>
            <input 
              type="password" 
              className="form-control" 
              id="password" 
              name="password" 
              value={credentials.password} 
              onChange={handleInputChange} 
            />
          </div>
        </Modal.Body>
        <Modal.Footer className="bg-primary">
          <Button variant="secondary" onClick={() => setShowModal(false)}>
            Close
          </Button>
          <Button variant="success" onClick={handleLogin}>
            Login
          </Button>
        </Modal.Footer>
      </Modal>
    </nav>
  );
};

export default Navbar;
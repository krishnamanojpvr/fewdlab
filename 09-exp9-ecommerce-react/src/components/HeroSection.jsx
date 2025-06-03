import React from 'react';
import { Link } from 'react-router-dom';

const HeroSection = () => {
  return (
    <header className="hero-section text-white text-center d-flex align-items-center">
      <div className="container">
        <div className="row">
          <div className="col-lg-8 mx-auto">
            <h1 className="display-3 fw-bold mb-4">Welcome to LuxeMarket</h1>
            <p className="lead mb-4">Discover our curated collection of premium products</p>
            <Link to="/products" className="btn btn-primary btn-lg px-5">
              Shop Now
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
};

export default HeroSection;
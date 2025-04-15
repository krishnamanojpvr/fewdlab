import React from 'react';
import HeroSection from '../components/HeroSection';
import FeaturedProducts from '../components/FeaturedProducts';
import Weather from '../components/Weather'; 
import Navbar from '../components/Navbar';

const Home = () => {
  return (
    <div>
      {/* Navigation */}
      <Navbar />

      {/* Hero Section */}
      <HeroSection />

      {/* Weather Widget */}
      <div className="container my-5">
        <Weather />
      </div>

      {/* Featured Products */}
      <FeaturedProducts />

      {/* Footer */}
    </div>
  );
};

export default Home;
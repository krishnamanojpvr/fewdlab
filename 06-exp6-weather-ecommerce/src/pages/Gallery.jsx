import React, { useState } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import LoginModal from '../components/LoginModal';

const Gallery = () => {
  // Initial set of products
  const initialProducts = [
    {
      src: 'https://images.unsplash.com/photo-1523275335684-37898b6baf30',
      title: 'Premium Watch Collection',
      description: 'Luxury Timepieces',
    },
    {
      src: 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e',
      title: 'Audio Excellence',
      description: 'Premium Headphones',
    },
    {
      src: 'https://images.unsplash.com/photo-1542291026-7eec264c27ff',
      title: 'Sport Collection',
      description: 'Athletic Wear',
    },
    {
      src: 'https://images.unsplash.com/photo-1546868871-7041f2a55e12',
      title: 'Smart Technology',
      description: 'Wearable Tech',
    },
    {
      src: 'https://images.unsplash.com/photo-1572635196237-14b3f281503f',
      title: 'Summer Style',
      description: 'Fashion Accessories',
    },
    {
      src: 'https://images.unsplash.com/photo-1491553895911-0055eca6402d',
      title: 'Active Lifestyle',
      description: 'Sports Equipment',
    },
  ];

  // Additional products to load
  const additionalProducts = [
    {
      src: 'https://images.unsplash.com/photo-1523275335684-37898b6baf30',
      title: 'Premium Watch Collection (Load More 1)',
      description: 'Luxury Timepieces',
    },
    {
      src: 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e',
      title: 'Audio Excellence (Load More 1)',
      description: 'Premium Headphones',
    },
    {
      src: 'https://images.unsplash.com/photo-1542291026-7eec264c27ff',
      title: 'Sport Collection (Load More 1)',
      description: 'Athletic Wear',
    },
    {
      src: 'https://images.unsplash.com/photo-1546868871-7041f2a55e12',
      title: 'Smart Technology (Load More 1)',
      description: 'Wearable Tech',
    },
    {
      src: 'https://images.unsplash.com/photo-1572635196237-14b3f281503f',
      title: 'Summer Style (Load More 1)',
      description: 'Fashion Accessories',
    },
    {
      src: 'https://images.unsplash.com/photo-1491553895911-0055eca6402d',
      title: 'Active Lifestyle (Load More 1)',
      description: 'Sports Equipment',
    },
    {
      src: 'https://images.unsplash.com/photo-1523275335684-37898b6baf30',
      title: 'Premium Watch Collection (Load More 2)',
      description: 'Luxury Timepieces',
    },
    {
      src: 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e',
      title: 'Audio Excellence (Load More 2)',
      description: 'Premium Headphones',
    },
    {
      src: 'https://images.unsplash.com/photo-1542291026-7eec264c27ff',
      title: 'Sport Collection (Load More 2)',
      description: 'Athletic Wear',
    },
    {
      src: 'https://images.unsplash.com/photo-1546868871-7041f2a55e12',
      title: 'Smart Technology (Load More 2)',
      description: 'Wearable Tech',
    },
    {
      src: 'https://images.unsplash.com/photo-1572635196237-14b3f281503f',
      title: 'Summer Style (Load More 2)',
      description: 'Fashion Accessories',
    },
    {
      src: 'https://images.unsplash.com/photo-1491553895911-0055eca6402d',
      title: 'Active Lifestyle (Load More 2)',
      description: 'Sports Equipment',
    },
  ];

  const [products, setProducts] = useState(initialProducts); // State for products
  const [loadCount, setLoadCount] = useState(0); // Track how many times "Load More" is clicked
  const [hasMore, setHasMore] = useState(true); // Track if there are more products to load

  // Handle "Load More" button click
  const handleLoadMore = () => {
    if (loadCount < 2) {
      // Load additional products
      const newProducts = additionalProducts.slice(loadCount * 6, (loadCount + 1) * 6);
      setProducts((prevProducts) => [...prevProducts, ...newProducts]);
      setLoadCount((prevCount) => prevCount + 1);
    } else {
      // No more products to load
      setHasMore(false);
    }
  };

  return (
    <div>
      {/* Navigation */}
      <Navbar />

      {/* Gallery Hero Section */}
      <header className="gallery-hero text-white text-center d-flex align-items-center">
        <div className="container">
          <h1 className="display-4 fw-bold mb-4">Our Gallery</h1>
          <p className="lead">Experience our products in action</p>
        </div>
      </header>

      {/* Gallery Grid */}
      <section className="py-5">
        <div className="container">
          {/* Gallery Filter Buttons */}
          <div className="text-center mb-5">
            <div className="btn-group" role="group">
              <button type="button" className="btn btn-primary active">
                All
              </button>
              <button type="button" className="btn btn-outline-primary">
                Watches
              </button>
              <button type="button" className="btn btn-outline-primary">
                Electronics
              </button>
              <button type="button" className="btn btn-outline-primary">
                Fashion
              </button>
            </div>
          </div>

          {/* Gallery Items */}
          <div className="row g-4">
            {products.map((item, index) => (
              <div key={index} className="col-lg-4 col-md-6">
                <div className="gallery-item shadow-sm">
                  <img src={item.src} alt="Gallery Image" className="img-fluid" />
                  <div className="p-3">
                    <h5>{item.title}</h5>
                    <p className="text-muted mb-0">{item.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Load More Button */}
          {hasMore && (
            <div className="text-center mt-5">
              <button className="btn btn-primary btn-lg px-5" onClick={handleLoadMore}>
                Load More
              </button>
            </div>
          )}

          {/* End of Products Message */}
          {!hasMore && (
            <div className="text-center mt-5">
              <p className="text-muted">No more products to load.</p>
            </div>
          )}
        </div>
      </section>

      {/* Footer */}
      <Footer />

      {/* Login Modal */}
      <LoginModal />
    </div>
  );
};

export default Gallery;
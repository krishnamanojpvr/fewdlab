import React, { useState, useEffect } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import LoginModal from '../components/LoginModal';
import { useLocation, useNavigate } from 'react-router-dom';

const Products = () => {
  const [currentPage, setCurrentPage] = useState(1); // Track current page
  const productsPerPage = 6; // Number of products per page
  const location = useLocation();
  const navigate = useNavigate();
  const params = new URLSearchParams(location.search);
  const [searchTerm, setSearchTerm] = useState(params.get('search') || '');

  // Sample products data
  const allProducts = [
    {
      src: 'https://images.unsplash.com/photo-1523275335684-37898b6baf30',
      title: 'Premium Watch',
      description: 'Elegant timepiece for the modern individual.',
      price: '$299.99',
    },
    {
      src: 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e',
      title: 'Wireless Headphones',
      description: 'Premium sound quality with noise cancellation.',
      price: '$199.99',
    },
    {
      src: 'https://images.unsplash.com/photo-1491553895911-0055eca6402d',
      title: 'Sport Shoes',
      description: 'Comfortable and stylish for your active lifestyle.',
      price: '$129.99',
    },
    {
      src: 'https://images.unsplash.com/photo-1542291026-7eec264c27ff',
      title: 'Running Shoes',
      description: 'Professional grade running shoes for athletes.',
      price: '$159.99',
    },
    {
      src: 'https://images.unsplash.com/photo-1546868871-7041f2a55e12',
      title: 'Smart Watch',
      description: 'Track your fitness and stay connected.',
      price: '$249.99',
    },
    {
      src: 'https://images.unsplash.com/photo-1572635196237-14b3f281503f',
      title: 'Sunglasses',
      description: 'Stylish protection for your eyes.',
      price: '$89.99',
    },
    // Add more products for Page 2 and Page 3
    {
      src: 'https://images.unsplash.com/photo-1523275335684-37898b6baf30',
      title: 'Premium Watch (Page 2)',
      description: 'Elegant timepiece for the modern individual.',
      price: '$299.99',
    },
    {
      src: 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e',
      title: 'Wireless Headphones (Page 2)',
      description: 'Premium sound quality with noise cancellation.',
      price: '$199.99',
    },
    {
      src: 'https://images.unsplash.com/photo-1491553895911-0055eca6402d',
      title: 'Sport Shoes (Page 2)',
      description: 'Comfortable and stylish for your active lifestyle.',
      price: '$129.99',
    },
    {
      src: 'https://images.unsplash.com/photo-1542291026-7eec264c27ff',
      title: 'Running Shoes (Page 2)',
      description: 'Professional grade running shoes for athletes.',
      price: '$159.99',
    },
    {
      src: 'https://images.unsplash.com/photo-1546868871-7041f2a55e12',
      title: 'Smart Watch (Page 2)',
      description: 'Track your fitness and stay connected.',
      price: '$249.99',
    },
    {
      src: 'https://images.unsplash.com/photo-1572635196237-14b3f281503f',
      title: 'Sunglasses (Page 2)',
      description: 'Stylish protection for your eyes.',
      price: '$89.99',
    },
    // Add more products for Page 3
    {
      src: 'https://images.unsplash.com/photo-1523275335684-37898b6baf30',
      title: 'Premium Watch (Page 3)',
      description: 'Elegant timepiece for the modern individual.',
      price: '$299.99',
    },
    {
      src: 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e',
      title: 'Wireless Headphones (Page 3)',
      description: 'Premium sound quality with noise cancellation.',
      price: '$199.99',
    },
    {
      src: 'https://images.unsplash.com/photo-1491553895911-0055eca6402d',
      title: 'Sport Shoes (Page 3)',
      description: 'Comfortable and stylish for your active lifestyle.',
      price: '$129.99',
    },
    {
      src: 'https://images.unsplash.com/photo-1542291026-7eec264c27ff',
      title: 'Running Shoes (Page 3)',
      description: 'Professional grade running shoes for athletes.',
      price: '$159.99',
    },
    {
      src: 'https://images.unsplash.com/photo-1546868871-7041f2a55e12',
      title: 'Smart Watch (Page 3)',
      description: 'Track your fitness and stay connected.',
      price: '$249.99',
    },
    {
      src: 'https://images.unsplash.com/photo-1572635196237-14b3f281503f',
      title: 'Sunglasses (Page 3)',
      description: 'Stylish protection for your eyes.',
      price: '$89.99',
    },
  ];

  // Update URL when searchTerm changes
  useEffect(() => {
    const newParams = new URLSearchParams(location.search);
    if (searchTerm) {
      newParams.set('search', searchTerm);
    } else {
      newParams.delete('search');
    }
    navigate({ search: newParams.toString() }, { replace: true });
  }, [searchTerm, location.search, navigate]);

  // Filter products by search term
  const filteredProducts = allProducts.filter(product =>
    product.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
    product.description.toLowerCase().includes(searchTerm.toLowerCase())
  );

  // Calculate the products to display for the current page
  const indexOfLastProduct = currentPage * productsPerPage;
  const indexOfFirstProduct = indexOfLastProduct - productsPerPage;
  const currentProducts = filteredProducts.slice(indexOfFirstProduct, indexOfLastProduct);

  // Handle page change
  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  return (
    <div>
      {/* Navigation */}
      <Navbar />

      {/* Products Hero Section */}
      <header className="products-hero text-white text-center d-flex align-items-center">
        <div className="container">
          <h1 className="display-4 fw-bold mb-4">Our Products</h1>
          <p className="lead">Discover our exclusive collection of premium items</p>
        </div>
      </header>

      {/* Search Bar */}
      <div className="container mt-4">
        <div className="row justify-content-center">
          <div className="col-md-6">
            <input
              type="text"
              className="form-control"
              placeholder="Search products..."
              value={searchTerm}
              onChange={e => {
                setCurrentPage(1);
                setSearchTerm(e.target.value);
              }}
            />
          </div>
        </div>
      </div>

      {/* Product Categories */}
      <section className="py-5">
        <div className="container">
          <div className="row g-4">
           

            {/* Products Grid */}
            <div className="col-lg-9">
              <div className="row g-4">
                {currentProducts.map((product, index) => (
                  <div key={index} className="col-md-4">
                    <div className="card h-100 border-0 shadow-sm">
                      <img src={product.src} className="card-img-top" alt="Product" />
                      <div className="card-body">
                        <h5 className="card-title">{product.title}</h5>
                        <p className="card-text">{product.description}</p>
                        <div className="d-flex justify-content-between align-items-center">
                          <h6 className="text-primary mb-0">{product.price}</h6>
                          <button className="btn btn-outline-primary">Add to Cart</button>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              {/* Pagination */}
              <nav className="mt-5">
                <ul className="pagination justify-content-center">
                  <li className={`page-item ${currentPage === 1 ? 'disabled' : ''}`}>
                    <button className="page-link" onClick={() => handlePageChange(currentPage - 1)}>
                      Previous
                    </button>
                  </li>
                  {[1, 2, 3].map((pageNumber) => (
                    <li key={pageNumber} className={`page-item ${currentPage === pageNumber ? 'active' : ''}`}>
                      <button className="page-link" onClick={() => handlePageChange(pageNumber)}>
                        {pageNumber}
                      </button>
                    </li>
                  ))}
                  <li className={`page-item ${currentPage === 3 ? 'disabled' : ''}`}>
                    <button className="page-link" onClick={() => handlePageChange(currentPage + 1)}>
                      Next
                    </button>
                  </li>
                </ul>
              </nav>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <Footer />

      {/* Login Modal */}
      <LoginModal />
    </div>
  );
};

export default Products;
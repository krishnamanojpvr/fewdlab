import React from 'react';

const FeaturedProducts = () => {
  return (
    <section className="py-5">
      <div className="container">
        <h2 className="text-center mb-5">Featured Products</h2>
        <div className="row g-4">
          <div className="col-md-4">
            <div className="card h-100 border-0 shadow-sm">
              <img
                src="https://images.unsplash.com/photo-1523275335684-37898b6baf30"
                className="card-img-top"
                alt="Product"
              />
              <div className="card-body">
                <h5 className="card-title">Premium Watch</h5>
                <p className="card-text">Elegant timepiece for the modern individual.</p>
                <h6 className="text-primary">$299.99</h6>
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <div className="card h-100 border-0 shadow-sm">
              <img
                src="https://images.unsplash.com/photo-1505740420928-5e560c06d30e"
                className="card-img-top"
                alt="Product"
              />
              <div className="card-body">
                <h5 className="card-title">Wireless Headphones</h5>
                <p className="card-text">Premium sound quality with noise cancellation.</p>
                <h6 className="text-primary">$199.99</h6>
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <div className="card h-100 border-0 shadow-sm">
              <img
                src="https://images.unsplash.com/photo-1491553895911-0055eca6402d"
                className="card-img-top"
                alt="Product"
              />
              <div className="card-body">
                <h5 className="card-title">Sport Shoes</h5>
                <p className="card-text">Comfortable and stylish for your active lifestyle.</p>
                <h6 className="text-primary">$129.99</h6>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturedProducts;
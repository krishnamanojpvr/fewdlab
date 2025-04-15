import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import LoginModal from '../components/LoginModal';

const Partners = () => {
  return (
    <div>
      {/* Navigation */}
      <Navbar />

      {/* Partners Hero Section */}
      <header className="partners-hero text-white text-center d-flex align-items-center">
        <div className="container">
          <h1 className="display-4 fw-bold mb-4">Our Partners</h1>
          <p className="lead">Collaborating with the world's leading brands</p>
        </div>
      </header>

      {/* Partners Grid */}
      <section className="py-5">
        <div className="container">
          <div className="row g-5">
            {/* Featured Partners */}
            {[
              {
                src: 'https://images.unsplash.com/photo-1599305445671-ac291c95aaa9',
                title: 'Premium Partner',
                description: 'Leading luxury watch manufacturer',
              },
              {
                src: 'https://images.unsplash.com/photo-1542291026-7eec264c27ff',
                title: 'Elite Partner',
                description: 'Global sportswear brand',
              },
              {
                src: 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e',
                title: 'Tech Partner',
                description: 'Innovation in audio technology',
              },
            ].map((item, index) => (
              <div key={index} className="col-lg-4 mb-5">
                <div className="card border-0 shadow-sm h-100">
                  <div className="card-body text-center p-5">
                    <img src={item.src} alt="Partner Logo" className="partner-logo img-fluid mb-4" />
                    <h4>{item.title}</h4>
                    <p className="text-muted">{item.description}</p>
                    <a href="#" className="btn btn-outline-primary mt-3">
                      Learn More
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Partnership Benefits */}
          <div className="row mt-5">
            <div className="col-lg-6">
              <h2 className="mb-4">Why Partner With Us?</h2>
              {[
                {
                  icon: 'bi-graph-up-arrow',
                  title: 'Increased Market Reach',
                  description: 'Access to our extensive customer base and global market presence.',
                },
                {
                  icon: 'bi-shield-check',
                  title: 'Brand Credibility',
                  description: 'Association with our trusted luxury marketplace.',
                },
                {
                  icon: 'bi-gear',
                  title: 'Operational Support',
                  description: 'Comprehensive logistics and marketing support.',
                },
              ].map((item, index) => (
                <div key={index} className="d-flex mb-4">
                  <i className={`bi ${item.icon} text-primary fs-1 me-3`}></i>
                  <div>
                    <h5>{item.title}</h5>
                    <p>{item.description}</p>
                  </div>
                </div>
              ))}
            </div>
            <div className="col-lg-6">
              <div className="card border-0 shadow-sm">
                <div className="card-body p-4">
                  <h4 className="mb-4">Become a Partner</h4>
                  <form>
                    <div className="mb-3">
                      <label htmlFor="companyName" className="form-label">
                        Company Name
                      </label>
                      <input type="text" className="form-control" id="companyName" required />
                    </div>
                    <div className="mb-3">
                      <label htmlFor="email" className="form-label">
                        Business Email
                      </label>
                      <input type="email" className="form-control" id="email" required />
                    </div>
                    <div className="mb-3">
                      <label htmlFor="category" className="form-label">
                        Product Category
                      </label>
                      <select className="form-select" id="category" required>
                        <option value="">Select Category</option>
                        <option value="watches">Watches</option>
                        <option value="electronics">Electronics</option>
                        <option value="fashion">Fashion</option>
                      </select>
                    </div>
                    <div className="mb-3">
                      <label htmlFor="message" className="form-label">
                        Message
                      </label>
                      <textarea className="form-control" id="message" rows="4"></textarea>
                    </div>
                    <button type="submit" className="btn btn-primary w-100">
                      Submit Application
                    </button>
                  </form>
                </div>
              </div>
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

export default Partners;
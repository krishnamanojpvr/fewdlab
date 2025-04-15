import React from 'react';

const AboutContent = () => {
  return (
    <section className="py-5">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-lg-6 mb-4 mb-lg-0">
            <img
              src="https://images.unsplash.com/photo-1497366216548-37526070297c"
              alt="Our Store"
              className="img-fluid rounded-4 shadow"
            />
          </div>
          <div className="col-lg-6">
            <h2 className="mb-4">Who We Are</h2>
            <p className="lead mb-4">
              LuxeMarket is more than just a store - we're a curator of fine living and exceptional style.
            </p>
            <p>
              Founded in 2010, we've grown from a small boutique to a leading destination for premium products. Our
              commitment to quality and customer satisfaction has never wavered.
            </p>
            <div className="row mt-5">
              <div className="col-6">
                <div className="d-flex align-items-center mb-4">
                  <i className="bi bi-check-circle-fill text-primary fs-1 me-3"></i>
                  <div>
                    <h5 className="mb-1">Quality First</h5>
                    <p className="mb-0">Only the finest products</p>
                  </div>
                </div>
              </div>
              <div className="col-6">
                <div className="d-flex align-items-center mb-4">
                  <i className="bi bi-award-fill text-primary fs-1 me-3"></i>
                  <div>
                    <h5 className="mb-1">Expert Service</h5>
                    <p className="mb-0">Dedicated support</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutContent;
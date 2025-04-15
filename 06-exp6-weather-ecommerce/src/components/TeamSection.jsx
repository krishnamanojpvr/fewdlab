import React from 'react';

const TeamSection = () => {
  return (
    <section className="py-5 bg-light">
      <div className="container">
        <h2 className="text-center mb-5">Meet Our Team</h2>
        <div className="row g-4">
          <div className="col-lg-3 col-md-6">
            <div className="card border-0 shadow-sm h-100">
              <img
                src="https://images.unsplash.com/photo-1560250097-0b93528c311a"
                className="card-img-top"
                alt="Team Member"
              />
              <div className="card-body text-center">
                <h5 className="card-title">John Smith</h5>
                <p className="text-muted">CEO & Founder</p>
              </div>
            </div>
          </div>
          <div className="col-lg-3 col-md-6">
            <div className="card border-0 shadow-sm h-100">
              <img
                src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2"
                className="card-img-top"
                alt="Team Member"
              />
              <div className="card-body text-center">
                <h5 className="card-title">Sarah Johnson</h5>
                <p className="text-muted">Head of Design</p>
              </div>
            </div>
          </div>
          <div className="col-lg-3 col-md-6">
            <div className="card border-0 shadow-sm h-100">
              <img
                src="https://images.unsplash.com/photo-1519085360753-af0119f7cbe7"
                className="card-img-top"
                alt="Team Member"
              />
              <div className="card-body text-center">
                <h5 className="card-title">Michael Brown</h5>
                <p className="text-muted">Product Manager</p>
              </div>
            </div>
          </div>
          <div className="col-lg-3 col-md-6">
            <div className="card border-0 shadow-sm h-100">
              <img
                src="https://images.unsplash.com/photo-1580489944761-15a19d654956"
                className="card-img-top"
                alt="Team Member"
              />
              <div className="card-body text-center">
                <h5 className="card-title">Emily Davis</h5>
                <p className="text-muted">Customer Relations</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TeamSection;
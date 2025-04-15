import React from 'react';

const ContactForm = () => {
  return (
    <section className="py-5 mt-5">
      <div className="container">
        <div className="row">
          {/* Contact Information */}
          <div className="col-lg-4 mb-4 mb-lg-0">
            <div className="card border-0 shadow-sm h-100">
              <div className="card-body p-4">
                <h4 className="mb-4">Get in Touch</h4>
                <div className="d-flex mb-4">
                  <i className="bi bi-geo-alt text-primary fs-2 me-3"></i>
                  <div>
                    <h5>Visit Us</h5>
                    <p className="mb-0">
                      123 Luxury Lane<br />
                      Fashion District<br />
                      New York, NY 10001
                    </p>
                  </div>
                </div>
                <div className="d-flex mb-4">
                  <i className="bi bi-telephone text-primary fs-2 me-3"></i>
                  <div>
                    <h5>Call Us</h5>
                    <p className="mb-0">
                      +1 (555) 123-4567<br />
                      Mon-Fri, 9am-6pm EST
                    </p>
                  </div>
                </div>
                <div className="d-flex">
                  <i className="bi bi-envelope text-primary fs-2 me-3"></i>
                  <div>
                    <h5>Email Us</h5>
                    <p className="mb-0">
                      info@luxemarket.com<br />
                      support@luxemarket.com
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="col-lg-8">
            <div className="card border-0 shadow-sm">
              <div className="card-body p-4">
                <h4 className="mb-4">Send Us a Message</h4>
                <form>
                  <div className="row">
                    <div className="col-md-6 mb-3">
                      <label htmlFor="name" className="form-label">
                        Your Name
                      </label>
                      <input type="text" className="form-control" id="name" required />
                    </div>
                    <div className="col-md-6 mb-3">
                      <label htmlFor="email" className="form-label">
                        Your Email
                      </label>
                      <input type="email" className="form-control" id="email" required />
                    </div>
                  </div>
                  <div className="mb-3">
                    <label htmlFor="subject" className="form-label">
                      Subject
                    </label>
                    <input type="text" className="form-control" id="subject" required />
                  </div>
                  <div className="mb-3">
                    <label htmlFor="message" className="form-label">
                      Message
                    </label>
                    <textarea className="form-control" id="message" rows="5" required></textarea>
                  </div>
                  <button type="submit" className="btn btn-primary">
                    Send Message
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;
import React from 'react';

const FAQSection = () => {
  return (
    <div className="mt-5 p-5">
      <h4 className="mb-4">Frequently Asked Questions</h4>
      <div className="accordion" id="faqAccordion">
        <div className="accordion-item border-0 mb-3 shadow-sm">
          <h2 className="accordion-header">
            <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#faq1">
              What are your shipping times?
            </button>
          </h2>
          <div id="faq1" className="accordion-collapse collapse show" data-bs-parent="#faqAccordion">
            <div className="accordion-body">
              We offer express shipping (2-3 business days) and standard shipping (5-7 business days) to most locations
              worldwide.
            </div>
          </div>
        </div>
        <div className="accordion-item border-0 mb-3 shadow-sm">
          <h2 className="accordion-header">
            <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#faq2">
              What is your return policy?
            </button>
          </h2>
          <div id="faq2" className="accordion-collapse collapse" data-bs-parent="#faqAccordion">
            <div className="accordion-body">
              We offer a 30-day return policy for all unused items in their original packaging.
            </div>
          </div>
        </div>
        <div className="accordion-item border-0 mb-3 shadow-sm">
          <h2 className="accordion-header">
            <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#faq3">
              Do you offer international shipping?
            </button>
          </h2>
          <div id="faq3" className="accordion-collapse collapse" data-bs-parent="#faqAccordion">
            <div className="accordion-body">
              Yes, we ship to most countries worldwide. Shipping costs and times vary by location.
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FAQSection;
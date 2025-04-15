import React from 'react';

const MapSection = () => {
  return (
    <section className="py-5 bg-light">
      <div className="container">
        <div className="ratio ratio-21x9 shadow-sm">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3022.1!2d-73.935242!3d40.730610!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zM40zMCcyNi4yIk4gNzPCsDU2JzA2LjkiVw!5e0!3m2!1sen!2sus!4v1635787401462!5m2!1sen!2sus"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
          ></iframe>
        </div>
      </div>
    </section>
  );
};

export default MapSection;
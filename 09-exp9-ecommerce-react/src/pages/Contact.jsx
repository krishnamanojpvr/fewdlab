import React from 'react';
import ContactForm from './EmailForm';
import FAQSection from '../components/FAQSection';
import MapSection from '../components/MapSection';

const Contact = () => {
  return (
    <div>
      <ContactForm />
      <FAQSection />
      <MapSection />
    </div>
  );
};

export default Contact;
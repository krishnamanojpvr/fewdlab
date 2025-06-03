import React, { useState } from 'react';

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const [submittedData, setSubmittedData] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const { name, email, message } = formData;

    if (!/^[a-z0-9 ]+$/i.test(name)) {
      alert('Error: Name must be alphanumeric');
      return;
    }

    if (!email.includes('@')) {
      alert('Error: Email must contain "@"');
      return;
    }

    if (message.trim() === '') {
      alert('Error: Message is required');
      return;
    }

    const wordCount = message.trim().split(/\s+/).length;
    if (wordCount > 150) {
      alert(`Error: Message exceeds 150 words (${wordCount} words)`);
      return;
    }

    setSubmittedData(formData);
    setFormData({ name: '', email: '', message: '' });
  };

  return (
    <div className="container py-5">
      <div className="card shadow">
        <div className="card-body">
          <h3 className="card-title text-center mb-4">📬 Contact Form</h3>
          <form onSubmit={handleSubmit} noValidate>
            <div className="mb-3">
              <label className="form-label">Name</label>
              <input
                name="name"
                value={formData.name}
                onChange={handleChange}
                type="text"
                className="form-control"
                placeholder="Enter your name"
                required
              />
            </div>

            <div className="mb-3">
              <label className="form-label">Email</label>
              <input
                name="email"
                type="email"
                value={formData.email}
                onChange={handleChange}
                className="form-control"
                placeholder="Enter your email"
                required
              />
            </div>

            <div className="mb-3">
              <label className="form-label">Message</label>
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                rows="5"
                className="form-control"
                placeholder="Write your message..."
                required
              />
              <div className="form-text">
                {formData.message.trim() === ''
                  ? '0'
                  : formData.message.trim().split(/\s+/).length}{' '}
                / 150 words
              </div>
            </div>

            <button type="submit" className="btn btn-primary w-100">
              Send Message
            </button>
          </form>

          {submittedData && (
            <div className="mt-4 alert alert-info">
              <h5>✅ Submitted Data</h5>
              <p><strong>Name:</strong> {submittedData.name}</p>
              <p><strong>Email:</strong> {submittedData.email}</p>
              <p><strong>Message:</strong> {submittedData.message}</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

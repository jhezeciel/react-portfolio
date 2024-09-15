import React, { useState } from 'react';

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const [submitted, setSubmitted] = useState(false);
  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData(prevData => ({
      ...prevData,
      [id]: value
    }));
  };

  const validateForm = () => {
    const newErrors = {};
    if (!formData.name.trim()) newErrors.name = 'Name is required';
    if (!formData.email.trim()) newErrors.email = 'Email is required';
    if (!formData.message.trim()) newErrors.message = 'Message is required';
    else if (!/\S+@\S+\.\S+/.test(formData.email)) newErrors.email = 'Email is invalid';

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (validateForm()) {
      // Implement form submission logic here (e.g., send data to a server)
      console.log('Form submitted:', formData);

      setSubmitted(true);
      alert('Thank you for your message!');

      // Reset form after submission
      setFormData({
        name: '',
        email: '',
        message: ''
      });
      setErrors({});
    } else {
      setSubmitted(false);
    }
  };

  return (
    <section id="contact" className="mt-6">
      <div className="container">
        <h2 className="text-center">Contact Me</h2>
        <form id="contactForm" onSubmit={handleSubmit}>
          <div className="mb-3">
            <label htmlFor="name" className="form-label">Name</label>
            <input
              type="text"
              className="form-control"
              id="name"
              value={formData.name}
              onChange={handleChange}
              required
            />
            {errors.name && <div className="text-danger">{errors.name}</div>}
          </div>
          <div className="mb-3">
            <label htmlFor="email" className="form-label">Email</label>
            <input
              type="email"
              className="form-control"
              id="email"
              value={formData.email}
              onChange={handleChange}
              required
            />
            {errors.email && <div className="text-danger">{errors.email}</div>}
          </div>
          <div className="mb-3">
            <label htmlFor="message" className="form-label">Message</label>
            <textarea
              className="form-control"
              id="message"
              rows="4"
              value={formData.message}
              onChange={handleChange}
              required
            ></textarea>
            {errors.message && <div className="text-danger">{errors.message}</div>}
          </div>
          <button type="submit" style={{ backgroundColor: 'darkorange', borderColor: 'orange' }}
            className="btn btn-primary">Submit</button>
        </form>
        {submitted && !Object.keys(errors).length && (
          <p className="text-center mt-3">Thank you for your message!</p>
        )}
      </div>
    </section>
  );
};

export default ContactForm;

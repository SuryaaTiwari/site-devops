import React, { useState } from 'react';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    setSubmitted(true);
    setTimeout(() => {
      setFormData({ name: '', email: '', subject: '', message: '' });
      setSubmitted(false);
    }, 3000);
  };

  return (
    <div className="container" style={{ marginTop: '40px', marginBottom: '60px' }}>
      <div style={{ maxWidth: '600px', margin: '0 auto' }}>
        <h1 style={{ fontSize: '36px', marginBottom: '10px', color: '#2c3e50', textAlign: 'center' }}>
          Get in Touch
        </h1>
        <p style={{ color: '#666', marginBottom: '40px', textAlign: 'center' }}>
          Have questions? Want to suggest a tutorial? I'd love to hear from you!
        </p>

        {submitted && (
          <div style={{
            background: '#d4edda',
            border: '1px solid #c3e6cb',
            color: '#155724',
            padding: '15px',
            borderRadius: '5px',
            marginBottom: '20px',
            textAlign: 'center'
          }}>
            ✓ Thank you! Your message has been sent successfully.
          </div>
        )}

        <form onSubmit={handleSubmit} style={{ background: 'white', padding: '30px', borderRadius: '8px', boxShadow: '0 2px 10px rgba(0,0,0,0.1)' }}>
          <div className="form-group">
            <label htmlFor="name">Name</label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
              placeholder="Your name"
            />
          </div>

          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              placeholder="your@email.com"
            />
          </div>

          <div className="form-group">
            <label htmlFor="subject">Subject</label>
            <input
              type="text"
              id="subject"
              name="subject"
              value={formData.subject}
              onChange={handleChange}
              required
              placeholder="Message subject"
            />
          </div>

          <div className="form-group">
            <label htmlFor="message">Message</label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              required
              placeholder="Your message..."
            />
          </div>

          <button type="submit" className="submit-btn" style={{ width: '100%' }}>
            Send Message
          </button>
        </form>

        <div style={{ marginTop: '40px', textAlign: 'center' }}>
          <h3 style={{ marginBottom: '20px', color: '#2c3e50' }}>Connect with Me</h3>
          <div style={{ display: 'flex', justifyContent: 'center', gap: '20px', flexWrap: 'wrap' }}>
            <a href="#" style={{ fontSize: '20px', textDecoration: 'none', color: '#667eea' }} title="Twitter">
              𝕏 Twitter
            </a>
            <a href="#" style={{ fontSize: '20px', textDecoration: 'none', color: '#667eea' }} title="LinkedIn">
              💼 LinkedIn
            </a>
            <a href="#" style={{ fontSize: '20px', textDecoration: 'none', color: '#667eea' }} title="GitHub">
              🐙 GitHub
            </a>
            <a href="mailto:contact@devopstutorials.in" style={{ fontSize: '20px', textDecoration: 'none', color: '#667eea' }} title="Email">
              ✉️ Email
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

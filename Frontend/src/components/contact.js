import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmitClick = () => {
    console.log("Form Submitted:", formData);
    alert("Thank you for your message!");
    setFormData({ name: "", email: "", subject: "", message: "" });
  };

  const handleLogout = () => {
    localStorage.removeItem("username");
    navigate("/");
  };

  return (
    <div className="contact-page">
      {/* Header Section */}
      <header className="custom-header">
        <div className="container">
          <h1>Contact Us</h1>
          <p>Your trusted partner for all facility management services.</p>

          {/* Flex container for buttons */}
          <div className="custom-header-buttons">
            <a href="/Home" className="custom-home-link">
              Home
            </a>
            <button className="custom-exit-btn" onClick={handleLogout}>
              Logout
            </button>
          </div>
        </div>
      </header>

      {/* Contact Information Section */}
      <section className="custom-contact-info">
        <div className="container">
          <div className="info-box">
            <h2>Get In Touch</h2>
            <p>
              If you have any questions, feel free to reach out to us through
              the following channels:
            </p>
            <div className="custom-contact-details">
              <div className="custom-detail">
                <i className="fas fa-phone"></i>
                <p>
                  <strong>Phone:</strong> +91 9381680053
                </p>
              </div>
              <div className="custom-detail">
                <i className="fas fa-envelope"></i>
                <p>
                  <strong>Email:</strong> infofacilityservices@gmail.com
                </p>
              </div>
              <div className="custom-detail">
                <i className="fas fa-map-marker-alt"></i>
                <p>
                  <strong>Address:</strong> 77-106-11A, Prajashakthi Nagar,
                  Payakapuram, Vijayawada
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Form Section */}
      <section className="custom-contact-form">
        <div className="container">
          <h2>Send Us a Message</h2>
          <form>
            <div className="custom-form-group">
              <label htmlFor="name">Full Name</label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
              />
            </div>
            <div className="custom-form-group">
              <label htmlFor="email">Email Address</label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </div>
            <div className="custom-form-group">
              <label htmlFor="subject">Subject</label>
              <input
                type="text"
                id="subject"
                name="subject"
                value={formData.subject}
                onChange={handleChange}
                required
              />
            </div>
            <div className="custom-form-group">
              <label htmlFor="message">Your Message</label>
              <textarea
                id="message"
                name="message"
                rows="5"
                value={formData.message}
                onChange={handleChange}
                required
              ></textarea>
            </div>
            <button className="custom-submit-btn" onClick={handleSubmitClick}>
              Submit
            </button>
          </form>
        </div>
      </section>
    </div>
  );
};

export default ContactPage;

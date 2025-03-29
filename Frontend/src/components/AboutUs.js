import React from "react";
import "./AboutUs.css"; // Import your custom CSS for additional styling

function AboutUs() {
  const services = [
    "Agriculture",
    "Beauty and Spa",
    "Baby Care",
    "Caterers",
    "Consultants",
    "Contractors",
    "Courier Services",
    "Daily Needs",
    "Driving Schools",
    "Event Organizers",
    "Education",
    "Gym",
    "Hospitals",
    "Home Decor",
    "Housekeeping Services",
    "Hotels",
    "Hostels",
    "Security",
    "Repair and Services",
  ];

  return (
    <div className="container mt-4">
      <div className="about-us-container p-4">
        <header className="header">
          <h1>About Us</h1>
        </header>
        <div className="content">
          <p>
            Welcome to our platform, your go-to source for connecting with
            skilled and reliable workers across a wide range of services. We
            understand that finding the right personnel for specific tasks can
            be challenging, and that's why we're here to make it easy for you.
          </p>
          <p>
            Our mission is to provide you with access to a network of
            professionals who are experts in their respective fields. Whether
            you need help with agriculture, beauty and spa services, baby care,
            or any other service, we have the right people ready to assist you.
          </p>
          <p>
            We are committed to ensuring that each worker on our platform meets
            high standards of quality and professionalism. By carefully vetting
            and selecting only the best, we guarantee that you receive the
            highest level of service every time.
          </p>
          <h2>Our Services</h2>
          <div className="services-buttons">
            {services.map((service) => (
              <button key={service} className="service-btn">
                {service}
              </button>
            ))}
          </div>
          <h2>Why Choose Us?</h2>
          <p>
            By choosing our platform, you gain access to a reliable and
            professional workforce tailored to meet your specific needs. Our
            experienced team ensures that every service provider is equipped
            with the skills and knowledge to deliver outstanding results.
          </p>
          <p>
            We believe in the importance of trust, quality, and customer
            satisfaction. Our goal is to make your life easier by providing you
            with the workforce you need, whenever you need it.
          </p>
        </div>
      </div>
    </div>
  );
}

export default AboutUs;

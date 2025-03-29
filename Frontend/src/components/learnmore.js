import React from "react";
import "./learnmore.css"; // Ensure you have a CSS file for styling

const LearnMore = () => {
  return (
    <div className="learn-more-page">
      <header className="learn-more-header">
        <h1>Facility Management Services</h1>
        <p>
          Learn more about our comprehensive range of services that ensure your
          building operates efficiently and effectively.
        </p>
      </header>

      <section className="learn-more-content">
        <div className="service-section">
          <h2>Building Maintenance and Operations</h2>
          <p>
            We provide preventive maintenance, repair services, and energy
            management to keep your building’s infrastructure in optimal
            condition. Our goal is to ensure that all systems, such as HVAC,
            electrical, and plumbing, function efficiently, reducing downtime
            and operational costs.
          </p>
        </div>

        <div className="service-section">
          <h2>Space Management</h2>
          <p>
            Space planning is critical to ensuring that your workspace is used
            effectively. We help you organize and optimize space to improve
            productivity and accommodate the evolving needs of your
            organization. Our move management services ensure seamless
            transitions with minimal disruption.
          </p>
        </div>

        <div className="service-section">
          <h2>Health and Safety Management</h2>
          <p>
            Health and safety are at the core of our facility management
            services. We conduct regular inspections and implement safety
            protocols to ensure compliance with regulatory standards, promoting
            a safe environment for all building occupants.
          </p>
        </div>

        <div className="service-section">
          <h2>Cleaning and Sanitation</h2>
          <p>
            We offer professional cleaning and sanitation services to ensure
            that your facility remains hygienic and clean, reducing the spread
            of germs and enhancing employee wellness. Our services are tailored
            to meet the specific needs of your industry.
          </p>
        </div>

        <div className="service-section">
          <h2>Security Services</h2>
          <p>
            We provide comprehensive security solutions, including access
            control, CCTV surveillance, and on-site security personnel, to keep
            your facility safe and secure. Our services are designed to protect
            your assets, staff, and visitors.
          </p>
        </div>
      </section>

      <footer className="learn-more-footer">
        <p>
          Want to know more? <a href="/contact">Contact us</a> today for a
          consultation.
        </p>
      </footer>
    </div>
  );
};

export default LearnMore;

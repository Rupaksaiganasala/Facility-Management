import React from "react";
import { useNavigate } from "react-router-dom";
import "./Header.css";
import { FaSearch } from "react-icons/fa";

const Header = () => {
  const navigate = useNavigate();
  return (
    <div className="home-container">
      <div className="top-buttons">
        <button className="top-button" onClick={() => navigate("/Register")}>
          Sign Up
        </button>
        <button className="top-button" onClick={() => navigate("/login")}>
          Login
        </button>
        <button
          className="top-button"
          onClick={() => navigate("/Registerasworker")}
        >
          Register As Worker
        </button>
        <button className="top-button" onClick={() => navigate("/learnmore")}>
          Learn More
        </button>
      </div>
      <section className="hero-section">
        <div className="hero-overlay"></div>
        <div className="hero-content">
          <h1>Welcome to Our Service</h1>
          <p>One-stop solution for all your needs.</p>
        </div>
      </section>
    </div>
  );
};

export default Header;

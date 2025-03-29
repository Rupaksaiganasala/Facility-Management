import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import axios from "axios";
import "./Lr.css";

function Register() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [fname, setFname] = useState("");
  const [lname, setLname] = useState("");
  const navigate = useNavigate();

  const validateForm = () => {
    if (!fname || !lname || !email || !password) {
      alert("Please fill in all fields.");
      return false;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      alert("Please enter a valid email address.");
      return false;
    }

    const pasRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*]).{6,}$/;
    if (!pasRegex.test(password)) {
      alert(
        "Password must be at least 6 characters long and contain at least one uppercase letter, one lowercase letter, one digit, and one special character."
      );
      return false;
    }

    return true;
  };

  const submit = async (e) => {
    e.preventDefault();
    if (!validateForm()) return;

    try {
      const res = await axios.post("https://fm-backend.vercel.app/signup", {
        email,
        password,
        fname,
        lname,
      });
      if (res.data === "exist") {
        alert("User already exists.");
        navigate("/Login");
      } else {
        sessionStorage.setItem("username", email);
        alert("you are Registered Sucessfully");
        navigate("/Home");
      }
    } catch (error) {
      console.error("Error:", error);
      alert("Something went wrong. Please try again later.");
    }
  };

  return (
    <div className="a">
      <div className="auth-form-container">
        <h1 className="reg">REGISTER</h1>
        <form className="register-form" method="POST">
          <label className="lgn">First Name</label>
          <input
            type="text"
            placeholder="Enter your first name"
            value={fname}
            onChange={(e) => setFname(e.target.value)}
          />
          <label className="lgn">Last Name</label>
          <input
            type="text"
            placeholder="Enter your last name"
            value={lname}
            onChange={(e) => setLname(e.target.value)}
          />
          <label className="lgn">Email</label>
          <input
            type="email"
            placeholder="Enter your e-mail"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <label className="lgn" htmlFor="password">
            Password
          </label>
          <input
            type="password"
            placeholder="Enter password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <br></br>
          <button type="submit" onClick={submit}>
            Register
          </button>
          <p align="center" style={{ color: "white" }}>
            Already have an account ?
          </p>
          <div align="center">
            <Link to="/Login">Login</Link>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Register;

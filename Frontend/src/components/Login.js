import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import axios from "axios";
import "./Lr.css";

function Login() {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPass] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false); // Initially, no loading

  const submit = async (e) => {
    e.preventDefault();
    setLoading(true); // Start loading when form is submitted
    setError(""); // Clear any previous errors

    try {
      const res = await axios.post("https://fm-backend.vercel.app/login", {
        email,
        password,
      });

      if (res.data === "exist") {
        // If login is successful, store the username in sessionStorage
        sessionStorage.setItem("username", email);
        navigate("/Home"); // Redirect to Home page after login
      } else if (res.data === "notexist") {
        setError("User not found");
      }
    } catch (error) {
      console.error("Error:", error);
      setError("Wrong details");
    } finally {
      setLoading(false); // Stop loading after API response
    }
  };

  return (
    <div className="a">
      <div className="auth-form-container">
        <h2 className="log">LOGIN</h2>

        {loading ? (
          <div className="loading-container">
            <div className="spinner"></div>
          </div>
        ) : (
          <form className="login-form" method="POST" onSubmit={submit}>
            <label className="lgn">Email</label>
            <input
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              type="email"
              placeholder="Enter your e-mail"
              id="email"
              name="email"
              required
            />
            <label className="lgn">Password</label>
            <input
              value={password}
              onChange={(e) => setPass(e.target.value)}
              type="password"
              placeholder="Enter password"
              id="password"
              name="password"
              required
            />
            <br />
            <button className="loginbtn" type="submit" disabled={loading}>
              {loading ? "" : "Submit"}
            </button>
          </form>
        )}

        {error && <p className="error-message">{error}</p>}
        <br />
        <div align="center">
          <Link to="/Register">Sign up</Link>
        </div>
      </div>
    </div>
  );
}

export default Login;

import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import Home from "./components/Home";
import Login from "./components/Login";
import Register from "./components/Register";
import LearnMore from "./components/learnmore";
import Registerasworker from "./components/Registerasworker";
import Profile from "./components/Profile";
import AboutUs from "./components/AboutUs";
import ContactPage from "./components/contact";
import EngineersList from "./components/EngineersList";
import PrivateRoute from "./components/PrivateRoute"; // Import PrivateRoute

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Header />} />
        <Route path="/Login" element={<Login />} />
        <Route path="/Register" element={<Register />} />
        {/* Protect Home, Profile, and any other routes that require authentication */}
        <Route
          path="/Home"
          element={
            <PrivateRoute>
              <Home />
            </PrivateRoute>
          }
        />
        <Route
          path="/Profile"
          element={
            <PrivateRoute>
              <Profile />
            </PrivateRoute>
          }
        />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/Eng/:name" element={<EngineersList />} />
        <Route path="/Registerasworker" element={<Registerasworker />} />
        <Route path="/AboutUs" element={<AboutUs />} />
        <Route path="/learnmore" element={<LearnMore />} />
      </Routes>
    </Router>
  );
}

export default App;

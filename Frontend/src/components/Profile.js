import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import "./Profile.css";

const Profile = () => {
  const [username, setUsername] = useState(null);
  const [data, setData] = useState({});
  const [showProfile, setShowProfile] = useState(false);
  const [isLoading, setIsLoading] = useState(false); // Loading state
  const navigate = useNavigate();

  useEffect(() => {
    const checkAuthentication = () => {
      const storedUsername = sessionStorage.getItem("username");
      if (!storedUsername) {
        navigate("/login");
      } else {
        setUsername(storedUsername);
      }
    };

    checkAuthentication();
  }, [navigate]);

  const handleLogout = () => {
    sessionStorage.removeItem("username");
    navigate("/");
  };

  const handleProfileClick = () => {
    setShowProfile(!showProfile); // Toggle profile visibility

    if (!showProfile && username) {
      setIsLoading(true); // Start loading
      axios
        .get(`https://fm-backend.vercel.app/profile?username=${username}`)
        .then((response) => {
          console.log(response.data);
          setData(response.data || {});
        })
        .catch((error) => {
          console.error("Error fetching data:", error);
          setData({});
        })
        .finally(() => {
          setIsLoading(false); // Stop loading after data is fetched
        });
    }
  };

  return (
    <div className="profile-container">
      <h1>Profile</h1>
      <button className="profile-button" onClick={handleProfileClick}>
        {showProfile ? "Hide Profile" : "Show Profile"}
      </button>
      {showProfile && (
        <div className="profile-box">
          {isLoading ? ( // Show loading indicator while data is being fetched
            <p>Loading...</p>
          ) : (
            <>
              <p>
                <strong>Username:</strong> {data.fname} {data.lname}
              </p>
              <p>
                <strong>Email:</strong> {data.email}
              </p>
            </>
          )}
        </div>
      )}
      <button className="logout-button" onClick={handleLogout}>
        Logout
      </button>
    </div>
  );
};

export default Profile;

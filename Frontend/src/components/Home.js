import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "./Home.css";
import sampleData from "./data";

function Home() {
  const navigate = useNavigate();
  const [searchQuery, setSearchQuery] = useState("");
  const [filteredData, setFilteredData] = useState([]);

  useEffect(() => {
    // Filter data based on search query
    if (searchQuery.trim()) {
      const lowerCaseQuery = searchQuery.toLowerCase();
      const filtered = sampleData.filter((item) =>
        item.name.toLowerCase().includes(lowerCaseQuery)
      );
      setFilteredData(filtered);
    } else {
      setFilteredData(sampleData);
    }
  }, [searchQuery]);

  const handleImageClick = (name) => {
    navigate(`/Eng/${name}`);
  };

  return (
    <div className="home-container">
      <header className="header">
        <input
          type="text"
          className="search"
          placeholder="Search facilities..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />
        <b className="hom" onClick={() => navigate("/AboutUs")}>
          About Us
        </b>
        <b className="hom" onClick={() => navigate("/contact")}>
          Contact Us
        </b>
        <button className="hom" onClick={() => navigate("/profile")}>
          Profile
        </button>
      </header>
      <div className="scroll-container">
        <div className="container">
          {filteredData.map((item) => (
            <div className="image-container" key={item.name}>
              <img
                src={item.imageUrl}
                alt={item.name}
                onClick={() => handleImageClick(item.name)} // Pass 'name' correctly
              />
              <button onClick={() => handleImageClick(item.name)}>
                {item.name}
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Home;

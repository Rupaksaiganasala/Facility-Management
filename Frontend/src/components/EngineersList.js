import React, { useEffect, useState } from "react";
import axios from "axios";
import "./EngineersList.css";
import { useParams } from "react-router-dom";

function EngineersList() {
  const { name } = useParams(); // Capture 'name' parameter from the route
  const [items, setItems] = useState([]);
  const [selectedItem, setSelectedItem] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [callStatus, setCallStatus] = useState("");

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.post(
          "https://fm-backend.vercel.app/api/categories", // Backend API to fetch worker details
          { name: name }
        );
        if (Array.isArray(response.data)) {
          setItems(response.data);
        } else {
          console.error("Unexpected response data:", response.data);
          setItems([]);
        }
      } catch (error) {
        setError("Error fetching data.");
        console.error(
          "Error fetching data:",
          error.response ? error.response.data : error.message
        );
        setItems([]);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [name]);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>{error}</div>;
  if (items.length === 0) return <div>No data found</div>;

  const handleToggleDetails = (item) => {
    setSelectedItem(
      selectedItem && selectedItem._id === item._id ? null : item
    );
  };

  const handleCallWorker = async (worker) => {
    try {
      const response = await axios.post(
        "https://fm-backend.vercel.app/api/call",
        {
          to: worker.contact, // Worker’s phone number
        }
      );
      if (response.data.success) {
        setCallStatus(`Calling ${worker.fname}...`);
      } else {
        setCallStatus("Failed to make the call.");
      }
    } catch (error) {
      setCallStatus(
        "Error making the call: " +
          (error.response ? error.response.data : error.message)
      );
    }
  };

  return (
    <div className="EngineersList">
      <h1>Details of Workers:</h1>
      <ul>
        {items.map((item) => (
          <li key={item._id}>
            <strong>{item.fname}</strong>
            <button onClick={() => handleToggleDetails(item)}>
              {selectedItem && selectedItem._id === item._id
                ? "Hide Details"
                : "Show Details"}
            </button>
            {selectedItem && selectedItem._id === item._id && (
              <div className="details-form">
                <p>
                  <strong>First name:</strong> {selectedItem.fname}
                </p>
                <p>
                  <strong>Last Name:</strong> {selectedItem.lname}
                </p>
                <p>
                  <strong>Skill:</strong> {selectedItem.skills}
                </p>
                <p>
                  <strong>Contact:</strong> {selectedItem.contact}
                </p>
                <button onClick={() => handleCallWorker(selectedItem)}>
                  Call {selectedItem.fname}
                </button>
                {callStatus && <p>{callStatus}</p>}
              </div>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default EngineersList;

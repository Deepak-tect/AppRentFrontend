import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addProperty } from "../redux/propertiesSlice";
import { useNavigate } from "react-router-dom";
import "../styles/PropertyForm.css";
import {createProperty} from "../utils/property.js";

function PropertyForm() {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [area, setArea] = useState("");
  const [bedrooms, setBedrooms] = useState("");
  const [bathrooms, setBathrooms] = useState("");
  const [address, setAddress] = useState("");
  const [city, setCity] = useState("");
  const [state, setState] = useState("");
  const [zipCode, setZipCode] = useState("");
  const [price, setPrice] = useState("");
  const [availabilityDate, setAvailabilityDate] = useState("");
  const [amenities, setAmenities] = useState("");
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    const newProperty = {
       // This should be replaced by a real ID from the backend
      title,
      description,
      area,
      bedrooms,
      bathrooms,
      address,
      city,
      state,
      zipCode,
      price,
      availabilityDate,
      amenities: amenities.split(",").map((amenity) => amenity.trim()),
    };


    createProperty(newProperty)
      .then((property) => {
       
        dispatch(addProperty(property));
        navigate("/seller-dashboard");
        
      })
      .catch((error) => {
        console.error("Property creation failed:", error.message);
      });
      
    
  };

  return (
    <div className="property-form-container">
      <h2>Post Property</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Title</label>
          <input
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            required
          />
        </div>
        <div>
          <label>Description</label>
          <textarea
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            required
          ></textarea>
        </div>
        <div>
          <label>Area (sq ft)</label>
          <input
            type="number"
            value={area}
            onChange={(e) => setArea(e.target.value)}
            required
          />
        </div>
        <div>
          <label>Bedrooms</label>
          <input
            type="number"
            value={bedrooms}
            onChange={(e) => setBedrooms(e.target.value)}
            required
          />
        </div>
        <div>
          <label>Bathrooms</label>
          <input
            type="number"
            value={bathrooms}
            onChange={(e) => setBathrooms(e.target.value)}
            required
          />
        </div>
        <div>
          <label>Address</label>
          <input
            type="text"
            value={address}
            onChange={(e) => setAddress(e.target.value)}
            required
          />
        </div>
        <div>
          <label>City</label>
          <input
            type="text"
            value={city}
            onChange={(e) => setCity(e.target.value)}
            required
          />
        </div>
        <div>
          <label>State</label>
          <input
            type="text"
            value={state}
            onChange={(e) => setState(e.target.value)}
            required
          />
        </div>
        <div>
          <label>Zip Code</label>
          <input
            type="text"
            value={zipCode}
            onChange={(e) => setZipCode(e.target.value)}
            required
          />
        </div>
        <div>
          <label>Rent Price</label>
          <input
            type="number"
            value={price}
            onChange={(e) => setPrice(e.target.value)}
            required
          />
        </div>
        <div>
          <label>Availability Date</label>
          <input
            type="date"
            value={availabilityDate}
            onChange={(e) => setAvailabilityDate(e.target.value)}
            required
          />
        </div>
        <div>
          <label>Nearby Amenities</label>
          <input
            type="text"
            value={amenities}
            onChange={(e) => setAmenities(e.target.value)}
          />
        </div>
        <button type="submit">Save</button>
      </form>
    </div>
  );
}

export default PropertyForm;

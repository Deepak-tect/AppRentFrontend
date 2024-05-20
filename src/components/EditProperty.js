import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { updateProperty } from '../redux/propertiesSlice';
import '../styles/EditProperty.css';
import {getPropertyDetailsById, putProperty} from "../utils/property.js"
function EditProperty() {
  const { id } = useParams();
  
  const navigate = useNavigate();
  const dispatch = useDispatch();
  //const properties = useSelector((state) => state.properties.properties);
  const [property, setProperty] = useState({
    title: '',
    description: '',
    area: '',
    bedrooms: '',
    bathrooms: '',
    address: '',
    city: '',
    state: '',
    zipCode: '',
    price: '',
    availabilityDate:'',
    amenities: [],
  });

  useEffect(() => {
    const fetchPropertyDetails = async () => {
      try {
        const response = await getPropertyDetailsById(id);
        
        setProperty(response.data);
      } catch (error) {
        console.error('Error fetching property details:', error.message);
      }
    };
  
    fetchPropertyDetails();
  },[]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setProperty({ ...property, [name]: value });
  };



  const handleSubmit = (e) => {
    e.preventDefault();
    putProperty(property._id,property)
  .then((updatedProperty) => {
    
  })
  .catch((error) => {
    // Handle property update failure
    console.error('Property update failed:', error.message);
  });
    dispatch(updateProperty(property));
    navigate('/seller-dashboard');
  };

  return (
    <div className="edit-property-container">
      <h2>Edit Property</h2>
      <form onSubmit={handleSubmit}>
        
        <div>
          <label>Title</label>
          <input type="text" name="title" value={property.title} onChange={handleChange} />
        </div>
        <div>
          <label>Description</label>
          <textarea name="description" value={property.description} onChange={handleChange}></textarea>
        </div>
        {/* Other input fields for property details */}
        <div>
          <label>Area (sq ft)</label>
          <input type="number" name="area" value={property.area} onChange={handleChange}/>
        </div>
        <div>
          <label>Bedrooms</label>
          <input type="number" name="bedrooms"value={property.bedrooms} onChange={handleChange} />
        </div>
        <div>
          <label>Bathrooms</label>
          <input type="number" name="bathrooms" value={property.bathrooms} onChange={handleChange} />
        </div>
        <div>
          <label>Address</label>
          <input type="text" name="address" value={property.address} onChange={handleChange} />
        </div>
        <div>
          <label>City</label>
          <input type="text" name="city" value={property.city} onChange={handleChange} />
        </div>
        <div>
          <label>State</label>
          <input type="text" name="state" value={property.state} onChange={handleChange} />
        </div>
        <div>
          <label>Zip Code</label>
          <input type="text" name="zipCode" value={property.zipCode} onChange={handleChange} />
        </div>
        <div>
          <label>Rent Price</label>
          <input type="number" name="price" value={property.price} onChange={handleChange} />
        </div>
        <div>
          <label>Availability Date</label>
          <input type="date" name="availabilityDate" value={property.availabilityDate} onChange={handleChange} />
        </div>
        <div>
          <label>Nearby Amenities</label>
          <input type="text" name="amenities" value={property.amenities} onChange={handleChange} />
        </div>
        <button type="submit">Update Property</button>
      </form>
    </div>
  );
}

export default EditProperty;
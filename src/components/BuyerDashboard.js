

import React, { useEffect, useState } from 'react';
import { getAllPropertyDetails } from '../utils/property';
import FilterForm from './FilterForm';
import { Link } from 'react-router-dom';
import '../styles/BuyerDashboard.css';

function BuyerDashboard() {
  const [properties, setProperties] = useState([]);
  const [filteredProperties, setFilteredProperties] = useState([]);

  useEffect(() => {
    const getProperties = async () => {
      const props = await getAllPropertyDetails();
      setProperties(props.data);
      setFilteredProperties(props.data); 
    };
    getProperties();
  }, []);

  return (
    <div className="buyer-dashboard">
      <h2>Available Rental Properties</h2>
      <FilterForm properties={properties} setFilteredProperties={setFilteredProperties} />
      <ul>
        {filteredProperties.map((property) => (
          <li key={property._id}>
            <span>{property.title}</span>
            <span>{property.city}</span>
            <span>${property.price}</span>
            <Link to={`/property-details/${property._id}`}>View Details</Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default BuyerDashboard;
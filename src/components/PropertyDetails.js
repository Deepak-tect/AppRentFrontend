import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import '../styles/PropertyDetails.css';
import '../styles/DisabledButton.css';
import { getPropertyDetailsById } from '../utils/property';
import getUser from '../utils/user';

function PropertyDetails() {
  const { id } = useParams();
  const [property, setProperty] = useState();
  const [interested, setInterested] = useState(false);
  const [userDetails, setUserDetails] = useState({});
  useEffect(()=>{
    const getPropById = async()=>{
      const res = await getPropertyDetailsById(id);
      setProperty(res.data)
    }
    getPropById();
  },[])
  if (!property) {
    return <div>Loading...</div>;
  }
  const handleClick = async(id) =>{
    const data = await getUser(id);
    (data)
     setUserDetails(data.data);
     setInterested(true) 
  }

  return (
    <>
    <div className="property-details-container">
      <h2>{property.title}</h2>
      <p><strong>Description:</strong> {property.description}</p>
      <p><strong>Area:</strong> {property.area} sq ft</p>
      <p><strong>Bedrooms:</strong> {property.bedrooms}</p>
      <p><strong>Bathrooms:</strong> {property.bathrooms}</p>
      <p><strong>Address:</strong> {property.address}, {property.city}, {property.state} {property.zipCode}</p>
      <p><strong>Rent Price:</strong> ${property.price}</p>
      <p><strong>Availability Date:</strong> {property.availabilityDate}</p>
      <p><strong>Nearby Amenities:</strong> {property.amenities.join(', ')}</p>
      <button  onClick={()=>handleClick(property._id)} disabled={interested} className={interested ? "disabled-button" : ""}>I'm Interested</button>
    </div>
    {interested &&  
     <div className="property-details-container">
     <h2>Seller Details: </h2>
     <p><strong>Name:</strong> {userDetails.firstName + userDetails.lastName}</p>
     <p><strong>Email:</strong> {userDetails.email}</p>
     <p><strong>Contact No:</strong> {userDetails.phoneNumber}</p>
   </div>}
    </>
  );
}

export default PropertyDetails;

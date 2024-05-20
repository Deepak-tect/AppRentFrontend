

// import React, { useEffect, useState } from "react";
// import { Link } from "react-router-dom";
// import "../styles/SellerDashboard.css";
// import { deleteProperty, getAllPropertyDetailsbyUser } from "../utils/property";

// function SellerDashboard() {
//   const [properties, setProperties] = useState([]);
//   const [loading, setLoading] = useState(false);
//   const [error, setError] = useState(null);
 
//   useEffect(() => {
//     const getDetails = async () => {
//       try {
//         setLoading(true); 
//         const res = await getAllPropertyDetailsbyUser();
        
//         setProperties(res.data);
        
//       } catch (err) {
//         setError("Failed to fetch properties");
//         console.error(err);
//       } finally {
//         setLoading(false); 
//       }
//     };
    
//     getDetails();
//   }, []);

//   const handleDelete = async (id) => {
//     try {
//       await deleteProperty(id);
//       setProperties((prevProperties) => prevProperties.filter((property) => property._id !== id));
//     } catch (err) {
//       console.error("Failed to delete property:", err);
//       setError("Failed to delete property");
//     }
//   };

//   if (loading) {
//     return <div>Loading...</div>;
//   }

//   if (error) {
//     return <div>{error}</div>;
//   }

//   return (
//     <div className="seller-dashboard">
//       <h2>Your Properties</h2>
//       <Link to="/property/new">Post a New Property</Link>
//       <ul>
//         { properties.map((property) => (
//           <li key={property._id}>
//             <span>{property.title}</span>
//             <div>
//               <Link to={`/edit-property/${property._id}`}>Edit</Link>
//               <button onClick={() => handleDelete(property._id)}>Delete</button>
//             </div>
//           </li>
//         ))}
//       </ul>
//     </div>
//   );
// }

// export default SellerDashboard;

import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "../styles/SellerDashboard.css";
import { deleteProperty, getAllPropertyDetailsbyUser } from "../utils/property";

function SellerDashboard() {
  const [properties, setProperties] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
 
  useEffect(() => {
    const getDetails = async () => {
      try {
        setLoading(true); 
        const res = await getAllPropertyDetailsbyUser();
        
        setProperties(res.data);
      } catch (err) {
        setError("Failed to fetch properties");
        console.error(err);
      } finally {
        setLoading(false); 
      }
    };
    
    getDetails();
  }, []);

  const handleDelete = async (id) => {
    try {
      await deleteProperty(id);
      setProperties((prevProperties) => prevProperties.filter((property) => property._id !== id));
    } catch (err) {
      console.error("Failed to delete property:", err);
      setError("Failed to delete property");
    }
  };

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>{error}</div>;
  }

  return (
    <div className="seller-dashboard">
      <h2>Your Properties</h2>
      <Link to="/property/new">Post a New Property</Link>
      <ul>
        { !properties || properties.length === 0 ? (
          <li>No properties found. <Link to="/property/new">Create a new property</Link></li>
        ) : (
          properties.map((property) => (
            <li key={property._id}>
              <span>{property.title}</span>
              <div>
                <Link to={`/edit-property/${property._id}`}>Edit</Link>
                <button onClick={() => handleDelete(property._id)}>Delete</button>
              </div>
            </li>
          ))
        )}
      </ul>
    </div>
  );
}

export default SellerDashboard;
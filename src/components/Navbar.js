import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import "../styles/Navbar.css";


function Navbar() {
    const role = localStorage.getItem("role");
    const navigate = useNavigate();
    
    const handleHomeClick = () => {
      ("Gett")
      if (role === 'seller') {
        
        navigate('/seller-dashboard');
      } else if (role === 'buyer') {
        navigate('/buyer-dashboard');
      } 
    };
    const handleLogout = () =>{
        localStorage.removeItem("accessToken");
        localStorage.removeItem("role");
        navigate("/login");
    }
  return (
    <nav>
      <div>
        <button onClick={handleHomeClick}>Home</button>
      </div>
      <div>
        <button onClick={handleLogout}>Logout</button>
      </div>
    </nav>
  );
}

export default Navbar;
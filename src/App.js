import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Login from './components/Login';
import Register from './components/Register';
import SellerDashboard from './components/SellerDashboard';
import BuyerDashboard from './components/BuyerDashboard';
import PropertyForm from './components/PropertyForm';
import PropertyDetails from './components/PropertyDetails';
import EditProperty from './components/EditProperty';

function App() {
  return (
    <div className="App">
      <Routes>
      <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        
        <Route path="/seller-dashboard" element={<SellerDashboard />} />
        <Route path="/buyer-dashboard" element={<BuyerDashboard />} />
        <Route path="/property/new" element={<PropertyForm />} />
        <Route path="/property-details/:id" element={<PropertyDetails />} />
        <Route path="/edit-property/:id" element={<EditProperty/>}/>
        <Route path="/" element={<Login />} />
      </Routes>
    </div>
  );
}

export default App;



import React, { useState } from 'react';

const FilterForm = ({ properties, setFilteredProperties }) => {
  const [cityFilter, setCityFilter] = useState('');
  const [priceFilter, setPriceFilter] = useState('');

  const handleCityFilterChange = (e) => {
    const value = e.target.value;
    setCityFilter(value);
    filterProperties(value, priceFilter);
  };

  const handlePriceFilterChange = (e) => {
    const value = e.target.value;
    setPriceFilter(value);
    filterProperties(cityFilter, value);
  };

  const filterProperties = (city, price) => {
    const filteredProps = properties.filter(property => {
      const cityMatch = city === '' || property.city.toLowerCase().includes(city.toLowerCase());
      const priceMatch = price === '' || parseFloat(property.price) <= parseFloat(price);
      return cityMatch && priceMatch;
    });
    setFilteredProperties(filteredProps);
  };

  return (
    <div className="filter-form">
      <label htmlFor="city">Filter by City:</label>
      <input type="text" id="city" value={cityFilter} onChange={handleCityFilterChange} />

      <label htmlFor="price">Filter by Price (max):</label>
      <input type="number" id="price" value={priceFilter} onChange={handlePriceFilterChange} />
    </div>
  );
};

export default FilterForm;
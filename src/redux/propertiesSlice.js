import { createSlice } from '@reduxjs/toolkit';

export const propertiesSlice = createSlice({
  name: 'properties',
  initialState: {
    properties: [],
  },
  reducers: {
    setProperties: (state, action) => {
      state.properties = action.payload;
    },
    addProperty: (state, action) => {
      state.properties.push(action.payload);
    },
    updateProperty: (state, action) => {
      const index = state.properties.findIndex(p => p.id === action.payload.id);
      if (index !== -1) {
        state.properties[index] = action.payload;
      }
    },
    deleteProperty: (state, action) => {
      state.properties = state.properties.filter(p => p.id !== action.payload);
    },
  },
});

export const { setProperties, addProperty, updateProperty, deleteProperty } = propertiesSlice.actions;

export default propertiesSlice.reducer;
import { configureStore } from '@reduxjs/toolkit';
import userReducer from './userSlice';
import propertiesReducer from './propertiesSlice';
import authReducer from './authReducer';

export default configureStore({
  reducer: {
    user: userReducer,
    properties: propertiesReducer,
    auth: authReducer
  },
});
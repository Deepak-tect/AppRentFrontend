import axios from 'axios';
const URL = process.env.REACT_APP_BACKEND_URL
const  registerUser = async(userData) =>{

  const registerEndpoint = `${URL}/users/register`;

  return axios.post(registerEndpoint, userData)
    .then((response) => {
      
      return response.data; 
    })
    .catch((error) => {
      console.error('Registration failed:', error.message);
      throw new Error('Registration failed: ' + error.message);
    });
}
export default registerUser;

import axios from "axios"
const URL = process.env.REACT_APP_BACKEND_URL
// const getUser = async(propertyId) =>{
//     const accessToken = localStorage.getItem("accessToken");
//     return axios.get(`${URL}/interest/add-interests?id=${propertyId}`, {headers: {
//         "Content-Type": "application/json",
//         "Authorization": "Bearer " + accessToken,
//         "ngrok-skip-browser-warning": "69420"
//       }})
//     .then((response) => {
//       if (response.status === 200 || response.status === 201) {
        
//         return response.data;
//       } else {
        
//         throw new Error('Interest failed');
//       }
//     })
//     .catch((error) => {
//       throw new Error('Login failed: ' + error.message);
//     });
// }

const getUser = async (propertyId) => {
  const accessToken = localStorage.getItem("accessToken");
  try {
    const response = await axios.get(`${URL}/interest/add-interests?id=${propertyId}`, {
      headers: {
        "Content-Type": "application/json",
        "Authorization": "Bearer " + accessToken,
        "ngrok-skip-browser-warning": "69420"
      }
    });

    if (response.status === 200 || response.status === 201) {
      return response.data;
    } 
    if (response.status === 204) {
      throw new Error('Interest already expressed in this property');
    } else {
      throw new Error('Interest failed');
    }
  } catch (error) {
    if (error.response) {
      console.log('Error response status:', error.response.status);
      if (error.response.status === 204) {
        throw new Error('Interest already expressed in this property');
      } else {
        throw new Error('Request failed: ' + (error.response.data.message || error.message));
      }
    } else {
      console.log('Error details:', error.message);
      throw new Error('Request failed: ' + error.message);
    }
  }
}

export default getUser;
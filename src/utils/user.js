import axios from "axios"
const URL = process.env.REACT_APP_BACKEND_URL
const getUser = async(propertyId) =>{
    const accessToken = localStorage.getItem("accessToken");
    return axios.get(`${URL}/interest/add-interests?id=${propertyId}`, {headers: {
        "Content-Type": "application/json",
        "Authorization": "Bearer " + accessToken,
        "ngrok-skip-browser-warning": "69420"
      }})
    .then((response) => {
      if (response.status === 200 || response.status === 201) {
        
        return response.data;
      } else {
        
        throw new Error('Interest failed');
      }
    })
    .catch((error) => {
      throw new Error('Login failed: ' + error.message);
    });
}

export default getUser;
import axios from "axios"
const URL = process.env.REACT_APP_BACKEND_URL
const login = async(email, password) =>{
    const body = {
        email: email, 
        password: password
    }
    return axios.post(`${URL}/users/login`, body)
    .then((response) => {
      if (response.status === 200) {
         localStorage.setItem('accessToken', response.data.data.accessToken);
         localStorage.setItem('userId', response.data.data.user._id);
        return true;
      } else {
        
        throw new Error('Login failed');
      }
    })
    .catch((error) => {
      throw new Error('Login failed: ' + error.message);
    });
}

export default login;
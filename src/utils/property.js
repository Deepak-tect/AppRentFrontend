import axios from "axios";
const accessToken = localStorage.getItem("accessToken");
const URL = process.env.REACT_APP_BACKEND_URL;

export const createProperty = async (propertyData) => {
  const accessToken = localStorage.getItem("accessToken");

  try {
    return axios
      .post(`${URL}/property/create-property`, propertyData,{
        headers: {
          "Content-Type": "application/json",
          "Authorization": "Bearer " + accessToken,
        },
      })
      .then((response) => {
        console.log(response)
        if (response.status === 201 ||response.status === 200 ) {
         
            return response.data;
        } else {
          throw new Error("Post property failed");
        }
      });
  } catch (error) {
    console.error("Login failed:", error.message);
  }
};

export const deleteProperty = async (propertyId) => {

  const deletePropertyEndpoint = `${URL}/property/delete-property?id=${propertyId}`;
  const accessToken = localStorage.getItem("accessToken");
  return axios
    .delete(deletePropertyEndpoint,{headers: {
      "Content-Type": "application/json",
      "Authorization": "Bearer " + accessToken,
    }})
    .then((response) => {
      
      return response.status;
    })
    .catch((error) => {
      console.error("Property deletion failed:", error.message);
      throw new Error("Property deletion failed: " + error.message);
    });
};

export const putProperty = async (propertyId, updatedPropertyData) => {

  const updatePropertyEndpoint = `${URL}/property/update-property?id=${propertyId}`;


  return axios
    .post(updatePropertyEndpoint, updatedPropertyData,{
        headers: {
          "Content-Type": "application/json",
          "Authorization": "Bearer " + accessToken,
        },
      })
    .then((response) => {
      response = response.data
      
      return response.data; 
    })
    .catch((error) => {
      
      console.error("Property update failed:", error.message);
      throw new Error("Property update failed: " + error.message);
    });
};

export const getPropertyDetailsById = async (propertyId) => {

  if (!propertyId || typeof propertyId !== 'string') {
    throw new Error('getPropertyDetailsById: Invalid propertyId. It must be a string.');
  }

  
  const baseUrl = `${URL}/property`;
  const params = new URLSearchParams({ id: propertyId });
  const endpoint = `${baseUrl}/get-property-id?${params.toString()}`;

  // 3. Retrieve Access Token Securely
  const accessToken = localStorage.getItem("accessToken"); 

  try {
    const response = await fetch(endpoint, {
      method: 'GET', 
      headers: {
        "Authorization": `Bearer ${accessToken}`, 
        "Content-Type": "application/json", 
        "redirect":"follow",
        "ngrok-skip-browser-warning": "69420"
      },
    });

    if (!response.ok) {
      throw new Error(`Error fetching property details: ${response.statusText}`);
    }

    const data = await response.json();

    return data;
  } catch (error) {
    console.error("Error fetching property details:", error.message);
    throw new Error("Failed to fetch property details");
  }
};


export const getAllPropertyDetails = async () => {

  const baseUrl = `${URL}/property`;
  const endpoint = `${baseUrl}/get-all-property`;

  const accessToken = localStorage.getItem("accessToken"); // Replace with your access token retrieval logic

  try {
    const response = await fetch(endpoint, {
      method: 'GET', // Explicitly specify GET method
      headers: {
        "Authorization": `Bearer ${accessToken}`, // Use template literal for security
        "Content-Type": "application/json", // Assuming JSON data is expected (optional)
        "redirect":"follow",
        "ngrok-skip-browser-warning": "69420"
      },
    });

    if (!response.ok) {
      throw new Error(`Error fetching property details: ${response.statusText}`);
    }

    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Error fetching property details:", error.message);
    throw new Error("Failed to fetch property details");
  }
};
export const getAllPropertyDetailsbyUser = async () => {

  const baseUrl = `${URL}/property`;
  const endpoint = `${baseUrl}/get-property-by-user`;

  const accessToken = localStorage.getItem("accessToken"); // Replace with your access token retrieval logic

  try {
    const response = await fetch(endpoint, {
      method: 'GET', // Explicitly specify GET method
      headers: {
        "Authorization": `Bearer ${accessToken}`, // Use template literal for security
        "Content-Type": "application/json", // Assuming JSON data is expected (optional)
        "redirect":"follow",
        "ngrok-skip-browser-warning": "69420"
      },
    });

    if (!response.ok) {
      throw new Error(`Error fetching property details: ${response.statusText}`);
    }

    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Error fetching property details:", error.message);
    throw new Error("Failed to fetch property details");
  }
};
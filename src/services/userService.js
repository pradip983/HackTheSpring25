import axios from "axios";

const API_URL = "https://expanding-express.vercel.app/api/users";  // Make sure this matches your backend

export const registerUserCustomer = async (userData) => {
    try {
       
        const response = await axios.post(`${API_URL}/registerC`, userData);
      
        return response.data;  // Ensure response data is returned
    } catch (error) {
        console.error("Axios Error:", error.response?.data || error.message);
        return undefined;  // Explicitly return undefined if there's an error
    }
};

export const registerUserVender = async (userData) => {
    try {
     
        const response = await axios.post(`${API_URL}/registerV`, userData);
      
        return response.data;  // Ensure response data is returned
    } catch (error) {
        console.error("Axios Error:", error.response?.data || error.message);
        return undefined;  // Explicitly return undefined if there's an error
    }
};

export const loginUser = async (userData) => {
    try {
         // Debugging log
        const response = await axios.post(`${API_URL}/LogIn`, userData);
        // Debugging log
        return response.data;  // Ensure response data is returned
    } catch (error) {
        console.error("Axios Error:", error.response?.data || error.message);
        return undefined;  // Explicitly return undefined if there's an error
    }
};

export const imageU = async (userData) => {
    try {
       
        const response = await axios.post(`${API_URL}/imageU`, userData);
      
        return response.data;  // Ensure response data is returned
    } catch (error) {
        console.error("Axios Error:", error.response?.data || error.message);
        return undefined;  // Explicitly return undefined if there's an error
    }
};

export const ProfileU = async (userData) => {
    try {
       
        const response = await axios.post(`${API_URL}/ProfileU`, userData);
      
        return response.data;  // Ensure response data is returned
    } catch (error) {
        console.error("Axios Error:", error.response?.data || error.message);
        return undefined;  // Explicitly return undefined if there's an error
    }
};

export const AddFranchise = async (userData) => {
    try {
      
        const response = await axios.post(`${API_URL}/AddFranchise`, userData);
       
        return response.data;  // Ensure response data is returned
    } catch (error) {
        console.error("Axios Error:", error.response?.data || error.message);
        return undefined;  // Explicitly return undefined if there's an error
    }
};

export const AddStartup = async (userData) => {
    try {
        console.log(userData)
        const response = await axios.post(`${API_URL}/AddStartup`, userData);
       console.log("servises addstartup responce", response.data)
        return response.data;  // Ensure response data is returned
    } catch (error) {
        console.error("Axios Error:", error.response?.data || error.message);
        return undefined;  // Explicitly return undefined if there's an error
    }
};

export const getfranchise = async () => {
    try {
       
        const response = await axios.get(`${API_URL}/getfranchise`);
       
        return response.data;  // Ensure response data is returned
    } catch (error) {
        console.error("Axios Error:", error.response?.data || error.message);
        return undefined;  // Explicitly return undefined if there's an error
    }
};

export const getstartup = async () => {
    try {
       
        const response = await axios.get(`${API_URL}/getstartup`);
       
        return response.data; 
    } catch (error) {
        console.error("Axios Error:", error.response?.data || error.message);
        return undefined;  // Explicitly return undefined if there's an error
    }
};

export const SendEmail = async (userData) => {
    try {
       console.log(userData)
        const response = await axios.post(`${API_URL}/SendEmail`, userData );
        console.log("Send Email Response:", response.data);  // Debugging log
        return response.data; 
    } catch (error) {
        console.error("Axios Error:", error.response?.data || error.message);
        return undefined;  // Explicitly return undefined if there's an error
    }
};

const userService = { registerUserCustomer, registerUserVender, loginUser, imageU, ProfileU, AddFranchise, getfranchise, getstartup, SendEmail };
export default userService;


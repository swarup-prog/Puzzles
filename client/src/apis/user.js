import axios from "axios";

export const getUserData = async (userId) => {
  try {
    const API_URL = "http://localhost:8000/api";

    const response = await axios.get(`${API_URL}/user/${userId}`);
    const data = response.data;
    return data;
  } catch (error) {
    if (
      error.response &&
      error.response?.status >= 400 &&
      error.response?.status <= 500
    ) {
      return {
        error: error.response.data.message || error.response.data,
      };
    }
  }
};

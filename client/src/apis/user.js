import axios from "axios";

export const getUserData = async (userId) => {
  try {
    const API_URL = "http://localhost:8000/api";

    const response = await axios.get(`${API_URL}/user/${userId}`);
    const user = response.data;
    return { success: true, user };
  } catch (error) {
    if (
      error.response &&
      error.response?.status >= 400 &&
      error.response?.status <= 500
    ) {
      return {
        success: false,
        error: error.response.data.message || error.response.data,
      };
    }
  }
};

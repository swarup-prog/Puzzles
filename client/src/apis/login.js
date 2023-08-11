import axios from "axios";

export const login = async ({ email, password }) => {
  const API_URL = "http://localhost:8000/api";

  try {
    const response = await axios.post(`${API_URL}/login`, { email, password });

    const data = response?.data;
    return { success: true, data };
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

import axios from "axios";

export const getPost = async () => {
  try {
    const API_URL = "http://localhost:8000/api";

    const response = await axios.get(`${API_URL}/getPost`);
    const data = response?.data;
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

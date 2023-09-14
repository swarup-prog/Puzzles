import axios from "axios";

export const createPost = async ({ title, summary, content }) => {
  const API_URL = "http://localhost:8000/api";

  try {
    const response = await axios.post(`${API_URL}/createPost`, {
      title,
      summary,
      content,
    });

    return {
      success: true,
      data: response?.data,
    };
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

export default createPost;

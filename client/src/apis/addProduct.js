import axios from "axios";

export const addProduct = async ({
  name,
  price,
  offerPrice,
  description,
  image,
  quantity,
  category,
  size,
  tags,
}) => {
  const API_URL = "http://localhost:8000/api";

  try {
    const response = await axios.post(`${API_URL}/addProduct`, {
      name,
      price,
      offerPrice,
      description,
      image,
      quantity,
      category,
      size,
      tags,
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

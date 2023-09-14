import axios from "axios";

export const addProduct = async ({
  name,
  price,
  offerPrice,
  description,
  image,
  category,
  size,
  tags,
}) => {
  const API_URL = "http://localhost:8000/api";

  try {
    const cloudinaryResponse = await axios.post(
      `${API_URL}/cloudinary`,
      {
        file: image,
      },
      { headers: { "Content-Type": "multipart/form-data" } }
    );

    // const response = await axios.post(`${API_URL}/addProduct`, {
    //   name,
    //   price,
    //   offerPrice,
    //   description,
    //   image: cloudinaryResponse.url,
    //   category,
    //   size,
    //   tags,
    // });

    return {
      success: true,
      data: cloudinaryResponse?.data,
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

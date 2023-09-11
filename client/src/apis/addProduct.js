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
  const CLOUDINARY_URL = `https://api.cloudinary.com/v1_1/${process.env.CLOUDINARY_CLOUD_NAME}/upload`;

  try {
    const formData = new FormData();
    formData.append("image", image);

    const cloudinaryResponse = await axios.post(CLOUDINARY_URL, formData, {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    });

    const imageUrl = cloudinaryResponse.data.secure_url;

    const response = await axios.post(`${API_URL}/addProduct`, {
      name,
      price,
      offerPrice,
      description,
      image: imageUrl,
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

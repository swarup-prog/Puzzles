import axios from "axios";

const API_URL = "http://localhost:8000/api";

const fetchUser = async (userId) => {
  try {
    const response = await axios.get(`${API_URL}/getUser/${userId}`);
  } catch (error) {}
};

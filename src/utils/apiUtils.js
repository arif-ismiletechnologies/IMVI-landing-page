// src/utils/apiUtils.js
import axios from "axios";

const apiUrl =
  "https://nhqjd.execute-api.us-east-1.amazonaws.com/";

export const generateAnswer = async (prompt) => {
  const postData = { user_prompt: prompt };

  try {
    const response = await axios.post(apiUrl, postData);
    return response.data;
  } catch (error) {
    console.error("Error:", error);
    throw error;
  }
};

import axios from "axios";

const BASE_URL = import.meta.env.VITE_APP_GITHUB_API_URL;

export async function searchUsers(query) {
  try {
    const response = await axios.get(`${BASE_URL}/search/users`, {
      params: { q: query },
    });
    return response.data;
  } catch (error) {
    console.error("Error fetching GitHub users:", error);
    throw error;
  }
}

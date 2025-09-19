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

import axios from "axios";

export const fetchUserData = async (username) => {
  if (!username) throw new Error("Username is required");

  const response = await axios.get(`https://api.github.com/users/${username}`);
  return response.data;
};

// src/services/githubService.js
import axios from "axios";

export const fetchUserData = async (username) => {
  const response = await axios.get(`https://api.github.com/users/${username}`);
  return response.data;
};

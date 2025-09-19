import axios from "axios";

export const fetchUserData = async (username) => {
  try {
    const response = await axios.get(`https://api.github.com/users/${username}`);
    return response.data;
  } catch (error) {
    console.error("Error fetching user data:", error);
    return null;
  }
};

export const fetchAdvancedSearch = async (location, minRepos) => {
  try {
    let query = "";
    if (location) query += `location:${location} `;
    if (minRepos) query += `repos:>=${minRepos}`;

    const response = await axios.get(
      `https://api.github.com/search/users?q=${query.trim()}`
    );
    return response.data.items;
  } catch (error) {
    console.error("Error fetching advanced search results:", error);
    return [];
  }
};

import React, { useState } from "react";
import { fetchUserData, fetchAdvancedSearch } from "../services/githubService";

const SearchBar = () => {
  const [username, setUsername] = useState("");
  const [location, setLocation] = useState("");
  const [minRepos, setMinRepos] = useState("");
  const [userData, setUserData] = useState(null);
  const [usersList, setUsersList] = useState([]);
  const [error, setError] = useState("");

  const handleBasicSearch = async () => {
    if (!username.trim()) {
      setError("Please enter a GitHub username.");
      setUserData(null);
      return;
    }

    const data = await fetchUserData(username);
    if (data) {
      setUserData(data);
      setUsersList([]);
      setError("");
    } else {
      setError("Looks like we cant find the user");
      setUserData(null);
    }
  };

  const handleAdvancedSearch = async () => {
    const results = await fetchAdvancedSearch(location, minRepos);
    if (results.length > 0) {
      setUsersList(results);
      setUserData(null);
      setError("");
    } else {
      setError("No users found with these filters.");
      setUsersList([]);
    }
  };

  return (
    <div className="flex flex-col gap-4">
      {/* Basic Search */}
      <div className="flex gap-2">
        <input
          type="text"
          placeholder="Enter GitHub username"
          className="border border-gray-300 rounded-lg px-3 py-2 w-full focus:outline-none focus:ring focus:ring-blue-300"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <button
          className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 transition"
          onClick={handleBasicSearch}
        >
          Search
        </button>
      </div>

      {/* Advanced Search */}
      <div className="p-4 bg-gray-50 rounded-lg border mt-2">
        <h2 className="text-lg font-semibold mb-2">Advanced Search</h2>
        <input
          type="text"
          placeholder="Location (e.g. Nairobi)"
          className="border border-gray-300 rounded-lg px-3 py-2 w-full mb-2 focus:outline-none focus:ring focus:ring-blue-300"
          value={location}
          onChange={(e) => setLocation(e.target.value)}
        />
        <input
          type="number"
          placeholder="Minimum Repositories"
          className="border border-gray-300 rounded-lg px-3 py-2 w-full mb-2 focus:outline-none focus:ring focus:ring-blue-300"
          value={minRepos}
          onChange={(e) => setMinRepos(e.target.value)}
        />
        <button
          className="bg-green-500 text-white px-4 py-2 rounded-lg hover:bg-green-600 transition w-full"
          onClick={handleAdvancedSearch}
        >
          Search by Filters
        </button>
      </div>

      {error && <p className="text-red-500 text-sm">{error}</p>}

      {/* Basic Search Result */}
      {userData && (
        <div className="mt-4 p-4 bg-gray-50 border rounded-lg">
          <img
            src={userData.avatar_url}
            alt="avatar"
            className="w-20 h-20 rounded-full mx-auto"
          />
          <h2 className="text-xl font-semibold text-center mt-2">
            {userData.name || "No name available"}
          </h2>
          <p className="text-center text-gray-600">@{userData.login}</p>
          <p className="text-center mt-2">{userData.bio || "No bio available"}</p>
          <p className="text-center mt-2 text-sm text-gray-500">
            Followers: {userData.followers} | Following: {userData.following}
          </p>
        </div>
      )}

      {/* Advanced Search Results */}
      {usersList.length > 0 && (
        <div className="mt-4">
          <h3 className="text-lg font-semibold mb-2">Results:</h3>
          <ul className="space-y-3">
            {usersList.map((user) => (
              <li key={user.id} className="flex items-center gap-4 p-2 border rounded-lg bg-white">
                <img src={user.avatar_url} alt="avatar" className="w-12 h-12 rounded-full" />
                <div>
                  <p className="font-semibold">{user.login}</p>
                  <a
                    href={user.html_url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-500 text-sm"
                  >
                    View Profile
                  </a>
                </div>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default SearchBar;


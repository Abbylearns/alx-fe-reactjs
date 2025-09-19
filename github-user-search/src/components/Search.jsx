// src/components/Search.jsx
import { useState } from "react";
import { fetchUserData, fetchAdvancedSearch } from "../services/githubService";

const Search = () => {
  const [username, setUsername] = useState("");
  const [location, setLocation] = useState("");
  const [minRepos, setMinRepos] = useState("");
  const [results, setResults] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError(null);
    setResults([]);

    try {
      if (location || minRepos) {
        // Use advanced search if extra filters are provided
        const data = await fetchAdvancedSearch(username, location, minRepos);
        setResults(data.items || []);
        if (!data.items || data.items.length === 0) {
          setError("Looks like we cant find the user");
        }
      } else {
        // Fallback: basic search by username only
        const user = await fetchUserData(username);
        setResults([user]); // wrap single result in array for display consistency
      }
    } catch (err) {
      setError("Looks like we cant find the user");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex flex-col items-center p-6 w-full max-w-xl">
      {/* Search Form */}
      <form
        onSubmit={handleSubmit}
        className="flex flex-col gap-3 w-full bg-white p-4 rounded-lg shadow-md"
      >
        <input
          type="text"
          placeholder="GitHub username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          className="border rounded-lg p-2"
        />
        <input
          type="text"
          placeholder="Location (optional)"
          value={location}
          onChange={(e) => setLocation(e.target.value)}
          className="border rounded-lg p-2"
        />
        <input
          type="number"
          placeholder="Minimum repositories (optional)"
          value={minRepos}
          onChange={(e) => setMinRepos(e.target.value)}
          className="border rounded-lg p-2"
        />
        <button
          type="submit"
          className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600"
        >
          Search
        </button>
      </form>

      {/* Conditional Rendering */}
      <div className="mt-6 w-full">
        {loading && <p className="text-center">Loading...</p>}
        {error && <p className="text-center text-red-500">{error}</p>}
        {!loading &&
          results.length > 0 &&
          results.map((user) => (
            <div
              key={user.id}
              className="flex flex-col items-center mb-4 p-4 bg-gray-100 rounded-lg shadow-sm"
            >
              <img
                src={user.avatar_url}
                alt={user.login}
                className="w-20 h-20 rounded-full mb-2"
              />
              <h2 className="text-lg font-semibold">{user.login}</h2>
              {user.location && <p className="text-sm">{user.location}</p>}
              {typeof user.public_repos !== "undefined" && (
                <p className="text-sm">Repos: {user.public_repos}</p>
              )}
              <a
                href={user.html_url}
                target="_blank"
                rel="noreferrer"
                className="text-blue-500 hover:underline mt-2"
              >
                View Profile
              </a>
            </div>
          ))}
      </div>
    </div>
  );
};

export default Search;

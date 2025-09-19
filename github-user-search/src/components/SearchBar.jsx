import React from "react";

function SearchBar() {
  return (
    <div>
      <input
        type="text"
        placeholder="Search GitHub users..."
        className="border rounded p-2"
      />
    </div>
  );
}

export default SearchBar;

import React from "react";
import SearchBar from "./components/SearchBar";

function App() {
  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center">
      <div className="bg-white p-6 rounded-xl shadow-lg w-full max-w-md">
        <h1 className="text-2xl font-bold text-center mb-4">
          GitHub User Search
        </h1>
        <SearchBar />
      </div>
    </div>
  );
}

export default App;

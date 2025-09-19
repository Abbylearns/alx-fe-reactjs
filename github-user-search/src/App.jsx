import React from "react";

function App() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100">
      <h1 className="text-3xl font-bold text-gray-800">GitHub User Search</h1>
      <p className="text-gray-600 mt-2">
        Your app is ready for development 🚀
      </p>
    </div>
  );
}

export default App;
import React from "react";
import SearchBar from "./components/SearchBar";

const App = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <SearchBar />
    </div>
  );
};

export default App;


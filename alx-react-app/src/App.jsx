// src/App.jsx
import React from "react";
import WelcomeMessage from "./components/WelcomeMessage";
import Header from "./components/Header";
import MainContent from "./components/MainContent";
import Footer from "./components/Footer";
import UserProfile from "./components/UserProfile";

function App() {
  return (
    <div>
      <Header />
      <MainContent />
      <Footer />
      <WelcomeMessage />

      {/* Task 3 render */}
      <UserProfile name="Alice" age="25" bio="Loves hiking and photography" />
    </div>
  );
}

export default App;

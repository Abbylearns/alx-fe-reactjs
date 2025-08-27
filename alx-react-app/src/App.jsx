import React from "react";
import WelcomeMessage from "./components/WelcomeMessage";
import UserProfile from "./components/UserProfile";

function App() {
  return (
    <div>
      {/* Task 1 + 2: Welcome message */}
      <WelcomeMessage />

      {/* Task 3: User profile with props */}
      <UserProfile
        name="Alice"
        age="25"
        bio="Loves hiking and photography"
      />
    </div>
  );
}

export default App;

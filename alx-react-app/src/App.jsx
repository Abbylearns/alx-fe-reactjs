// src/App.jsx
import WelcomeMessage from "./components/WelcomeMessage"; // Task 1 import
import Header from "./components/Header";                 // Task 2 import
import MainContent from "./components/MainContent";       // Task 2 import
import Footer from "./components/Footer";                 // Task 2 import
import UserProfile from "./components/UserProfile";       // Task 3 import

function App() {
  return (
    <div>
      {/* Task 2: order must be Header -> MainContent -> Footer */}
      <Header />
      <MainContent />
      <Footer />

      {/* Task 1: must be imported & rendered; exact texts are inside the component */}
      <WelcomeMessage />

      {/* Task 3: render with props */}
      <UserProfile name="Alice" age="25" bio="Loves hiking and photography" />
    </div>
  );
}

export default App;

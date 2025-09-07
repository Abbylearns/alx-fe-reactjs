import React from "react";
import Header from "./components/Header";
import MainContent from "./components/MainContent";
import UserProfile from "./components/UserProfile";
import Footer from "./components/Footer";

function App() {
  return (
    <div>
      <Header />
      <MainContent />
      <section style={{ display: "flex", justifyContent: "center", gap: "16px", padding: "20px" }}>
        <UserProfile name="Aisha" age={27} bio="Loves coffee and coastal cities." />
        <UserProfile name="Mark" age={31} bio="Map collector and sunrise chaser." />
      </section>
      <Footer />
    </div>
  );
}

export default App;

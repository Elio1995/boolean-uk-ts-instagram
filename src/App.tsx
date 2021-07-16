import React from "react";
import "./styles/reset.css";
import "./styles/index.css";
import MainSection from "./components/MainSection";
import HeaderSection from "./components/HeaderSection";

function App() {
  return (
    <div id="root">
      <HeaderSection />

      <MainSection />
    </div>
  );
}

export default App;

import React from "react";
import "./App.css";
import { Routes, Route } from "react-router-dom";
import HomePage from "./pages/homepage/homepage";
import HatsPage from "./pages/hatspage/hatspage";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="hats" element={<HatsPage />} />
      </Routes>
    </div>
  );
}

export default App;

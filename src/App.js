import React from "react";
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home.js";
import SearchPage from "./pages/SearchPage";

function App() {
  return (
    <div className="app">
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/search" element={<SearchPage />} />
        </Routes>
      </Router>

      {/* home page - with search bar, avatar etc*/}
      {/*results page after searching*/}
    </div>
  );
}

export default App;

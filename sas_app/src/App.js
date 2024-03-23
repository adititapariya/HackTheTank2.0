import { useState, useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import Admin from "../src/pages/Admin/Admin";
import Home from "./pages/Home/Home";
function App() {
  return (
    <div className="App">
      <div>
        <Routes>
          <Route path="/admin" element={<Admin />}></Route>
          <Route path="/" element={<Home />}></Route>
        </Routes>
      </div>
    </div>
  );
}

export default App;

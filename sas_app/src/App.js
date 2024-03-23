import { useState, useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import Admin from "../src/pages/Admin/Admin";
function App() {
  return (
    <div className="App">
      <div>
        <Routes>
          <Route path="/admin" element={<Admin />}></Route>
        </Routes>
      </div>
    </div>
  );
}

export default App;

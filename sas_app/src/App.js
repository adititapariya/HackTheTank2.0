import { useState, useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import Admin from "../src/pages/Admin/Admin";
import Register from "../src/pages/Auth/Register";
import Auth from "../src/pages/Auth/admin";
import Home from "./pages/Home/Home";
function App() {
  return (
    <div className="App">
      <div>
        <Routes>
          <Route path="/admin/team" element={<Admin />}></Route>
          <Route path="/admin/invoices" element={<Admin />}></Route>
          <Route path="/admin/contacts" element={<Admin />}></Route>
          <Route path="/auth/admin" element={<Register />}></Route>
          <Route path="/auth/register" element={<Auth />}></Route>
          <Route path="/admin" element={<Admin />}></Route>
          <Route path="/" element={<Home />}></Route>
        </Routes>
      </div>
    </div>
  );
}

export default App;

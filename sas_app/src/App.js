import { useState, useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import Admin from "../src/pages/Admin/Admin";
import Register from "../src/pages/Auth/Register";
import Auth from "../src/pages/Auth/admin";
import { useLocation } from "react-router-dom";
import Home from "./pages/Home/Home";
import User from "./pages/User/User";
import ResponsiveAppBar from "./components/navbar";
function App() {
  const { pathname } = useLocation();

  const [loading, setLoading] = useState(false);

  useEffect(() => {
    window.scrollTo({ top: 0, left: 0 });
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 4000);
  }, []);
  return (
    <div className="App">
      <div>
        <nav className="fixed w-full z-50 top-0">
          {pathname !== "/admin" && pathname !== "/user" && (
            <>
              <ResponsiveAppBar />
            </>
          )}
        </nav>
        <Routes>
          <Route path="/admin/team" element={<Admin />}></Route>
          <Route path="/admin/invoices" element={<Admin />}></Route>
          <Route path="/admin/contacts" element={<Admin />}></Route>
          <Route path="/auth/admin" element={<Register />}></Route>
          <Route path="/auth/register" element={<Auth />}></Route>
          <Route path="/admin" element={<Admin />}></Route>
          <Route path="/" element={<Home />}></Route>
          <Route path="/user" element={<User />}></Route>
        </Routes>
      </div>
    </div>
  );
}

export default App;

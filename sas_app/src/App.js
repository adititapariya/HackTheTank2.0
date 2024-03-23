import { useState, useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import Admin from "../src/pages/Admin/Admin";
import { useLocation } from "react-router-dom";
import Home from "./pages/Home/Home";
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
          {pathname !== "/admin" && (
            <>
              <ResponsiveAppBar />
            </>
          )}
        </nav>
        <Routes>
          <Route path="/admin" element={<Admin />}></Route>
          <Route path="/" element={<Home />}></Route>
        </Routes>
      </div>
    </div>
  );
}

export default App;

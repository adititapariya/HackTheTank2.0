import { useState, useEffect } from "react";
// import { Routes, Route } from "react-router-dom";
import Topbar from "./Topbar";
import Sidebar from "./Sidebar";
import UserDashboard from "./UserDashboard";
import Pie from "../User/components/PieChart";
import Bar from "../User/components/BarChart";
import Line from "../User/components/LineChart";
import { useLocation } from "react-router-dom";
import { CssBaseline, ThemeProvider } from "@mui/material";
import { ColorModeContext, useMode } from "../../theme";
import "../../index.css";

const User = () => {
  const { pathname } = useLocation();

  const [loading, setLoading] = useState(false);

  useEffect(() => {
    window.scrollTo({ top: 0, left: 0 });
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 4000);
  }, []);
  const [theme, colorMode] = useMode();
  const [isSidebar, setIsSidebar] = useState(true);
  return (
    <ColorModeContext.Provider value={colorMode}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <div class="app">
          <Sidebar isSidebar={isSidebar} />

          <main className="content">
            <Topbar setIsSidebar={setIsSidebar} />
            {pathname === "/user" && (
              <>
                <UserDashboard />
              </>
            )}
            {/* {pathname === "/user/pie" && <Pie />}
            {pathname === "/user/bar" && <Bar />}
            {pathname === "/user/line" && <Line />} */}
          </main>
        </div>
      </ThemeProvider>
    </ColorModeContext.Provider>
  );
};
export default User;

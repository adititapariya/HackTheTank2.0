import { useState, useEffect } from "react";
// import { Routes, Route } from "react-router-dom";
import Topbar from "./Topbar";
import Sidebar from "./Sidebar";
import Dashboard from "./Dashboard";
import Geography from "./Geography";
import Team from "./Team";
import Contacts from "./Contacts";
import Invoices from "./Invoices";
import Calendar from "./Calendar";
import { useLocation } from "react-router-dom";
import { CssBaseline, ThemeProvider } from "@mui/material";
import { ColorModeContext, useMode } from "../../theme";
// import "./Admin.css";
import "../../index.css";

const Admin = () => {
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
            {pathname === "/admin" && (
              <>
                <Dashboard />
              </>
            )}

            {/* {pathname !== "/admin/contact" &&
              pathname !== "/admin" &&
              pathname !== "/admin/invoices" &&
              pathname !== "/admin/calendar" && ( */}
            <>
              <Team />
            </>
            {/* )} */}
            {/* {pathname === "/admin/contact" && ( */}
            <>
              <Contacts />
            </>
            {/* )} */}
            {/* {pathname === "/admin/invoices" && ( */}
            <>
              <Invoices />
            </>
            {/* )} */}
            {/* {pathname === "/admin/calendar" && ( */}
            <>
              <Calendar />
            </>
            {/* )} */}
          </main>
        </div>
      </ThemeProvider>
    </ColorModeContext.Provider>
  );
};
export default Admin;

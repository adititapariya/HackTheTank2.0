import { useState } from "react";
// import { Routes, Route } from "react-router-dom";
import Topbar from "./Topbar";
import Sidebar from "./Sidebar";
import Dashboard from "./Dashboard";
import Geography from "./Geography";
import Team from "./Team";
import Contacts from "./Contacts";
import Invoices from "./Invoices";
import Calendar from "./Calendar";
import { CssBaseline, ThemeProvider } from "@mui/material";
import { ColorModeContext, useMode } from "../../theme";

const Admin = () => {
  const [theme, colorMode] = useMode();
  const [isSidebar, setIsSidebar] = useState(true);
  return (
    <ColorModeContext.Provider value={colorMode}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <div classname="admin">
          <Sidebar isSidebar={isSidebar} />
          <main className="content">
            <Topbar setIsSidebar={setIsSidebar} />
            <Dashboard />
            <Team />
            <Contacts />
            <Invoices />
            <Calendar />
          </main>
        </div>
      </ThemeProvider>
    </ColorModeContext.Provider>
  );
};
export default Admin;

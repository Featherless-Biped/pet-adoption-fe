import { BrowserRouter, Navigate, Routes, Route } from "react-router-dom";
import Dashboard from "./displays/adminPages/DashBoard";
import Form from "./displays/adminPages/AddPetSegments/Form"
import HomePage from "./displays/homePage/homePage";
import LoggedInHomePage from "./displays/homePage/LoggedInHomePage";
import SearchPage from "./displays/searchPage/SearchPage"
import { useMemo } from "react";
import { useSelector } from "react-redux";
import { CssBaseline, ThemeProvider } from "@mui/material";
import { createTheme } from "@mui/material/styles";
import { themeSettings } from "./theme";
import Navbar from "./displays/navbar/Navbar";

function App() {
    const mode = useSelector((state) => state.mode);
    const theme = useMemo(() => createTheme(themeSettings(mode)), [mode]);
    const isAuth = Boolean(useSelector((state) => state.token));

    return (
        <div className="app">
           
            <BrowserRouter>
                <ThemeProvider theme={theme}>
                    <CssBaseline />
                    <Navbar />

                    <Routes>
                        <Route path="/" element={<HomePage />} />
                        <Route path="/search" element={<SearchPage />} />
                        <Route path="/home" element={isAuth ? <LoggedInHomePage /> : <Navigate to="/" />} />
                        <Route path="/dashboard" element={<Dashboard />} />
                    </Routes>
                </ThemeProvider>
            </BrowserRouter>
        </div>
    );
}

export default App;

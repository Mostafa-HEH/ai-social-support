import { BrowserRouter, Route, Routes } from "react-router-dom";
import RootLayout from "./RootLayout";
import { HomePage } from "../../features/Home";
import { ROUTES } from "../utils/constants";
import { ThemeProvider } from "@mui/material";
import { muiTheme } from "../../shared/theme";

const AppRoutes = () => {
  return (
    <BrowserRouter>
      <ThemeProvider theme={muiTheme}>
        <Routes>
          <Route path={ROUTES.HOME} element={<RootLayout />}>
            <Route index element={<HomePage />} />
          </Route>
        </Routes>
      </ThemeProvider>
    </BrowserRouter>
  );
};

export default AppRoutes;

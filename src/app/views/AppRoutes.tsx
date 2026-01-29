import { BrowserRouter, Route, Routes } from "react-router-dom";
import RootLayout from "./RootLayout";
import { HomePage } from "../../features/Home";
import { ROUTES } from "../utils/constants";
import { ThemeProvider } from "@mui/material";
import "../../i18n";
import getMuiTheme from "../../shared/theme/mui";
import { CacheProvider } from "@emotion/react";
import { ltrCache, rtlCache } from "../../shared/theme";
import { useTranslation } from "react-i18next";
import { useEffect } from "react";

const AppRoutes = () => {
  const { i18n } = useTranslation();

  const isRTL = i18n.language === "ar";
  const theme = getMuiTheme(isRTL ? "rtl" : "ltr");

  useEffect(() => {
    document.documentElement.setAttribute("dir", isRTL ? "rtl" : "ltr");
    document.documentElement.setAttribute("lang", i18n.language);
  }, [isRTL, i18n.language]);

  return (
    <BrowserRouter>
      <CacheProvider value={isRTL ? rtlCache : ltrCache}>
        <ThemeProvider theme={theme}>
          <Routes>
            <Route path={ROUTES.HOME} element={<RootLayout />}>
              <Route index element={<HomePage />} />
            </Route>
          </Routes>
        </ThemeProvider>
      </CacheProvider>
    </BrowserRouter>
  );
};

export default AppRoutes;

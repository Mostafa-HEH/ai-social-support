import { BrowserRouter, Route, Routes } from "react-router-dom";
import RootLayout from "./RootLayout";
import { HomePage } from "../../features/Home";
import { ROUTES } from "../utils/constants";

const AppRoutes = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path={ROUTES.HOME} element={<RootLayout />}>
          <Route index element={<HomePage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default AppRoutes;

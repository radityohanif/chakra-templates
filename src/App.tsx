import { BrowserRouter, Route, Routes } from "react-router";
import PublicLayouts from "./layouts/public";
import LoginFormsApplicationUiPages from "./pages/application-ui/forms/login";
import RegisterFormsApplicationUiPages from "./pages/application-ui/forms/register";
import NavbarNavigationsApplicationUiPages from "./pages/application-ui/navigations/navbar";
import HomePages from "./pages/home";
import TemplatesPages from "./pages/templates";
export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<PublicLayouts />}>
          <Route index element={<HomePages />} />
          <Route path="templates" element={<TemplatesPages />} />
          <Route path="application-ui">
            <Route path="forms">
              <Route path="login" element={<LoginFormsApplicationUiPages />} />
              <Route
                path="register"
                element={<RegisterFormsApplicationUiPages />}
              />
            </Route>
            <Route path="navigations">
              <Route
                path="navbar"
                element={<NavbarNavigationsApplicationUiPages />}
              />
            </Route>
          </Route>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

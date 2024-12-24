import { BrowserRouter, Route, Routes } from "react-router";
import HomePages from "./pages/home";
import PublicLayouts from "./layouts/public";
import LoginFormsApplicationUiPages from "./pages/application-ui/forms/login";
export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<PublicLayouts />}>
          <Route index element={<HomePages />} />
          <Route path="application-ui">
            <Route path="forms">
              <Route path="login" element={<LoginFormsApplicationUiPages />} />
            </Route>
          </Route>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

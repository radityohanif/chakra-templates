import { Outlet } from "react-router";
import Navbar from "./fragments/navbar";
import Footer from "./fragments/footer";

export default function PublicLayouts() {
  return (
    <>
      <Navbar />
      <Outlet />
      <Footer />
    </>
  );
}

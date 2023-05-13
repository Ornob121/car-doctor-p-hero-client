import { Outlet, ScrollRestoration } from "react-router-dom";
import Footer from "../Pages/Shared/Footer/Footer";
import NavBar from "../Pages/Shared/NavBar/NavBar";

const Main = () => {
  return (
    <div>
      <NavBar></NavBar>
      <Outlet></Outlet>
      <ScrollRestoration></ScrollRestoration>
      <Footer></Footer>
    </div>
  );
};

export default Main;

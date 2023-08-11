import { Outlet } from "react-router-dom";
import Header from "../components/shared/header/Header";

const Main = () => {
  return (
    <div>
      <Header />
      <Outlet />
    </div>
  );
};

export default Main;

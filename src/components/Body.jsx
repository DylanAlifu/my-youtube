import { Outlet } from "react-router-dom";
import Sidebar from "./Sidebar";

const Body = () => {
  return (
    <div className="grid grid-cols-12">
      <Sidebar />
      <Outlet />
    </div>
  );
};

export default Body;

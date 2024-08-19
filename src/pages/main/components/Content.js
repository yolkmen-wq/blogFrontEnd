import LeftSide from "./LeftSide";
import { Outlet,useLocation } from "react-router-dom";

const Content = () => {
  const location = useLocation();
  return (
    <div className="row no-gutters-lg">
      <Outlet />
      {location.pathname !== "/contact" ? <LeftSide /> : ""}
    </div>
  );
};
export default Content
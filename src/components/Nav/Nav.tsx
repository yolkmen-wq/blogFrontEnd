import { Fragment, useEffect, useState } from "react";
import { Outlet, useLocation } from "react-router-dom";
import { useDispatch } from "react-redux";
import { setIsShowSearch } from "@/store/modules/searchSlice";

const Nav = () => {
  let location = useLocation();
  const dispatch = useDispatch();
  const [isInvert, setIsInvert] = useState(false);
  useEffect(() => {
    location.pathname.indexOf("/detail") > -1 && setIsInvert(true);
  }, [location]);
  return (
    <Fragment>
      <nav
        className={`navbar navbar-default navbar-custom navbar-fixed-top ${
          isInvert ? "invert" : ""
        }`}
      >
        <div className="container-fluid">
          <div className="navbar-header page-scroll">
            <button type="button" className="navbar-toggle">
              <span className="sr-only">Toggle navigation</span>
              <span className="icon-bar"></span>
              <span className="icon-bar"></span>
              <span className="icon-bar"></span>
            </button>
            <a className="navbar-brand" href="/">
              WQ Blog
            </a>
          </div>
          <div id="huxblog_navbar">
            <div className="navbar-collapse">
              <ul className="nav navbar-nav navbar-right">
                <li>
                  <a href="/home/">Home</a>
                </li>
                <li>
                  <a href="/">About</a>
                </li>
                <li>
                  <a href="/archive/">Archive</a>
                </li>
                <li
                  className="search-icon"
                  onClick={() => dispatch(setIsShowSearch())}
                >
                  <a href="javascript:void(0)">
                    <i className="fa fa-search"></i>
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </nav>
      <Outlet />
    </Fragment>
  );
};
export default Nav;

import React, { Fragment, useEffect, useState, useCallback } from "react";
import { Outlet, useLocation } from "react-router-dom";
import { useDispatch } from "react-redux";
import { setIsShowSearch } from "@/store/modules/searchSlice";
import classNames from "classnames";
import KeepAlive from "react-activation";

const Nav = () => {
  let location = useLocation();
  const dispatch = useDispatch();
  const [isInvert, setIsInvert] = useState(false);
  const [isToggle, setToggle] = useState(false);
  const visitorData = localStorage.getItem("visitor");
  const parsedVisitor = visitorData ? JSON.parse(visitorData) : { id: null };
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
            <button
              type="button"
              className="navbar-toggle"
              onClick={() => setToggle(!isToggle)}
            >
              <span className="sr-only">Toggle navigation</span>
              <span className="icon-bar"></span>
              <span className="icon-bar"></span>
              <span className="icon-bar"></span>
            </button>
            <a className="navbar-brand" href="/">
              WQ Blog
            </a>
          </div>
          <div id="huxblog_navbar" className={classNames({ in: isToggle })}>
            <div
              className={classNames("navbar-collapse")}
              style={{ height: isToggle ? "auto" : "0px" }}
            >
              <ul className="nav navbar-nav navbar-right">
                <li>
                  <a href="/home">Home</a>
                </li>
                <li>
                  <a href="/">About</a>
                </li>
                <li>
                  <a href="/archive">Archive</a>
                </li>
                {parsedVisitor ? (
                  ""
                ) : (
                  <li>
                    <a href="/login">Login</a>
                  </li>
                )}

                <li
                  className="search-icon"
                  onClick={() => dispatch(setIsShowSearch())}
                >
                  <a href="#">
                    <i className="fa fa-search"></i>
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </nav>
      <KeepAlive>
        <Outlet />
      </KeepAlive>
      {/* <ViewPage render={renderView} /> */}
    </Fragment>
  );
};
export default Nav;

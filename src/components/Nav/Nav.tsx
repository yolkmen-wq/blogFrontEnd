import { Fragment } from "react";
import { Outlet } from "react-router-dom";
interface NavProps {
  onButtonClick: () => void;
}
const Nav: React.FC<NavProps> = ({ onButtonClick }) => {
  return (
    <Fragment>
      <nav className="navbar navbar-default navbar-custom navbar-fixed-top">
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
                  <a href="/">Home</a>
                </li>
                <li>
                  <a href="/about/">About</a>
                </li>
                <li>
                  <a href="/archive/">Archive</a>
                </li>
                <li className="search-icon" onClick={() => onButtonClick()}>
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

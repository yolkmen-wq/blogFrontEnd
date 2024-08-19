/*
 * @Author: 猿来如此丿 865657670@qq.com
 * @Date: 2024-08-15 18:06:00
 * @LastEditors: 猿来如此丿 865657670@qq.com
 * @LastEditTime: 2024-08-16 11:46:48
 * @FilePath: \blogFrontEnd\src\pages\main\components\Navigator.js
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import { Link } from "react-router-dom";
const Navigator = () => {
  return (
    <header className="navigation">
      <div className="container">
        <nav className="navbar navbar-expand-lg navbar-light px-0">
          <Link className="navbar-brand order-1 py-0" to={"/"}>
            <img
              loading="prelaod"
              decoding="async"
              className="img-fluid"
              src={require("@assets/images/logo.png")}
              alt="Reporter Hugo"
            />
          </Link>
          <div className="navbar-actions order-3 ml-0 ml-md-4">
            <button
              aria-label="navbar toggler"
              className="navbar-toggler border-0"
              type="button"
              data-toggle="collapse"
              data-target="#navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
          </div>
          <div className="order-lg-3 order-md-2 order-3 ml-auto d-flex align-items-center">
            <form
              action="#!"
              className="search"
            >
              <input
                id="search-query"
                name="s"
                type="search"
                placeholder="Search..."
                autoComplete="off"
              />
            </form>
            <img style={{width:"30px",height:"30px",marginLeft:"5px",cursor:"pointer"}} src={require("@assets/images/default-avatar.png")} />
          </div>
          <div
            className="collapse navbar-collapse text-center order-lg-2 order-4"
            id="navigation"
          >
            <ul className="navbar-nav mx-auto mt-3 mt-lg-0">
              <li className="nav-item">
                <Link className="nav-link" to={"/about"}>
                  关 于
                </Link>
              </li>
              <li className="nav-item dropdown">
                <a
                  className="nav-link dropdown-toggle"
                  href="#"
                  role="button"
                  data-toggle="dropdown"
                  aria-haspopup="true"
                  aria-expanded="false"
                >
                  文 章
                </a>
                <div className="dropdown-menu">
                  <a className="dropdown-item" href="travel.html">
                    Travel
                  </a>
                  <a className="dropdown-item" href="travel.html">
                    Lifestyle
                  </a>
                  <a className="dropdown-item" href="travel.html">
                    Cruises
                  </a>
                </div>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to={"/contact"}>
                  联 系
                </Link>
              </li>
            </ul>
          </div>
        </nav>
      </div>
    </header>
  );
};
export default Navigator;

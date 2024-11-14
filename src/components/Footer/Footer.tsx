import { useState, useEffect } from "react";
import { useSelector } from "react-redux";
const Footer = () => {
  const visitsCount =
    useSelector((state: any) => state.footSlice.visitsCount) ||
    localStorage.getItem("visitsCount");

  return (
    <footer>
      <div className="container">
        <div className="row">
          <div className="col-lg-8 col-lg-offset-2 col-md-10 col-md-offset-1">
            {/* <!-- SNS Link --> */}

            <ul className="list-inline text-center">
              <li>
                <a href="">
                  <span className="fa-stack fa-lg">
                    <i className="fa fa-circle fa-stack-2x"></i>
                    <i className="fa fa-twitter fa-stack-1x fa-inverse"></i>
                  </span>
                </a>
              </li>

              <li>
                <a target="_blank" href="">
                  <span className="fa-stack fa-lg">
                    <i className="fa fa-circle fa-stack-2x"></i>
                    <i className="fa  fa-stack-1x fa-inverse">知</i>
                  </span>
                </a>
              </li>

              <li>
                <a target="_blank" href="">
                  <span className="fa-stack fa-lg">
                    <i className="fa fa-circle fa-stack-2x"></i>
                    <i className="fa fa-weibo fa-stack-1x fa-inverse"></i>
                  </span>
                </a>
              </li>

              <li>
                <a target="_blank" href="https://github.com/yolkmen-wq">
                  <span className="fa-stack fa-lg">
                    <i className="fa fa-circle fa-stack-2x"></i>
                    <i className="fa fa-github fa-stack-1x fa-inverse"></i>
                  </span>
                </a>
              </li>
            </ul>

            <p className="copyright text-muted">
              Copyright © WQ Blog 2024
              <br />
              Powered by <a href="https://huangxuan.me">WQ Blog</a> | Visits:{" "}
              {visitsCount} |
              <iframe
                style={{ marginLeft: "2px", marginBottom: "-5px" }}
                frameBorder="0"
                scrolling="0"
                width="100px"
                height="20px"
                src="https://ghbtns.com/github-btn.html?user=yolkmen-wq&amp;repo=blogFrontEnd&amp;type=star&amp;count=true"
              ></iframe>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};
export default Footer;

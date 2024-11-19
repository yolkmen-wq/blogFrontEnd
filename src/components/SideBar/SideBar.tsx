import { useEffect, useState } from "react";
import { getTags } from "@/api/article";

// 定义props类型
interface Tags {
  tags: any[];
}
const SideBar = () => {
  const [tags, setTags] = useState([]);

  useEffect(() => {
    getTags().then((res: any) => {
      setTags(res.data.data);
    });
  }, [getTags]);
  return (
    <div
      className="col-lg-3 col-lg-offset-0 col-md-3 col-md-offset-0 col-sm-12
          col-xs-12 sidebar-container"
      style={{ height: "auto !important", minHeight: "0px !important" }}
    >
      {/* Featured Tags */}
      <section>
        <h5>
          <a href="/archive/">FEATURED TAGS</a>
        </h5>
        <div className="tags">
          {tags.map((tag: any, idx: number) => {
            return (
              <a title={tag.tagName} key={idx}>
                {tag.tagName}
              </a>
            );
          })}
          {/* // <a
          //   data-sort="0065"
          //   href="/archive/?tag=%E7%9F%A5%E4%B9%8E"
          //   title="知乎"
          //   rel="14"
          // >
          //   知乎
          // </a> */}
        </div>
      </section>
      {/* Short About */}
      <section className="visible-md visible-lg">
        <hr />
        <h5>
          <a href="/about/">ABOUT ME</a>
        </h5>
        <div className="short-about">
          <img src={require("@assets/images/avatar.png")} />

          <p>
            要做一个有 swag 的程序员 <br />
          </p>

          {/* SNS Link */}

          <ul className="list-inline">
            <li>
              <a href="https://twitter.com/huxpro">
                <span className="fa-stack fa-lg">
                  <i className="fa fa-circle fa-stack-2x"></i>
                  <i className="fa fa-twitter fa-stack-1x fa-inverse"></i>
                </span>
              </a>
            </li>

            <li>
              <a target="_blank" href="https://www.zhihu.com/people/huxpro">
                <span className="fa-stack fa-lg">
                  <i className="fa fa-circle fa-stack-2x"></i>
                  <i className="fa  fa-stack-1x fa-inverse">知</i>
                </span>
              </a>
            </li>

            <li>
              <a target="_blank" href="http://weibo.com/huxpro">
                <span className="fa-stack fa-lg">
                  <i className="fa fa-circle fa-stack-2x"></i>
                  <i className="fa fa-weibo fa-stack-1x fa-inverse"></i>
                </span>
              </a>
            </li>

            <li>
              <a target="_blank" href="https://github.com/huxpro">
                <span className="fa-stack fa-lg">
                  <i className="fa fa-circle fa-stack-2x"></i>
                  <i className="fa fa-github fa-stack-1x fa-inverse"></i>
                </span>
              </a>
            </li>
          </ul>
        </div>
      </section>
      {/* Friends Blog
      <hr /> */}
      {/* <h5>FRIENDS</h5> */}
      <ul className="list-inline">
        {/* <li>
          <a href="http://mida.re/">乱序（Midare）</a>
        </li>

        <li>
          <a href="https://ebnbin.dev/">Ebn Zhang</a>
        </li>

        <li>
          <a href="http://kunq.me">Kun Qian</a>
        </li>

        <li>
          <a href="https://sherrywoo.me/">Sherry Woo</a>
        </li>

        <li>
          <a href="https://blog.smdcn.net">SmdCn</a>
        </li>

        <li>
          <a href="http://tiye.me/">JiyinYiyong</a>
        </li>

        <li>
          <a href="http://dhong.co">DHong Say</a>
        </li>

        <li>
          <a href="http://ingf.github.io/">尹峰以为</a>
        </li> */}
      </ul>
      {/* Ads
          <script async="" src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js"></script> */}
      {/* first shot */}
      <ins
        className="adsbygoogle"
        style={{ display: "block", height: "600px" }}
        data-ad-client="ca-pub-6487568398225121"
        data-ad-slot="4814308751"
        data-ad-format="auto"
        data-full-width-responsive="true"
        data-adsbygoogle-status="done"
        data-ad-status="unfilled"
      >
        <div
          id="aswift_1_host"
          style={{
            border: "none",
            height: "600px",
            width: "219px",
            margin: "0px",
            padding: "0px",
            position: "relative",
            visibility: "visible",
            backgroundColor: "transparent",
            display: "inline-block",
            overflow: "visible",
          }}
        >
          {/* <iframe
                  id="aswift_1"
                  name="aswift_1"
                  style={{
                    left: "0",
                    position: "absolute",
                    top: "0",
                    border: "0",
                    width: "219px",
                    height: "600px",
                  }}
                  sandbox="allow-forms allow-popups allow-popups-to-escape-sandbox allow-same-origin allow-scripts allow-top-navigation-by-user-activation"
                  width="219"
                  height="600"
                  allowTransparency={true}
                  allow="attribution-reporting; run-ad-auction"
                  src="https://googleads.g.doubleclick.net/pagead/ads?client=ca-pub-6487568398225121&amp;output=html&amp;h=600&amp;slotname=4814308751&amp;adk=1186463327&amp;adf=3235933448&amp;pi=t.ma~as.4814308751&amp;w=219&amp;abgtt=1&amp;fwrn=4&amp;fwrnh=100&amp;lmt=1712521003&amp;rafmt=1&amp;format=219x600&amp;url=https%3A%2F%2Fhuangxuan.me%2Fabout%2F%3Flang%3Dzh&amp;fwr=0&amp;fwrattr=true&amp;rpe=1&amp;resp_fmts=4&amp;wgl=1&amp;uach=WyJXaW5kb3dzIiwiMTAuMC4wIiwieDg2IiwiIiwiMTMwLjAuMjg0OS41NiIsbnVsbCwwLG51bGwsIjY0IixbWyJDaHJvbWl1bSIsIjEzMC4wLjY3MjMuNzAiXSxbIk1pY3Jvc29mdCBFZGdlIiwiMTMwLjAuMjg0OS41NiJdLFsiTm90P0FfQnJhbmQiLCI5OS4wLjAuMCJdXSwwXQ..&amp;dt=1730459145516&amp;bpp=2&amp;bdt=581&amp;idt=119&amp;shv=r20241030&amp;mjsv=m202410280101&amp;ptt=9&amp;saldr=aa&amp;abxe=1&amp;cookie_enabled=1&amp;eoidce=1&amp;prev_fmts=0x0&amp;nras=1&amp;correlator=5090773314037&amp;frm=20&amp;pv=1&amp;u_tz=480&amp;u_his=5&amp;u_h=1080&amp;u_w=1920&amp;u_ah=1040&amp;u_aw=1920&amp;u_cd=24&amp;u_sd=1&amp;dmc=8&amp;adx=981&amp;ady=1161&amp;biw=1346&amp;bih=964&amp;scr_x=0&amp;scr_y=45&amp;eid=44759876%2C44759927%2C31087700%2C95344189%2C95345471%2C95345788%2C95345963%2C95345966&amp;oid=2&amp;pvsid=272832870192416&amp;tmod=1666294995&amp;wsm=1&amp;uas=0&amp;nvt=2&amp;ref=https%3A%2F%2Fhuangxuan.me%2Fabout%2F%3Flang%3Den&amp;fc=1920&amp;brdim=0%2C0%2C0%2C0%2C1920%2C0%2C1920%2C1040%2C1361%2C964&amp;vis=1&amp;rsz=o%7C%7CeEbr%7C&amp;abl=CS&amp;pfx=0&amp;fu=128&amp;bc=31&amp;bz=1.41&amp;td=1&amp;tdf=2&amp;psd=W251bGwsbnVsbCxudWxsLDNd&amp;nt=1&amp;ifi=2&amp;uci=a!2&amp;btvi=1&amp;fsb=1&amp;dtd=132"
                  data-google-container-id="a!2"
                  tabIndex={0}
                  title="Advertisement"
                  aria-label="Advertisement"
                  data-load-complete="true"
                ></iframe> */}
        </div>
      </ins>
    </div>
  );
};
export default SideBar;

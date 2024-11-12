import SideBar from "@components/SideBar/SideBar";
interface Article {
  id: number;
  title: string;
  subtitle: string;
  tags: string;
  url: string;
  content: string;
  date: string;
}

interface ContainerProps {
  articleList: Article[];
}
const Container: React.FC<ContainerProps> = ({ articleList }) => {
  return (
    <div className="container" style={{ height: "auto !important" }}>
      <div className="row" style={{ height: "auto !important" }}>
        {/* <!-- USE SIDEBAR --> */}
        {/* <!-- PostList Container --> */}
        <div
          className="col-lg-8 col-lg-offset-1 col-md-8 col-md-offset-1 col-sm-12
      col-xs-12 postlist-container"
        >
          {articleList.map((article: any) => {
            return (
              <div>
                <div className="post-preview">
                  <a href="/2021/04/10/js-20yrs-preface/">
                    <h2 className="post-title">{article.title}</h2>

                    <div
                      className="post-content-preview"
                      dangerouslySetInnerHTML={{ __html: article.content }}
                    ></div>
                  </a>
                  <p className="post-meta">Posted by WQ on {article.date}</p>
                </div>
                <hr />
              </div>
            );
          })}
          {/* <!-- Pager --> */}
          {articleList.length > 10 && (
            <ul className="pager">
              <li className="next">
                <a href="javascript:void(0)">Older Posts →</a>
              </li>
            </ul>
          )}
        </div>
        {/* Sidebar Container  */}
        <SideBar />
        {/* <!-- Ads --> */}
        {/* <script async="" src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js"></script> */}
        {/* <!-- first shot --> */}
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
            <iframe
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
              frameBorder="0"
              marginWidth={0}
              marginHeight={0}
              allowTransparency={true}
              scrolling="no"
              allow="attribution-reporting; run-ad-auction"
              src="https://googleads.g.doubleclick.net/pagead/ads?client=ca-pub-6487568398225121&amp;output=html&amp;h=600&amp;slotname=4814308751&amp;adk=1186463327&amp;adf=3235933448&amp;pi=t.ma~as.4814308751&amp;w=219&amp;abgtt=1&amp;fwrn=4&amp;fwrnh=100&amp;lmt=1712521003&amp;rafmt=1&amp;format=219x600&amp;url=https%3A%2F%2Fhuangxuan.me%2F&amp;fwr=0&amp;fwrattr=true&amp;rpe=1&amp;resp_fmts=4&amp;wgl=1&amp;uach=WyJXaW5kb3dzIiwiMTAuMC4wIiwieDg2IiwiIiwiMTMwLjAuMjg0OS41NiIsbnVsbCwwLG51bGwsIjY0IixbWyJDaHJvbWl1bSIsIjEzMC4wLjY3MjMuNzAiXSxbIk1pY3Jvc29mdCBFZGdlIiwiMTMwLjAuMjg0OS41NiJdLFsiTm90P0FfQnJhbmQiLCI5OS4wLjAuMCJdXSwwXQ..&amp;dt=1730532612927&amp;bpp=1&amp;bdt=342&amp;idt=177&amp;shv=r20241030&amp;mjsv=m202410280101&amp;ptt=9&amp;saldr=aa&amp;abxe=1&amp;cookie_enabled=1&amp;eoidce=1&amp;prev_fmts=0x0&amp;nras=1&amp;correlator=5244564576561&amp;frm=20&amp;pv=1&amp;u_tz=480&amp;u_his=5&amp;u_h=1080&amp;u_w=1920&amp;u_ah=1040&amp;u_aw=1920&amp;u_cd=24&amp;u_sd=1&amp;dmc=8&amp;adx=942&amp;ady=1161&amp;biw=1268&amp;bih=964&amp;scr_x=0&amp;scr_y=2337&amp;eid=44759876%2C44759927%2C95343682%2C95344188%2C31088550%2C95345471%2C95345788%2C95345963&amp;oid=2&amp;pvsid=1736967940342488&amp;tmod=594248801&amp;wsm=1&amp;uas=0&amp;nvt=2&amp;ref=https%3A%2F%2Fhuangxuan.me%2Fpage2%2F&amp;fc=1920&amp;brdim=0%2C0%2C0%2C0%2C1920%2C0%2C1920%2C1040%2C1283%2C964&amp;vis=1&amp;rsz=%7C%7CeE%7C&amp;abl=CS&amp;pfx=0&amp;fu=128&amp;bc=31&amp;bz=1.5&amp;td=1&amp;tdf=2&amp;psd=W251bGwsbnVsbCxudWxsLDNd&amp;nt=1&amp;ifi=2&amp;uci=a!2&amp;fsb=1&amp;dtd=185"
              data-google-container-id="a!2"
              tabIndex={0}
              title="Advertisement"
              aria-label="Advertisement"
              data-load-complete="true"
            ></iframe>
          </div>
        </ins>
        <script>(adsbygoogle = window.adsbygoogle || []).push({});</script>
      </div>
    </div>
  );
};
export default Container;

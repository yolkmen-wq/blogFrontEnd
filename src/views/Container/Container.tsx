import { useState } from "react";
import { useTranslation } from "react-i18next";

const Container = () => {
  // 组件内部使用hook
  const [t, i18n] = useTranslation();
  const [currentIndex, setCurrentIndex] = useState(0);
  const onLanChange = (e: any) => {
    setCurrentIndex(e.target.value);
    console.log(e);
    console.log(e.target.value);
  };
  return (
    <div className="container" style={{ height: "auto !important" }}>
      <div className="row" style={{ height: "auto !important" }}>
        {/* USE SIDEBAR  */}
        {/* PostList Container */}
        <div
          className="col-lg-8 col-lg-offset-1 col-md-8 col-md-offset-1 col-sm-12
        col-xs-12 postlist-container"
        >
          {/* Language Selector */}
          <select className="sel-lang" onChange={(event) => onLanChange(event)}>
            <option value="0" selected={true}>
              {" "}
              中文 | Chinese{" "}
            </option>
            <option value="1"> 英文 | English </option>
          </select>

          {/* Chinese Version */}
          <div
            className="zh post-container active"
            style={{ display: currentIndex == 0 ? "block" : "none" }}
          >
            <p>
              Hey，我是吳啟，一个略懂计算机科学与慵懶青年，一名擁有五年經驗的前端開發工程師，我專註於前端技術的深耕與創新，致力於構建高質量、易維護的前端架構和流暢的用戶體驗。
            </p>

            <p>
              這個博客不僅是我的技術筆記本，也是我與廣大技術愛好者交流的平台。在這裡，我將分享我的技術心得、開發實戰和對行業趨勢的思考。無論是前端開發的新手，還是技術精進的探索者，期待與您一起碰撞思維、啟發創新，共同推動前端技術的發展！
            </p>

            <p>
              目前的物理活動範圍主要在深圳，也想當個數字遊
              <del>民</del>俠。虛擬分身日常出沒於
              <a href="">微博</a>、<a href="">知乎</a>
              <a href="">B站</a>、<a href="">Instagram</a>、<a href="">推特</a>
              、<a href="https://github.com/yolkmen-wq">Github</a> 等。
            </p>

            <h5 id="技术演讲">技术演讲</h5>

            <ul>
              <li>
                <a href="https://www.bilibili.com/video/BV1LY411Q7hC/?spm_id_from=333.999.0.0">
                  React 国情咨文 2022
                </a>{" "}
                · 第七届中国开源年会 · 2023
              </li>
              <li>
                <a href="https://reactjs.org/blog/2022/06/15/react-labs-what-we-have-been-working-on-june-2022.html">
                  React Labs: What We’ve Been Working On – June 2022
                </a>{" "}
                · React Blog
              </li>
              <li>
                <a href="https://youtu.be/lGEMwh32soc">React Without Memo</a> ·{" "}
                <a href="https://conf.reactjs.org/">React Conf 2021</a>
              </li>
              <li>
                <a href="https://youtu.be/lGEMwh32soc">
                  Toward Hermes being the Default
                </a>{" "}
                · React Native Blog · 2021
              </li>
              <li>
                React Native 0.64 with Hermes for iOS ·{" "}
                <a href="https://www.callstack.com/podcast-react-native-show">
                  The RN Show Podcast Ep #5
                </a>{" "}
                · 2021
              </li>
              <li>
                <a href="//huangxuan.me/jsconfcn2017/">
                  Upgrading to Progressive Web Apps
                </a>{" "}
                ·{" "}
                <a href="https://www.youtube.com/watch?v=RWzMF-1fjJ8&amp;t=1s">
                  Youtube
                </a>{" "}
                · <a href="http://2017.jsconf.cn/">JSConf CN 上海 2017</a>
              </li>
              <li>
                Building Progressive Web Apps ·{" "}
                <a href="http://www.csdisummit.com/">CSDI 广州 2017</a>
              </li>
              <li>The State of Progressive Web App · GDG IO Redux 北京 2017</li>
              <li>炒冷饭 ·&nbsp;PWA 到底是个什么玩意？· Baidu HQ 北京 2017</li>
              <li>
                <a href="//huangxuan.me/2016/11/20/sw-101-gdgdf/">
                  Service Worker 101
                </a>{" "}
                · GDG DevFest 北京 2016
              </li>
              <li>
                <a href="//huangxuan.me/2016/10/20/pwa-qcon2016/">
                  Progressive Web App，复兴序章
                </a>{" "}
                ·{" "}
                <a href="http://2016.qconshanghai.com/presentation/3111">
                  QCon 上海 2016
                </a>
              </li>
              <li>Progressive Web App 之我见 · GDG IO Redux 北京 2016</li>
              <li>
                <a href="//huangxuan.me/2015/12/28/css-sucks-2015/">
                  CSS Still Sucks 2015
                </a>{" "}
                · 2015
              </li>
              <li>
                <a href="//huangxuan.me/2015/07/09/js-module-7day/">
                  JavaScript 模块化七日谈
                </a>{" "}
                · 2015
              </li>
            </ul>

            <h5 id="媒体关注">媒体关注</h5>

            <ul>
              <li>
                <a href="https://appycyfaqcq1951.pc.xiaoe-tech.com/p/t_pc/course_pc_detail/video/v_64477dbfe4b0cf39e6c11d2a">
                  Hux 黄玄：从全局视角看 React 生态
                </a>{" "}
                · 直播 · 图灵 8 点半 · 2023
              </li>
              <li>
                <a href="https://segmentfault.com/a/1190000043208486">
                  2022 中国开源先锋 33 人
                </a>{" "}
                · SegmentFault · 2023
              </li>
              <li>
                <a href="https://gitee.com/gitee-stars/30">
                  React 黄玄：不懂艺术的 B-Boy 不是 Swag 的程序员
                </a>{" "}
                · Gitee 封面人物 · 2022
              </li>
              <li>
                <a href="https://www.zhihu.com/zvideo/1542577108190068737?page=ogv">
                  在硅谷当程序员是怎样的体验？
                </a>{" "}
                · 知乎
                <a href="https://movie.douban.com/subject/36015036/">
                  《我所向往的职业啊》
                </a>{" "}
                · 2022
              </li>
            </ul>

            {/* - [掘金 AMA：我是前端娱乐圈的老人 & Facebook 实习生 -- 黄玄][19] · 2018 */}
          </div>

          {/* English Version  */}
          <div
            className="en post-container"
            style={{ display: currentIndex == 1 ? "block" : "none" }}
          >
            <p>
              Hey, I am Huang, Xuan (a.k.a. <em>@huxpro</em>). I worked on the{" "}
              <a href="https://beta.reactjs.org/community/meet-the-team#react-core">
                React Team
              </a>{" "}
              at <del>Facebook</del>Meta.
            </p>

            <p>
              I considered myself as a hybrid between a software engineer
              specifically into the programming languages theories and
              implementations domain (i.e. compiler, type system, type-based
              formal verification, virtual machine, runtime systems, garbage
              collection), and a creative technologiest deeply caring about many
              humanistic aspects (e.g. visual, sound, interaction) in UI and HCI
              in general.
            </p>

            <p>
              I also worked on the{" "}
              <a href="https://hermesengine.dev/">Hermes JavaScript Engine</a>,
              some other projects under the{" "}
              <a href="https://tech.fb.com/ar-vr/">Reality Labs (Research)</a>,
              and <a href="https://reasonml.github.io/">ReasonML</a> (now{" "}
              <a href="https://rescript-lang.org/">ReScript</a>) efforts at Meta
              (Facebook).
            </p>

            <p>
              In the past, I worked on{" "}
              <a href="https://www.alitrip.com/">Alitrip (Fliggy)</a> mobile and
              web apps under the{" "}
              <a href="https://en.wikipedia.org/wiki/Alibaba_Group">
                Alibaba Group
              </a>
              , found and lead front-end infrastructure team at an unicorn
              startup company{" "}
              <a href="https://www.crunchbase.com/organization/beijing-weiying-technology">
                Beijing Weiying (a.k.a. WePiao, now acquired by Maoyan)
              </a>
              , and helped{" "}
              <a href="https://en.wikipedia.org/wiki/Ele.me">
                Ele.me (now acquired by Alibaba)
              </a>{" "}
              to upgrade their mobile web site into{" "}
              <a href="https://medium.com/elemefe/upgrading-ele-me-to-progressive-web-app-2a446832e509">
                the first influential PWA (progressive web app) in China
              </a>
              .
            </p>

            <p>
              I studied BA, Digital Media Art at{" "}
              <a href="https://en.wikipedia.org/wiki/Communication_University_of_China">
                Communication University of China
              </a>{" "}
              and MS, Computer Science (with a focus on programming languages,
              mainly supervised by{" "}
              <a href="https://www.cs.rit.edu/~mtf/">Prof. Matthew Fluet</a>) at{" "}
              <a href="https://en.wikipedia.org/wiki/Rochester_Institute_of_Technology">
                Rochester Institute of Technology
              </a>
              .
            </p>

            <h5 id="appearence">Appearence</h5>

            <ul>
              <li>
                <a href="https://reactjs.org/blog/2022/06/15/react-labs-what-we-have-been-working-on-june-2022.html">
                  React Labs: What We’ve Been Working On – June 2022
                </a>{" "}
                · React Blog · 2022
              </li>
              <li>
                <a href="https://youtu.be/lGEMwh32soc">React Without Memo</a> ·{" "}
                <a href="https://conf.reactjs.org/">React Conf 2021</a>
              </li>
              <li>
                <a href="https://youtu.be/lGEMwh32soc">
                  Toward Hermes being the Default
                </a>{" "}
                · React Native Blog · 2021
              </li>
              <li>
                React Native 0.64 with Hermes for iOS ·{" "}
                <a href="https://www.callstack.com/podcast-react-native-show">
                  The RN Show Podcast Ep #5
                </a>{" "}
                · 2021
              </li>
              <li>
                <a href="//huangxuan.me/jsconfcn2017/">
                  Upgrading to Progressive Web Apps
                </a>{" "}
                ·{" "}
                <a href="http://2017.jsconf.cn/">JSConf China Shanghai 2017</a>
              </li>
              <li>
                Building Progressive Web Apps ·{" "}
                <a href="http://www.csdisummit.com/">CSDI Guangzhou 2017</a>
              </li>
              <li>
                The State of Progressive Web App · GDG IO Redux Beijing 2017
              </li>
              <li>PWA Rehashing · Baidu HQ Beijing 2017</li>
              <li>
                <a href="//huangxuan.me/2016/11/20/sw-101-gdgdf/">
                  Service Worker 101
                </a>{" "}
                · GDG DevFest Beijing 2016
              </li>
              <li>
                <a href="//huangxuan.me/2016/10/20/pwa-qcon2016/">
                  Progressive Web Apps
                </a>{" "}
                · QCon Shanghai 2016
              </li>
              <li>Progressive Web App in my POV · GDG IO Redux Beijing 2016</li>
              <li>
                <a href="//huangxuan.me/2015/12/28/css-sucks-2015/">
                  CSS Still Sucks 2015
                </a>{" "}
                · 2015
              </li>
              <li>
                <a href="//huangxuan.me/2015/07/09/js-module-7day/">
                  JavaScript Modularization Journey
                </a>{" "}
                · 2015
              </li>
            </ul>
          </div>

          {/* disqus 评论框 start */}
          <div className="comment">
            <div id="disqus_thread" className="disqus-thread"></div>
          </div>
          {/* disqus 评论框 end */}
        </div>
        {/* Sidebar Container  */}
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
              <a
                data-sort="0065"
                href="/archive/?tag=%E7%9F%A5%E4%B9%8E"
                title="知乎"
                rel="14"
              >
                知乎
              </a>

              <a
                data-sort="0039"
                href="/archive/?tag=%E7%AC%94%E8%AE%B0"
                title="笔记"
                rel="40"
              >
                笔记
              </a>

              <a data-sort="0043" href="/archive/?tag=Coq" title="Coq" rel="36">
                Coq
              </a>

              <a
                data-sort="0043"
                href="/archive/?tag=SF+%28%E8%BD%AF%E4%BB%B6%E5%9F%BA%E7%A1%80%29"
                title="SF (软件基础)"
                rel="36"
              >
                SF (软件基础)
              </a>

              <a data-sort="0057" href="/archive/?tag=Web" title="Web" rel="22">
                Web
              </a>

              <a
                data-sort="0060"
                href="/archive/?tag=PLF+%28%E7%BC%96%E7%A8%8B%E8%AF%AD%E8%A8%80%E5%9F%BA%E7%A1%80%29"
                title="PLF (编程语言基础)"
                rel="19"
              >
                PLF (编程语言基础)
              </a>

              <a
                data-sort="0063"
                href="/archive/?tag=LF+%28%E9%80%BB%E8%BE%91%E5%9F%BA%E7%A1%80%29"
                title="LF (逻辑基础)"
                rel="16"
              >
                LF (逻辑基础)
              </a>

              <a data-sort="0071" href="/archive/?tag=PWA" title="PWA" rel="8">
                PWA
              </a>

              <a
                data-sort="0073"
                href="/archive/?tag=%E4%BA%A7%E5%93%81"
                title="产品"
                rel="6"
              >
                产品
              </a>

              <a
                data-sort="0073"
                href="/archive/?tag=UX%2FUI"
                title="UX/UI"
                rel="6"
              >
                UX/UI
              </a>

              <a
                data-sort="0075"
                href="/archive/?tag=JavaScript"
                title="JavaScript"
                rel="4"
              >
                JavaScript
              </a>

              <a
                data-sort="0075"
                href="/archive/?tag=Meta"
                title="Meta"
                rel="4"
              >
                Meta
              </a>

              <a
                data-sort="0075"
                href="/archive/?tag=Slides"
                title="Slides"
                rel="4"
              >
                Slides
              </a>

              <a
                data-sort="0076"
                href="/archive/?tag=%E8%AF%91"
                title="译"
                rel="3"
              >
                译
              </a>

              <a
                data-sort="0076"
                href="/archive/?tag=%E9%98%BF%E9%87%8C"
                title="阿里"
                rel="3"
              >
                阿里
              </a>

              <a
                data-sort="0077"
                href="/archive/?tag=%E5%9F%BA%E7%A1%80"
                title="基础"
                rel="2"
              >
                基础
              </a>

              <a
                data-sort="0077"
                href="/archive/?tag=%E5%BE%AE%E4%BF%A1"
                title="微信"
                rel="2"
              >
                微信
              </a>

              <a
                data-sort="0077"
                href="/archive/?tag=%E8%AE%A1%E7%AE%97%E7%90%86%E8%AE%BA"
                title="计算理论"
                rel="2"
              >
                计算理论
              </a>

              <a data-sort="0077" href="/archive/?tag=C" title="C" rel="2">
                C
              </a>

              <a
                data-sort="0077"
                href="/archive/?tag=C%2B%2B"
                title="C++"
                rel="2"
              >
                C++
              </a>

              <a data-sort="0077" href="/archive/?tag=CSS" title="CSS" rel="2">
                CSS
              </a>

              <a data-sort="0077" href="/archive/?tag=En" title="En" rel="2">
                En
              </a>

              <a data-sort="0077" href="/archive/?tag=Vim" title="Vim" rel="2">
                Vim
              </a>

              <a
                data-sort="0077"
                href="/archive/?tag=hUX+%E9%9A%8F%E6%83%B3%E5%BD%95"
                title="hUX 随想录"
                rel="2"
              >
                hUX 随想录
              </a>
            </div>
          </section>
          {/* Short About */}
          <section className="visible-md visible-lg">
            <hr />
            <h5>
              <a href="/about/">ABOUT ME</a>
            </h5>
            <div className="short-about">
              <img src="https://github.com/Huxpro.png" />

              <p>
                要做一个有 swag 的程序员 <br /> React Team @ Meta
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
          Friends Blog
          <hr />
          <h5>FRIENDS</h5>
          <ul className="list-inline">
            <li>
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
            </li>
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
          {/* <script>(adsbygoogle = window.adsbygoogle || []).push({});</script> */}
        </div>
      </div>
    </div>
  );
};
export default Container;

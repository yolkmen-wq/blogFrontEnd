import SideBar from "@components/SideBar/SideBar";
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
        <SideBar />
      </div>
    </div>
  );
};
export default Container;

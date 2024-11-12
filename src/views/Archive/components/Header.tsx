const Header = () => {
  return (
    <header
      className="intro-header"
      style={{
        backgroundImage: `url(${require("@assets/images/bg-little-universe.jpg")})`,
      }}
    >
      <div className="header-mask"></div>
      <div className="container">
        <div className="row">
          <div className="col-lg-8 col-lg-offset-2 col-md-10 col-md-offset-1">
            <div className="site-heading" id="tag-heading">
              <h1>Archive</h1>
              <span className="subheading">
                「我干了什么 究竟拿了时间换了什么」
              </span>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};
export default Header;

const Header = () => {
  return (
    <header
      className="intro-header"
      style={{
        backgroundImage: `url(${require("@assets/images/home-bg.jpg")})`,
      }}
    >
      <div className="header-mask"></div>
      <div className="container">
        <div className="row">
          <div className="col-lg-8 col-lg-offset-2 col-md-10 col-md-offset-1">
            <div className="site-heading">
              <h1>WQ Blog</h1>
              <span className="subheading">「离开世界之前 一切都是过程」</span>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};
export default Header;

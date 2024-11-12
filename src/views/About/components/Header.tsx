const Header = () => {
  return (
    <header
      className="intro-header"
      style={{
        backgroundImage: `url(${require("@assets/images/bg-home.png")})`,
      }}
    >
      <div className="header-mask"></div>
      <div className="container">
        <div className="row">
          <div className="col-lg-8 col-lg-offset-2 col-md-10 col-md-offset-1">
            <div className="site-heading">
              <h1>About</h1>
              <span className="subheading">「他单纯只想把日子过得不浪费」</span>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};
export default Header;

interface HeaderProps {
  tags: Array<string> | undefined;
  title: string | undefined;
  date: string | undefined;
}
const Header: React.FC<HeaderProps> = ({ tags, title, date }) => {
  return (
    <header className="intro-header style-text">
      <div className="header-mask"></div>

      <div className="container">
        <div className="row">
          <div className="col-lg-8 col-lg-offset-2 col-md-10 col-md-offset-1">
            <div className="post-heading">
              <div className="tags">
                <a className="tag" href="/archive/?tag=Web" title="Web">
                  Web
                </a>

                <a
                  className="tag"
                  href="/archive/?tag=JavaScript"
                  title="JavaScript"
                >
                  JavaScript
                </a>
              </div>
              <h1 id="javascript">{title}</h1>

              <h2 className="subheading" id=""></h2>
              <span className="meta">Posted by WQ on {date}</span>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};
export default Header;

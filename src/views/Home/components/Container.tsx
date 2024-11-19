import SideBar from "@components/SideBar/SideBar";
import { Link } from "react-router-dom";
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
          {articleList.map((article: any, idx: number) => {
            return (
              <div key={idx}>
                <div className="post-preview">
                  <a></a>
                  <Link to={`/detail/${article.id}`}>
                    <h2 className="post-title">{article.title}</h2>

                    <div
                      className="post-content-preview"
                      dangerouslySetInnerHTML={{ __html: article.brief }}
                    ></div>
                  </Link>
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
      </div>
    </div>
  );
};
export default Container;

import SideBar from "@components/SideBar/SideBar";
import { Link } from "react-router-dom";
import { Spin } from "antd";
import { Loading } from "@assets/icon/icon";

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
  isShowLoading: boolean;
  currentPage: number;
  totalPages: number;
  onPageChange: (page: number) => Promise<void>;
}
const Container: React.FC<ContainerProps> = ({
  articleList,
  isShowLoading,
  currentPage,
  totalPages,
  onPageChange,
}) => {
  const handlePrevious = () => {
    if (currentPage > 1) {
      onPageChange(currentPage - 1);
    }
  };

  const handleNext = () => {
    if (currentPage < totalPages) {
      onPageChange(currentPage + 1);
    }
  };

  return (
    <>
      {isShowLoading ? (
        <Spin indicator={<Loading />} className="d-flex justify-center" />
      ) : (
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
                      <Link to={`/detail/${article.id}`}>
                        <h2 className="post-title">{article.title}</h2>

                        <div
                          className="post-content-preview"
                          dangerouslySetInnerHTML={{ __html: article.brief }}
                        ></div>
                      </Link>
                      <p className="post-meta">
                        Posted by WQ on {article.date}
                      </p>
                    </div>
                    <hr />
                  </div>
                );
              })}
              {/* <!-- Pager --> */}

              <ul className="pager">
                {currentPage !== 1 && (
                  <li className="previous" onClick={handlePrevious}>
                    <a className="cursor-pointer">← Newer Posts</a>
                  </li>
                )}
                {currentPage < totalPages && (
                  <li className="next" onClick={handleNext}>
                    <a className="cursor-pointer">Older Posts →</a>
                  </li>
                )}
              </ul>
            </div>
            {/* Sidebar Container  */}
            <SideBar />
          </div>
        </div>
      )}
    </>
  );
};
export default Container;

import _ from "lodash";
import dayjs from "dayjs";
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
  tags: any[];
}
const Container: React.FC<ContainerProps> = ({ articleList, tags }) => {
  const articleListWithDate = articleList.map((article) => {
    const date = dayjs(article.date).format("YYYY");
    return { ...article, date };
  });

  const groupedArticleList = _.groupBy(articleListWithDate, "date");

  const totalCount = tags.reduce((acc, tag) => acc + tag.count, 0);

  return (
    <div className="container">
      <div className="row">
        <div className="col-lg-8 col-lg-offset-2 col-md-10 col-md-offset-1">
          {/* <!-- Tags (as filter) --> */}
          <div id="tag_cloud" className="tags tags-sup js-tags">
            <a className="tag-button--all focus" data-encode="">
              Show All
              <sup>{totalCount}</sup>
            </a>
            {tags.map((tag: any, index: number) => {
              return (
                <a
                  className="tag-button"
                  title={tag.tagName}
                  style={{ backgroundColor: "rgb(47, 147, 180)" }}
                >
                  {tag.tagName}
                  <sup>{tag.count}</sup>
                </a>
              );
            })}
            {/* <a
              data-sort="0039"
              data-encode="%E7%AC%94%E8%AE%B0"
              className="tag-button"
              title="笔记"
              rel="40"
              style={{ backgroundColor: "rgb(47, 147, 180)" }}
            >
              笔记
              <sup>40</sup>
            </a> */}
          </div>

          {/* <!-- Article List --> */}
          <div className="mini-post-list js-result">
            {Object.keys(groupedArticleList)
              .reverse()
              .map((date) => {
                return (
                  <section>
                    <span className="fa listing-seperator">
                      <span className="tag-text">{date}</span>
                    </span>
                    {groupedArticleList[date].map((article) => {
                      return (
                        <div
                          className="post-preview item"
                          data-tags="Web,JavaScript"
                          onClick={() => {}}
                        >
                          {/* <a href="/2021/04/10/js-20yrs-preface/">
                            <h2 className="post-title">{article.title}</h2>
                          </a> */}
                          <Link to={`/detail/${article.id}`}>
                            <h2 className="post-title">{article.title}</h2>
                          </Link>
                          <hr />
                        </div>
                      );
                    })}
                  </section>
                );
              })}
          </div>
        </div>
      </div>
    </div>
  );
};
export default Container;

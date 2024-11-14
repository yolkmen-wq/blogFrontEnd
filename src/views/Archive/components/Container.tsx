import _ from "lodash";
import dayjs from "dayjs";
import { Link } from "react-router-dom";
import { useEffect, useMemo, useState } from "react";
interface Article {
  id: number;
  title: string;
  brief: string;
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
  const [groupedArticleList, setGroupedArticleList] = useState<{
    [key: string]: Article[];
  }>({});
  const [articleListWithDate, setArticleListWithDate] = useState<Article[]>();

  // 使用 useEffect 使得 articleListWithDate 不会导致无限循环渲染
  useEffect(() => {
    const articleListWithDateTmp = articleList.map((article) => ({
      ...article,
      date: dayjs(article.date).format("YYYY"),
    }));
    setArticleListWithDate(articleListWithDateTmp);
  }, [articleList]);

  // 使用 useEffect 计算 groupedArticleList
  useEffect(() => {
    const grouped = _.groupBy(articleListWithDate, "date");
    setGroupedArticleList(grouped);
  }, [articleListWithDate]);

  const tagClick = (tagId: number | null) => {
    if (tagId) {
      const filteredArticles = articleList.filter((article) => {
        return (
          Array.isArray(article.tags) &&
          article.tags.find((id: number) => id === tagId)
        );
      });
      console.log(45, filteredArticles);
      setArticleListWithDate(
        filteredArticles.map((article) => ({
          ...article,
          date: dayjs(article.date).format("YYYY"),
        }))
      );
    } else {
      setArticleListWithDate(
        articleList.map((article) => ({
          ...article,
          date: dayjs(article.date).format("YYYY"),
        }))
      );
    }
  };

  const totalCount = tags.reduce((acc, tag) => acc + tag.count, 0);

  return (
    <div className="container">
      <div className="row">
        <div className="col-lg-8 col-lg-offset-2 col-md-10 col-md-offset-1">
          {/* <!-- Tags (as filter) --> */}
          <div id="tag_cloud" className="tags tags-sup js-tags">
            <a className="tag-button--all focus" onClick={() => tagClick(null)}>
              Show All
              <sup>{totalCount}</sup>
            </a>
            {tags.map((tag: any, index: number) => {
              return (
                <a
                  className="tag-button"
                  title={tag.tagName}
                  style={{ backgroundColor: "rgb(47, 147, 180)" }}
                  onClick={() => tagClick(tag.tagId)}
                  key={index}
                >
                  {tag.tagName}
                  <sup>{tag.count}</sup>
                </a>
              );
            })}
          </div>

          {/* <!-- Article List --> */}
          <div className="mini-post-list js-result">
            {Object.keys(groupedArticleList)
              .reverse()
              .map((date) => {
                return (
                  <section key={date}>
                    <span className="fa listing-seperator">
                      <span className="tag-text">{date}</span>
                    </span>
                    {groupedArticleList[date].map((article) => {
                      return (
                        <div
                          className="post-preview item"
                          data-tags="Web,JavaScript"
                          onClick={() => {}}
                          key={article.id}
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

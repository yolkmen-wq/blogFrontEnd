import { useSelector, useDispatch } from "react-redux";
import { setIsShowSearch } from "@/store/modules/searchSlice";
import { getArticleList } from "@/api/article";
import { useState } from "react";
interface ArticleType {
  id: number;
  title: string;
  brief: string;
  tags: string;
  url: string;
  content: string;
  date: string;
}
const Search = () => {
  const dispatch = useDispatch();
  const [articleList, setArticleList] = useState<ArticleType[]>([]);

  const onButtonClick = () => {
    dispatch(setIsShowSearch());
  };
  const isShowSearch = useSelector(
    (state: any) => state.searchSlice.isShowSearch
  );

  const onSearchInput = async (e: any) => {
    const target = e.target as HTMLInputElement; // 类型断言
    const keyword = target.value;

    if (keyword !== "") {
      const res = await getArticleList(1, 999, keyword);
      setArticleList(res.data);
    }
  };
  return (
    <div className={`search-page ${isShowSearch ? "search-active" : ""}`}>
      <div
        className="search-icon-close-container"
        onClick={() => onButtonClick()}
      >
        <span className="search-icon-close">
          <i className="fa fa-chevron-down"></i>
        </span>
      </div>
      <div className="search-main container">
        <div className="row">
          <div className="col-lg-8 col-lg-offset-2 col-md-10 col-md-offset-1">
            <form></form>
            <input
              type="text"
              id="search-input"
              placeholder="$ grep..."
              onInput={(e) => onSearchInput(e)}
            />

            <div id="search-results" className="mini-post-list">
              {articleList.map((item) => {
                return (
                  <div className="post-preview item">
                    <a href="/2020/07/05/reflection-2020/">
                      <h2 className="post-title">{item.title}</h2>
                      <h3 className="post-subtitle">{item.brief}</h3>
                      <hr />
                    </a>
                  </div>
                );
              })}
              {/* <div className="post-preview item">
                <a href="/2020/07/05/reflection-2020/">
                  <h2 className="post-title">
                    作为一个前端，看不懂@黄玄 的几乎每一个回答，只有我自己吗？
                  </h2>
                  <h3 className="post-subtitle">
                    Taking this chance to reflect on myself
                  </h3>
                  <hr />
                </a>
              </div> */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Search;

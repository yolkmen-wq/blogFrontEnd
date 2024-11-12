import { useSelector, useDispatch } from "react-redux";
import { setIsShowSearch } from "@/store/modules/searchSlice";
const Search = () => {
  const dispatch = useDispatch();

  const onButtonClick = () => {
    dispatch(setIsShowSearch());
  };
  const isShowSearch = useSelector(
    (state: any) => state.searchSlice.isShowSearch
  );
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
            <input type="text" id="search-input" placeholder="$ grep..." />

            <div id="search-results" className="mini-post-list">
              <div className="post-preview item">
                <a href="/2020/07/05/reflection-2020/">
                  <h2 className="post-title">
                    作为一个前端，看不懂@黄玄 的几乎每一个回答，只有我自己吗？
                  </h2>
                  <h3 className="post-subtitle">
                    Taking this chance to reflect on myself
                  </h3>
                  <hr />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Search;

import Nav from "@components/Nav/Nav";
import Header from "./components/Header";
import Search from "@views/Search/Search";
import Container from "./components/Container";
import { Fragment, useState, useEffect } from "react";
import { getArticleList } from "@/api/article";

const Home = () => {
  const [articleList, setArticleList] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [pageSize, setPageSize] = useState(10);
  const [totalPages, setTotalPages] = useState(0);
  const [isShowLoading, setLoading] = useState(false);

  const fetchArticles = async (page: number) => {
    try {
      setLoading(true);
      const res = await getArticleList(page, pageSize);
      setArticleList(res.data.data.list);
      setTotalPages(res.data.data.totalPage);
      setLoading(false);
    } catch (error) {
      console.error("Failed to fetch articles:", error);
    }
  };

  useEffect(() => {
    fetchArticles(currentPage);
  }, [currentPage]);

  const handlePageChange = async (page: number) => {
    setCurrentPage(page);
  };
  return (
    <Fragment>
      <Nav />
      <Header />
      <Search />
      <Container
        articleList={articleList}
        isShowLoading={isShowLoading}
        currentPage={currentPage}
        totalPages={totalPages}
        onPageChange={handlePageChange}
      />
    </Fragment>
  );
};
export default Home;

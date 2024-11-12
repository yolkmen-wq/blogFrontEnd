import Nav from "@components/Nav/Nav";
import Header from "./components/Header";
import Search from "@views/Search/Search";
import Container from "./components/Container";
import { Fragment, useState, useEffect } from "react";
import { getArticleList } from "@/api/article";
const Home = () => {
  const [articleList, setArticleList] = useState([]);
  const [pageNum, setPageNum] = useState(1);
  const [pageSize, setPageSize] = useState(10);

  useEffect(() => {
    console.log("getArticleList");
    (async function () {
      const res = await getArticleList(pageNum, pageSize);
      console.log(res);
      setArticleList(res.data);
    })();
  }, []);
  return (
    <Fragment>
      <Nav />
      <Header />
      <Search />
      <Container articleList={articleList} />
    </Fragment>
  );
};
export default Home;

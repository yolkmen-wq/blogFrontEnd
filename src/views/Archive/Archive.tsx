import Nav from "@components/Nav/Nav";
import Header from "./components/Header";
import Search from "@views/Search/Search";
import Container from "./components/Container";
import { Fragment, useState, useEffect } from "react";
import { getArticleList, getTags } from "@/api/article";

const Archive = () => {
  const [articleList, setArticleList] = useState([]);
  const [tags, setTags] = useState([]);

  useEffect(() => {
    console.log("getArticleList");
    (async function () {
      const res = await getArticleList();
      setArticleList(res.data);

      const res2 = await getTags();
      setTags(res2.data.data);
    })();
  }, [getArticleList, getTags]);
  return (
    <Fragment>
      <Nav />
      <Header />
      <Search />
      <Container articleList={articleList} tags={tags} />
    </Fragment>
  );
};
export default Archive;

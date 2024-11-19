import Nav from "@/components/Nav/Nav";
import { useState, useEffect, Fragment } from "react";
import { useParams } from "react-router-dom";
import { getArticleById } from "@/api/article";
import Header from "./components/Header";
import Content from "./components/Content";
import Footer from "@/components/Footer/Footer";
import Comment from "@components/comment";

interface Article {
  title?: string | undefined;
  date?: string | undefined; // 或者 Date 类型，具体视你的需求而定
  tags?: string[] | undefined;
  content?: string;
}

const Detail = () => {
  const [article, setArticle] = useState<Article>({});
  let { id } = useParams();

  useEffect(() => {
    (async () => {
      const res = await getArticleById(Number(id));
      setArticle(res.data);
    })();
  }, [getArticleById]);
  return (
    <Fragment>
      <Nav />
      <Header
        title={article?.title}
        date={article?.date}
        tags={article?.tags}
      />
      {article?.content && <Content content={article?.content} />}
      {id && <Comment articleId={id} type="article" />}

      <Footer />
    </Fragment>
  );
};
export default Detail;

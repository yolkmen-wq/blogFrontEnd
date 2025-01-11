import Nav from "@components/Nav/Nav";
import Header from "./components/Header";
import Search from "@views/Search/Search";
import Container from "./components/Container";
import { Fragment, useState, useEffect } from "react";
import { getLinks } from "@/api/article";
import { countVisits } from "@/api/user";
import { useDispatch } from "react-redux";
import { setVisitsCount } from "@/store/modules/footSlice";
const Home = () => {
  const [links, setLinks] = useState([]);
  const dispatch = useDispatch();
  useEffect(() => {
    getLinks().then((res) => {
      console.log(res.data)
      setLinks(res.data.data);
      sendAnalyticsData();
    });
  }, [getLinks]);
  const sendAnalyticsData = () => {
    // 在这里根据需求实现上传统计数据的逻辑
    // 例如发送到后端进行存储
    countVisits().then((res) => dispatch(setVisitsCount(res.data.data)));
    // console.log('页面访问数据:', data);
  };
  return (
    <Fragment>
      <Nav />
      <Header />
      <Search />
      <Container links={links} />
    </Fragment>
  );
};
export default Home;

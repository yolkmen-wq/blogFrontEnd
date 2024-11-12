import Nav from "@components/Nav/Nav";
import Header from "./components/Header";
import Search from "@views/Search/Search";
import Container from "./components/Container";
import { Fragment, useState, useEffect } from "react";
import { getArticleList, getTags } from "@/api/article";
const Home = () => {
  return (
    <Fragment>
      <Nav />
      <Header />
      <Search />
      <Container />
    </Fragment>
  );
};
export default Home;

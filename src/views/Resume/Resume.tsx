import Nav from "@components/Nav/Nav";
import Header from "./components/Header";
import Search from "@views/Search/Search";
import Content from "./components/Content";
import { Fragment } from "react";
const Resume = () => {
  return (
    <Fragment>
      <Nav />
      <Header />
      <Search />
      <Content />
    </Fragment>
  );
};

export default Resume;

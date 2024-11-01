import Nav from "@components/Nav/Nav";
import Header from "@components/Header/Header";
import Search from "@views/Search/Search";
import Container from "@views/Container/Container";
import { Fragment, useState } from "react";
const Home = () => {
  const [isShowSearch, setIsShowSearch] = useState(false);
  const handleButtonClick = () => {
    setIsShowSearch(!isShowSearch);
  };
  return (
    <Fragment>
      <Nav onButtonClick={handleButtonClick} />
      <Header />
      <Search isShowSearch={isShowSearch} onButtonClick={handleButtonClick} />
      <Container />
    </Fragment>
  );
};
export default Home;

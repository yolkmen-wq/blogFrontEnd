import React, { useState } from "react";
import Nav from "@components/Nav/Nav";

function App() {
  const [isShowSearch, setIsShowSearch] = useState(false);
  const handleButtonClick = () => {
    setIsShowSearch(!isShowSearch);
  };
  return <Nav onButtonClick={handleButtonClick} />;
}

export default App;

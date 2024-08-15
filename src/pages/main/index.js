/*
 * @Author: 猿来如此丿 865657670@qq.com
 * @Date: 2024-08-15 18:04:55
 * @LastEditors: 猿来如此丿 865657670@qq.com
 * @LastEditTime: 2024-08-15 18:33:57
 * @FilePath: \blogFrontEnd\src\pages\main\index.js
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import { Outlet } from "react-router-dom";
import Navigator from "./components/Navigator";
import Footer from "./components/Footer";
const Main = () => {
  return (
    <div>
      <Navigator />
      <Outlet />
      <Footer />
    </div>
  );
};
export default Main;

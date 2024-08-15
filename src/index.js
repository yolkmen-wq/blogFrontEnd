/*
 * @Author: 猿来如此
 * @Date: 2024-08-14 09:17:07
 * @LastEditors: 猿来如此丿 865657670@qq.com
 * @LastEditTime: 2024-08-15 17:06:08
 * @FilePath: \blogFrontEnd\src\index.js
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { RouterProvider } from "react-router-dom";
import router from "@/router";
import "@/pages/scss/home.scss"
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <RouterProvider router={router}>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </RouterProvider>
);

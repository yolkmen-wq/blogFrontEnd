/*
 * @Author: 猿来如此丿 865657670@qq.com
 * @Date: 2024-08-15 16:24:17
 * @LastEditors: 猿来如此丿 865657670@qq.com
 * @LastEditTime: 2024-08-15 16:49:04
 * @FilePath: \blogFrontEnd\craco.config.js
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
const path = require("path");
const pathResolve = (pathUrl) => path.join(__dirname, pathUrl);

module.exports = {
  webpack: {
    alias: {
      "@": pathResolve("src"),
      "@assets": pathResolve("src/assets"),
      "@services": pathResolve("src/services"),
      "@utlis": pathResolve("src/utlis"),
    },
  },
  devServer: {
    port: 1323,
    proxy: {
      "/api": {
        target: "http://localhost:3000",
        changeOrigin: true,
        pathRewrite: {
          "^/api": "",
        },
      },
    },
  },
};

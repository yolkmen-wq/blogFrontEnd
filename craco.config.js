const path = require("path");
module.exports = {
  webpack: {
    alias: {
      "@": path.resolve(__dirname, "src"),
      "@assets": path.resolve(__dirname, "src/assets"),
      "@components": path.resolve(__dirname, "src/components"),
      "@views": path.resolve(__dirname, "src/views"),
      "@utils": path.resolve(__dirname, "src/utils"),
    },
  },
  devServer: {
    proxy: {
      "/api": {
        // target: "http://localhost:1323",
        // target: "http://47.121.201.137:5757",
        target: "https://yolkmen.com",
        changeOrigin: true,
        pathRewrite: { "^/api": "" },
      },
    },
  },
};

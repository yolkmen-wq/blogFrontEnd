import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { RouterProvider } from "react-router-dom";
import router from "./router";
import "./i18n";
import { store } from "./store";
import { Provider } from "react-redux";
import "@assets/css/flower.css";
import "@utils/pointer-flower";
import { AliveScope } from "react-activation";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);

root.render(
    <Provider store={store}>
      <AliveScope>
        <RouterProvider router={router}></RouterProvider>
      </AliveScope>
    </Provider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals

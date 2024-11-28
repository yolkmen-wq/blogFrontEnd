import { createBrowserRouter, createHashRouter } from "react-router-dom";
import { Suspense, lazy } from "react";
import { Loading } from "@/assets/icon/icon";
import { Spin } from "antd";
const App = lazy(() => import("@/App"));
const Home = lazy(() => import("@views/Home/Home"));
const About = lazy(() => import("@views/About/About"));
const Archive = lazy(() => import("@views/Archive/Archive"));
const Detail = lazy(() => import("@views/Detail/Detail"));
const EditPage = lazy(() => import("@views/EditPage/EditPage"));
const Resume = lazy(() => import("@views/Resume/Resume"));

const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <Suspense
        fallback={
          <Spin
            fullscreen={true}
            indicator={<Loading />}
            className="d-flex justify-center"
          />
        }
      >
        {/* <Home /> */}
        <App />
      </Suspense>
    ),
    children: [
      {
        path: "/home",
        element: (
          <Suspense
            fallback={
              <Spin
                fullscreen={true}
                indicator={<Loading />}
                className="d-flex justify-center"
              />
            }
          >
            <Home />
          </Suspense>
        ),
      },
      {
        index: true,
        // path: "/about",
        element: (
          <Suspense
            fallback={
              <Spin
                fullscreen={true}
                indicator={<Loading />}
                className="d-flex justify-center"
              />
            }
          >
            <About />
          </Suspense>
        ),
      },
      {
        path: "/archive",
        element: (
          <Suspense
            fallback={
              <Spin
                fullscreen={true}
                indicator={<Loading />}
                className="d-flex justify-center"
              />
            }
          >
            <Archive />
          </Suspense>
        ),
      },
      {
        path: "/my-resume",
        element: (
          <Suspense
            fallback={
              <Spin
                fullscreen={true}
                indicator={<Loading />}
                className="d-flex justify-center"
              />
            }
          >
            <Resume />
          </Suspense>
        ),
      },
    ],
  },
  {
    path: "/detail/:id",
    element: (
      <Suspense
        fallback={
          <Spin
            fullscreen={true}
            indicator={<Loading />}
            className="d-flex justify-center"
          />
        }
      >
        <Detail />
      </Suspense>
    ),
  },
  {
    path: "/edit",
    element: (
      <Suspense
        fallback={
          <Spin
            fullscreen={true}
            indicator={<Loading />}
            className="d-flex justify-center"
          />
        }
      >
        <EditPage />
      </Suspense>
    ),
  },
]);
export default router;

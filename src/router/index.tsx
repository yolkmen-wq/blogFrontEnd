import { createBrowserRouter, createHashRouter } from "react-router-dom";
import { Suspense, lazy } from "react";
const App = lazy(() => import("@/App"));
const Home = lazy(() => import("@views/Home/Home"));
const About = lazy(() => import("@views/About/About"));
const Archive = lazy(() => import("@views/Archive/Archive"));
const Detail = lazy(() => import("@views/Detail/Detail"));
const EditPage = lazy(() => import("@views/EditPage/EditPage"));

const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <Suspense fallback={<div>Loading...</div>}>
        {/* <Home /> */}
        <App />
      </Suspense>
    ),
    children: [
      {
        path: "/home",
        element: (
          <Suspense fallback={<div>Loading...</div>}>
            <Home />
          </Suspense>
        ),
      },
      {
        index: true,
        // path: "/about",
        element: (
          <Suspense fallback={<div>Loading...</div>}>
            <About />
          </Suspense>
        ),
      },
      {
        path: "/archive",
        element: (
          <Suspense fallback={<div>Loading...</div>}>
            <Archive />
          </Suspense>
        ),
      },
    ],
  },
  {
    path: "/detail/:id",
    element: (
      <Suspense fallback={<div>Loading...</div>}>
        <Detail />
      </Suspense>
    ),
  },
  {
    path: "/edit",
    element: (
      <Suspense fallback={<div>Loading...</div>}>
        <EditPage />
      </Suspense>
    ),
  },
]);
export default router;

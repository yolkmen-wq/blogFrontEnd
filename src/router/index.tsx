import { createBrowserRouter, createHashRouter } from "react-router-dom";
import { Suspense, lazy } from "react";
const App = lazy(() => import("@/App"));
const Home = lazy(() => import("@views/Home/Home"));
const About = lazy(() => import("@views/About/About"));
const Archive = lazy(() => import("@views/Archive/Archive"));
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
        index: true,
        element: (
          <Suspense fallback={<div>Loading...</div>}>
            <Home />
          </Suspense>
        ),
      },
      {
        path: "/about",
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
]);

export default router;

/*
 * @Author: 猿来如此丿
 * @Date: 2024-08-15 16:05:53
 * @LastEditors: 猿来如此丿 865657670@qq.com
 * @LastEditTime: 2024-08-16 09:45:34
 * @FilePath: \blogFrontEnd\src\router\index.js
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import { createHashRouter } from "react-router-dom";
import { Suspense, lazy } from "react";
const Main = lazy(() => import("@/pages/main/index.js"));
const Home = lazy(() => import("@/pages/home/index.js"));
const ArticleDtl = lazy(() => import("@/pages/articleDtl/index.js"));
const About = lazy(() => import("@/pages/about/index.js"));
const Contact = lazy(() => import("@/pages/contact/index.js"));
const router = createHashRouter([
  {
    path: "/",
    element: (
      <Suspense>
        <Main />
      </Suspense>
    ),
    children: [
      {
        index: true,
        element: (
          <Suspense>
            <Home />
          </Suspense>
        ),
      },
      {
        path:'/articleDtl',
        element:(
            <Suspense>
                <ArticleDtl/>
            </Suspense>
        )
      },
      {
        path:'/about',
        element:(
            <Suspense>
                <About/>
            </Suspense>
        )
      },
      {
        path:'/contact',
        element:(
            <Suspense>
                <Contact/>
            </Suspense>
        )
      }
    ],
  },
  {
    path: "/home",
    element: (
      <Suspense>
        <Home />
      </Suspense>
    ),
  },
]);
export default router;

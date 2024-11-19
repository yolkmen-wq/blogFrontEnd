import { useEffect, useRef, useState } from "react";
import { getTags } from "@/api/article";
interface ContainerProps {
  content: string;
}
const Content: React.FC<ContainerProps> = ({ content }) => {
  const detail = content;
  const detailRef = useRef<HTMLDivElement | null>(null);
  const [h2Elements, setH2Elements] =
    useState<NodeListOf<HTMLHeadingElement> | null>(null);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [tags, setTags] = useState([]);

  // 监听滚动事件
  let observer: IntersectionObserver | null = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const index = h2Elements
            ? Array.from(h2Elements).indexOf(entry.target as HTMLHeadingElement)
            : -1;

          if (index !== -1) {
            setCurrentIndex(index);
          }
        }
      });
    }
  );

  useEffect(() => {
    if (detailRef.current) {
      // 获取所有 h2 标签
      const h2Elements = detailRef.current.querySelectorAll("h2");
      setH2Elements(h2Elements);
      // 遍历每个 h2 标签并添加属性
      h2Elements.forEach((h2, index) => {
        h2.setAttribute("id", h2.innerHTML); // 可以根据需要自定义属性名和值
        observer?.observe(h2);
      });
    }
    getTags().then((res) => {
      setTags(res.data.data);
    });
    return () => {
      observer?.disconnect();
    };
  }, [detailRef.current]);
  const catalogClick = (index: number) => {
    setCurrentIndex(index);
    const target = h2Elements?.item(index);
    if (target) {
      target.scrollIntoView({ behavior: "smooth" });
    }
  };
  return (
    <article>
      <div className="container">
        <div className="row">
          {/* <!-- Post Container --> */}
          <div
            ref={detailRef}
            className="
                col-lg-8 col-lg-offset-2
                col-md-10 col-md-offset-1
                post-container"
            dangerouslySetInnerHTML={{ __html: detail }}
          ></div>
          {/* <!-- Side Catalog Container --> */}
          <div
            className="
                col-lg-2 col-lg-offset-0
                visible-lg-block
                sidebar-container
                catalog-container"
          >
            <div className="side-catalog">
              <hr className="hidden-sm hidden-xs" />
              <h5 id="catalog">
                <a className="catalog-toggle" href="#">
                  CATALOG
                </a>
              </h5>
              <ul className="catalog-body">
                {h2Elements &&
                  Array.from(h2Elements)?.map(
                    (h2: HTMLHeadingElement, index: number) => (
                      <li
                        key={index}
                        className={`h2_nav ${
                          index === currentIndex ? "active" : ""
                        }`}
                        onClick={() => catalogClick(index)}
                      >
                        <a href="javascript:void(0);">{h2.innerHTML}</a>
                      </li>
                    )
                  )}
              </ul>
            </div>
          </div>
          {/* <!-- Sidebar Container --> */}

          <div
            className="
                col-lg-8 col-lg-offset-2
                col-md-10 col-md-offset-1
                sidebar-container"
          >
            {/* <!-- Featured Tags --> */}

            <section>
              <hr className="hidden-sm hidden-xs" />

              <h5 id="featured-tags">
                <a href="/archive/">FEATURED TAGS</a>
              </h5>
              <div className="tags">
                {tags.map((tag: any, idx: number) => {
                  return (
                    <a title={tag.tagName} key={idx}>
                      {tag.tagName}
                    </a>
                  );
                })}
              </div>
            </section>

            {/* <!-- Friends Blog --> */}
            <hr />
            {/* <h5 id="friends">FRIENDS</h5>
            <ul className="list-inline"></ul> */}
          </div>
        </div>
      </div>
    </article>
  );
};
export default Content;

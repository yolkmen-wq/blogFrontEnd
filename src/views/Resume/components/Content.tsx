import { useState, useEffect, useRef } from "react";
import { Document, Page, pdfjs } from "react-pdf";
import "react-pdf/dist/Page/AnnotationLayer.css";
import "react-pdf/dist/Page/TextLayer.css";
import { Loading } from "@/assets/icon/icon";

console.log(pdfjs.version);
pdfjs.GlobalWorkerOptions.workerSrc = `https://unpkg.com/pdfjs-dist@${pdfjs.version}/build/pdf.worker.min.mjs`;

const Content = () => {
  const [numPages, setNumPages] = useState<number | null>(null);
  const ref = useRef<HTMLDivElement>(null);
  const [containerWidth, setContainerWidth] = useState<number>(
    ref.current?.clientWidth || window.innerWidth
  );
  const onDocumentLoadSuccess = ({ numPages }: { numPages: number }) => {
    setNumPages(numPages);
  };
  useEffect(() => {
    const handleResize = () => {
      setContainerWidth(ref.current?.clientWidth || window.innerWidth);
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);
  return (
    <article>
      <div className="container">
        <div className="row" ref={ref}>
          <Document
            file={require("@assets/resume.pdf")}
            onLoadSuccess={onDocumentLoadSuccess}
            loading={<Loading />}
          >
            {numPages &&
              Array.from(new Array(numPages), (el, index) => (
                <Page
                  width={containerWidth}
                  key={`page_${index + 1}`}
                  pageNumber={index + 1}
                />
              ))}
          </Document>
          {/* <div>
            <Image
              width={"100%"}
              height={"auto"}
              src={require("@assets/resume/1.png")}
              preview={false}
              placeholder={
                <Image
                  preview={false}
                  src={
                    "../../../assets/resume/1.png?x-oss-process=image/blur,r_50,s_50/quality,q_1/resize,m_mfit,h_200,w_200"
                  }
                  width={200}
                />
              }
            />
            <Image
              width={"100%"}
              height={"auto"}
              src={require("@assets/resume/2.png")}
              preview={false}
              placeholder={
                <Image
                  preview={false}
                  src={
                    "../../../assets/resume/2.png?x-oss-process=image/blur,r_50,s_50/quality,q_1/resize,m_mfit,h_200,w_200"
                  }
                  width={200}
                />
              }
            />
            <Image
              width={"100%"}
              height={"auto"}
              src={require("@assets/resume/3.png")}
              preview={false}
              placeholder={
                <Image
                  preview={false}
                  src={
                    "../../../assets/resume/3.png?x-oss-process=image/blur,r_50,s_50/quality,q_1/resize,m_mfit,h_200,w_200"
                  }
                  width={200}
                />
              }
            />
          </div> */}
        </div>
      </div>
    </article>
  );
};
export default Content;

import { useNavigate,Link } from "react-router-dom";
const Article = ({
  date,
  recentlyRead,
  postImg,
  postType,
  postTitle,
  postCont,
}) => {
    const navigate = useNavigate()
  return (
    <article className="card article-card article-card-sm h-100" onClick={()=>navigate('/articleDtl')}>
      <a href="javascript:void(0);">
        <div className="card-image">
          <div className="post-info">
            <span className="text-uppercase">{date}</span>
            <span className="text-uppercase">{recentlyRead}</span>
          </div>
          <img
            loading="lazy"
            decoding="async"
            src={postImg}
            alt="Post Thumbnail"
            className="w-100"
          />
        </div>
      </a>
      <div className="card-body px-0 pb-0">
        <ul className="post-meta mb-2">
          <li>
            {postType.map((v,i)=>{
                return <a href="javascript:void(0);" key={i}>{v}</a>
            })}
          </li>
        </ul>
        <h2>
          <a className="post-title" href="javascript:void(0);">
            {postTitle}
          </a>
        </h2>
        <p className="card-text">{postCont}</p>
        <div className="content">
          <a className="read-more-btn" href="javascript:void(0);">
            阅 读 更 多
          </a>
        </div>
      </div>
    </article>
  );
};
export default Article

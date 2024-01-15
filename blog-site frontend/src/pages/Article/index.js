import "./index.css";
import NMinRead from "../../components/nMinRead";
import { useEffect, useState } from "react";
import axios from "axios";
import { Navigate, NavLink, useParams } from "react-router-dom";
import { BackendUrl, token } from "../../url";
import Moment from "react-moment";
const Componenet = () => {
  const { id } = useParams();
  const [redirectToMainPage, setRedirectToMainPage] = useState(false);
  const [articleText, setArticleText] = useState();
  const [comments, setComments] = useState();

  // for making a requrest
  //   const baseURL = "http://172.25.24.202:3000/article/byid?id=" + id;
  let baseURL = `${BackendUrl}/article/byid?id=${id}`;
  const deleteArtcleURL = `${BackendUrl}/article/delete?id=${id}`;
  const email = localStorage.getItem("email");

  axios.interceptors.request.use(
    (config) => {
      config.headers.authorization = `Bearer ${token}`;
      return config;
    },
    (error) => {
      return Promise.reject(error);
    }
  );
  const [article, setArticle] = useState({});

  const fetchArticle = async () => {
    const res = await axios.get(baseURL);
    console.log(res.data);
    setArticle(res.data);
    console.log(res.data.article_text);
    setArticleText(res.data.article_text);
  };
  const deleteArticle = async () => {
    const res = await axios.delete(deleteArtcleURL);
    setRedirectToMainPage(true);
    console.log(res);
  };
  const fetchComments = async () => {
    baseURL = `${BackendUrl}/comment/post?article_id=${id}`;
    const res = await axios.get(baseURL);
    // console.log(res.data);
    setComments(res.data);
  };

  useEffect(() => {
    fetchArticle();
    fetchComments();
  }, []);

  if (redirectToMainPage) {
    return <Navigate to="/" />;
  } else
    return (
      <>
        <div className="article">
          <div className="article-first">
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
              }}
            >
              <NMinRead category_name="Design" />
              <div>
                {email ? (
                  <>
                    <NavLink
                      to={`/edit-article/${id}`}
                      style={{
                        textDecoration: "none",
                        color: "inherit",
                      }}
                    >
                      <button
                        className="article-delete-btn"
                        style={{
                          marginRight: "10px",
                          color: "Blue",
                          borderColor: "blue",
                        }}
                      >
                        Edit Article
                      </button>
                    </NavLink>
                    <button
                      className="article-delete-btn"
                      onClick={deleteArticle}
                    >
                      Delete Article
                    </button>
                  </>
                ) : (
                  <></>
                )}
              </div>
            </div>
            {/* <div className="article-first-category">Leadership</div> */}
            <div className="article-first-title">
              {article.title}{" "}
              <div style={{ fontSize: "24px", color: "red" }}>
                <i class="fa fa-heart"></i>{" "}
                <span style={{ color: "black", fontSize: "20px" }}>
                  {article.likes}
                </span>
              </div>
            </div>
            <div className="article-first-description">
              {article.description}
            </div>
            <div className="article-first-img">
              <img
                src={article.article_img}
                style={{ width: "100%", height: "100%", maxHeight: "500px" }}
              />
            </div>
            <div className="article-first-details">
              <div className="article-first-details-first">
                <div>
                  <div className="written-by">Written by</div>
                  <div className="author-name">{article.name}</div>
                </div>
                <div>
                  <div className="written-by">Published on</div>
                  <div className="author-name">
                    <Moment format="D MMM YYYY">{article.created_at}</Moment>
                  </div>
                </div>
              </div>
            </div>
            {/* {articleText} */}
            <div
              className="article-first-details-second"
              dangerouslySetInnerHTML={{
                __html: articleText,
              }}
            ></div>
            <div className="article-comments">
              {comments?.map((comment) => (
                <div className="article-comments-item">
                  <div className="article-comments-item-img">
                    <img
                      src={comment.author_img}
                      style={{
                        width: "100%",
                        height: "100%",
                        borderRadius: "50%",
                      }}
                    />
                  </div>
                  <div>
                    <div style={{ fontSize: "16px", fontWeight: "600" }}>
                      {comment.name}
                    </div>
                    <div>{comment.comment_text}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </>
    );
};

export default Componenet;

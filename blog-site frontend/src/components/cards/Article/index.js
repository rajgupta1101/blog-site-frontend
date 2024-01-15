import { useState } from "react";
import { NavLink } from "react-router-dom";
import Moment from "react-moment";
import "./index.css";
import NMinRead from "../../nMinRead";
const Componenet = ({ article }) => {
  return (
    <>
      <NavLink
        to={"/article/" + article.id}
        style={{ textDecoration: "none", color: "inherit" }}
      >
        <div className="article-card">
          <div className="article-card-img">
            <img
              src={article.article_img}
              style={{ width: "100%", height: "100%" }}
            ></img>
          </div>
          <NMinRead
            category_name={article.category_name}
            duration={article.duration}
          />

          <div className="article-card-title">{article.title}</div>
          <div className="article-card-description">{article.description}</div>
          <div className="article-card-user">
            <div>
              <img
                src={article.author_img}
                style={{ width: "100%", height: "100%", borderRadius: "50%" }}
              />
            </div>
            <div>
              <div>{article.name}</div>
              <div>
                <Moment format="D MMM YYYY">{article.updated_at}</Moment>
              </div>
            </div>
          </div>
        </div>
      </NavLink>
    </>
  );
};

export default Componenet;

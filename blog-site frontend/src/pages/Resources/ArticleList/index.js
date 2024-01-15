import "./index.css";
import ArticleCard from "../../../components/cards/Article";
import { useEffect, useState } from "react";
import axios from "axios";
import { BackendUrl, token } from "../../../url";
const Component = ({ currentCategory }) => {
  const [articleList, setArticleList] = useState([
    {
      article_img: "./assets/Image.png",
      title: "Migrating to Linear 101",
      text: "Linear helps streamline software projects, sprints, tasks, and bug tracking. Here’s how to get started.",
      author_name: "Phoenix Baker",
      updated_at: "19 Jan 2022",
      name: "Gourav",
      author_profile_url: "./assets/Avatar.png",
      description:
        "Linear helps streamline software projects, sprints, tasks, and bug tracking. Here’s how to get started.",
    },
    {
      article_img: "./assets/Image.png",
      title: "Migrating to Linear 101",
      text: "Linear helps streamline software projects, sprints, tasks, and bug tracking. Here’s how to get started.",
      author_name: "Phoenix Baker",
      updated_at: "19 Jan 2022",
      name: "Gourav",
      author_profile_url: "./assets/Avatar.png",
      description:
        "Linear helps streamline software projects, sprints, tasks, and bug tracking. Here’s how to get started.",
    },
    {
      article_img: "./assets/Image.png",
      title: "Migrating to Linear 101",
      text: "Linear helps streamline software projects, sprints, tasks, and bug tracking. Here’s how to get started.",
      author_name: "Phoenix Baker",
      updated_at: "19 Jan 2022",
      name: "Gourav",
      author_profile_url: "./assets/Avatar.png",
      description:
        "Linear helps streamline software projects, sprints, tasks, and bug tracking. Here’s how to get started.",
    },
    {
      article_img: "./assets/Image.png",
      title: "Migrating to Linear 101",
      text: "Linear helps streamline software projects, sprints, tasks, and bug tracking. Here’s how to get started.",
      author_name: "Phoenix Baker",
      updated_at: "19 Jan 2022",
      name: "Gourav",
      author_profile_url: "./assets/Avatar.png",
      description:
        "Linear helps streamline software projects, sprints, tasks, and bug tracking. Here’s how to get started.",
    },
  ]);

  // for making a requrest
  let baseURL = `${BackendUrl}/category/id?id=${currentCategory}`;

  axios.interceptors.request.use(
    (config) => {
      config.headers.authorization = `Bearer ${token}`;
      return config;
    },
    (error) => {
      return Promise.reject(error);
    }
  );

  const fetchData = async () => {
    const res = await axios.get(baseURL);
    setArticleList(res.data);
    console.log(res);
  };

  /////

  useEffect(() => {
    if (currentCategory == -1) {
      baseURL = `${BackendUrl}/article/authorid?id=4`;
    }
    if (currentCategory == -2) {
      baseURL = `${BackendUrl}/article/all`;
    }
    fetchData();
  }, [currentCategory]);

  return (
    <>
      <div className="article-list">
        {articleList.map((article) => (
          <ArticleCard article={article} />
        ))}
      </div>
    </>
  );
};

export default Component;

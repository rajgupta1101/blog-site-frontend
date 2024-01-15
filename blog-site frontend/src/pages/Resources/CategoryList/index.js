import { useState, useEffect } from "react";
import "./index.css";
import axios from "axios";
import { BackendUrl, token } from "../../../url";
const Component = ({ setCurrentCategory, currentCategory }) => {
  const [categoryList, setCategoryList] = useState([
    { id: 0, category_name: "All" },
  ]);
  //   const [currentCategory, setCurrentCategory] = useState(0);

  // for making a requrest
  let baseURL = `${BackendUrl}/category/all`;

  axios.interceptors.request.use(
    (config) => {
      config.headers.authorization = `Bearer ${token}`;
      return config;
    },
    (error) => {
      return Promise.reject(error);
    }
  );

  const fetchCategories = async () => {
    const res = await axios.get(baseURL);
    console.log(res.data);
    setCategoryList(res.data);
  };

  /////

  useEffect(() => {
    fetchCategories();
  }, []);

  return (
    <>
      <div className="category-list">
        <div>
          <input
            type="text"
            className="category-list-search"
            placeholder="Search"
          />
        </div>
        <div style={{ color: "#6941C6", padding: "0" }}>Blog Categories</div>
        <div
          className={
            currentCategory == -1
              ? "category-list-item-selected"
              : "category-list-item-not-selected"
          }
          onClick={() => setCurrentCategory(-1)}
        >
          My Article
        </div>

        {categoryList.map((category, index) => (
          <div
            className={
              currentCategory == index
                ? "category-list-item-selected"
                : "category-list-item-not-selected"
            }
            onClick={() => setCurrentCategory(index)}
          >
            {category.category_name}
          </div>
        ))}
      </div>
    </>
  );
};

export default Component;

import { useEffect, useState } from "react";
import ArticleList from "./ArticleList";
import CategoryList from "./CategoryList";
import "./index.css";
import axios from "axios";

const Component = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPage, setTotalPage] = useState([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);
  const [currentCategory, setCurrentCategory] = useState(-2);
  return (
    <>
      <div className="resources">
        <div className="resources-heading">
          <div className="first">Our blog</div>
          <div className="second">Resources and insights</div>
          <div className="third">
            The latest industry news, interviews, technologies, and resources.
          </div>
        </div>

        <div className="resources-list">
          <CategoryList
            setCurrentCategory={setCurrentCategory}
            currentCategory={currentCategory}
          />
          <ArticleList currentCategory={currentCategory} />
        </div>
        <div className="resources-pagination">
          <button onClick={() => setCurrentPage(currentPage - 1)}>
            Previous
          </button>
          <div className="resources-pagination-center">
            {totalPage.map((page) => (
              <button
                className={page == currentPage ? "selected" : "not-selected"}
                onClick={() => {
                  setCurrentPage(page);
                }}
              >
                {page}
              </button>
            ))}
          </div>
          <button onClick={() => setCurrentPage(currentPage + 1)}>Next</button>
        </div>
      </div>
    </>
  );
};

export default Component;

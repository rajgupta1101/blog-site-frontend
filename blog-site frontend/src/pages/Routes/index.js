import { Routes, Route } from "react-router-dom";
// import BackendUrl from "../../urls";

// const urlToFetch = `${BackendUrl}/movie/search/`;
import LoginPage from "../Login";
import ProfilePage from "../Profile";
import ArticlePage from "../Article";
import SignupPage from "../Signup";
import ResourcesPage from "../Resources";
import AddArticlePage from "../AddArticle";
import EditArticle from "../EditArticle";
import PaymentPage from "../payment";

const Component = () => {
  return (
    <>
      <Routes>
        <Route path="/" index element={<ResourcesPage />} />
        <Route path="/article/:id" element={<ArticlePage />} />
        <Route path="/profile" element={<ProfilePage />} />
        <Route path="/signup" element={<SignupPage />} />
        <Route path="/add-article" element={<AddArticlePage />} />
        <Route path="/edit-article/:id" element={<EditArticle />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/payment" element={<PaymentPage />} />
      </Routes>
    </>
  );
};

export default Component;

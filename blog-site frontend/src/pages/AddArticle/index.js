import "./index.css";
import { Editor } from "react-draft-wysiwyg";
import { EditorState, convertToRaw } from "draft-js";
import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";
import draftToHtml from "draftjs-to-html";
import { useEffect, useState } from "react";
import axios from "axios";
import { BackendUrl, token } from "../../url";
import { Navigate } from "react-router-dom";
const Component = () => {
  const [articleTitle, setArticleTitle] = useState("");
  const [articleImgUrl, setArticleImgUrl] = useState("");
  const [description, setDescription] = useState("");
  const [editorState, setEditorState] = useState(EditorState.createEmpty());

  const [redirectToMainPage, setRedirectToMainPage] = useState(false);

  // for making a requrest
  const baseURL = `${BackendUrl}/article/create`;

  axios.interceptors.request.use(
    (config) => {
      config.headers.authorization = `Bearer ${token}`;
      return config;
    },
    (error) => {
      return Promise.reject(error);
    }
  );

  const addArticle = async () => {
    const x = draftToHtml(convertToRaw(editorState.getCurrentContent()));
    const body_data = {
      title: articleTitle,
      article_text: x,
      article_img: articleImgUrl,
      description: description,
      likes: 0,
      author_id: 4,
      category_id: 3,
    };
    const res = await axios.post(baseURL, body_data);
    console.log(res);
    setRedirectToMainPage(true);
  };

  if (redirectToMainPage)
    return (
      <>
        <Navigate to="/" />
      </>
    );
  else
    return (
      <>
        <div className="add-article">
          <div className="add-article-title">
            <input
              type="text"
              placeholder="Article Title"
              value={articleTitle}
              onChange={(e) => setArticleTitle(e.target.value)}
            />
            <input
              type="text"
              placeholder="Image url"
              value={articleImgUrl}
              onChange={(e) => setArticleImgUrl(e.target.value)}
            />

            <button onClick={addArticle}>Add Article</button>
          </div>
          <div className="add-article-title">
            <textarea
              className="add-article-description"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
            />
          </div>
          <Editor
            toolbarClassName="toolbarClassName"
            wrapperClassName="add-article-editor"
            editorClassName="editorClassName"
            onEditorStateChange={(editorState) => setEditorState(editorState)}
          />
        </div>
        {/* <textarea
        value={draftToHtml(convertToRaw(editorState.getCurrentContent()))}
      ></textarea> */}
      </>
    );
};

export default Component;

import React, { useEffect, useState } from "react";
import axios from "axios";
import "./index.css";
import { BackendUrl, token } from "../../url";
import { Navigate } from "react-router-dom";
const Profile = () => {
  const [redirectToMainPage, setRedirectToMainPage] = useState(false);
  const [formData, setFormData] = useState({
    email: "",
    name: "d",
    bio: "",
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post("/login", formData);
      console.log(res.data);
      // redirect user to login page or main page
    } catch (err) {
      console.error(err);
      // handle errors and display to user
    }
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };
  // for making a requrest
  let baseURL = `${BackendUrl}/author/show_id?id=4`;

  axios.interceptors.request.use(
    (config) => {
      config.headers.authorization = `Bearer ${token}`;
      return config;
    },
    (error) => {
      return Promise.reject(error);
    }
  );

  const fetchAuthor = async () => {
    const res = await axios.get(baseURL);
    console.log(res.data);
    setFormData(res.data[0]);
    //   setCategoryList(res.data);
  };

  const editAuthor = async () => {
    let baseURL = `${BackendUrl}/author/edit?id=4`;
    const res = await axios.put(baseURL, formData);
    setRedirectToMainPage(true);
  };

  /////

  useEffect(() => {
    fetchAuthor();
  }, []);
  if (redirectToMainPage)
    return (
      <>
        <Navigate to="/" />
      </>
    );
  else
    return (
      <div className="profile_outer_container">
        <div className="personalinfo_cont">
          <div className="ptext_cont">
            <div className="personalinfo_text">Personal info</div>
            <div className="update_text">
              Update your photo and personal details here.
            </div>
          </div>
          {/* <div className="save_cancel_but_container">
          <div className="btn_grp">
            <button className="cancel_btn">Cancel</button>
            <button className="save_btn">Save</button>
          </div>
          <img src="./assets/profile-pic.svg" alt="" />
        </div> */}
          {/* <div className="prof_img_container">
          <img
            className="prof_img_style"
            src="./assets/profile-pic.svg"
            alt=""
          />
        </div> */}
        </div>
        {/* <hr className="divider" /> */}
        <div className="name_container">
          <div className="name_text">Name</div>
          <div className="nameinput_cont">
            <input
              className="text_container"
              type="text"
              name="name"
              placeholder="Oliva"
              value={formData.name}
              onChange={handleChange}
            />
            <input
              className="text_container"
              type="text"
              name="last_name"
              placeholder="Rhye"
              // value={}
              // onChange={}
            />
          </div>
        </div>
        {/* <hr className="divider" /> */}
        <div className="email_container">
          <div className="name_text">Email address</div>
          <input
            className="email_text_container nameinput_cont"
            type="email"
            name="email"
            placeholder="olivia@untitledui.com"
            value={formData.email}
            onChange={handleChange}
          />
        </div>
        {/* <hr className="divider" /> */}
        {/* <div className="photo_container">
        <div className="photo_text_cont">
          <div className="yourphoto_text">Your photo</div>
          <div className="photo_subtext">This will be displayed on your profile.</div>
        </div>
        
      </div> */}
        <div className="bio_conatiner">
          <div className="bio_text_container">
            <div className="name_text">Bio</div>
            <div className="bio_subtext">Write a short introduction.</div>
          </div>
          <div className="name_text">
            <textarea
              className="nameinput_cont"
              name="bio"
              id="biodes"
              cols="100"
              rows="5"
              value={formData.bio}
              onChange={handleChange}
            >
              I'm a Product Designer based in Melbourne, Australia. I specialise
              in UX/UI design, brand strategy, and Webflow development.
            </textarea>
          </div>
        </div>
        {/* <hr className="divider" /> */}
        <div className="save_cancel_but_container">
          <button
            className="logout_btn"
            onClick={() => {
              localStorage.setItem("email", "");
            }}
          >
            Logout
          </button>
          <div className="btm_btn">
            <button className="cancel_btn">Cancel</button>
            <button className="save_btn" onClick={editAuthor}>
              Save
            </button>
          </div>
        </div>
      </div>
    );
};

export default Profile;

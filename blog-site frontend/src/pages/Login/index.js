import React, { useState } from "react";
import axios from "axios";
import "./index.css";
import { BackendUrl } from "../../url";
import { Navigate } from "react-router-dom";

const Login = () => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const [redirectToMainPage, setRedirectToMainPage] = useState();
  // for making a requrest
  const baseURL = `${BackendUrl}/authenticate`;

  /////

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post(baseURL, formData);
      console.log(res.data.auth_token);
      localStorage.setItem("auth_token", res.data.auth_token);
      localStorage.setItem("email", formData.email);
      console.log(res);
      setRedirectToMainPage(true);
      // redirect user to login page or main page
    } catch (err) {
      console.error(err);
      // handle errors and display to user
    }
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  if (redirectToMainPage) {
    return (
      <>
        <Navigate to="/" />
      </>
    );
  } else
    return (
      <div className="signupformcontainer">
        <form className="formcontainer" onSubmit={handleSubmit}>
          <div className="form_inside_container">
            <div className="signupheading">Welcome Back</div>
            <p className="p_container">
              Welcome back! Please enter your details
            </p>
            <div className="item">Email*</div>
            <input
              className="text_container"
              type="email"
              name="email"
              placeholder="Email"
              required
              value={formData.email}
              onChange={handleChange}
            />
            <div className="item">Password*</div>
            <input
              className="text_container"
              type="password"
              name="password"
              placeholder="Password"
              required
              value={formData.password}
              onChange={handleChange}
            />
            <button
              className="get_started_btn"
              style={{
                marginTop: "20px",
              }}
              type="submit"
            >
              <div
                style={{
                  color: "white",
                  fontWeight: "600",
                }}
              >
                Sign in
              </div>
            </button>
            <div className="already_container">
              Don’t have an account?{" "}
              <a href="#" className="login_text">
                Sign up
              </a>
            </div>
          </div>
        </form>
        <div className="img">
          <img src="./assets/iPhone.png" className="iphoneimg" alt="" />
        </div>
      </div>
    );
};

export default Login;

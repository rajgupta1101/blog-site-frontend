import React, { useState } from "react";
import axios from "axios";
import "./index.css";

const Signup = () => {
  const [formData, setFormData] = useState({
    name: "",
    description: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post("/signup", formData);
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

  return (
    <div className="signupformcontainer">
      <form className="formcontainer" onSubmit={handleSubmit}>
        <div className="form_inside_container">
          <div className="signupheading">Sign Up</div>
          <p className="p_container">Start your 30-day free trial.</p>
          <div className="item">Name*</div>
          <input
            className="text_container"
            type="text"
            name="name"
            placeholder="Name"
            value={formData.name}
            onChange={handleChange}
          />
          <div className="item">Description*</div>
          <input
            className="text_container"
            type="text"
            name="description"
            placeholder="Description"
            value={formData.description}
            onChange={handleChange}
          />
          <div className="item">Email*</div>
          <input
            className="text_container"
            type="email"
            name="email"
            placeholder="Email"
            value={formData.email}
            onChange={handleChange}
          />
          <div className="item">Password*</div>
          <input
            className="text_container"
            type="password"
            name="password"
            placeholder="Password"
            value={formData.password}
            onChange={handleChange}
          />
          <p className="r_container">Must be at least 8 characters.</p>
          <button className="get_started_btn" type="submit">
            <div
              style={{
                color: "white",
              }}
            >
              Get Started
            </div>
          </button>
          <div className="already_container">
            Already have an account?{" "}
            <a href="#" className="login_text">
              Log in
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

export default Signup;

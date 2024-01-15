import { useEffect } from "react";
import { NavLink } from "react-router-dom";
import "./index.css";
const Component = () => {
  const userEmail = localStorage.getItem("email");

  useEffect(() => {
    console.log(userEmail);
  }, []);
  return (
    <>
      <div className="nav">
        <div className="nav-first">
          <NavLink to="/" style={{ textDecoration: "none", color: "inherit" }}>
            <div className="nav-logo">
              <img src="./assets/logo.svg" />
              Untitled Ui
            </div>
          </NavLink>
          <div className="hide-on-mobile" style={{ marginTop: "4px" }}>
            <NavLink
              to="/"
              style={{
                textDecoration: "none",
                color: "inherit",
              }}
            >
              Home
            </NavLink>
          </div>
          <div className="hide-on-mobile" style={{ marginTop: "4px" }}>
            <NavLink
              to="/add-article"
              style={{
                textDecoration: "none",
                color: "inherit",
              }}
            >
              Add Article
            </NavLink>
          </div>
          <div className="hide-on-mobile" style={{ marginTop: "4px" }}>
            <NavLink
              to="/payment"
              style={{ textDecoration: "none", color: "inherit" }}
            >
              Pricing
            </NavLink>
          </div>
        </div>
        <div className="nav-second">
          {/* <i class="fa fa-bars hamberger-menu"></i> */}
          {!userEmail ? (
            <>
              <NavLink
                to="/login"
                style={{ textDecoration: "none", color: "inherit" }}
              >
                <button className="hide-on-mobile">Log in</button>
              </NavLink>
              <NavLink
                to="/signup"
                style={{ textDecoration: "none", color: "inherit" }}
              >
                <button
                  className="hide-on-mobile"
                  style={{ backgroundColor: "#7F56D9", color: "white" }}
                >
                  Sign up
                </button>
              </NavLink>
            </>
          ) : (
            <div
              className="nav-profile-picture"
              // onClick={() => {
              //   localStorage.setItem("email", "");
              //   localStorage.setItem("auth_token", "");
              // }}
            >
              <NavLink
                to="/profile"
                style={{ textDecoration: "none", color: "inherit" }}
              >
                <img
                  style={{ width: "100%", height: "100%", borderRadius: "50%" }}
                  src="https://media.licdn.com/dms/image/D5603AQFDNW5HvoK1_A/profile-displayphoto-shrink_400_400/0/1676224559268?e=1682553600&v=beta&t=koymVx5lTAsZPR73-jJIvE8qAeKdYFrnx7jvTn9pJ7E"
                />
              </NavLink>
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default Component;

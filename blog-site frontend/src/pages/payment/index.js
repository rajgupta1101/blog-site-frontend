import React from "react";
import "./index.css";

const PricingPage = () => {
  return (
    <div className="pricing-page">
      <h1>Choose Your Plan</h1>
      <div className="plan-container">
        <div className="plan basic">
          <h2>Basic</h2>
          <p className="price">$5/month</p>
          <ul>
            <li>
              <img
                style={{ height: "15px" }}
                src="./assets/tickiconprice.svg"
                alt=""
              />{" "}
              Access to all basic features
            </li>
            <li>
              <img
                style={{ height: "15px" }}
                src="./assets/tickiconprice.svg"
                alt=""
              />{" "}
              Basic reporting and analytics
            </li>
            <li>
              <img
                style={{ height: "15px" }}
                src="./assets/tickiconprice.svg"
                alt=""
              />{" "}
              Up to 10 individual users
            </li>
            <li>
              <img
                style={{ height: "15px" }}
                src="./assets/tickiconprice.svg"
                alt=""
              />{" "}
              20GB individual data
            </li>
            <li>
              <img
                style={{ height: "15px" }}
                src="./assets/tickiconprice.svg"
                alt=""
              />{" "}
              Basic chat support
            </li>
            <li>
              <img
                style={{ height: "15px" }}
                src="./assets/tickiconprice.svg"
                alt=""
              />{" "}
              1 Blog
            </li>
            <li>
              <img
                style={{ height: "15px" }}
                src="./assets/tickiconprice.svg"
                alt=""
              />{" "}
              1 BlogBasic Support
            </li>
            <li>
              <img
                style={{ height: "15px" }}
                src="./assets/tickiconprice.svg"
                alt=""
              />{" "}
              1 BlogLimited Storage
            </li>
          </ul>
          <button className="btn-select">Get started</button>
        </div>
        <div className="plan standard">
          <h2>Standard</h2>
          <p className="price">$10/month</p>
          <ul>
            <li>
              <img
                style={{ height: "15px" }}
                src="./assets/tickiconprice.svg"
                alt=""
              />{" "}
              Access to all basic features
            </li>
            <li>
              <img
                style={{ height: "15px" }}
                src="./assets/tickiconprice.svg"
                alt=""
              />{" "}
              Basic reporting and analytics
            </li>
            <li>
              <img
                style={{ height: "15px" }}
                src="./assets/tickiconprice.svg"
                alt=""
              />{" "}
              Up to 10 individual users
            </li>
            <li>
              <img
                style={{ height: "15px" }}
                src="./assets/tickiconprice.svg"
                alt=""
              />{" "}
              20GB individual data
            </li>
            <li>
              <img
                style={{ height: "15px" }}
                src="./assets/tickiconprice.svg"
                alt=""
              />{" "}
              Basic chat support
            </li>
            <li>
              <img
                style={{ height: "15px" }}
                src="./assets/tickiconprice.svg"
                alt=""
              />{" "}
              3 Blogs
            </li>
            <li>
              <img
                style={{ height: "15px" }}
                src="./assets/tickiconprice.svg"
                alt=""
              />{" "}
              Standard Support
            </li>
            <li>
              <img
                style={{ height: "15px" }}
                src="./assets/tickiconprice.svg"
                alt=""
              />{" "}
              More Storage
            </li>
          </ul>
          <button className="btn-select">Get started</button>
        </div>
        <div className="plan premium">
          <h2>Premium</h2>
          <p className="price">$20/month</p>
          <ul>
            <li>
              <img
                style={{ height: "15px" }}
                src="./assets/tickiconprice.svg"
                alt=""
              />{" "}
              Access to all basic features
            </li>
            <li>
              <img
                style={{ height: "15px" }}
                src="./assets/tickiconprice.svg"
                alt=""
              />{" "}
              Basic reporting and analytics
            </li>
            <li>
              <img
                style={{ height: "15px" }}
                src="./assets/tickiconprice.svg"
                alt=""
              />{" "}
              Up to 10 individual users
            </li>
            <li>
              <img
                style={{ height: "15px" }}
                src="./assets/tickiconprice.svg"
                alt=""
              />{" "}
              20GB individual data
            </li>
            <li>
              <img
                style={{ height: "15px" }}
                src="./assets/tickiconprice.svg"
                alt=""
              />{" "}
              Basic chat support
            </li>
            <li>
              <img
                style={{ height: "15px" }}
                src="./assets/tickiconprice.svg"
                alt=""
              />{" "}
              Unlimited Blogs
            </li>
            <li>
              <img
                style={{ height: "15px" }}
                src="./assets/tickiconprice.svg"
                alt=""
              />{" "}
              Premium Support
            </li>
            <li>
              <img
                style={{ height: "15px" }}
                src="./assets/tickiconprice.svg"
                alt=""
              />{" "}
              Unlimited Storage
            </li>
          </ul>
          <button className="btn-select">Get started</button>
        </div>
      </div>
    </div>
  );
};

export default PricingPage;

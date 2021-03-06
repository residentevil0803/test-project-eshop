import React from "react";
import "./Footer.css";
import logo from "../../assets/images/logo.png";
import facebook from "../../assets/images/facebook.png";
import youtube from "../../assets/images/youtube.png";
import twitter from "../../assets/images/twitter.png";
import instagram from "../../assets/images/instagram.png";
import { useState } from "react";

export default function Footer() {
  const [email, setEmail] = useState("");

  function HandleChange(e) {
    setEmail(e.target.value);
  }

  function HandleSubscribe(e) {
    e.preventDefault();
    if (
      localStorage.getItem("Email") === email &&
      localStorage.getItem("isLoggedIn") === "true"
    )
      alert(`You are now subscribed to our newsletter`);
    else alert(`Please login or register first, then try again`);
  }

  return (
    <footer className="FooterCustomized">
      <div className="row">
        <div className="col-3">
          <img alt="logo" src={logo} className="navbar-brand" />
        </div>

        <div className="col-9">
          <form className="form-check-inline" onSubmit={HandleSubscribe}>
            <h6>Enter your email to subscribe for our newsletter</h6>
            <input
              className="form-control mr-2 ml-3 inputCustom"
              type="email"
              minLength="5"
              placeholder="email@example.com"
              onChange={HandleChange}
            />

            <input
              type="submit"
              value="Subscribe"
              className="btn btn-secondary"
            />
          </form>
        </div>
      </div>

      <hr />

      <div className="row">
        <div className="col-6">
          <h5>Let us help you</h5>
          <ul>
            <li>
              <a className="ListLink" href="/help#How to buy?">
                How to buy products
              </a>
            </li>
            <li>
              <a className="ListLink" href="/help#How to sell you products?">
                How to sell your products
              </a>
            </li>
            <li>
              <a className="ListLink" href="/help#Payment methods?">
                Supported payment methods
              </a>
            </li>
            <li>
              <a
                className="ListLink"
                href="/help#Have a problems with ordering items?">
                Have a problems with ordering items?
              </a>
            </li>
          </ul>
        </div>
        <div className="col-6">
          <h5>About us</h5>
          <ul>
            <li>
              <a className="ListLink" href="/about#Our Vision">
                Our vision
              </a>
            </li>
            <li>
              <a className="ListLink" href="/about#Careers">
                Careers
              </a>
            </li>
            <li>
              <a className="ListLink" href="/about#Our Begining">
                Our begining
              </a>
            </li>
            <li>
              <a className="ListLink" href="/about#Detailed Info">
                Detailed Information about us
              </a>
            </li>
          </ul>
        </div>
      </div>

      <hr />

      <h5>Follow us</h5>
      <div className="row SocialMedia">
        <div className="SocialMediaDiv">
          <a href="https://www.facebook.com/" target="blank">
            <img src={facebook} alt="facebook" className="SocialMediaImg" />
          </a>
        </div>
        <div className="SocialMediaDiv">
          <a href="https://www.youtube.com/" target="blank">
            <img src={youtube} alt="youtube" className="SocialMediaImg" />
          </a>
        </div>
        <div className="SocialMediaDiv">
          <a href="https://www.twitter.com/" target="blank">
            <img src={twitter} alt="twitter" className="SocialMediaImg" />
          </a>
        </div>
        <div className="SocialMediaDiv">
          <a href="https://www.instagram.com/" target="blank">
            <img src={instagram} alt="instagram" className="SocialMediaImg" />
          </a>
        </div>
      </div>
      <h6>?? 2020, Resonant.com, Inc.</h6>
    </footer>
  );
}

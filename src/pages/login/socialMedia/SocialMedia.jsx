import React from "react";
import "./SocialMedia.css";
import logo from "./../../../assets/images/logo/logo.png";
import { BiLogoFacebook, BiLogoTwitter } from "react-icons/bi";
import { TiSocialGooglePlus } from "react-icons/ti";

const SocialMedia = () => {
  return (
    <div className="social-media-content d-flex align-items-center justify-content-center">
      <div>
        <img className="mb-5 ms-5 ps-4 " src={logo} alt="" />
        <p className="text-white mb-4">Login using social media to get quick access</p>
        <div className="social-btn">
          <button className="google-btn">
            <TiSocialGooglePlus className="me-1 mb-1 fs-3" />
            Login with google
          </button>
          <button className="facebook-btn">
            <BiLogoFacebook className="me-1 mb-1 fs-3" />
            Login with facebook
          </button>
          <button className="twitter-btn">
            <BiLogoTwitter className="me-2 mb-1 fs-3" />
            Login with twitter
          </button>
        </div>
      </div>
    </div>
  );
};

export default SocialMedia;

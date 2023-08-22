import React, { useContext, useState } from "react";
import "./SocialMedia.css";
import logo from "./../../../assets/images/logo/logo.png";
import { BiLogoFacebook } from "react-icons/bi";
import { TiSocialGooglePlus } from "react-icons/ti";
import { PiGithubLogoFill } from "react-icons/pi";
import { AuthContext } from "../../../contexts/AuthProvider";
import { toast } from "react-toastify";

const SocialMedia = () => {
  const [error, setError] = useState("");
  const { googleSignIn, githubSignIn } = useContext(AuthContext);

  const handleGoogleSignIn = () => {
    googleSignIn()
      .then((result) => {
        const user = result.user;
        setError("");
        toast.success(`Welcome back, ${user.displayName}! Your login was successful.`);
      })
      .catch((error) => {
        setError(error.message);
      });
  };

  const handleGithubLogin = () => {
    githubSignIn()
      .then((result) => {
        const user = result.user;
        setError("");
        toast.success(`Welcome back, ${user.displayName}! Your login was successful.`);
      })
      .catch((error) => [setError(error.message)]);
  };

  return (
    <div className="social-media-content d-flex align-items-center justify-content-center">
      <div>
        <img className="mb-5 ms-5 ps-4 " src={logo} alt="" />
        <p className="text-white mb-4">Login using social media to get quick access</p>
        <div className="social-btn">
          <button onClick={handleGoogleSignIn} className="google-btn">
            <TiSocialGooglePlus className="me-1 mb-1 fs-3" />
            Login with google
          </button>
          <button onClick={handleGithubLogin} className="twitter-btn py-2">
            <PiGithubLogoFill className="me-2 mb-1 fs-4" />
            Login with github
          </button>
          <button className="facebook-btn">
            <BiLogoFacebook className="me-1 mb-1 fs-3" />
            Login with facebook
          </button>
        </div>
        <p className="text-danger mb-0">{error}</p>
      </div>
    </div>
  );
};

export default SocialMedia;

import React from "react";
import { Link } from "react-router-dom";
import illustration from "../Images/Bibliophile.svg";
import Google from "../Images/google.svg";
import LogoDark from "../Components/LogoDark";

const Signin = () => {
  return (
    <>
      <div className="signup">
        <div className="signin-illustration">
          <LogoDark />
          <img src={illustration} alt="illustration" />
        </div>
        <div className="signup-form">
          <h3>Welcome Back to StoryRecs!</h3>
          <p className="signup-desc">
            Login to your account to get accurate book recommendations based on
            your favorite books or recent reads.
          </p>
          <div className="signup-inputs">
            <div className="signup-input">
              <input type="text" placeholder="Email" />
            </div>
            <div className="signup-input">
              <input
                type="password"
                placeholder="Password"
                autoComplete="off"
              />
            </div>
            <div className="terms-and-conditions">
              <div className="policy-text">
                <p>Forgot Password?</p>
                <Link path to="" className="reset-link">
                  Reset Password
                </Link>
              </div>
            </div>
            <button className="signin-btn">Login</button>
            <p className="or">Or</p>
            <div className="google">
              <img src={Google} alt="google" />
              <p>Sign up with Google</p>
            </div>
            <div className="have-account">
              <p>New Here?</p>
              <Link path to="/signup" className="already-link">
                Sign up
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Signin;

import React from "react";
import { Link } from "react-router-dom";
import "../Onboarding/onboarding.css";
import illustration from "../Images/Glasses.svg";
import LogoLight from "../Components/LogoLight";
import Google from "../Images/google.svg"


const Signup = () => {
  return (
    <>
      <div className="signup">
        <div className="signup-illustration">
          <LogoLight />
          <img src={illustration} alt="illustration" />
        </div>
        <div className="signup-form">
          <h3>Welcome to StoryRecs!</h3>
          <p className="signup-desc">Create an account to get accurate book recommendations based on your favorite books or recent reads.</p>
          <div className="signup-inputs">
            <div className="signup-input">
              <input type="text" placeholder="First Name"/>
            </div>
            <div className="signup-input">
              <input type="text" placeholder="Last Name"/>
            </div>
            <div className="signup-input">
              <input type="text" placeholder="Email"/>
            </div>
            <div className="signup-input">
              <input type="password" placeholder="Password" autoComplete="off"/>
            </div>
            <div className="signup-input">
              <input type="password" placeholder="Confirm Password" autoComplete="off"/>
            </div>
            <div className="terms-and-conditions">
              <input type="checkbox" className="checkbox"/>
              <div className="policy-text">
                <p>I agree with StoryRec's</p>
                <Link path to="" className="privacy-link">Privacy Policy</Link>
                <p>and</p>
                <Link path to="" className="privacy-link">Terms of Use</Link>
              </div>
            </div>
            <button>Sign up</button>
            <p className="or">Or</p>
            <div className="google">
             <img src={Google} alt="google"/>
             <p>Sign up with Google</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Signup;

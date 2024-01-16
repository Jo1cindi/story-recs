import React from "react";
import "../Onboarding/onboarding.css";
import illustration from "../Images/Audiobook.svg";
import LogoLight from "../Components/LogoLight";

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
              <input type="password" placeholder="Password"/>
            </div>
            <div className="signup-input">
              <input type="password" placeholder="Confirm Password"/>
            </div>
            <button>Sign up</button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Signup;

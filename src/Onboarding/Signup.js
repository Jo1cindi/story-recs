import React from "react";
import "../Onboarding/onboarding.css"
import illustration from "../Images/Audiobook.svg"

const Signup = () =>{
    return(
        <>
          <div className="signup">
           <div className="signup-illustration">
             <img src={illustration} alt="illustration"/>
           </div>
           <div className="signup-form">
            <h3>Welcome to StoryRecs!</h3>
           </div>
          </div>
        </>
    )
}

export default Signup;
import { BrowserRouter as Router ,Routes,Route  } from "react-router-dom";
import LandingPage from "./Onboarding/LandingPage";
import Signup from "./Onboarding/Signup";
import Signin from "./Onboarding/Signin";
import VerifyAccount from "./Onboarding/VerifyAccount";
import ResetPassword from "./Onboarding/ResetPassword";

const BookRecs = () =>{
   return(
    <Router>
       <Routes> 
        <Route path="/" exact element = {<LandingPage/>}/>
        <Route path="/StoryRecs" exact element = {<LandingPage/>}/>  
        <Route path="/signup" exact element={<Signup/>}/>
        <Route path="/signin" exact element={<Signin/>}/>
        <Route path="/verify-account" exact element={<VerifyAccount/>}/>
        <Route path="/reset-password" exact element={<ResetPassword/>}/>
       </Routes>
    </Router>
   )
}

export default BookRecs;
import { BrowserRouter as Router ,Routes,Route  } from "react-router-dom";
import LandingPage from "./Onboarding/LandingPage";
import Signup from "./Onboarding/Signup";

const BookRecs = () =>{
   return(
    <Router>
       <Routes>
        <Route path="/" exact element = {<LandingPage/>}/>
        <Route path="/Landing-Page" exact element = {<LandingPage/>}/>  
        <Route path="/signup" exact element={<Signup/>}/>
       </Routes>
    </Router>
   )
}

export default BookRecs;
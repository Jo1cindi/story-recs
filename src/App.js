import { BrowserRouter as Router ,Routes,Route  } from "react-router-dom";
import LandingPage from "./Onboarding/LandingPage";

const BookRecs = () =>{
   return(
    <Router>
       <Routes>
        <Route path="/" exact element = {<LandingPage/>}/>
        <Route path="/Landing-Page" exact element = {<LandingPage/>}/>  
        
       </Routes>
    </Router>
   )
}

export default BookRecs;
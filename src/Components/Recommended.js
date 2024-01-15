import React from "react";
import { Link } from "react-router-dom";

const Recommended = () =>{
    return(
    <div className="recommended">
      <div className="recommended-text">
      <h4>Recommended For You</h4>
      <Link path to = "" className="link">See more</Link>
      </div>
    </div>
    )
}

export default Recommended;
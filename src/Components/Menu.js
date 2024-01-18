import React from "react";
import { Link, useNavigate } from "react-router-dom";


const Menu = () => {
  //Navigating to Sign up
  const navigate  = useNavigate()
  const handleClick =  () =>{
    navigate("/signup")
  }


  return (
    <>
      <div className="main">
      
      <div className="nav-bar">
          {/* Logo */}
          <div className="logo">
            <p className="logo1">Story</p>
            <p className="logo2">Recs</p>
          </div>

         {/* Menu Items */}
         <div className="menu-items">
          <ul>
            <li>
              <Link path to="/StoryRecs" className="link">
                Home
              </Link>
            </li>
            <li>
              <Link path to="" className="link">
                Books
              </Link>
            </li>
            <li>
              <Link path to="" className="link">
                About us
              </Link>
            </li>
            <li>
              <Link path to="" className="link">
                Categories
              </Link>
            </li>
          </ul>
        </div>

        {/* Search Buttons and Login/Sign up */}
        <>
          <div className="search-section">
            <input type="text" className="search-input" id="searchInput" placeholder="Search Books"/>

            <div className="line">
              
            </div>
            <Link path to ="/signin" className="signin-link">Sign in</Link>
           <button className="signup-link" onClick={handleClick}>Sign up</button>
          </div>
        </>
        </div>
       
       
      </div>
    </>
  );
};

export default Menu;

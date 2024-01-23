import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const Menu = () => {
  //Navigating to Sign up
  const navigate = useNavigate();
  const handleClick = () => {
    navigate("/signup");
  };

  //Hiding the menu in a mobile screen
  const [menuOpen, setMenuOpen] = useState(false);
  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  //To detect the screen
  const [screenwidth, setScreenWidth] = useState(window.innerWidth);

  //Function is called when screen is shortened or widened
  useEffect(() => {
    const changeWidth = () => {
      setScreenWidth(window.innerWidth);
    };
    window.addEventListener("resize", changeWidth);
  }, []);

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
          {(menuOpen || screenwidth > 1024) && (
            <div className="menu">
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

              <>
                <div className="search-section">
                  <input
                    type="text"
                    className="search-input"
                    id="searchInput"
                    placeholder="Search Books"
                  />

                  <div className="line"></div>
                  <Link path to="/signin" className="signin-link">
                    Sign in
                  </Link>
                  <button className="signup-link" onClick={handleClick}>
                    Sign up
                  </button>
                </div>
              </>
            </div>
          )}

          <div className="burger-menu" onClick={toggleMenu}>
            <div className="lines"></div>
            <div className="lines"></div>
            <div className="lines"></div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Menu;

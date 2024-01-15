import React from "react";
import Book1 from "..//Images/The-Hearts-Invisible-Furies.jpg"
import Book2 from "..//Images/alwyie.jpg"
import Book3 from "..//Images/young mungo.jpg"


const HeroSection = () =>{
    return(
        <div className="hero-section">
        <div className="hero-text">
          <h2>Find Your Next Favourite Book.</h2>
          <p>
            Get accurate book recommendations based on your most recent book.
            Just enter your the title of either your recent read or favorite
            book on the search bar, search and you're ready to go!
          </p>
          <button className="explore">Explore</button>
        </div>
        <div className="hero-images">
          <div className="book1">
            <h6>The Heart's Invisible Furies</h6>
            <p>John Boyne</p>
            <img src={Book1} alt="book1" />
          </div>
          <div className="book2">
            <img src={Book2} alt="book2" />
            <h6>Alone With You In The Ether</h6>
            <p>Olivie Blake</p>
          </div>
          <div className="book3">
          <h6>Young Mungo</h6>
            <p>Douglas Stuart</p>
            <img src={Book3} alt="book3" />
          </div>
        </div>
      </div> 
    )
}

export default HeroSection;
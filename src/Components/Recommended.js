import React from "react";
import { Link } from "react-router-dom";
import book1 from "../Images/tvh.jpg"
import book2 from "../Images/acs.jpg"
import book3 from "../Images/lc.jpg"
import book4 from "../Images/t4w.jpg"
import book5 from "../Images/ow.jpg"
import book6 from "../Images/wfe.jpg"
import star from "../Images/star-7207.svg"

const Recommended = () =>{

  const books = [
    {
      book_title: "The Vanishing half",
      author: "Brit Bennet",
      book_cover: book1,
      rating: 4.15,
      star: star
    },
    {
      book_title: "A Girl Called Samson",
      author: "Amy Harmon",
      book_cover: book2,
      rating: 4.52,
      star: star
    },
    {
      book_title: "Look Closer",
      author: "David Ellis",
      book_cover: book3,
      rating: 4.25,
      star: star
    },
    {
      book_title: "The Four Winds",
      author: "Kristin Hannah",
      book_cover: book4,
      rating: 4.3,
      star: star
    },
    {
      book_title: "Open Water",
      author: "Caleb Azumah Nelson",
      book_cover: book5,
      rating: 4.06,
      star: star
    },
    {
      book_title: "Water For Elephants",
      author: "Sarah Gruen",
      book_cover: book6,
      rating: 4.11,
      star: star
    },
    
  ]

    return(
    <div className="recommended">
      <div className="recommended-text">
      <h4>Recommended For You</h4>
      <Link path to = "" className="see-more">See more</Link>
      </div>

      <div className="recommended-books">
        <ul>
          {
            books.map((book, index)=>(
              <li key={index}>
                 <img src={book.book_cover} alt="book cover" className="cover"/>
                 <h6>{book.book_title}</h6>
                 <p>{book.author}</p>
                 <div className="goodreads-ratings">
                  <p>Goodreads Rating: {book.rating}</p>
                  <img src={book.star} alt="star" className="star"/>
                 </div>
                 <button>View More</button>
              </li>
            ))
          }
        </ul>
      </div>

    </div>
    )
}

export default Recommended;
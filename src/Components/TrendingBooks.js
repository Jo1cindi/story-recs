import React from "react";
import { Link } from "react-router-dom";
import book1 from "../Images/tt.jpg"
import book2 from "../Images/alsfrw.jpg"
import book3 from "../Images/fs.jpg"
import book4 from "../Images/tsoa.jpg"
import book5 from "../Images/t4wr.jpg"
import book6 from "../Images/amco.jpg"
import star from "../Images/star-7207.svg"

const TrendingBooks = () =>{
    const books = [
        {
          book_title: "Twilight Territory",
          author: "Andrew K. Pham",
          book_cover: book1,
          rating: 4.20,
          star: star
        },
        {
          book_title: "A Love Song For Ricki Wilde",
          author: "Tia Williams",
          book_cover: book2,
          rating: 4.29,
          star: star
        },
        {
          book_title: "Funny Story",
          author: "Emily Henry",
          book_cover: book3,
          rating: 4.54,
          star: star
        },
        {
          book_title: "The Song of Achilles",
          author: "Madeline Miller",
          book_cover: book4,
          rating: 4.33,
          star: star
        },
        {
          book_title: "The Fourth Wing",
          author: "Rebecca Yarros",
          book_cover: book5,
          rating: 4.62,
          star: star
        },
        {
          book_title: "A Man Called Ove",
          author: "Fredrik Backman",
          book_cover: book6,
          rating: 4.38,
          star: star
        },
        
      ]

      return (
        <div className="trending">
        <div className="trending-text">
        <h4>Recommended For You</h4>
        <Link path to = "" className="see-more2                                                                    ">See more</Link>
        </div>
  
        <div className="trending-books">
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

export default TrendingBooks;
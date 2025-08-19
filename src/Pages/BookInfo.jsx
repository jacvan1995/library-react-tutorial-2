import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import Rating from "../UI/Rating.jsx";
import Price from "../UI/Price.jsx";

const BookInfo = ({ books }) => {

    return (
        <div className="books__body">
            <main id="books__main">
                <div className="books__container">
                    <div className="row">
                        <div className="book__selected--top">
                            <Link to = "/books" className = "book__link">
                                <FontAwesomeIcon icon={ faArrowLeft }/>
                            </Link>
                            <Link to = "/books">
                            <h2 className="book__selected--title--top">Books</h2>
                            </Link>
                        </div>
                        <div className="book__selected">
                            <figure className="book__selected--figure">
                                <img src={books} alt="" className="book__selected--img" />
                            </figure>
                            <div className="book__selected--description">
                                <h2 className="book__selected--title">
                                    {books.title}
                                </h2>
                                <Rating rating = {books.rating}/>
                                <div className="book__selected--price">
                                    <Price price = {books.price} />
                                </div>
                                <div className="book__summary">

                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </main>
        </div>
      );
}

export default BookInfo;
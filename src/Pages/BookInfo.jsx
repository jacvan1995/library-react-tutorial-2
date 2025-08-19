import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { use } from "react";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import { Link, useParams } from "react-router-dom";
import Rating from "../UI/Rating.jsx";
import Price from "../UI/Price.jsx";

const BookInfo = ({ books }) => {
    const { id } = useParams();
    const book = books.find(book => +book.id === +id);

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
                                <img src={book.url} alt="" className="book__selected--img" />
                            </figure>
                            <div className="book__selected--description">
                                <h2 className="book__selected--title">
                                    {book.title}
                                </h2>
                                <Rating rating = "4.5"/>
                                <div className="book__selected--price">
                                    <Price price = {book.price} />
                                </div>
                                <div className="book__summary">
                                    <div className="book__summary--title">
                                        Summary
                                    </div>
                                    <p className="book__summary--para">\
                                        {book.summary}
                                    </p>
                                    <p className="book__summary--para">
                                        {book.summary}
                                    </p>
                                </div>
                                <button className="btn">
                                    Add to Cart
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="books__container">
                    <div className="row">
                        <div className="book__selected--top">
                            <h2 className="book__selected--title--top">
                                Recommended Books
                            </h2>
                        </div>

                    </div>
                </div>
            </main>
        </div>
      );
}

export default BookInfo;
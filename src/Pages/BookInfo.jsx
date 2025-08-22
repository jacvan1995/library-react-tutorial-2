import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useState } from "react";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import { Link, useParams } from "react-router-dom";
import Price from "../components/UI/Price.jsx";
import Rating from "../components/UI/Rating.jsx";
import Book from "../components/UI/Book.jsx";

const BookInfo = ({ books, addToCart, cart }) => {
    const { id } = useParams();
    const book = books.find(book => +book.id === +id);
    const [added, setAdded] = useState(false);

    function addBookToCart(book) {
        setAdded(true);
        addToCart(book);
    }
    function bookExistsOnCart() {
        return cart.find(book => +book.id === +id);
    }

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
                                <Rating rating = { book.rating }/>
                                <div className="book__selected--price">
                                    <Price originalPrice = {book.originalPrice} salePrice = { book.salePrice } />
                                </div>
                                <div className="book__summary">
                                    <h3 className="book__summary--title">
                                        Summary
                                    </h3>
                                    <p className="book__summary--para">
                                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore, reprehenderit praesentium vitae iusto facere soluta possimus, vel rem sint nesciunt molestiae adipisci eveniet aut alias at saepe dolores debitis laborum?
                                    </p>
                                    <p className="book__summary--para">
                                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum numquam ab, fugiat cumque reiciendis culpa consequuntur natus deserunt rerum doloremque mollitia. Id harum eum maxime eius temporibus porro, illo praesentium?
                                    </p>
                                </div>
                                {
                                    bookExistsOnCart() ? (
                                        <Link to = {`/cart`} className = "book__link">
                                            <button className="btn">Checkout</button>
                                        </Link>
                                    ) : (
                                        <button className="btn" onClick = {() => addBookToCart(book)}>
                                            Add to Cart
                                        </button>
                                )}
                                
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
                        <div className="books">
                            {books.filter(book => book.id !== +id && book.rating === 5)
                            .slice(0, 4)
                            .map(book => (
                                <Book key={book.id} book={book} />
                            ))}
                        </div>
                    </div>
                </div>
            </main>
        </div>
)}
export default BookInfo;
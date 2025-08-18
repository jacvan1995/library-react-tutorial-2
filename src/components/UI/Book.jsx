import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar, faStarHalfAlt } from "@fortawesome/free-solid-svg-icons";

const Book = ({ book }) => {
  return (
    <div className="book">
      <a>
        <figure className="book__img--wrapper">
          <img src={ book.url } alt="" className="book__img" />
        </figure>
      </a>
      <div className="book__title">
        <a className="book__title--link">
            { book.title }
        </a>
      </div>
      <div className="book__ratings">
        {
            new Array(Math.floor(book.rating)).fill(0).map((_, index) => <FontAwesomeIcon icon = { faStar } key = {index} />)
        }
        {
            !Number.isInteger(book.rating) && <FontAwesomeIcon icon = { faStarHalfAlt } />
        }
      </div>
      <div className="book__price">
        { book.salePrice ? (
            <>
                <span className="book__price--normal">${ book.originalPrice.toFixed(2) }</span>$
                {book.salePrice.toFixed(2)}
            </>
        ) : (

            <>${book.originalPrice}</>
        )}
      </div>
    </div>
  );
};

export default Book;
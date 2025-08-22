import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Nav from "./components/Nav.jsx";
import Footer from "./components/Footer.jsx";
import Home from "./Pages/Home.jsx";
import Books from "./Pages/Books.jsx";
import { books } from "./data.js";
import BookInfo from "./Pages/BookInfo.jsx";
import Cart from "./Pages/Cart.jsx";
import React, { useEffect, useState } from "react";

export default function App() {
  const [cart, setCart] = useState([]);

  function addToCart(book) {
   setCart([...cart, {...book} ])
  }

  useEffect(() => {}, [cart]);

  function changeQuantity(book, quantity) {
    setCart(
      cart.map((item) => 
        item.id === book.id
          ? {
              ...item,
              quantity: +quantity,
            }
          : item
      )
    );
  }

  function removeItem(item) {
    setCart(cart.filter((book) => book.id !== item.id));
  }

  useEffect(() => {}, [cart]);

  return (
    <Router>
      <div className="App">
        <Nav />

        <Routes>
          <Route path="/" exact element={<Home />} />

          <Route path="/books" exact element={<Books books={books} />} />

          <Route
            path="/books/:id"
            element={<BookInfo books={books} addToCart={addToCart} />}
          />

          <Route
            path="/cart"
            element={
              <Cart
                books={books}
                cart={cart}
                changeQuantity={changeQuantity}
                removeItem={removeItem}
              />
            }
          />
        </Routes>

        <Footer />
      </div>
    </Router>
  );
}

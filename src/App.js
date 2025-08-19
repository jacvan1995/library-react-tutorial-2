import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Nav from "./components/Nav.jsx";

import Footer from "./components/Footer.jsx";

import Home from "./Pages/Home.jsx";

import Books from "./Pages/Books.jsx";

import { books } from "./data.js";

import BookInfo from "./Pages/BookInfo.jsx";

export default function App() {
  return (
    <Router>
      <div className="App">
        <Nav />

        <Routes>
          <Route path="/" exact element={<Home />} />

          <Route path="/books" exact element = {<Books books = { books } />} />

          <Route path="/books/:id" element={<BookInfo books = { books } />} />
        </Routes>

        <Footer />
      </div>
    </Router>
  );
}

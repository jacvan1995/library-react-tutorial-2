import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Nav from "./components/Nav.jsx";

import Footer from "./components/Footer.jsx";

import Home from "./Pages/Home.jsx";

import Books from "./Pages/Books.jsx";

import { books } from "./data.js";

export default function App() {
  return (
    <Router>
      <div className="App">
        <Nav />

        <Routes>
          <Route path="/" element={<Home />} />

          <Route path="/books" render={() => {<Books books = { books } />}} />

          <Route path="/cart" element={<div />} />
        </Routes>

        <Footer />
      </div>
    </Router>
  );
}

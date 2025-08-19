import Nav from "./components/Nav.jsx";
import Footer from "./components/Footer.jsx";
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import Home from "./Pages/Home.jsx";
import Books from "./Pages/Books.jsx";

function App() {
  return (
    <Router>
      <div className="App">
        <Nav />
        <Routes>
          <Route path="/" exact component={<Home/>} />
          <Route path="/books" component={<Books/>} />
          <Route path="/cart" />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;

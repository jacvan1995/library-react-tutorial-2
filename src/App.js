import Nav from "./components/Nav.jsx";
import Footer from "./components/Footer.jsx";
import {
  BrowserRouter as Router,
  Route,
  Switch,
} from "react-router-dom/cjs/react-router-dom.min.js";
import Home from "./Pages/Home.jsx";
import Books from "./Pages/Books.jsx";

function App() {
  return (
    <Router>
      <div className="App">
        <Nav />
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/books" component={Books} />
          <Route path="/cart" />
        </Switch>
        <Footer />
      </div>
    </Router>
  );
}

export default App;

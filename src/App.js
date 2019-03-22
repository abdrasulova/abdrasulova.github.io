import React from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

function App() {
  return (
    <Router>
      <div>
        <Header />

        <Route exact path="/" component={Home} />
        <Route path="/about" component={About} />
        <Route path="/dogs" component={Dogs} />
      </div>
    </Router>
  );
}

function Home() {
  return <h2>Home</h2>;
}

function About() {
  return <h2>About</h2>;
}

function Dogs() {
   return (
      <div>
          <img src="https://cs8.pikabu.ru/post_img/big/2017/08/12/9/150255163328231333.jpg" alt=""/>
      </div>
    );
}

function Header() {
  return (
    <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
      <ul class="navbar-nav mr-auto">
        <li class="nav-item">
          <Link class="nav-link" to="/">Home</Link>
        </li>
        <li class="nav-item">
          <Link class="nav-link" to="/about">About</Link>
        </li>
         <li class="nav-item">
          <Link class="nav-link" to="/dogs">img</Link>
        </li>
      </ul>
    </nav>
  );
}

export default App;

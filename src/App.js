import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Header from "./Header";
import Home from "./Home";
import Contact from "./Contact";
import Products from "./Products";
import Product from "./Product";

function App() {
  return (
    <div>
      <Router>
        {/* header component */}
        <Header />
        {/* main component */}
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/contact" component={Contact} />
          <Route path="/products" component={Products} />
          <Route
            path="/:id"
            render={(routeProps) => <Product {...routeProps} />}
          />
        </Switch>
      </Router>
    </div>
  );
}

export default App;

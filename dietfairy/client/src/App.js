import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./App.css";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Router>
          <div>
            <Navbar />
            <Switch>
              <Route exact path="/" component={Login} />
              <Route exact path="/home" component={Home} />
              <Route exact path="/search" component={RecipeSearch} />
              <Route exact path="/ingredient" component={IngredientCheck} />
              <Route exact path="/saved" component={Profile} />
            </Switch>
          </div>
        </Router>
      </div>
    );
  }
}

export default App;

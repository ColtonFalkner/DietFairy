import React, { Component } from "react";
import axios from "axios";
import { Route, Link } from "react-router-dom";
import "./App.css";
import LoginForm from "./components/Login/LoginForm";
import SignupForm from "./components/SignupForm";
import Header from "./components/Header";
import Home from "./components/Home";
import Title from "./components/Title";
import Form from "./components/Form";
import Recipes from "./components/Recipes";
// import keys from "./config/keys";
const APP_ID = process.env.APP_ID;
const APP_KEY = process.env.APP_KEY;
const DisplayLinks = props => {
  if (props.loggedIn) {
    return (
      <nav className="navbar">
        <ul className="nav">
          <li className="nav-item">
            <Link to="/" className="nav-link">
              Home
            </Link>
          </li>
          <li>
            <Link to="#" className="nav-link" onClick={props._logout}>
              Logout
            </Link>
          </li>
        </ul>
      </nav>
    );
  } else {
    return (
      <nav className="orange darken-2">
        <div className="nav-wrapper container">
          <ul className="nav">
            <li className="nav-item ">
              <Link to="/" className="nav-link">
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/login" className="nav-link">
                Login
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/signup" className="nav-link">
                Sign Up
              </Link>
            </li>
          </ul>
          <span className="brand-logo center">dietFairy</span>
        </div>
      </nav>
    );
  }
};

class App extends Component {
  constructor() {
    super();
    this.state = {
      loggedIn: false,
      user: null,
      recipes: []
    };
    this._logout = this._logout.bind(this);
    this._login = this._login.bind(this);
  }
  // ---------------------------
  getRecipe = async e => {
    e.preventDefault();
    const recipeName = e.target.elements.recipe.value;
    const from = Math.floor(Math.random() * 98);
    const to = from + 6;
    const url = `https://api.edamam.com/search?q=${recipeName}&app_id=${
      process.env.APP_ID
    }&app_key=${
      process.env.APP_KEY
    }&from=${from.toString()}&to=${to.toString()}`;
    try {
      let response = await fetch(url);
      if (!response.ok) {
        throw new Error("Request failed due to client or server error.");
      }
      let responseData = await response.json();
      this.setState({ recipes: responseData.hits });
    } catch (error) {
      console.log("Error: ", error);
    }
  };
  //----------------------------
  componentDidMount() {
    axios.get("https://diet-fairy.herokuapp.com/auth/user").then(response => {
      console.log(response);
      if (!!response.data.user) {
        // console.log('THERE IS A USER')
        this.setState({
          loggedIn: true,
          user: response.data.user
        });
      } else {
        this.setState({
          loggedIn: false,
          user: null
        });
      }
    });
  }

  _logout(event) {
    event.preventDefault();
    // console.log('logging out')
    axios.post("/auth/logout").then(response => {
      // console.log(response.data)
      if (response.status === 200) {
        this.setState({
          loggedIn: false,
          user: null
        });
      }
    });
  }

  _login(username, password) {
    axios
      .post("https://diet-fairy.herokuapp.com/auth/login", {
        username,
        password
      })
      .then(response => {
        // console.log(response)
        if (response.status === 200) {
          // update the state
          this.setState({
            loggedIn: true,
            user: response.data.user
          });
        }
      });
  }

  render() {
    return (
      <div className="App">
        <header>{/* <Title /> */}</header>
        {/* <Header user={this.state.user} /> */}
        {/* LINKS to our different 'pages' */}
        <DisplayLinks _logout={this._logout} loggedIn={this.state.loggedIn} />
        {/*  ROUTES */}
        {/* <Route exact path="/" component={Home} /> */}
        {/* <Route exact path="/" render={() => <Home user={this.state.user} />} /> */}
        <Route
          exact
          path="/login"
          render={() => (
            <LoginForm
              _login={this._login}
              _googleSignin={this._googleSignin}
            />
          )}
        />
        <Route exact path="/signup" component={SignupForm} />
        {/* <LoginForm _login={this._login} /> */}
        {/* --------------------------------------------- */}
        <main className="container center">
          <Form getRecipe={this.getRecipe} />
          <Recipes recipes={this.state.recipes} />
        </main>

        {/* --------------------------------------------- */}
      </div>
    );
  }
}

export default App;

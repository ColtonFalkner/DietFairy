import React, { Component } from "react";
import { withRouter } from "react-router-dom";
// import Image from "./Image";
// import { API_URL } from "./";

class Profile extends Component {
  constructor(props) {
    super(props);

    this.get_profile = this.get_profile.bind(this);
    this.state = {
      username: "",
      recipes: [],
      updated: false,
      mounted: false
    };

    this.potential_username = "";
    this.recipe_array = [];
  }

  // do we allow users to check profiles if not logged in?
  componentDidMount() {
    if (!this.props.appState.logged_in) {
      this.props.history.push("/");
      return;
    }

    this.potential_username = this.props.match.params.username
      ? this.props.match.params.username
      : "";

    if (this.potential_username === "") {
      fetch(API_URL + "/api/get_user", {
        method: "GET",
        headers: {
          "Access-Control-Allow-Headers":
            "Access-Control-Allow-Headers, Origin,Accept, X-Requested-With, Content-Type, Access-Control-Request-Method, Access-Control-Request-Headers, Authorization",
          Authorization: localStorage.getItem("jwt_token")
        }
      })
        .then(response => response.json())
        .then(responseJson => {
          if (responseJson.success) {
            this.setState({ username: responseJson.username, mounted: true });
          } else {
            this.props.history.push("/404");
          }
        });
    } else {
      this.setState({ username: this.potential_username, mounted: true });
    }
  }

  get_profile() {
    let that = this;
    fetch(API_URL + "/api/profile/" + this.state.username, {
      method: "GET",
      headers: {
        "Access-Control-Allow-Headers":
          "Access-Control-Allow-Headers, Origin,Accept, X-Requested-With, Content-Type, Access-Control-Request-Method, Access-Control-Request-Headers, Authorization",
        Authorization: localStorage.getItem("jwt_token")
      }
    })
      .then(response => response.json())
      .then(responseJson => {
        that.setState({ recipes: responseJson.recipes });
      })
      .then(() => {
        let recipe_array = [];
        for (let i = 0; i < that.state.recipes.length; i++) {
          recipe_array.push(
            <Recipe
              key={i}
              imgurl={that.state.recipes[i].filename}
              uploader={that.state.username}
              upload_date={that.state.recipes[i].upload_date}
            />
          );

          // 5 recipes
          if (i >= 4) {
            recipe_array.push(
              <center key={"key end"}>
                more recipes... but you've hit the history limit!
              </center>
            );
            break;
          }
        }

        this.recipe_array = recipe_array;
        this.setState({ updated: true });
      });
  }

  render() {
    if (this.state.mounted) {
      this.get_profile();
    }

    if (this.state.updated) {
      return (
        <div>
          <center>
            <h2> {this.state.username}'s profile </h2>
          </center>
          {this.recipe_array}
        </div>
      );
    }

    return (
      <center>
        {" "}
        <h2> loading profile... </h2>
      </center>
    );
  }
}

export default withRouter(Profile);

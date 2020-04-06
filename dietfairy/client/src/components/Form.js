import React from "react";

const Form = props => {
  return (
    <div className="card-panel row">
      <form onSubmit={props.getRecipe} className="container row">
        <div className="input-field col s10">
          <i className="material-icons prefix">restaurant_menu</i>
          <input type="text" id="recipe" name="recipe" />
          <label htmlFor="recipe">DISH NAME OR IDEA</label>
        </div>
        <button type="submit" className="btn btn-large green col s2">
          <i className="material-icons">search</i>
        </button>
      </form>
    </div>
  );
};

export default Form;

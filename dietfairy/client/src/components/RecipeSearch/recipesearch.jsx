////recipe search
import React from "react";
import "./RecipeSearch.css";

const RecipeSearch = props => {
  return (
    <form>
      <div className="form-group">
        <label className="RecipeSearchLabel">
          <h3>Search For A Recipe</h3>
        </label>
        <br></br>
        <input
          className="col-12 form-control"
          value={props.search}
          type="text"
          name="searchRecipe"
          placeholder="Enter Ingredient or Recipe"
          onChange={props.handleInputChange}
        />
      </div>
      <button
        type="submit"
        className="submitBtn btn btn-primary"
        onClick={props.handleFormSubmit}
      >
        Submit
      </button>
    </form>
  );
};

export default RecipeSearch;

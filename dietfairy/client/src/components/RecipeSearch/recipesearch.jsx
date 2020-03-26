////recipe search
import React, { useEffect, useState } from "react";


const RecipeSearch = () => {
  const APP_ID = "7fc20f79c";
  const APP_KEY = "698a47755250ca8bc9681f8964449a39";

  const [recipes, setRecipes] = useState([]); //Returns recipes from Edamam
  const [search, setSearch] = useState(""); //Search input text
  const [query, setQuery] = useState("chicken");

  useEffect(() => {
    const getRecipes = async () => {
      console.log("Loading Recipes from Edamam...");
      const response = await fetch(
        `https://api.edamam.com/search?q=${query}&app_id=${APP_ID}&app_key=${APP_KEY}`
      );
      const data = await response.json();
      setRecipes(data.hits);
      console.log("Recipes Loaded.");
      console.log(data.hits);
    };
    //Runs when the program is built (mounted)
    getRecipes();
  }, [query]);

  const updateSearch = e => {
    setSearch(e.target.value);
    console.log(search);
  };

  const getSearch = e => {
    e.preventDefault(); //Stops the page from refreshing
    setQuery(search);
    setSearch("");
  };

  return (
    <div className="RecipeSearch">
      <h1>Recipe Search</h1>
      <form className="search-form" onSubmit={getSearch}>
        <input
          className="search-bar"
          type="text"
          value={search}
          onChange={updateSearch}
        />
        <br></br>
        <button className="search-button" type="submit">
          Search
        </button>
      </form>
      <div className="recipes">
        {recipes.map(recipe => (
          <Recipe
            key={recipes.indexOf(recipe)}
            title={recipe.recipe.label + " >> " + recipes.indexOf(recipe)}
            calories={recipe.recipe.calories}
            image={recipe.recipe.image}
            ingredients={recipe.recipe.ingredients}
          />
        ))}
      </div>
    </div>
  );
};

export default RecipeSearch;

import React from "react";

const Recipes = props => (
  <div className="card row">
    {props.recipes.map(recipe => {
      return (
        <div className="card col l4 m6 s12" key={recipe.recipe.uri}>
          <div className="card-image waves-effect waves-block waves-light">
            <img className="activator" src={recipe.recipe.image} alt="" />
          </div>
          <div className="card-content row">
            <span className="card-title grey-text text-darken-4 col s12 left">
              {recipe.recipe.label.length < 22
                ? `${recipe.recipe.label}`
                : `${recipe.recipe.label.substring(0, 18)} ...`}
              <button className="activator btn btn-medium green right col s12">
                VIEW
              </button>
            </span>
          </div>
          <div className="card-reveal">
            <div className="card-title row">
              <div className="col s10">
                <h5 className="left">{recipe.recipe.label}</h5>
              </div>
              <div className="col s2">
                <i className="material-icons center">close</i>
              </div>
            </div>
            <div className="row">
              {recipe.recipe.healthLabels.map(healthLabel => {
                return (
                  <p className="chip left" key={healthLabel}>
                    {healthLabel}
                  </p>
                );
              })}
            </div>
            <div className="row">
              <ul className="collection with-header col s12">
                <li className="collection-header left">
                  <h5>Ingredients</h5>
                </li>
                {recipe.recipe.ingredientLines.map(ingredient => {
                  return (
                    <li className="collection-item left" key={ingredient}>
                      {ingredient}
                    </li>
                  );
                })}
              </ul>
            </div>
            <div className="row">
              <a
                href={recipe.recipe.url}
                rel="noopener noreferrer"
                target="_blank"
              >
                <button className="btn orange darken-2 col s12">
                  GO TO SOURCE
                </button>
              </a>
            </div>
          </div>
        </div>
      );
    })}
  </div>
);

export default Recipes;

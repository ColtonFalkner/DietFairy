import React, { useEffect } from "react";
import { Link, Redirect } from "react-router-dom";
import { useEatingsList, useSearchQuery, useFoodInfo } from "../../hooks";

/** @jsx jsx */
import { css, jsx } from "@emotion/core";
import {
  gridStyles,
  backButtonStyles,
  leftGridStyles,
  middleGridStyles,
  prevFoodButtonStyles,
  foodThumbnailStyles
} from "./styles";

const Food = ({ location }) => {
  const foodID = location.pathname.split("/")[2];
  const { eatings, setEatings } = useEatingsList();
  const { setSearchQuery } = useSearchQuery();
  const {
    food,
    nextFood,
    prevFood,
    redirect,
    setFood,
    setNextFood,
    setPrevFood,
    setRedirect
  } = useFoodInfo();

  useEffect(() => {
    const url = `https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${drinkID}`;
    fetch(url)
      .then(raw => raw.json())
      .then(({ foods }) => {
        setFood(foods[0]);
      });
  }, [foodID]);

  useEffect(() => {
    const index = eatings.findIndex(
      eating => eating.idFood === food.idFood
    );

    setNextFood(eatings[index + 1]);
    setPrevFood(eatings[index - 1]);
  }, [food]);

  const handleRedirect = ingredient => {
    setEatings([]);
    setSearchQuery(ingredient.toLowerCase());
    setRedirect(true);
  };

  if (redirect) {
    return <Redirect to="/" />;
  }

  return (
    <div>
      <div css={gridStyles}>
        <div
          css={css`
            position: absolute;
          `}
        >
          <Link css={backButtonStyles} to="/">
            Back
          </Link>
        </div>
        <div css={leftGridStyles}>
          {prevFood && (
            <Link
              css={prevFoodButtonStyles}
              to={`/food/${prevFood.idFood}`}
            >
              <span>Previous Food: {prevFood.strFood}</span>
            </Link>
          )}
        </div>

        <div css={middleGridStyles}>
          <p>
            Food name:{" "}
            <span
              css={css`
                font-size: 22px;
                padding: 5px 20px;
              `}
            >
              {food.strFood}
            </span>
          </p>
          <img css={foodThumbnailStyles} src={food.strFoodThumb} />
          <p css={css``}>
            Instructions:{" "}
            <span
              css={css`
                font-size: 15px;
                padding: 5px 20px;
              `}
            >
              {food.strInstructions}
            </span>
          </p>
        </div>
        <div
          css={css`
            grid-area: right;
            grid-column-start: 4;
            grid-column-end: 5;
            display: flex;
            flex-direction: column;
            justify-content: flex-end;
            border-left: 1px solid black;
          `}
        >
          {food.strIngredient1 && (
            <div onClick={e => handleRedirect(food.strIngredient1)}>
              {food.strIngredient1}
            </div>
          )}
          {food.strIngredient2 && (
            <div onClick={e => handleRedirect(food.strIngredient2)}>
              {food.strIngredient2}
            </div>
          )}
          {food.strIngredient3 && (
            <div onClick={e => handleRedirect(food.strIngredient3)}>
              {food.strIngredient3}
            </div>
          )}
          {food.strIngredient4 && (
            <div onClick={e => handleRedirect(food.strIngredient4)}>
              {food.strIngredient4}
            </div>
          )}
          {food.strIngredient5 && (
            <div onClick={e => handleRedirect(food.strIngredient5)}>
              {food.strIngredient5}
            </div>
          )}
          {nextFood && (
            <Link
              css={css`
                text-decoration: none;
                color: black;
                padding: 15px;
                text-align: center;
                border: 1px solid black;

                :visited {
                  color: black;
                }
              `}
              to={`/food/${nextFood.idFood}`}
            >
              <span>Next Food: {nextFood.strFood}</span>
            </Link>
          )}
        </div>
      </div>
    </div>
  );
};

export default Food;

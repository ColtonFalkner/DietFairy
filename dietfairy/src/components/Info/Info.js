import React from "react";
import { useFoodInfo, useSearchQuery } from "../../hooks";
import CloseIcon from "../../assets/close.png";

/** @jsx jsx */
import { css, jsx } from "@emotion/core";
import {
  closeStyles,
  mainInfoStyles,
  ingredientStyles,
  measurementStyles
} from "./styles";

const Redirect = ({ ingredient }) => {
  const { setSearchQuery } = useSearchQuery();
  const { toggleFoodInfoOff } = useFoodInfo();

  const resetSearch = () => {
    setSearchQuery(`${ingredient.toLowerCase()}`);
    toggleFoodInfoOff();
  };

  return (
    <span
      onClick={resetSearch}
      css={css`
        text-decoration: underline;
        cursor: pointer;
      `}
    >
      {ingredient}
    </span>
  );
};

const Info = () => {
  const { food, toggleFoodInfoOff } = useFoodInfo();

  return (
    <div css={mainInfoStyles} data-testid="info">
      <div
        css={css`
          grid-area: name;
          text-align: center;
          align-self: center;
          font-size: 2rem;
          display: inline-flex;
          justify-content: space-between;
        `}
        onClick={toggleFoodInfoOff}
      >
        <p
          css={css`
            font-size: 0.75rem;
            padding: 0.4rem;
          `}
        >
          <span
            css={css`
              font-size: 2rem;
              padding: 0 2rem;
              font-weight: bold;
            `}
          >
            {food.strFood.toUpperCase()}
          </span>
        </p>
        <img
          css={closeStyles}
          src={CloseIcon}
          onClick={toggleFoodInfoOff}
          data-testid="close"
        />
      </div>

      <div
        css={css`
          grid-area: ingredients;
          width: 100%;
          height: 100%;
        `}
      >
        <div
          css={css`
            display: flex;
            flex-direction: column;
            justify-content: space-evenly;
            height: 60%;
            width: 100%;
          `}
        >
          <div css={ingredientStyles}>
            <div
              css={css`
                font-size: 0.75rem;
                padding: 0.4rem;
              `}
            >
              <em>Ingredients</em>
            </div>
            <div
              css={css`
                font-size: 0.75rem;
                padding: 0.4rem;
              `}
            >
              <em>Measurements</em>
            </div>
          </div>
          <div css={ingredientStyles}>
            <div>
              <Redirect ingredient={food.strIngredient1} />
            </div>
            <div
              css={css`
                font-size: 0.75rem;
              `}
            >
              {food.strMeasure1}
            </div>
          </div>
          <div css={ingredientStyles}>
            <div>
              <Redirect ingredient={food.strIngredient2} />
            </div>
            <div css={measurementStyles}>{food.strMeasure2}</div>
          </div>
          <div css={ingredientStyles}>
            <div>
              <Redirect ingredient={food.strIngredient3} />
            </div>
            <div css={measurementStyles}>{food.strMeasure3}</div>
          </div>
          {food.strIngredient4 && (
            <div css={ingredientStyles}>
              <div>
                <Redirect ingredient={food.strIngredient4} />
              </div>
              <div css={measurementStyles}>{food.strMeasure4}</div>
            </div>
          )}
          {food.strIngredient5 && (
            <div css={ingredientStyles}>
              <div>
                <Redirect ingredient={food.strIngredient5} />
              </div>
              <div css={measurementStyles}>{food.strMeasure5}</div>
            </div>
          )}
          {food.strIngredient6 && (
            <div css={ingredientStyles}>
              <div>
                <Redirect ingredient={food.strIngredient6} />
              </div>
              <div css={measurementStyles}>{food.strMeasure6}</div>
            </div>
          )}
        </div>
      </div>
      <div
        css={css`
          grid-area: image;
          height: 100%;
          width: 100%;
        `}
      >
        <img
          css={css`
            height: 100%;
            width: 100%;
            padding: 0.5rem;
            border-radius: 3%;
          `}
          src={food.strFoodThumb}
        />
      </div>

      <div
        css={css`
          grid-area: instructions;
          width: 100%;
          height: 100%;
          overflow-y: auto;
        `}
      >
        <div
          css={css`
            width: 75%;
          `}
        >
          <p css={measurementStyles}>
            <em
              css={css`
                padding: 0.6rem;
              `}
            >
              Instructions
            </em>
          </p>
          <p>{food.strInstructions}</p>
        </div>
      </div>
    </div>
  );
};

export default Info;

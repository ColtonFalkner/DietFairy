import React, { useState, useEffect } from "react";
import { useFoodInfo } from "../../hooks";

/** @jsx jsx */
import { jsx, css } from "@emotion/core";
import { cardStyles, foodNameStyles, imageStyles } from "./styles";

const Card = ({ strFood, strFoodThumb, idFood }) => {
  const { toggleFoodInfoOn, setFood } = useFoodInfo();
  const [food, setOtherFood] = useState({});

  const handleClick = e => {
    setFood(food);
    toggleFoodInfoOn();
  };

  useEffect(() => {
    const url = `https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${idDrink}`;
    fetch(url)
      .then(raw => raw.json())
      .then(({ foods }) => {
        setOtherFood(foods[0]);
      });
  }, []);

  return (
    <div css={cardStyles} onClick={handleClick} data-testid="card">
      <div css={foodNameStyles}>
        <p
          css={css`
            font-size: 0.6rem;
          `}
        >
          Name:
        </p>
        {strFood}
      </div>
      <div
        css={css`
          grid-area: details;
          padding-left: 1rem;
          align-self: center;
        `}
      >
        <p
          css={css`
            font-size: 0.6rem;
          `}
        >
          Served in:
        </p>
        {food.strGlass}
      </div>
      <img css={imageStyles} src={strFoodThumb} />
    </div>
  );
};

export default Card;

import React, { useMemo } from "react";
import { useSearchQuery, useFoodInfo } from "../../hooks";
import ingredients from "../../utils/ingredients";

/** @jsx jsx */
import { jsx } from "@emotion/core";
import { linkStyles } from "./styles";

const Suggestion = ({ type }) => {
  const { setSearchQuery } = useSearchQuery();
  const { toggleFoodInfoOff } = useFoodInfo();

  const getRandomIngredient = type => {
    const min = 0;
    const max = ingredients[type].length;
    // Return random ingredient from array
    return ingredients[type][Math.floor(Math.random() * (max - min)) + min];
  };

  // Memoizing ingredient so it persists across renders
  const ingredient = useMemo(() => getRandomIngredient(type), [type]);

  // On click, start searching for this ingredient and toggle info display off
  const setSearchandClearInfo = () => {
    setSearchQuery(`${ingredient}`);
    toggleFoodInfoOff();
  };

  return (
    <span
      css={linkStyles}
      onClick={setSearchandClearInfo}
      data-testid="suggestion"
      role="button"
    >
      {ingredient}
    </span>
  );
};

export default Suggestion;

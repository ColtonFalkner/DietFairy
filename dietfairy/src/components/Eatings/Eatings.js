import React, { useState, useEffect } from "react";
import Card from "../Card/Card";
import { useEatingsList } from "../../hooks";
import numbers from "../../utils/numbers";

/** @jsx jsx */
import { css, jsx } from "@emotion/core";

const Eatings = ({ refDictionary }) => {
  const { eatings } = useEatingsList();
  const [sortedFoods, setSortedFoods] = useState({});

  useEffect(() => {
    const sortedFoodsByFirstLetter = eatings.reduce((acc, cur) => {
      let firstLetter = cur.strFood[0];

      numbers.forEach(char => {
        if (firstLetter === char) {
          firstLetter = "#";
        }
      });

      acc[firstLetter]
        ? acc[firstLetter].push(cur)
        : (acc[firstLetter] = [cur]);
      return acc;
    }, {});

    setSortedFoods(sortedFoodsByFirstLetter);
  }, [eatings]);

  return (
    <div
      css={css`
        display: flex;
        flex-direction: column;
      `}
    >
      {eatings &&
        Object.entries(sortedFoods).map((group, idx) => {
          const [letter, letterEatings] = group;

          return (
            <div key={idx}>
              <p
                css={css`
                  text-align: center;
                  font-size: 1.6rem;
                `}
                ref={refDictionary[letter]}
              >
                <em>{letter}</em>
              </p>
              {letterEatings.map(props => (
                <div
                  css={css`
                    padding: 15px 0;
                  `}
                  key={props.idFood}
                >
                  <Card {...props} />
                </div>
              ))}
            </div>
          );
        })}
    </div>
  );
};

export default Eatings;

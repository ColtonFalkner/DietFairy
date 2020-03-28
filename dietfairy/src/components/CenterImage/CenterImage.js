import React, { useMemo } from "react";
import Suggestion from "../Suggestion/Suggestion";
import Carrot from "../../assets/carrot.jpg";
import Fish from "../../assets/fish.jpg";
import Steak from "../../assets/steak.jpg";

/** @jsx jsx */
import { css, jsx } from "@emotion/core";
import { centerImageStyles } from "./styles";

const CenterImage = () => {
  const image = useMemo(() => {
    const images = [Carrot, Fish, Steak];
    const min = 0;
    const max = images.length;
    return images[Math.floor(Math.random() * (max - min)) + min];
  }, []);

  const memoIngredient1 = useMemo(() => <Suggestion type="light" />, []);
  const memoIngredient2 = useMemo(() => <Suggestion type="dark" />, []);
  const memoIngredient3 = useMemo(() => <Suggestion type="exotic" />, []);
  return (
    <div
      css={css`
        position: relative;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        padding: 2rem;
      `}
    >
      <em
        css={css`
          display: block;
          padding: 0.4rem;
          line-height: 3;
        `}
      >
        Need some inspiration?{" "}
      </em>
      <img
        css={centerImageStyles}
        className="animated shake"
        src={image}
        alt="Shaking of a baker"
      />
      <p
        css={css`
          padding: 25px;
        `}
      >
        Try searching for {memoIngredient1}, {memoIngredient2}, or maybe even{" "}
        {memoIngredient3} ...
      </p>
    </div>
  );
};

export default CenterImage;

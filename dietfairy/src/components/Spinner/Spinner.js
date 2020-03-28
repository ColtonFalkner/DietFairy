import React from "react";
import ShakerIcon from "../../assets/baker.jpg";

/** @jsx jsx */
import { css, jsx } from "@emotion/core";

const Spinner = () => {
  return (
    <div
      css={css`
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
      `}
      data-testid="spinner"
    >
      <div
        css={css`
          padding: 5rem;
        `}
      >
        <img
          src={ShakerIcon}
          className="animated shake infinite slow"
          alt="Animated Baking free icon"
        ></img>
      </div>
    </div>
  );
};

export default Spinner;

import React from "react";
import GithubLogo from "../../assets/github-logo.png";
import LinkedinLogo from "../../assets/linkedin-logo.png";

/** @jsx jsx */
import { css, jsx } from "@emotion/core";
import { aboutStyles } from "./styles";

const About = () => (
  <div css={aboutStyles} data-testid="about">
    <h1>
      About <em>dietFairy</em>
    </h1>
    <p>We are web developers based in the south.</p>
    <p>
      This site exists as an opportunity to combine two of our favorite things:
      coding and food.
    </p>
    <p>
      Next time you're in the mood for a new diet related recipe, I hope you think of this!
    </p>
    <p>Stay tuned for new features!</p>
    <div
      css={css`
        display: flex;
        align-items: center;
      `}
    >
      <img
        css={css`
          display: inline-block;
          width: 25px;
          height: 25px;
          margin: 0 1rem;
        `}
        src={GithubLogo}
      ></img>
      
      <a
        href="https://github.com/ColtonFalkner/Project3"
        rel="noopener noreferrer"
        target="_blank"
        css={css`
          text-decoration: none;
          color: black;
          :visited {
            color: black;
          }
          :hover {
            font-weight: bold;
          }
        `}
      >
        <span css={css``}>GitHub</span>
      </a>
    </div>
    <div
      css={css`
        display: flex;
        align-items: center;
      `}
    >
      <img
        css={css`
          display: inline-block;
          width: 25px;
          height: 25px;
          margin: 0 1rem;
        `}
        src={LinkedinLogo}
      ></img>
      <a
        href="https://www.linkedin.com/in/erin-taylor-66979311/"
        rel="noopener noreferrer"
        target="_blank"
        css={css`
          text-decoration: none;
          color: black;
          :visited {
            color: black;
          }
          :hover {
            font-weight: bold;
          }
        `}
      >
        <span
          css={css`
            display: inline-block;
          `}
        >
          LinkedIn
        </span>
      </a>
    </div>
  </div>
);

export default About;

        // href="https://www.linkedin.com/in/erin-taylor-66979311/"
        // href="https://www.linkedin.com/in/shannen-grimes-29b1a15/"
        // href="https://www.linkedin.com/in/colton-falkner-04005931/"
        // href="https://www.linkedin.com/in/jose-sanchez-6132011a1/"


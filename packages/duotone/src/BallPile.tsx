import * as React from "react";
import { SVGProps } from "react";

const SvgBallPile = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512" {...props}>
    <path
      className="ball-pile_svg__fa-primary"
      d="M176 168c-44.2 0-80 35.8-80 80s35.84 80 80 80 80-35.8 80-80-35.8-80-80-80zm224 0c-44.16 0-80 35.84-80 80s35.84 80 80 80 80-35.8 80-80-35.8-80-80-80z"
    />
    <path
      d="M80 352c-44.16 0-80 35.8-80 80s35.84 80 80 80 80-35.8 80-80-35.8-80-80-80zm208 0c-44.16 0-80 35.84-80 80s35.8 80 80 80 80-35.84 80-80-35.8-80-80-80zm208 0c-44.16 0-80 35.84-80 80s35.84 80 80 80 80-35.84 80-80-35.8-80-80-80zM288 0c-44.2 0-80 35.84-80 80s35.8 80 80 80 80-35.84 80-80-35.8-80-80-80z"
      style={{
        opacity: 0.4,
      }}
    />
  </svg>
);

export default SvgBallPile;

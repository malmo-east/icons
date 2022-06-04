import * as React from "react";
import { SVGProps } from "react";

const SvgBox = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" {...props}>
    <path
      className="box_svg__fa-primary"
      d="M240 160h208v256c0 35.3-28.7 64-64 64H64c-35.35 0-64-28.7-64-64V160h208V32h32v128z"
    />
    <path
      d="M208 32v128H0L50.73 58.53A48 48 0 0 1 93.67 32H208zm146.3 0c18.2 0 34.8 10.27 43 26.53L448 160H240V32h114.3z"
      style={{
        opacity: 0.4,
      }}
    />
  </svg>
);

export default SvgBox;

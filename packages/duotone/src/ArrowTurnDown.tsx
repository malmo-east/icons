import * as React from "react";
import { SVGProps } from "react";

const SvgArrowTurnDown = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512" {...props}>
    <path
      className="arrow-turn-down_svg__fa-primary"
      d="M297.4 329.4 192 434.8 86.62 329.4c-12.5-12.5-32.75-12.5-45.25 0s-12.5 32.75 0 45.25l127.1 128c7.13 6.25 15.33 9.35 22.63 9.35s16.37-3.125 22.62-9.375l128-128c12.5-12.5 12.5-32.75 0-45.25s-31.82-12.475-44.32.025z"
    />
    <path
      d="M32 64C14.33 64 0 49.69 0 32S14.33 0 32 0h112c44.1 0 80 35.88 80 80v322.8l-32 32-31.1-32V80c-.9-8.81-8.1-16-16.9-16H32z"
      style={{
        opacity: 0.4,
      }}
    />
  </svg>
);

export default SvgArrowTurnDown;

import * as React from "react";
import { SVGProps } from "react";

const SvgArrowTurnUp = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512" {...props}>
    <path
      className="arrow-turn-up_svg__fa-primary"
      d="M214.6 9.375c-12.5-12.5-32.75-12.5-45.25 0l-127.1 128c-12.5 12.5-12.5 32.75 0 45.25s32.75 12.5 45.25 0l105.4-105.4 105.4 105.4c5.3 6.275 13.5 9.375 20.8 9.375s16.38-3.125 22.62-9.375c12.5-12.5 12.5-32.75 0-45.25l-127.12-128z"
    />
    <path
      d="M224 109.3V432c0 44.13-35.89 80-80 80H32c-17.67 0-32-14.31-32-32s14.33-32 32-32h112c8.8 0 16-7.2 16-16V109.3l31.1-32 32.9 32z"
      style={{
        opacity: 0.4,
      }}
    />
  </svg>
);

export default SvgArrowTurnUp;

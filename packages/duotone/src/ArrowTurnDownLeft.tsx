import * as React from "react";
import { SVGProps } from "react";

const SvgArrowTurnDownLeft = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" {...props}>
    <path
      className="arrow-turn-down-left_svg__fa-primary"
      d="M137.4 438.6c12.5 12.5 32.75 12.5 45.25 0 6.25-6.2 9.35-14.4 9.35-23.5s-3.125-16.38-9.375-22.62L77.25 287.1 182.6 182.6c12.5-12.5 12.5-32.75 0-45.25s-32.75-12.5-45.25 0l-128 127.1c-12.5 12.5-12.5 32.75 0 45.25L137.4 438.6z"
    />
    <path
      d="m77.25 287.1 32-31.1H432c8.8 0 16-7.2 16-16V64c0-17.67 14.31-32 32-32s32 14.33 32 32v176c0 44.11-35.88 80-80 80H109.3l-32.05-32.9z"
      style={{
        opacity: 0.4,
      }}
    />
  </svg>
);

export default SvgArrowTurnDownLeft;

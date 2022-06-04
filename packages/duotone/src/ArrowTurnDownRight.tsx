import * as React from "react";
import { SVGProps } from "react";

const SvgArrowTurnDownRight = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" {...props}>
    <path
      className="arrow-turn-down-right_svg__fa-primary"
      d="M374.6 438.6c-12.5 12.5-32.7 12.5-45.2 0-6.3-6.2-9.4-14.4-9.4-22.6 0-8.2 3.1-16.4 9.4-22.6L434.7 288 329.4 182.6c-12.5-12.5-12.5-32.7 0-45.2s32.7-12.5 45.2 0l128 128c12.5 12.5 12.5 32.7 0 45.2l-128 128z"
    />
    <path
      d="M402.7 320H80c-44.13 0-80-35.9-80-80V64c0-17.67 14.31-32 32-32 17.69 0 32 14.33 32 32v176c0 8.8 7.19 16 16 16h322.7l32 31.1-32 32.9z"
      style={{
        opacity: 0.4,
      }}
    />
  </svg>
);

export default SvgArrowTurnDownRight;

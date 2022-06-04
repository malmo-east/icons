import * as React from "react";
import { SVGProps } from "react";

const SvgTurnDownRight = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" {...props}>
    <path
      className="turn-down-right_svg__fa-primary"
      d="M392.3 409.6c-7 6.5-17.1 8.2-25.9 4.4-8.7-3.8-14.4-12.5-14.4-22V183.1c0-8.6 5.7-17.3 14.4-22 8.8-2.9 18.9-1.2 25.9 5.3l112 104c10.3 9.5 10.3 25.7 0 35.2l-112 104z"
    />
    <path
      d="M352 319.1H80c-44.13 0-80-35-80-80V64c0-17.67 14.31-32 32-32 17.69 0 32 14.33 32 32v175.1c0 9.7 7.19 16 16 16h272v64z"
      style={{
        opacity: 0.4,
      }}
    />
  </svg>
);

export default SvgTurnDownRight;

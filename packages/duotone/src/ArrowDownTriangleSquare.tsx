import * as React from "react";
import { SVGProps } from "react";

const SvgArrowDownTriangleSquare = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" {...props}>
    <path
      className="arrow-down-triangle-square_svg__fa-primary"
      d="M237.6 328.7c13.03 11.95 13.9 32.22 1.969 45.27l-87.1 96.09c-12.12 13.26-35.06 13.26-47.19 0l-87.1-96.09c-11.94-13.05-11.06-33.31 1.969-45.27 13.59-12.46 33.8-10.48 45.22 1.969L96 366.1V64.03C96 46.33 110.33 32 128 32s32 14.33 32 32.03v302l32.4-35.4c12-12.93 32.2-13.83 45.2-1.93z"
    />
    <path
      d="M492.1 182.9 408.97 45.8c-11.12-18.38-38.75-18.38-49.88 0l-83.25 137.1c-11 18.25 2.75 41.12 25 41.12h166.3c22.26-.02 35.96-22.92 24.96-41.12zM448 288H320c-17.67 0-31.1 14.33-31.1 32v128c0 17.67 14.33 32 31.1 32h128c17.67 0 32-14.33 32-32V320.9c0-18.6-14.3-32.9-32-32.9z"
      style={{
        opacity: 0.4,
      }}
    />
  </svg>
);

export default SvgArrowDownTriangleSquare;

import * as React from "react";
import { SVGProps } from "react";

const SvgArrowDownToBracket = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" {...props}>
    <path
      className="arrow-down-to-bracket_svg__fa-primary"
      d="m201.4 342.6-128-128c-12.5-12.5-12.5-32.75 0-45.25s32.75-12.5 45.25 0L192 242.8V32c0-17.69 14.31-32 32-32s32 14.31 32 32v210.8l73.38-73.38c12.5-12.5 32.75-12.5 45.25 0 12.49 12.49 12.51 32.74 0 45.25l-128 128c-12.53 12.43-32.73 12.43-45.23-.07z"
    />
    <path
      d="M448 416v-64c0-17.67-14.33-32-32-32s-32 14.33-32 32v64c0 17.67-14.33 32-32 32H96c-17.67 0-32-14.33-32-32v-64c0-17.67-14.33-32-32-32S0 334.33 0 352v64c0 53.02 42.98 96 96 96h256c53 0 96-43 96-96z"
      style={{
        opacity: 0.4,
      }}
    />
  </svg>
);

export default SvgArrowDownToBracket;

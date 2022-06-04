import * as React from "react";
import { SVGProps } from "react";

const SvgSquareArrowDownRight = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" {...props}>
    <path d="M312 164.7c-13.25 0-24 10.75-24 24v97.34L152.1 151c-9.375-9.375-24.56-9.375-33.94 0s-9.375 24.56 0 33.94L254.1 320h-97.4c-13.25 0-24 10.75-24 24s10.75 24 24 24H312c13.25 0 24-10.75 24-24V188.7c0-13.2-10.7-24-24-24zM384 32H64C28.65 32 0 60.66 0 96v320c0 35.34 28.65 64 64 64h320c35.35 0 64-28.66 64-64V96c0-35.34-28.7-64-64-64zm16 384c0 8.82-7.178 16-16 16H64c-8.822 0-16-7.18-16-16V96c0-8.82 7.178-16 16-16h320c8.822 0 16 7.18 16 16v320z" />
  </svg>
);

export default SvgSquareArrowDownRight;
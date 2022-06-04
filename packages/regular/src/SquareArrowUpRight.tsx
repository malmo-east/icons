import * as React from "react";
import { SVGProps } from "react";

const SvgSquareArrowUpRight = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" {...props}>
    <path d="M312 144H156.7c-13.25 0-24 10.75-24 24s10.8 24 24 24h97.34l-135 135c-9.375 9.375-9.375 24.56 0 33.94C123.7 365.7 129.8 368 136 368s12.28-2.344 16.97-7.031L288 225.9v97.34c0 13.25 10.75 24 24 24s24-10.75 24-24V168c0-13.2-10.7-24-24-24zm72-112H64C28.65 32 0 60.66 0 96v320c0 35.34 28.65 64 64 64h320c35.35 0 64-28.66 64-64V96c0-35.34-28.7-64-64-64zm16 384c0 8.82-7.178 16-16 16H64c-8.822 0-16-7.18-16-16V96c0-8.82 7.178-16 16-16h320c8.822 0 16 7.18 16 16v320z" />
  </svg>
);

export default SvgSquareArrowUpRight;
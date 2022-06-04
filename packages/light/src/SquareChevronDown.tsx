import * as React from "react";
import { SVGProps } from "react";

const SvgSquareChevronDown = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" {...props}>
    <path d="M324.7 212.7 224 313.4 123.3 212.7c-6.25-6.25-16.38-6.25-22.62 0s-6.25 16.38 0 22.62l112 112C215.8 350.4 219.9 352 224 352s8.188-1.562 11.31-4.688l112-112c6.25-6.25 6.25-16.38 0-22.62s-16.41-6.292-22.61.008zM384 32H64C28.65 32 0 60.65 0 96v320c0 35.35 28.65 64 64 64h320c35.35 0 64-28.65 64-64V96c0-35.35-28.7-64-64-64zm32 384c0 17.64-14.36 32-32 32H64c-17.64 0-32-14.36-32-32V96c0-17.64 14.36-32 32-32h320c17.64 0 32 14.36 32 32v320z" />
  </svg>
);

export default SvgSquareChevronDown;
import * as React from "react";
import { SVGProps } from "react";

const SvgSquareChevronLeft = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" {...props}>
    <path d="m272.1 351-94.2-95 95.03-95.03c9.375-9.375 9.375-24.56 0-33.94s-24.56-9.375-33.94 0l-112 112C122.3 243.7 120 249.8 120 256s2.344 12.28 7.031 16.97l112 112c9.375 9.375 24.56 9.375 33.94 0S282.3 360.4 272.1 351zM448 416V96c0-35.35-28.66-64-64-64H64C28.66 32 0 60.65 0 96v320c0 35.35 28.66 64 64 64h320c35.3 0 64-28.7 64-64zM64 432c-8.82 0-16-7.178-16-16V96c0-8.822 7.18-16 16-16h320c8.82 0 16 7.178 16 16v320c0 8.822-7.18 16-16 16H64z" />
  </svg>
);

export default SvgSquareChevronLeft;
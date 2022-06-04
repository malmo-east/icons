import * as React from "react";
import { SVGProps } from "react";

const SvgSquareChevronRight = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" {...props}>
    <path d="M208.1 127c-9.375-9.375-24.56-9.375-33.94 0s-9.375 24.56 0 33.94L270.1 256l-95.03 95.03c-9.375 9.375-9.375 24.56 0 33.94s24.56 9.375 33.94 0l112-112C325.7 268.3 328 262.2 328 256s-2.344-12.28-7.031-16.97L208.1 127zM384 32H64C28.66 32 0 60.66 0 96v320c0 35.34 28.66 64 64 64h320c35.34 0 64-28.66 64-64V96c0-35.34-28.7-64-64-64zm16 384c0 8.82-7.18 16-16 16H64c-8.82 0-16-7.18-16-16V96c0-8.82 7.18-16 16-16h320c8.82 0 16 7.18 16 16v320z" />
  </svg>
);

export default SvgSquareChevronRight;

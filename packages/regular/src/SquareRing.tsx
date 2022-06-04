import * as React from "react";
import { SVGProps } from "react";

const SvgSquareRing = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" {...props}>
    <path d="M384 32H64C28.64 32 0 60.64 0 96v320c0 35.36 28.64 64 64 64h320c35.36 0 64-28.64 64-64V96c0-35.36-28.6-64-64-64zm16 384c0 8.832-7.168 16-16 16H64c-8.832 0-16-7.168-16-16V96c0-8.832 7.168-16 16-16h320c8.832 0 16 7.168 16 16v320zM224 128c-70.7 0-128 57.3-128 128s57.31 128 128 128 128-57.31 128-128-57.3-128-128-128zm0 208c-44.19 0-80-35.81-80-80s35.8-80 80-80 80 35.81 80 80-35.8 80-80 80z" />
  </svg>
);

export default SvgSquareRing;
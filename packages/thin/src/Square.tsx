import * as React from "react";
import { SVGProps } from "react";

const SvgSquare = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" {...props}>
    <path d="M384 32c35.3 0 64 28.65 64 64v320c0 35.3-28.7 64-64 64H64c-35.35 0-64-28.7-64-64V96c0-35.35 28.65-64 64-64h320zm0 16H64c-26.51 0-48 21.49-48 48v320c0 26.5 21.49 48 48 48h320c26.5 0 48-21.5 48-48V96c0-26.51-21.5-48-48-48z" />
  </svg>
);

export default SvgSquare;

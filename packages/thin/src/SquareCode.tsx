import * as React from "react";
import { SVGProps } from "react";

const SvgSquareCode = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" {...props}>
    <path d="m277.7 170.3 80 80c3.1 3.2 3.1 8.2 0 11.4l-80 80a8.15 8.15 0 0 1-11.4 0 8.15 8.15 0 0 1 0-11.4l74.4-74.3-74.4-74.3a8.15 8.15 0 0 1 0-11.4c3.2-3.1 8.2-3.1 11.4 0zM107.3 256l74.4 74.3c3.1 3.2 3.1 8.2 0 11.4a8.15 8.15 0 0 1-11.4 0l-79.96-80a8.112 8.112 0 0 1 0-11.4l79.96-80c3.2-3.1 8.2-3.1 11.4 0 3.1 3.2 3.1 8.2 0 11.4L107.3 256zM384 32c35.3 0 64 28.65 64 64v320c0 35.3-28.7 64-64 64H64c-35.35 0-64-28.7-64-64V96c0-35.35 28.65-64 64-64h320zm0 16H64c-26.51 0-48 21.49-48 48v320c0 26.5 21.49 48 48 48h320c26.5 0 48-21.5 48-48V96c0-26.51-21.5-48-48-48z" />
  </svg>
);

export default SvgSquareCode;

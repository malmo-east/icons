import * as React from "react";
import { SVGProps } from "react";

const SvgArrowsUpToLine = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512" {...props}>
    <path d="M8 48a8 8 0 0 1-8-8 8 8 0 0 1 8-8h560c4.4 0 8 3.58 8 8s-3.6 8-8 8H8zm114.3 74.3c3.2-3.1 8.2-3.1 11.4 0l120 120c3.1 3.2 3.1 8.2 0 11.4a8.15 8.15 0 0 1-11.4 0L136 147.3V472c0 4.4-3.6 8-8 8s-8-3.6-8-8V147.3L13.66 253.7c-3.13 3.1-8.192 3.1-11.317 0a8.105 8.105 0 0 1 0-11.4l119.957-120zm200 120 120-120c3.2-3.1 8.2-3.1 11.4 0l120 120c3.1 3.2 3.1 8.2 0 11.4a8.15 8.15 0 0 1-11.4 0L456 147.3V472c0 4.4-3.6 8-8 8s-8-3.6-8-8V147.3L333.7 253.7a8.15 8.15 0 0 1-11.4 0 8.15 8.15 0 0 1 0-11.4z" />
  </svg>
);

export default SvgArrowsUpToLine;

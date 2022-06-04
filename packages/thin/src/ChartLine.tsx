import * as React from "react";
import { SVGProps } from "react";

const SvgChartLine = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" {...props}>
    <path d="M16 408c0 30.9 25.07 56 56 56h432c4.4 0 8 3.6 8 8s-3.6 8-8 8H72c-39.76 0-72-32.2-72-72V40a8 8 0 0 1 8-8c4.42 0 8 3.58 8 8v368zm309.7-114.3a8.15 8.15 0 0 1-11.4 0L224 203.3 101.7 325.7c-3.17 3.1-8.23 3.1-11.36 0a8.112 8.112 0 0 1 0-11.4l127.96-128c3.2-3.1 8.2-3.1 11.4 0l90.3 90.4 146.3-146.4c3.2-3.1 8.2-3.1 11.4 0 3.1 3.2 3.1 8.2 0 11.4l-152 152z" />
  </svg>
);

export default SvgChartLine;

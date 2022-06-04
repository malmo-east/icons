import * as React from "react";
import { SVGProps } from "react";

const SvgLocationDot = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512" {...props}>
    <path d="M112 192c0-44.2 35.8-80 80-80s80 35.8 80 80-35.8 80-80 80-80-35.8-80-80zm80-64c-35.3 0-64 28.7-64 64s28.7 64 64 64 64-28.7 64-64-28.7-64-64-64zm192 64c0 87.4-117 243-168.3 307.2-12.3 15.3-35.1 15.3-47.4 0C116.1 435 0 279.4 0 192 0 85.96 85.96 0 192 0c106 0 192 85.96 192 192zM192 16C94.8 16 16 94.8 16 192c0 18.7 6.37 42.5 17.82 69.6 11.34 26.9 27.11 55.8 44.7 84.3 35.18 56.2 76.78 111.4 102.28 143.3 5.9 7.3 16.5 7.3 22.4 0 25.5-31.9 67.1-87.1 102.3-143.3 17.6-28.5 33.3-57.4 44.7-84.3 11.4-27.1 17.8-50.9 17.8-69.6 0-97.2-78.8-176-176-176z" />
  </svg>
);

export default SvgLocationDot;

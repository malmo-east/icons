import * as React from "react";
import { SVGProps } from "react";

const SvgLocationCheck = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512" {...props}>
    <path d="M165.7 261.7a8.15 8.15 0 0 1-11.4 0l-55.96-56a8.112 8.112 0 0 1 0-11.4c3.16-3.1 8.16-3.1 11.36 0l50.3 50.4 114.3-114.4c3.2-3.1 8.2-3.1 11.4 0 3.1 3.2 3.1 8.2 0 11.4l-120 120zM384 192c0 87.4-117 243-168.3 307.2-12.3 15.3-35.1 15.3-47.4 0C116.1 435 0 279.4 0 192 0 85.96 85.96 0 192 0c106 0 192 85.96 192 192zM192 16C94.8 16 16 94.8 16 192c0 18.7 6.37 42.5 17.82 69.6 11.34 26.9 27.11 55.8 44.7 84.3 35.18 56.2 76.78 111.4 102.28 143.3 5.9 7.3 16.5 7.3 22.4 0 25.5-31.9 67.1-87.1 102.3-143.3 17.6-28.5 33.3-57.4 44.7-84.3 11.4-27.1 17.8-50.9 17.8-69.6 0-97.2-78.8-176-176-176z" />
  </svg>
);

export default SvgLocationCheck;
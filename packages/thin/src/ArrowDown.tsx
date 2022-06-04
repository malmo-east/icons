import * as React from "react";
import { SVGProps } from "react";

const SvgArrowDown = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512" {...props}>
    <path d="M368.2 307.1 197.7 477.6a8.04 8.04 0 0 1-11.37 0L15.82 307.1a8.04 8.04 0 0 1 0-11.37 8.04 8.04 0 0 1 11.37 0l156.8 156.8V40.04c0-4.427 3.596-8.034 8.038-8.034s8.036 3.607 8.036 8.034v412.5l156.8-156.8a8.04 8.04 0 0 1 11.37 0c3.066 3.16 3.066 8.26-.034 11.36z" />
  </svg>
);

export default SvgArrowDown;

import * as React from "react";
import { SVGProps } from "react";

const SvgArrowUp = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512" {...props}>
    <path d="m15.82 204.9 170.5-170.5a8.04 8.04 0 0 1 11.37 0l170.5 170.5a8.04 8.04 0 0 1 0 11.37 8.04 8.04 0 0 1-11.37 0L200 59.44v412.5c0 4.427-3.595 8.038-8.037 8.038S183.1 476.4 183.1 471.1V59.44L27.19 216.2a8.04 8.04 0 0 1-11.37 0c-3.14-3.1-3.14-9.1 0-11.3z" />
  </svg>
);

export default SvgArrowUp;

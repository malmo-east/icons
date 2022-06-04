import * as React from "react";
import { SVGProps } from "react";

const SvgArrowDownToArc = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" {...props}>
    <path d="M256 496c132.5 0 240-107.5 240-240 0-4.4 3.6-8 8-8s8 3.6 8 8c0 141.4-114.6 256-256 256S0 397.4 0 256c0-4.4 3.582-8 8-8 4.42 0 8 3.6 8 8 0 132.5 107.5 240 240 240zm6.1-146.8c-1.5.9-3.7 2.8-6.1 2.8-2.4 0-4.6-1.9-6.1-2.8l-128-152c-2.9-3.4-2.4-8.5.9-11.3 3.4-2.9 8.5-2.4 11.3.9l113 135.3V8c0-4.418 4.5-8 8-8 5.3 0 8.9 3.582 8.9 8v314.1l113.9-135.3c2.8-3.3 7.9-3.8 11.3-.9 3.3 2.8 2.9 7.9.9 11.3l-128 152z" />
  </svg>
);

export default SvgArrowDownToArc;

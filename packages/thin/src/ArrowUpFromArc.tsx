import * as React from "react";
import { SVGProps } from "react";

const SvgArrowUpFromArc = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" {...props}>
    <path d="M496 256c0-4.4 3.6-8 8-8s8 3.6 8 8c0 141.4-114.6 256-256 256S0 397.4 0 256c0-4.4 3.582-8 8-8 4.42 0 8 3.6 8 8 0 132.5 107.5 240 240 240s240-107.5 240-240zM249.9 2.847A7.87 7.87 0 0 1 256 0c2.4 0 4.6 1.042 6.1 2.847l128 151.953c2 3.4 2.4 8.5-.9 11.3-3.4 2-8.5 2.4-11.3-.9L264 29.92V344c0 4.4-3.6 8-8 8s-8-3.6-8-8V29.92L134.1 165.2c-2.8 3.3-7.9 2.9-11.3.9-3.3-2.8-3.8-7.9-.9-11.3l128-151.953z" />
  </svg>
);

export default SvgArrowUpFromArc;

import * as React from "react";
import { SVGProps } from "react";

const SvgArrowUpLeft = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512" {...props}>
    <path d="M0 344V103.1C0 99.58 3.58 96 7.999 96h240c4.401 0 8.001 3.58 8.001 7.1s-3.58 7.999-7.999 7.999H27.31l290.3 290.3c3.116 3.116 3.127 8.187 0 11.31s-8.198 3.116-11.31 0L15.1 123.3V344c0 4.4-2.68 8-7.101 8C3.577 352 0 348.4 0 344z" />
  </svg>
);

export default SvgArrowUpLeft;

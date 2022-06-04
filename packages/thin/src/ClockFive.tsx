import * as React from "react";
import { SVGProps } from "react";

const SvgClockFive = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" {...props}>
    <path d="m264 253.6 62.7 94c2.4 3.6 1.4 8.6-2.3 11.1-3.6 2.4-8.6 1.4-11.1-2.3l-64-96c-.8-1.3-2.2-2.8-2.2-4.4V104c0-4.42 4.5-8 8-8 5.3 0 8.9 3.58 8.9 8v149.6zm248 2.4c0 141.4-114.6 256-256 256S0 397.4 0 256 114.6 0 256 0s256 114.6 256 256zM256 16C123.5 16 16 123.5 16 256s107.5 240 240 240 240-107.5 240-240S388.5 16 256 16z" />
  </svg>
);

export default SvgClockFive;

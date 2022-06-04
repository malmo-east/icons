import * as React from "react";
import { SVGProps } from "react";

const SvgClockEight = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" {...props}>
    <path d="M264 256c0 2.7-1.3 5.2-3.6 6.7l-96 64c-3.6 2.4-8.6 1.4-11.1-2.3-2.4-3.6-1.4-8.6 2.3-11.1l92.4-61.6V104c0-4.42 3.6-8 8-8s8 3.58 8 8v152zm248 0c0 141.4-114.6 256-256 256S0 397.4 0 256 114.6 0 256 0s256 114.6 256 256zM256 16C123.5 16 16 123.5 16 256s107.5 240 240 240 240-107.5 240-240S388.5 16 256 16z" />
  </svg>
);

export default SvgClockEight;

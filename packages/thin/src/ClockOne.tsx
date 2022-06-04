import * as React from "react";
import { SVGProps } from "react";

const SvgClockOne = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" {...props}>
    <path d="m264 229.6 49.3-74c2.5-3.7 7.5-4.7 11.1-2.3 3.7 2.5 4.7 7.5 2.3 11.1l-64 96c-2 3-5.6 4.3-9 3.3-3.4-1.1-5.7-4.2-5.7-7.7V104c0-4.42 3.6-8 8-8s8 3.58 8 8v125.6zM512 256c0 141.4-114.6 256-256 256S0 397.4 0 256 114.6 0 256 0s256 114.6 256 256zM256 16C123.5 16 16 123.5 16 256s107.5 240 240 240 240-107.5 240-240S388.5 16 256 16z" />
  </svg>
);

export default SvgClockOne;

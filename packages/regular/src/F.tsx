import * as React from "react";
import { SVGProps } from "react";

const SvgF = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512" {...props}>
    <path d="M320 56c0 13.25-10.75 24-24 24H48v152h184c13.25 0 24 10.76 24 24.01S245.3 280 232 280H48v176c0 13.3-10.75 24-24 24S0 469.3 0 456V56c0-13.25 10.75-24 24-24h272c13.3 0 24 10.75 24 24z" />
  </svg>
);

export default SvgF;

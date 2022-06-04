import * as React from "react";
import { SVGProps } from "react";

const SvgE = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512" {...props}>
    <path d="M320 456c0 13.25-10.75 24-24 24H24c-13.25 0-24-10.7-24-24V56c0-13.25 10.75-24 24-24h272c13.3 0 24 10.75 24 24s-10.7 24-24 24H48v152h184c13.25 0 24 10.76 24 24.01 0 13.29-10.7 23.99-24 23.99H48v152h248c13.3 0 24 10.8 24 24z" />
  </svg>
);

export default SvgE;

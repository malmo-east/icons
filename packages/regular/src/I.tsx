import * as React from "react";
import { SVGProps } from "react";

const SvgI = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512" {...props}>
    <path d="M320 456c0 13.25-10.75 24-24 24H24c-13.25 0-24-10.7-24-24s10.75-24 24-24h112V80H24C10.75 80 0 69.25 0 56s10.75-24 24-24h272c13.3 0 24 10.75 24 24s-10.7 24-24 24H184v352h112c13.3 0 24 10.8 24 24z" />
  </svg>
);

export default SvgI;

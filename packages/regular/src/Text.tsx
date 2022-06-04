import * as React from "react";
import { SVGProps } from "react";

const SvgText = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" {...props}>
    <path d="M448 56v80c0 13.3-10.7 24-24 24s-24-10.7-24-24V80H248v352h48c13.25 0 24 10.75 24 24s-10.7 24-24 24H152c-13.2 0-24-10.7-24-24s10.75-24 24-24h48V80H48v56c0 13.3-10.75 24-24 24S0 149.3 0 136V56c0-13.25 10.75-24 24-24h400c13.3 0 24 10.75 24 24z" />
  </svg>
);

export default SvgText;
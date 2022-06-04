import * as React from "react";
import { SVGProps } from "react";

const SvgC = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512" {...props}>
    <path d="M223.5 480C98.3 480 .1 378.2.1 256.9.096 133.7 98.4 32 223.5 32 325.6 32 384 98.54 384 103.3c0 4.273-3.443 8-8.002 8C366.6 111.3 322.8 48 223.5 48 107.5 48 16 142.31 16 256c0 113.7 91.55 207.1 207.5 207.1 99.37 0 143.2-63.25 152.5-63.25 4.562 0 8.002 3.727 8.002 8C384 413.4 325.7 480 223.5 480z" />
  </svg>
);

export default SvgC;

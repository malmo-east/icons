import * as React from "react";
import { SVGProps } from "react";

const SvgIntersection = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512" {...props}>
    <path d="M384 224v232c0 13.25-10.75 24-24 24s-24-10.75-24-24V224c0-79.41-64.59-144-144-144S48 144.6 48 224v232c0 13.3-10.75 24-24 24S0 469.3 0 456V224C0 118.1 86.13 32 192 32s192 86.1 192 192z" />
  </svg>
);

export default SvgIntersection;
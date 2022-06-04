import * as React from "react";
import { SVGProps } from "react";

const SvgL = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512" {...props}>
    <path d="M312 480H40c-4.41 0-8-3.6-8-8V40c0-4.41 3.59-8 8-8s8 3.59 8 8v424h264c4.406 0 8 3.594 8 8s-3.6 8-8 8z" />
  </svg>
);

export default SvgL;

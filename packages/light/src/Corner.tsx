import * as React from "react";
import { SVGProps } from "react";

const SvgCorner = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" {...props}>
    <path d="M432 384c-8.844 0-16-7.156-16-16V192H16c-8.844 0-16-7.2-16-16s7.156-16 16-16h416c8.8 0 16 7.2 16 16v192c0 8.8-7.2 16-16 16z" />
  </svg>
);

export default SvgCorner;

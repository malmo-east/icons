import * as React from "react";
import { SVGProps } from "react";

const SvgBracketSquare = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 192 512" {...props}>
    <path d="M40 48h80c4.4 0 8-3.58 8-8s-3.6-8-8-8H40C17.94 32 0 49.94 0 72v368c0 22.1 17.94 40 40 40h80c4.406 0 8-3.578 8-8s-3.594-8-8-8H40c-13.22 0-24-10.77-24-24V72c0-13.23 10.78-24 24-24z" />
  </svg>
);

export default SvgBracketSquare;

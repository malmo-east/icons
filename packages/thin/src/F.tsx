import * as React from "react";
import { SVGProps } from "react";

const SvgF = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512" {...props}>
    <path d="M320 40c0 4.406-3.578 8-8 8H16v208.6h232c4.422 0 8 3.594 8 8s-3.578 8-8 8H16V472c0 4.4-3.58 8-8 8s-8-3.6-8-8V40c0-4.41 3.578-8 8-8h304c4.4 0 8 3.59 8 8z" />
  </svg>
);

export default SvgF;

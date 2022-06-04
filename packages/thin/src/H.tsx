import * as React from "react";
import { SVGProps } from "react";

const SvgH = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512" {...props}>
    <path d="M384 40v432c0 4.406-3.578 8-8 8s-8-3.594-8-8V239.4H16V472c0 4.4-3.58 8-8 8s-8-3.6-8-8V40c0-4.41 3.578-8 8-8s8 3.59 8 8v183.4h352V40c0-4.41 3.6-8 8-8s8 3.59 8 8z" />
  </svg>
);

export default SvgH;

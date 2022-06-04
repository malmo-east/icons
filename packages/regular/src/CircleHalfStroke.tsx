import * as React from "react";
import { SVGProps } from "react";

const SvgCircleHalfStroke = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" {...props}>
    <path d="M512 256c0 141.4-114.6 256-256 256S0 397.4 0 256 114.6 0 256 0s256 114.6 256 256zM256 48v416c114.9 0 208-93.1 208-208S370.9 48 256 48z" />
  </svg>
);

export default SvgCircleHalfStroke;

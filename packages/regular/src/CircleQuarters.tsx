import * as React from "react";
import { SVGProps } from "react";

const SvgCircleQuarters = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" {...props}>
    <path d="M256 0C114.6 0 0 114.6 0 256s114.6 256 256 256 256-114.6 256-256S397.4 0 256 0zm147.1 403.1L256 256 108.9 403.1C71.28 365.4 48 313.4 48 256s23.28-109.4 60.92-147.1L256 256l147.1-147.1C440.7 146.6 464 198.6 464 256s-23.3 109.4-60.9 147.1z" />
  </svg>
);

export default SvgCircleQuarters;
import * as React from "react";
import { SVGProps } from "react";

const SvgCircleHalfStroke = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" {...props}>
    <path d="M512 256c0 141.4-114.6 256-256 256S0 397.4 0 256 114.6 0 256 0s256 114.6 256 256zM264 495.9c128.8-4.3 232-110 232-239.9S392.8 20.35 264 16.13V495.9zm-16 0V16.13C119.2 20.35 16 126.1 16 256s103.2 235.6 232 239.9z" />
  </svg>
);

export default SvgCircleHalfStroke;

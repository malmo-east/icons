import * as React from "react";
import { SVGProps } from "react";

const SvgR = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512" {...props}>
    <path d="M202.7 286.9C268.2 281.357 320 227 320 160.1 319.1 89.53 262.5 32 191.9 32H24C10.75 32 0 42.75 0 56v400c0 13.3 10.75 24 24 24s24-10.75 24-24V288h96.16l132.4 182.1c4.74 6.5 12.04 9.9 19.44 9.9 4.906 0 9.844-1.484 14.09-4.594 10.72-7.797 13.09-22.8 5.297-33.52L202.7 286.9zM48 80h144c44.11 0 80 35.89 80 80s-35.9 80-80 80H48V80z" />
  </svg>
);

export default SvgR;

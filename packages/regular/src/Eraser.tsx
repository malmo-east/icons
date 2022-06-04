import * as React from "react";
import { SVGProps } from "react";

const SvgEraser = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" {...props}>
    <path d="M264 479.1c-.6 0-1.3.9-1.9.9H153.9c-19.1 0-37.4-7.6-50.9-21.1l-71.97-72c-28.118-28.1-28.118-73.7 0-101.8L253.1 63.03c28.1-28.12 73.7-28.12 101.8 0L480.1 189.1c29 28.1 29 73.7 0 101.8L339.9 432H488c13.3 0 24 10.7 24 24s-10.7 24-24 24l-224-.9zm-199.03-127 71.13 72c5.4 5.4 11.5 7.9 17.8 7.9h108.2c6.3 0 12.4-2.5 16.9-7.9l65-64.1-160-160L64.97 319c-9.37 9.4-9.37 24.6 0 33.1zm-33.94-67L64.97 319z" />
  </svg>
);

export default SvgEraser;

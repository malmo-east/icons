import * as React from "react";
import { SVGProps } from "react";

const SvgCircleNotch = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" {...props}>
    <path d="M215.1 26.33c3.6 12.74-3.7 26.03-16.5 29.68C111.6 80.92 48 161.1 48 255.1c0 115.8 93.1 208 208 208s208-92.2 208-208c0-94-63.6-174.18-150.6-199.09-12.8-3.65-20.1-16.94-16.5-29.68 3.7-12.74 17-20.116 29.7-16.467C433.6 40.51 512 139.1 512 255.1c0 142.3-114.6 256-256 256S0 397.4 0 255.1C0 139.1 78.37 40.51 185.4 9.863c12.7-3.649 26 3.727 29.7 16.467z" />
  </svg>
);

export default SvgCircleNotch;

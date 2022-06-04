import * as React from "react";
import { SVGProps } from "react";

const SvgPenCircle = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" {...props}>
    <path d="M372.1 154.1c15.7 15.6 15.7 40.9 0 56.6l-21.4 21.4-70.9-71 21.4-21.4c15.6-15.6 40.9-15.6 56.6 0l14.3 14.4zm-220.2 134 105.2-104.3 71 70.9-105.2 105.2c-4.1 4.1-9.3 7-14.9 8.4l-60.1 15.1c-5.5 1.3-11.2-.3-15.2-4.2-4-4-5.6-9.8-4.2-16.1l15-59.3c1.4-5.6 4.3-10.7 8.4-15.7zM512 256c0 141.4-114.6 256-256 256S0 397.4 0 256 114.6 0 256 0s256 114.6 256 256zM256 48C141.1 48 48 141.1 48 256s93.1 208 208 208 208-93.1 208-208S370.9 48 256 48z" />
  </svg>
);

export default SvgPenCircle;
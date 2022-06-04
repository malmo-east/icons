import * as React from "react";
import { SVGProps } from "react";

const SvgClockFive = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" {...props}>
    <path d="m280 248.7 59.1 90c8.2 11 5.2 25.9-5.8 32.4-11 8.2-25.9 5.2-33.3-5.8l-64-96c-2.6-3.9-4-8.6-4-13.3V120c0-13.3 10.7-24 24-24s24 10.7 24 24v128.7zm232 7.3c0 141.4-114.6 256-256 256S0 397.4 0 256 114.6 0 256 0s256 114.6 256 256zM256 48C141.1 48 48 141.1 48 256s93.1 208 208 208 208-93.1 208-208S370.9 48 256 48z" />
  </svg>
);

export default SvgClockFive;

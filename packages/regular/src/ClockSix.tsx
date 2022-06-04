import * as React from "react";
import { SVGProps } from "react";

const SvgClockSix = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" {...props}>
    <path d="M280 360c0 13.3-10.7 24-24 24s-24-10.7-24-24V120c0-13.3 10.7-24 24-24s24 10.7 24 24v240zm232-104c0 141.4-114.6 256-256 256S0 397.4 0 256 114.6 0 256 0s256 114.6 256 256zM256 48C141.1 48 48 141.1 48 256s93.1 208 208 208 208-93.1 208-208S370.9 48 256 48z" />
  </svg>
);

export default SvgClockSix;

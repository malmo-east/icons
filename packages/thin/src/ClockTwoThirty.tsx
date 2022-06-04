import * as React from "react";
import { SVGProps } from "react";

const SvgClockTwoThirty = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" {...props}>
    <path d="M248 256c0-2.7 1.3-5.2 3.6-6.7l96-64c3.6-2.4 8.6-1.4 11.1 2.3 2.4 3.6 1.4 8.6-2.3 11.1L264 260.3V408c0 4.4-3.6 8-8 8s-8-3.6-8-8V256zM0 256C0 114.6 114.6 0 256 0s256 114.6 256 256-114.6 256-256 256S0 397.4 0 256zm256 240c132.5 0 240-107.5 240-240S388.5 16 256 16 16 123.5 16 256s107.5 240 240 240z" />
  </svg>
);

export default SvgClockTwoThirty;

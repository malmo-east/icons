import * as React from "react";
import { SVGProps } from "react";

const SvgClockTwoThirty = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" {...props}>
    <path d="M232 256c0-8.9 4-15.5 10.7-20l96-64c11-7.3 25.9-4.3 32.4 6.7 8.2 11 5.2 25.9-5.8 32.4L280 268.8V392c0 13.3-10.7 24-24.9 24-12.4 0-24-10.7-24-24l.9-136zM0 256C0 114.6 114.6 0 256 0s256 114.6 256 256-114.6 256-256 256S0 397.4 0 256zm256 208c114.9 0 208-93.1 208-208S370.9 48 256 48 48 141.1 48 256s93.1 208 208 208z" />
  </svg>
);

export default SvgClockTwoThirty;
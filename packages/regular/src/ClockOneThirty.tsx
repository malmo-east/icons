import * as React from "react";
import { SVGProps } from "react";

const SvgClockOneThirty = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" {...props}>
    <path d="M280 392c0 13.3-10.7 24-24 24s-24-10.7-24-24V256c0-4.7 1.4-9.4 4-13.3l64-96c7.4-11 22.3-14 33.3-6.7 11 7.4 14 22.3 5.8 33.3l-59.1 90V392zm-24 120C114.6 512 0 397.4 0 256S114.6 0 256 0s256 114.6 256 256-114.6 256-256 256zm208-256c0-114.9-93.1-208-208-208S48 141.1 48 256s93.1 208 208 208 208-93.1 208-208z" />
  </svg>
);

export default SvgClockOneThirty;

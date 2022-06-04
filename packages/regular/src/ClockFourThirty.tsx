import * as React from "react";
import { SVGProps } from "react";

const SvgClockFourThirty = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" {...props}>
    <path d="M280 392c0 13.3-10.7 24-24 24s-24-10.7-24-24V256c0-8.9 4.9-17 12.7-21.2 7.8-4.1 17.2-3.7 24.6 1.2l96 64c11 7.4 14 22.3 5.8 33.3-6.5 11-21.4 14-32.4 5.8L280 300.8V392zm-24 120C114.6 512 0 397.4 0 256S114.6 0 256 0s256 114.6 256 256-114.6 256-256 256zm208-256c0-114.9-93.1-208-208-208S48 141.1 48 256s93.1 208 208 208 208-93.1 208-208z" />
  </svg>
);

export default SvgClockFourThirty;

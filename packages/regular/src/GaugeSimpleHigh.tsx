import * as React from "react";
import { SVGProps } from "react";

const SvgGaugeSimpleHigh = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" {...props}>
    <path d="M312 352c0 30.9-25.1 56-56 56s-56-25.1-56-56c0-30.4 24.2-55.1 54.4-56L322 142.3c5.4-12.1 19.5-17.6 31.7-12.3 12.1 5.4 17.6 19.5 11.4 31.7l-66.8 153.7c8.6 9.8 13.7 21.7 13.7 36.6zM0 256C0 114.6 114.6 0 256 0s256 114.6 256 256-114.6 256-256 256S0 397.4 0 256zm256 208c114.9 0 208-93.1 208-208S370.9 48 256 48 48 141.1 48 256s93.1 208 208 208z" />
  </svg>
);

export default SvgGaugeSimpleHigh;
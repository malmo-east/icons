import * as React from "react";
import { SVGProps } from "react";

const SvgGaugeSimpleMin = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" {...props}>
    <path d="M312 352c0 30.9-25.1 56-56 56s-56-25.1-56-56c0-3 .2-5.9.7-8.8L90.45 267.8c-10.94-7.5-13.74-22.4-6.26-33.4 7.49-10.9 22.41-13.7 33.41-6.2l110.2 75.4c8.3-4.8 17.9-7.6 28.2-7.6 30.9 0 56 25.1 56 56zM0 256C0 114.6 114.6 0 256 0s256 114.6 256 256-114.6 256-256 256S0 397.4 0 256zm256 208c114.9 0 208-93.1 208-208S370.9 48 256 48 48 141.1 48 256s93.1 208 208 208z" />
  </svg>
);

export default SvgGaugeSimpleMin;

import * as React from "react";
import { SVGProps } from "react";

const SvgGaugeSimple = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" {...props}>
    <path d="M312 352c0 30.9-25.1 56-56 56s-56-25.1-56-56c0-22.3 13.1-41.6 31.1-50.6V119.1c0-12.4 11.6-24 24-24 14.2 0 24.9 11.6 24.9 24v182.3c18.9 9 32 28.3 32 50.6zM0 256C0 114.6 114.6 0 256 0s256 114.6 256 256-114.6 256-256 256S0 397.4 0 256zm256 208c114.9 0 208-93.1 208-208S370.9 48 256 48 48 141.1 48 256s93.1 208 208 208z" />
  </svg>
);

export default SvgGaugeSimple;

import * as React from "react";
import { SVGProps } from "react";

const SvgCoinFront = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" {...props}>
    <path d="M280 328c0 13.3-10.7 24-24 24s-24-10.7-24-24V184c0-13.3 10.7-24 24-24s24 10.7 24 24v144zM80 256c0-97.2 78.8-176 176-176s176 78.8 176 176-78.8 176-176 176S80 353.2 80 256zm176 128c70.7 0 128-57.3 128-128s-57.3-128-128-128-128 57.3-128 128 57.3 128 128 128zM0 256C0 114.6 114.6 0 256 0s256 114.6 256 256-114.6 256-256 256S0 397.4 0 256zm256 208c114.9 0 208-93.1 208-208S370.9 48 256 48 48 141.1 48 256s93.1 208 208 208z" />
  </svg>
);

export default SvgCoinFront;
import * as React from "react";
import { SVGProps } from "react";

const SvgGaugeSimple = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" {...props}>
    <path d="M192 352c0-32.6 24.4-59.6 55.1-63.5V79.1c0-3.52 4.5-8 8-8 5.3 0 8.9 4.48 8.9 8v209.4c31.6 3.9 56 30.9 56 63.5 0 35.3-28.7 64-64 64s-64-28.7-64-64zm64 48c26.5 0 48-21.5 48-48s-21.5-48-48-48-48 21.5-48 48 21.5 48 48 48zM0 256C0 114.6 114.6 0 256 0s256 114.6 256 256-114.6 256-256 256S0 397.4 0 256zm256 240c132.5 0 240-107.5 240-240S388.5 16 256 16 16 123.5 16 256s107.5 240 240 240z" />
  </svg>
);

export default SvgGaugeSimple;

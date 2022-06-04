import * as React from "react";
import { SVGProps } from "react";

const SvgGaugeSimpleMin = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" {...props}>
    <path d="M192 352c0-10.8 2.7-21 7.4-29.9L91.41 246.6c-3.62-2.6-4.5-7.6-1.96-11.2 2.53-3.6 7.52-4.5 11.15-2l108 75.6c11.7-12.9 28.6-21 47.4-21 35.3 0 64 28.7 64 64s-28.7 64-64 64-64-28.7-64-64zm64 48c26.5 0 48-21.5 48-48s-21.5-48-48-48-48 21.5-48 48 21.5 48 48 48zM0 256C0 114.6 114.6 0 256 0s256 114.6 256 256-114.6 256-256 256S0 397.4 0 256zm256 240c132.5 0 240-107.5 240-240S388.5 16 256 16 16 123.5 16 256s107.5 240 240 240z" />
  </svg>
);

export default SvgGaugeSimpleMin;

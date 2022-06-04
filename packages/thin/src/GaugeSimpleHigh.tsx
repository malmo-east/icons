import * as React from "react";
import { SVGProps } from "react";

const SvgGaugeSimpleHigh = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" {...props}>
    <path d="M192 352c0-35.3 28.7-64 64-64 7.4 0 14.6 1.3 21.2 3.6l83.6-167.2c2-3.9 6.8-5.5 10.8-3.6 3.9 2 5.5 6.8 3.6 10.8l-83.6 167.2c17.1 11.5 28.4 31 28.4 53.2 0 35.3-28.7 64-64 64s-64-28.7-64-64zm64 48c26.5 0 48-21.5 48-48s-21.5-48-48-48-48 21.5-48 48 21.5 48 48 48zM0 256C0 114.6 114.6 0 256 0s256 114.6 256 256-114.6 256-256 256S0 397.4 0 256zm256 240c132.5 0 240-107.5 240-240S388.5 16 256 16 16 123.5 16 256s107.5 240 240 240z" />
  </svg>
);

export default SvgGaugeSimpleHigh;

import * as React from "react";
import { SVGProps } from "react";

const SvgGaugeSimpleLow = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" {...props}>
    <path d="M256 416c-35.3 0-64-28.7-64-64 0-22.2 11.3-41.7 28.4-53.2l-83.6-167.2c-1.9-4-.3-8.8 3.6-10.8 4-1.9 8.8-.3 10.8 3.6l83.6 167.2c6.6-2.3 13.8-4.5 21.2-4.5 35.3 0 64 29.6 64 64.9 0 35.3-28.7 64-64 64zm48-64c0-26.5-21.5-48-48-48s-48 21.5-48 48 21.5 48 48 48 48-21.5 48-48zm-48 160C114.6 512 0 397.4 0 256S114.6 0 256 0s256 114.6 256 256-114.6 256-256 256zm240-256c0-132.5-107.5-240-240-240S16 123.5 16 256s107.5 240 240 240 240-107.5 240-240z" />
  </svg>
);

export default SvgGaugeSimpleLow;

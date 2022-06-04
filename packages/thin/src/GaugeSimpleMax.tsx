import * as React from "react";
import { SVGProps } from "react";

const SvgGaugeSimpleMax = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" {...props}>
    <path d="M256 416c-35.3 0-64-28.7-64-64s28.7-64 64-64c18.8 0 35.7 8.1 47.4 21l108-75.6c3.6-2.5 8.6-1.6 11.2 2 2.5 3.6 1.6 8.6-2 11.2l-108 75.5c4.7 8.9 7.4 19.1 7.4 29.9 0 35.3-28.7 64-64 64zm48-64c0-26.5-21.5-48-48-48s-48 21.5-48 48 21.5 48 48 48 48-21.5 48-48zm-48 160C114.6 512 0 397.4 0 256S114.6 0 256 0s256 114.6 256 256-114.6 256-256 256zm240-256c0-132.5-107.5-240-240-240S16 123.5 16 256s107.5 240 240 240 240-107.5 240-240z" />
  </svg>
);

export default SvgGaugeSimpleMax;

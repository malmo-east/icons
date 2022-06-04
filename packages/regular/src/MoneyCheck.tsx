import * as React from "react";
import { SVGProps } from "react";

const SvgMoneyCheck = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512" {...props}>
    <path d="M264 208c13.3 0 24 10.7 24 24s-10.7 24-24 24H120c-13.3 0-24-10.7-24-24s10.7-24 24-24h144zM96 328c0-13.3 10.7-24 24-24h336c13.3 0 24 10.7 24 24s-10.7 24-24 24H120c-13.3 0-24-10.7-24-24zm360-168c13.3 0 24 10.7 24 24v48c0 13.3-10.7 24-24 24h-80c-13.3 0-24-10.7-24-24v-48c0-13.3 10.7-24 24-24h80zM0 128c0-35.35 28.65-64 64-64h448c35.3 0 64 28.65 64 64v256c0 35.3-28.7 64-64 64H64c-35.35 0-64-28.7-64-64V128zm48 0v256c0 8.8 7.16 16 16 16h448c8.8 0 16-7.2 16-16V128c0-8.8-7.2-16-16-16H64c-8.84 0-16 7.2-16 16z" />
  </svg>
);

export default SvgMoneyCheck;

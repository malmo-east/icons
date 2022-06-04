import * as React from "react";
import { SVGProps } from "react";

const SvgCreditCardBlank = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512" {...props}>
    <path d="M96 360c0-13.3 10.7-24 24-24h48c13.3 0 24 10.7 24 24s-10.7 24-24 24h-48c-13.3 0-24-10.7-24-24zm128 0c0-13.3 10.7-24 24-24h112c13.3 0 24 10.7 24 24s-10.7 24-24 24H248c-13.3 0-24-10.7-24-24zM0 96c0-35.35 28.65-64 64-64h448c35.3 0 64 28.65 64 64v320c0 35.3-28.7 64-64 64H64c-35.35 0-64-28.7-64-64V96zm48 0v320c0 8.8 7.16 16 16 16h448c8.8 0 16-7.2 16-16V96c0-8.84-7.2-16-16-16H64c-8.84 0-16 7.16-16 16z" />
  </svg>
);

export default SvgCreditCardBlank;

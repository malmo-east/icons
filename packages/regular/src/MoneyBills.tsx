import * as React from "react";
import { SVGProps } from "react";

const SvgMoneyBills = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512" {...props}>
    <path d="M448 208c0 44.2-35.8 80-80 80s-80-35.8-80-80 35.8-80 80-80 80 35.8 80 80zM576 32c35.3 0 64 28.65 64 64v224c0 35.3-28.7 64-64 64H160c-35.3 0-64-28.7-64-64V96c0-35.35 28.7-64 64-64h416zm-48 48H208c0 35.3-28.7 64-64 64v128c35.3 0 64 28.7 64 64h320c0-35.3 28.7-64 64-64V144c-35.3 0-64-28.7-64-64zM48 360c0 39.8 32.24 72 72 72h400c13.3 0 24 10.7 24 24s-10.7 24-24 24H120C53.73 480 0 426.3 0 360V120c0-13.3 10.75-24 24-24s24 10.7 24 24v240z" />
  </svg>
);

export default SvgMoneyBills;

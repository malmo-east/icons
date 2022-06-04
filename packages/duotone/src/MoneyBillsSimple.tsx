import * as React from "react";
import { SVGProps } from "react";

const SvgMoneyBillsSimple = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512" {...props}>
    <path
      className="money-bills-simple_svg__fa-primary"
      d="M576 32c35.3 0 64 28.65 64 64v224c0 35.3-28.7 64-64 64H160c-35.3 0-64-28.7-64-64V96c0-35.35 28.7-64 64-64h416zM368 288c44.2 0 80-35.8 80-80s-35.8-80-80-80-80 35.8-80 80 35.8 80 80 80z"
    />
    <path
      d="M48 360c0 39.8 32.24 72 72 72h400c13.3 0 24 10.7 24 24s-10.7 24-24 24H120C53.73 480 0 426.3 0 360V120c0-13.3 10.75-24 24-24s24 10.7 24 24v240zm240-152c0-44.2 35.8-80 80-80s80 35.8 80 80-35.8 80-80 80-80-35.8-80-80z"
      style={{
        opacity: 0.4,
      }}
    />
  </svg>
);

export default SvgMoneyBillsSimple;

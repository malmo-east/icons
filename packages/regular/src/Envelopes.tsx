import * as React from "react";
import { SVGProps } from "react";

const SvgEnvelopes = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512" {...props}>
    <path d="M544 32H192c-35.3 0-64 28.65-64 64v224c0 35.35 28.65 64 64 64h352c35.35 0 64-28.65 64-64V96c0-35.35-28.7-64-64-64zm16 288c0 8.822-7.178 16-16 16H192c-8.822 0-16-7.178-16-16V161.9L296.1 262c20.2 16.8 45.7 26 71.9 26s51.75-9.25 71.97-26.05L560 161.9V320zm0-220.58-150.8 125.6c-23.19 19.28-59.34 19.27-82.47.016L176 99.42V96c0-8.822 7.178-16 16-16h352c8.822 0 16 7.178 16 16v3.42zM488 480H152c-66.17 0-120-53.8-120-120V120c0-13.2 10.75-24 24-24s24 10.8 24 24v240c0 39.7 32.3 72 72 72h336c13.25 0 24 10.75 24 24s-10.7 24-24 24z" />
  </svg>
);

export default SvgEnvelopes;

import * as React from "react";
import { SVGProps } from "react";

const SvgShieldCross = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" {...props}>
    <path d="m466.5 83.71-192-80C268.6 1.203 262.3 0 256.1 0s-12.6 1.203-18.5 3.703L45.61 83.71C27.73 91.08 16 108.6 16 127.1 16 385.4 205.4 512 255.9 512 305.2 512 496 387.3 496 127.1c0-18.5-11.7-36.02-29.5-43.39zM232 58v110H66.01C64.82 154.9 64 141.7 64 128l168-70zM72.95 216H232v236C161.2 411.1 96.05 327.8 72.95 216zM280 451.1V216h159.1c-23.5 113.8-91 196.9-159.1 235.1zM446 168H280V58l168 70c0 13.7-.8 26.1-2 40z" />
  </svg>
);

export default SvgShieldCross;

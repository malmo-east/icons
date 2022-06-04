import * as React from "react";
import { SVGProps } from "react";

const SvgCircleNotch = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" {...props}>
    <path d="M199.7 14.28c1.2 4.27-1.4 8.65-5.6 9.79C91.53 51.38 16 144.9 16 256c0 132.6 107.5 240 240 240s240-107.4 240-240c0-111.1-75.5-204.62-178.1-231.93-4.2-1.14-6.8-5.52-5.6-9.79 1.1-4.27 5.5-6.81 9.8-5.673C431.4 37.74 512 137.4 512 256c0 141.4-114.6 256-256 256S0 397.4 0 256C0 137.4 80.58 37.74 189.9 8.607c4.3-1.137 8.7 1.403 9.8 5.673z" />
  </svg>
);

export default SvgCircleNotch;

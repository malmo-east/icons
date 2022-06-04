import * as React from "react";
import { SVGProps } from "react";

const SvgA = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512" {...props}>
    <path d="m382.1 446.7-168-400c-7.469-17.81-36.78-17.81-44.25 0l-168 400c-5.141 12.22.61 26.3 12.83 31.42 12.25 5.156 26.3-.61 31.42-12.83l33.79-80.45h224.2l33.79 80.45C341.7 474.5 350.6 480 360 480c3.094 0 6.25-.594 9.281-1.875C381.5 473 387.3 458.9 382.1 446.7zm-282-109.9L192 117.1 283.92 336H100.1z" />
  </svg>
);

export default SvgA;
import * as React from "react";
import { SVGProps } from "react";

const SvgCircleHalf = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" {...props}>
    <path d="M224.1 1.971C241.6-.211 256 14.33 256 31.1V480c0 17.7-14.4 32.2-31.9 30C97.75 494.3 0 386.6 0 255.1 0 125.4 97.75 17.69 224.1 1.971zM226 17.85C107.6 32.58 16 133.6 16 255.1c0 123.3 91.6 224.3 210 239 6.7 0 14-4.7 14-14.1V31.1c0-8.55-7.3-14.08-14-13.25z" />
  </svg>
);

export default SvgCircleHalf;

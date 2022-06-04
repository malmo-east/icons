import * as React from "react";
import { SVGProps } from "react";

const SvgMapPin = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512" {...props}>
    <path d="M200 488c0 13.3-10.7 24-24 24s-24-10.7-24-24V286C83.9 274.6 32 215.4 32 144 32 64.47 96.47 0 176 0c79.5 0 144 64.47 144 144 0 71.4-51.9 130.6-120 142v202zM176 48c-53.9 0-96 42.98-96 96 0 53 42.1 96 96 96 53 0 96-43 96-96 0-53.02-43-96-96-96z" />
  </svg>
);

export default SvgMapPin;
import * as React from "react";
import { SVGProps } from "react";

const SvgClockSix = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" {...props}>
    <path d="M264 376c0 4.4-3.6 8-8 8s-8-3.6-8-8V104c0-4.42 3.6-8 8-8s8 3.58 8 8v272zm248-120c0 141.4-114.6 256-256 256S0 397.4 0 256 114.6 0 256 0s256 114.6 256 256zM256 16C123.5 16 16 123.5 16 256s107.5 240 240 240 240-107.5 240-240S388.5 16 256 16z" />
  </svg>
);

export default SvgClockSix;

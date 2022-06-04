import * as React from "react";
import { SVGProps } from "react";

const SvgDiamondTurnRight = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" {...props}>
    <path d="M497.1 222.1 289 14C279.646 4.645 267.37-.03 255.11-.03c-12.26 0-24.5 4.675-33.85 14.03L14.03 222.1C4.677 231.5 0 243.7 0 255.1c0 12.26 4.676 24.52 14.03 33.87l208.1 208.1C231.5 507.3 243.7 511.1 256 511.1c12.26 0 24.52-4.679 33.87-14.03l208.1-208.1c9.353-9.354 14.03-21.61 14.03-33.87-.9-11.4-4.7-23.6-14.9-33zM256.1 464 47.97 256.1 255.07 48l208.1 207.9L256.1 464zm46-248H200c-13.2 0-24 10.8-24 24v72c0 13.25 10.75 24 24 24s24-10.7 24-24v-48h78.06l-23.03 23.03c-9.375 9.375-9.375 24.56 0 33.94C283.7 325.7 289.8 328 296 328s12.28-2.344 16.97-7.031l64-64c9.375-9.375 9.375-24.56 0-33.94l-64-64c-9.375-9.375-24.56-9.375-33.94 0s-9.375 24.56 0 33.94L302.1 216z" />
  </svg>
);

export default SvgDiamondTurnRight;
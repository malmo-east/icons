import * as React from "react";
import { SVGProps } from "react";

const SvgCropSimple = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" {...props}>
    <path d="M112 376c0 13.3 10.7 24 24 24h216c4.4 0 8 3.6 8 8s-3.6 8-8 8H136c-22.1 0-40-17.9-40-40V112H8c-4.418 0-8-3.6-8-8a8 8 0 0 1 8-8h88V8a8 8 0 0 1 8-8c4.4 0 8 3.582 8 8v368zm288-240c0-13.3-10.7-24-24-24H160c-4.4 0-8-3.6-8-8 0-4.42 3.6-8 8-8h216c22.1 0 40 17.9 40 40v264h88c4.4 0 8 3.6 8 8s-3.6 8-8 8h-88v88c0 4.4-3.6 8-8 8s-8-3.6-8-8V136z" />
  </svg>
);

export default SvgCropSimple;

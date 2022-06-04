import * as React from "react";
import { SVGProps } from "react";

const SvgCircleE = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" {...props}>
    <path d="M256 0C114.6 0 0 114.6 0 256s114.6 256 256 256 256-114.6 256-256S397.4 0 256 0zm40 232c13.3 0 24 10.8 24 24s-10.75 24-24 24h-88v56h120c13.25 0 24 10.75 24 24s-10.7 24-24 24H184c-13.2 0-24-10.7-24-24V152c0-13.2 10.8-24 24-24h144c13.3 0 24 10.8 24 24s-10.7 24-24 24H208v56h88z" />
  </svg>
);

export default SvgCircleE;

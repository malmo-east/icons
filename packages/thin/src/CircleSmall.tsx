import * as React from "react";
import { SVGProps } from "react";

const SvgCircleSmall = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512" {...props}>
    <path d="M0 256C0 167.6 71.63 96 160 96c88.4 0 160 71.6 160 160s-71.6 160-160 160C71.63 416 0 344.4 0 256zm160 144c79.5 0 144-64.5 144-144s-64.5-144-144-144c-79.53 0-144 64.5-144 144s64.47 144 144 144z" />
  </svg>
);

export default SvgCircleSmall;

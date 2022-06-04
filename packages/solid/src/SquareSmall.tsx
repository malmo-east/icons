import * as React from "react";
import { SVGProps } from "react";

const SvgSquareSmall = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512" {...props}>
    <path d="M0 160c0-35.3 28.65-64 64-64h192c35.3 0 64 28.7 64 64v192c0 35.3-28.7 64-64 64H64c-35.35 0-64-28.7-64-64V160z" />
  </svg>
);

export default SvgSquareSmall;

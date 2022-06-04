import * as React from "react";
import { SVGProps } from "react";

const SvgSquareSmall = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512" {...props}>
    <path d="M256 96c35.3 0 64 28.7 64 64v192c0 35.3-28.7 64-64 64H64c-35.35 0-64-28.7-64-64V160c0-35.3 28.65-64 64-64h192zm0 16H64c-26.51 0-48 21.5-48 48v192c0 26.5 21.49 48 48 48h192c26.5 0 48-21.5 48-48V160c0-26.5-21.5-48-48-48z" />
  </svg>
);

export default SvgSquareSmall;

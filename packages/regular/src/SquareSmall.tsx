import * as React from "react";
import { SVGProps } from "react";

const SvgSquareSmall = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512" {...props}>
    <path d="M256 96c35.3 0 64 28.7 64 64v192c0 35.3-28.7 64-64 64H64c-35.35 0-64-28.7-64-64V160c0-35.3 28.65-64 64-64h192zm0 48H64c-8.84 0-16 7.2-16 16v192c0 8.8 7.16 16 16 16h192c8.8 0 16-7.2 16-16V160c0-8.8-7.2-16-16-16z" />
  </svg>
);

export default SvgSquareSmall;
import * as React from "react";
import { SVGProps } from "react";

const SvgSquareSmall = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512" {...props}>
    <path d="M256 96c35.3 0 64 28.7 64 64v192c0 35.3-28.7 64-64 64H64c-35.35 0-64-28.7-64-64V160c0-35.3 28.65-64 64-64h192zm0 32H64c-17.67 0-32 14.3-32 32v192c0 17.7 14.33 32 32 32h192c17.7 0 32-14.3 32-32V160c0-17.7-14.3-32-32-32z" />
  </svg>
);

export default SvgSquareSmall;

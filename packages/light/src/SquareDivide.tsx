import * as React from "react";
import { SVGProps } from "react";

const SvgSquareDivide = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" {...props}>
    <path d="M200 160c0-13.3 10.7-24 24-24s24 10.7 24 24-10.7 24-24 24-24-10.7-24-24zm120 80c8.8 0 16 7.2 16 16s-7.2 16-16 16H128c-8.8 0-16-7.2-16-16s7.2-16 16-16h192zm-72 112c0 13.3-10.7 24-24 24s-24-10.7-24-24 10.7-24 24-24 24 10.7 24 24zM0 96c0-35.35 28.65-64 64-64h320c35.3 0 64 28.65 64 64v320c0 35.3-28.7 64-64 64H64c-35.35 0-64-28.7-64-64V96zm32 0v320c0 17.7 14.33 32 32 32h320c17.7 0 32-14.3 32-32V96c0-17.67-14.3-32-32-32H64c-17.67 0-32 14.33-32 32z" />
  </svg>
);

export default SvgSquareDivide;

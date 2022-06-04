import * as React from "react";
import { SVGProps } from "react";

const SvgRulerCombined = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" {...props}>
    <path d="M448 272c35.3 0 64 28.7 64 64v112c0 35.3-28.7 64-64 64H64C30.86 512 3.608 486.8.33 454.5.113 452.4 0 450.2 0 448V64C0 28.65 28.65 0 64 0h112c35.3 0 64 28.65 64 64v208h208zm-256 16v-64h-64c-8.8 0-16-7.2-16-16s7.2-16 16-16h64v-64h-64c-8.8 0-16-7.2-16-16s7.2-16 16-16h64V64c0-8.84-7.2-16-16-16H64c-8.84 0-16 7.16-16 16v384c0 .6.03 1.2.08 1.7.82 8 7.67 14.3 15.92 14.3h384c8.8 0 16-7.2 16-16V336c0-8.8-7.2-16-16-16h-32v64c0 8.8-7.2 16-16 16s-16-7.2-16-16v-64h-64v64c0 8.8-7.2 16-16 16s-16-7.2-16-16v-64h-64v64c0 8.8-7.2 16-16 16s-16-7.2-16-16v-64h-64c-8.8 0-16-7.2-16-16s7.2-16 16-16h64z" />
  </svg>
);

export default SvgRulerCombined;

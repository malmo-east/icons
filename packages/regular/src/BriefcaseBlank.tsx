import * as React from "react";
import { SVGProps } from "react";

const SvgBriefcaseBlank = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" {...props}>
    <path d="M448 96h-64V64c0-35.35-28.65-64-64-64H192c-35.3 0-64 28.65-64 64v32H64c-35.35 0-64 28.7-64 64v256c0 35.35 28.65 64 64 64h384c35.35 0 64-28.65 64-64V160c0-35.3-28.7-64-64-64zM176 64c0-8.838 7.164-16 16-16h128c8.836 0 16 7.162 16 16v32H176V64zm288 352c0 8.799-7.199 16-16 16H64c-8.801 0-16-7.201-16-16V160c0-8.801 7.199-16 16-16h384c8.801 0 16 7.199 16 16v256z" />
  </svg>
);

export default SvgBriefcaseBlank;
import * as React from "react";
import { SVGProps } from "react";

const SvgSidebarFlip = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" {...props}>
    <path d="M512 416c0 35.3-28.7 64-64 64H64c-35.35 0-64-28.7-64-64V96c0-35.35 28.65-64 64-64h384c35.3 0 64 28.65 64 64v320zM288 80H64c-8.84 0-16 7.16-16 16v320c0 8.8 7.16 16 16 16h224V80zm160 40c0-13.3-10.7-24-24-24h-48c-13.3 0-24 10.7-24 24s10.7 24 24 24h48c13.3 0 24-10.7 24-24zm-72 72c-13.3 0-24 10.7-24 24s10.7 24 24 24h48c13.3 0 24-10.7 24-24s-10.7-24-24-24h-48zm72 120c0-13.3-10.7-24-24-24h-48c-13.3 0-24 10.7-24 24s10.7 24 24 24h48c13.3 0 24-10.7 24-24z" />
  </svg>
);

export default SvgSidebarFlip;
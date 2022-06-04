import * as React from "react";
import { SVGProps } from "react";

const SvgSidebarFlip = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" {...props}>
    <path
      className="sidebar-flip_svg__fa-primary"
      d="M448 32c35.3 0 64 28.65 64 64v320c0 35.3-28.7 64-64 64H288V32h160zm-72 64c-13.3 0-24 10.7-24 24s10.7 24 24 24h48c13.3 0 24-10.7 24-24s-10.7-24-24-24h-48zm72 120c0-13.3-10.7-24-24-24h-48c-13.3 0-24 10.7-24 24s10.7 24 24 24h48c13.3 0 24-10.7 24-24zm-72 72c-13.3 0-24 10.7-24 24s10.7 24 24 24h48c13.3 0 24-10.7 24-24s-10.7-24-24-24h-48z"
    />
    <path
      d="M0 96c0-35.35 28.65-64 64-64h224v448H64c-35.35 0-64-28.7-64-64V96z"
      style={{
        opacity: 0.4,
      }}
    />
  </svg>
);

export default SvgSidebarFlip;
